
import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { Image } from "@phosphor-icons/react";

import {
    Container, Form, Imput,
    ImputGroup, Label,
    LabelUpload, Select,
    SubmitButton, ErrorMessage,
    ContainerCheckBox,
} from "./styles"

import { use, useEffect, useState } from "react"

import { api } from '../../../services/api';
import { toast } from 'react-toastify';

import { useNavigate } from "react-router-dom";

const schema = yup
    .object({
        name: yup.string().required('Digite o nome do produto'),
        price: yup
            .number()
            .positive()
            .required('Digite o preço d produto')
            .typeError('Digite o preço do produto'),
        category: yup.object().required('Informe a categoria do produto'),
        offer: yup.bool(),
        file: yup.mixed().test('required', 'Escolha um arquivo para continuar', (value) => {
            return value && value.length > 0;
        }).test('fileSize', 'Carregue o arquivo ate 5mb', (value) => {
            return value && value.length > 0 && value[0].size <= 500000
        }).test('type', 'Carregue apenas imagens PNG OU JPEG', (value) => {
            return (value && value.length > 0 &&
                (value[0].type === 'image/jpeg' || value[0].type === 'image/png')
            );
        })
    })

export function NewProduct() {

    const [fileName, setFileName] = useState(null);
    const [categories, setCategories] = useState([]);
    
    const navigate = useNavigate()

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories');
            setCategories(data)
        }

        loadCategories();
    }, [])

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = async (data) => {
        const productFormData = new FormData()

        productFormData.append('name', data.name);
        productFormData.append('price', data.price * 100);
        productFormData.append('category_id', data.category.id);
        productFormData.append('file', data.file[0]);
        productFormData.append('offer', data.offer);
        await toast.promise(api.post('/products', productFormData), {
            pedding: 'Adicionando o produto',
            success: 'Produto adicionando com sucesso',
            error: 'Falha ao adicionar o produto',
        });

        setTimeout(
            () => {
                navigate('/admin/produtos')
            }, 3000
        )
    }

    return (
        
        <Container>

            <Form onSubmit={handleSubmit(onSubmit)}>
                <ImputGroup>
                    <Label>Nome</Label>
                    <Imput type='text' {...register("name")} />
                    <ErrorMessage>{errors?.name?.message}</ErrorMessage>
                </ImputGroup>

                <ImputGroup>
                    <Label>Preço</Label>
                    <Imput type="number" {...register('price')} />
                    <ErrorMessage>{errors?.price?.message}</ErrorMessage>
                </ImputGroup>

                <ImputGroup>
                    <LabelUpload>
                        <Image />
                        <input
                            type='file'
                            {...register('file')}
                            accept="image/png, image/jpeg"
                            onChange={(value) => {
                                setFileName(value?.target?.files[0]?.name)
                                register('file').onChange(value);
                            }}
                        />
                        {fileName || "Upload do Produto"}
                    </LabelUpload>
                    <ErrorMessage>{errors?.file?.message}</ErrorMessage>
                </ImputGroup>

                <ImputGroup>
                    <Label>Categoria</Label>
                    <Controller
                        name='category'
                        control={control}
                        render={({ field }) => (
                            <Select
                                {...field}
                                options={categories}
                                getOptionLabel={(category) => category.name}
                                getOptionValue={(category) => category.id}
                                placeholder="Categorias"
                                menuPortalTarget={document.body}
                            />
                        )}
                    />

                    <ErrorMessage>{errors?.category?.message}</ErrorMessage>

                </ImputGroup>

                <ImputGroup>
                    <ContainerCheckBox>
                        <input type="checkbox" {...register('offer')} />
                        <Label>Produto em Oferta ?</Label>
                    </ContainerCheckBox>
                </ImputGroup>

                <SubmitButton>Adicionar Produto</SubmitButton>
            </Form>

        </Container>
    )
}
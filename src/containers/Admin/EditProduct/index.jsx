
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Image } from "@phosphor-icons/react";

import { useLocation, useNavigate } from 'react-router-dom';

import {
    Container, Form, Imput,
    ImputGroup, Label,
    LabelUpload, Select,
    SubmitButton, ErrorMessage,
    ContainerCheckBox,
} from "./styles";

import { use, useEffect, useState } from "react";

import { api } from '../../../services/api';
import { toast } from 'react-toastify';

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
    })

export function EditProduct() {

    const [fileName, setFileName] = useState(null);
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate()


    const {
        state: { product },
    } = useLocation()

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories');
            setCategories(data)
        }

        loadCategories();
    }, []);



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

        await toast.promise(api.put(`/products/${product.id}`, productFormData), {
            pedding: 'Editando Produto ',
            success: 'Produto Editado com sucesso',
            error: 'Falha ao Editar o produto',
        });

        setTimeout(
            () => {
                navigate('/admin/produtos')
            }, 4000
        );
    }

    return (
        <Container>

            <Form onSubmit={handleSubmit(onSubmit)}>
                <ImputGroup>
                    <Label>Nome</Label>
                    <Imput type='text'
                        {...register("name")}
                        defaultValue={product.name}
                    />
                    <ErrorMessage>{errors?.name?.message}</ErrorMessage>
                </ImputGroup>

                <ImputGroup>
                    <Label>Preço</Label>
                    <Imput type="number"
                        {...register('price')}
                        defaultValue={product.price / 100}
                    />
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
                        defaultValue={product.category}
                        render={({ field }) => (
                            <Select
                                {...field}
                                options={categories}
                                getOptionLabel={(category) => category.name}
                                getOptionValue={(category) => category.id}
                                placeholder="Categorias"
                                menuPortalTarget={document.body}
                                defaultValue={product.category}
                            />
                        )}
                    />
                    <ErrorMessage>{errors?.category?.message}</ErrorMessage>
                </ImputGroup>

                <ImputGroup>
                    <ContainerCheckBox>
                        <input type="checkbox" defaultChecked={product.offer}
                            {...register('offer')}
                        />
                        <Label>Produto em Oferta ?</Label>
                    </ContainerCheckBox>
                </ImputGroup>

                <SubmitButton>Editar Produto</SubmitButton>
            </Form>

        </Container>
    )
}
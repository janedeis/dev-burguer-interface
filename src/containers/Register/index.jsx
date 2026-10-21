
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { toast } from 'react-toastify'
import Logo from '../../assets/logo.svg';
import { Button } from '../../components/Button/index.jsx'
import { api } from "../../services/api.js"
import { useNavigate } from "react-router-dom";
import {
    Container, Form,
    InputContainer, LeftContainer,
    RightContainer, Title, Link
} from './styles.js'



export function Register() {

    const navigate = useNavigate();

    const schema = yup.object({
        name: yup
            .string().required('Digite seu nome'),
        email: yup
            .string()
            .email("Digite um e-mail valido")
            .required("Digite um e-mail"),
        password: yup
            .string()
            .min(6, "A senha deve ter no mínimo 6 caracteres")
            .required("Digite uma senha"),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
            .required('Confirme sua senha')

    }).required();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        try {
            const { status } = await api.post('/users', {
                name: data.name,
                email: data.email,
                password: data.password
            },
                {
                    validateStatus: () => true
                }
            );

            if (status === 200 || status === 201) {
                setTimeout( () =>{
                    navigate('/login')
                },2000)
                toast.success('Cadastro criado com sucesso')
            } else if (status === 401 || status === 409) {
                toast.error('E-mail ja cadastrado! Faça Login para continuar')
            } else {
                throw new Error();
            }

        } catch (error) {
            toast.error('😭 Falha no Sistema! Tente novamente');
        }

    }

    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="Logo DevBurger" />
            </LeftContainer>

            <RightContainer>
                <Title> Criar Conta </Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>Nome</label>
                        <input type="text" {...register('name')} />
                        <p>{errors?.name?.message}</p>
                    </InputContainer>
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" {...register('email')} />
                        <p>{errors?.email?.message}</p>
                    </InputContainer>
                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" {...register('password')} />
                        <p>{errors?.password?.message}</p>
                    </InputContainer>
                    <InputContainer>
                        <label>Confirmar Senha</label>
                        <input type="password" {...register('confirmPassword')} />
                        <p>{errors?.confirmPassword?.message}</p>
                    </InputContainer>
                    <Button type="submit">Confiramar Cadastro</Button>
                </Form>
                <p>Já possui conta? <Link to="/login">Clique aqui.</Link></p>
            </RightContainer>
        </Container >

    )
}
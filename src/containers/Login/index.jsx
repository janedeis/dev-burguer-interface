
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import * as yup from "yup"
import Logo from '../../assets/logo.svg';
import { Button } from '../../components/Button/index.jsx'
import { api } from "../../services/api.js";

import { useUser } from '../../hooks/UserContent'

import {
    Container, Form,
    InputContainer, LeftContainer,
    RightContainer, Title, Link
} from './styles.js'



export function Login() {

    const navigate = useNavigate();

    const { putUserData } = useUser()

    const schema = yup.object({
        email: yup.string()
            .email("Digite um e-mail valido")
            .required("Digite um e-mail"),
        password: yup.string()
            .min(6, "A senha deve ter no mínimo 6 caracteres")
            .required("Digite uma senha"),
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
            const response = await api.post('/sessions', {
                email: data.email,
                password: data.password,
               
            }, {
                validateStatus: () => true
            });

            if (response.status === 200 || response.status === 201) {

                // const token = response.data.token;
                const token  = response.data
                // localStorage.setItem('Token', token);
                const isAdmin = response.data.admin || false

                putUserData(token)

                setTimeout(() => {

                    if(isAdmin){
                        navigate('/admin/pedidos')
                    }else{
                        navigate('/')
                    }
                }, 2000)
                toast.success('Login realizado com sucesso')

            } else if (response.status === 400 || response.status === 401 || response.status === 403) {
                toast.error('Email ou senha invalidos')
            } else {
                throw new Error()
            }
        } catch (error) {
            toast.error('😭 Falha no Sistema! Tente novamente')
        }

    };


    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="Logo DevBurger" />
            </LeftContainer>

            <RightContainer>
                <Title>
                    Olá, seja bem vindo ao <span>Dev Burguer!</span>
                    <br />
                    Acesse com seu <span>Login e senha.</span>
                </Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
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
                    <Button type="submit">Entrar</Button>
                </Form>
                <p>Não possui conta? <Link to="/cadastro">Clique aqui.</Link></p>
            </RightContainer>
        </Container >

    )
}
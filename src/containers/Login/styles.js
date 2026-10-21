import styled from 'styled-components';
import { Link as ReactLink } from 'react-router-dom'
import BackgroundLogo from '../../assets/bgLeft.jpg'
import BackgroundRight from '../../assets/bgRight.svg'

export const Container = styled.div`
    display:flex;
    width: 100vw;
    height:100vh;
`;

export const LeftContainer = styled.div`
background: url('${BackgroundLogo}');
background-size:cover;
background-position:center;
display: flex;
align-items:center;
justify-content:center;
width: 100%;
height:100%;
max-width:50%;
    img{
        width: 50%;
    }
`;

export const RightContainer = styled.div`
width: 100%;
height:100%;
max-width:50%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background: url('${BackgroundRight}');
background-color: #434141;
    p{
        color: #fff;
        font-weight: 800;
        font-size: 18px;

        a{
            text-decoration: underline;
        }

    }
`;

export const Title = styled.h2`
font-family: "Road Rage", sans-serif;
font-weight: 400;
font-style: normal;
color: #fff;
font-size: 40px;
    span{
        font-family: "Road Rage", sans-serif;
        color: #9758A6;
    }
`;

export const Form = styled.form`
    display:flex;
    flex-direction:column;
    gap:20px;
    padding:20px;
    width:100%;
    max-width: 400px;
`;

export const InputContainer = styled.div`
    display:flex;
    flex-direction: column;
    gap:5px;
    width:100%;
    label{
        font-family: "Poppins", sans-serif;
        color:#FFFFFF;
        font-weight: 600;
        font-size:18px;

    }

    input{
        width: 100%;
        height: 45px;
        border-radius: 5px;
        border: none;
        padding:0 16px;
    }

    p{
        font-size: 14px;
        line-height: 80%;
        color: #f66a61;
        font-weight: 600;
        height: 10px;
    }
`;

export const Link  = styled(ReactLink)`
    text-decoration: none;
    color: #ffff;
`



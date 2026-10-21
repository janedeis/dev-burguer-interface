import styled from "styled-components";

import  ReactSelect  from 'react-select'

import { Button } from '../../../components'


export const Container = styled.div`
    /* border: solid red 2px; */
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;    
`;

export const Form = styled.form`
    /* border: solid red 2px; */
    border-radius:20px;
    width: 100%;
    max-width: 300px;
    padding: 30px;
    gap: 10px;
    display:flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.black};
`;

export const ImputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap:4px;
`;

export const Label = styled.label`
    color: ${(props) => props.theme.white};
    font-size: 14px;
`;
export const Imput = styled.input`
    width: 100%;
    height: 48px;
    padding: 0 5px;
    border-radius: 5px;
    border: none;
    margin-top: 10px;
`;

export const LabelUpload = styled.label`
    cursor: pointer;
    border: 1px dashed ${(props) => props.theme.white };
    border-radius: 5px;
    padding: 10px;
    display: flex;
    color: ${(props) => props.theme.white };
    margin: 10px 0;

    > svg {
        width: 20px;
        height:  20px;
        fill: ${(props) => props.theme.white };
        margin-right: 5px;       
    }

    input{
        display: none;
    }
`;

export const Select = styled(ReactSelect)`
`;

export const SubmitButton = styled(Button)`
    margin-top: 30px;
`;

export const ErrorMessage = styled.span`
    font-size: 14px;
    color: ${(props) => props.theme.darkRed};
    line-height: 80%;
    font-weight: 600;
`;

export const ContainerCheckBox = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;

    input{
        cursor:pointer;
    }

`;
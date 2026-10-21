import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const Container = styled.div`
    .react-multiple-carousel__arrow--left{
        top: 45px;
        left: 35px;
        background-color: #fff;
        &:hover{
            background-color: #80f9f9;
        }       
    }   
    
    .react-multiple-carousel__arrow--right{
        top: 45px;
        right: 45px;
        background-color: #fff;
        &:hover{
            background-color: #80f9f9;
        }       
    }   
    

    .react-multiple-carousel__arrow::before {
        color: #000;
        font-weight: 600; 
                    
    }
    
    .carousel-item {
        padding: 40px;
        padding-left: 30px;
    }
    cursor: grab;
`;

export const Title = styled.h2`

    font-size: 50px;
    color: #9785a6;
    font-weight: 700;
    padding-bottom: 12px;
    position: relative;
    text-align: center;
    margin: 0px 0;
    /* border: 2px solid red; */

    &::after{
        content: '';
        position: absolute;
        width: 56px;
        height: 4px;
        bottom: 0;
        background-color: #9785a6;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 10px;
        opacity: 0.8;
        margin-top: 10px;
    }
`;

export const ContainerItems = styled.div`
    background: url('${(props) => props.$imageUrl}');
    background-position: center;
    background-size: cover;

    display:flex;
    align-items: center;
    width: 100%;
    height: 250px;
    padding: 20px 10px;
    border-radius: 20px;
`;

export const CategoryButton = styled(Link)`
        color: #fff;
        padding: 10px 20px;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 20px;
        font-weight: bold;
        margin-top: 100px;
        font-weight: 500;
        text-decoration: none;
        &:hover{
            background-color: #9758a6;
        }

`;
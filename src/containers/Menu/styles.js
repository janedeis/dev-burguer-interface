import styled from 'styled-components'
import BannerHamburger from '../../assets/banner-hamburger.svg'
import Background from '../../assets/bgRight.svg'
import { Link } from 'react-router-dom';



export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #f0f0f0;

    background: linear-gradient(
        rgba(255,255,255, 0.5),
        rgba(255,255,255, 0.5)

    ),url('${Background}');
     

`;

export const Banner = styled.div`
    background: url('${BannerHamburger}');
    display: flex;
    align-items:center;
    justify-content:center;
    width: 100%;
    height: 480px;
    background-color: #1f1f1f;
    background-size: cover;
    position: relative;

    h1{
        font-family: 'Road Rage', sans-serif;
        color: #fff;
        font-size: 80px;
        line-height: 65px;
        position: absolute;

        right: 20%;
        top: 30%;

        span{
            display:block;
            font-size: 20px;
        }
    }
`;

export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 30px;
`;

export const CategoryButton = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    background: none;
    color: ${(props) => (props.$isActiveCategory ? '#c839eb' : '#696969') } ;
    font-size: 24px;
    font-weight: 600;
    padding-bottom: 5px;
    line-height: 20px;
    border: none;
    border-bottom: ${(props) => props.$isActiveCategory && '3px solid #9758A6'} ;
    
    
`;

export const ProductsContainer = styled.div`

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 40px;
    justify-content: center;
    max-width: 1280px;
    gap: 60px;
    margin: 50px auto;
   
`;


export const ButtonHomeBack = styled.button`
    background-color: #e32929;
    color: #fff;
    font-size: 20px;
    width: 130px;
    padding: 5px;
    border-radius: 5px;
    border: none;
    line-height: 20px;
    font-weight: bolder;

    &:hover{
       opacity: 0.9;
       background-color: #066b0b;
       color: #e6dddd;
       font-weight: bolder;
    }
    &::before{
        content: '<<< ';
        font-size: 20px;
    }
   
`;
import styled from 'styled-components'

import { Link } from 'react-router-dom'; 


export const Container = styled.div`
    background-color: ${(props) => props.theme.mainBlack};
    width: 100%;
    height: 72px; 
    padding: 0 56px;
`;

export const Content = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    max-width: 1280px;  
    margin: 0 auto;

`;

export const Navigator = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 72px;

    div{
        /* margin-left: 50px; */
        display:flex;
        align-items:center;
        justify-content: center;
        gap: 20px;

        hr{
            height: 24px;
            border: 1px solid #625e5e
        }
    }
`;

export const HeaderLink = styled(Link)`
    color: ${(props) => (props.$isActive ? (props) => props.theme.purple : (props) => props.theme.white)};
    border-bottom: ${(props) => (props.$isActive ? `1px solid (props) => props.thme.purple` : 'none')  } ;
    padding-bottom: 3px;
    text-decoration: none;
    font-size: 14px;
    transition: color 200ms;

    &:hover {
        color: #9758a6;
    } 
`;

export const Options = styled.div`
    
    display: flex;
    align-items:center;
    justify-content: center;
    gap: 48px;
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;

    p{
        color: #fff;
        line-height: 90%;
        font-weight: 400;
        display: block;

        span{
            font-weight: 700;
            color: #9758a6;
            
        }
    }
`;

export const Logout = styled.button`
    color: #f13333;
    background-color: transparent;
    font-weight: 700;
    font-size: 14px;
    border: none;
    &:hover{
        color: #FFFF00;
        text-decoration: underline;
    }
`;

export const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

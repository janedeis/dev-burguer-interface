
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.nav`
    display: flex;
    flex-direction: column;
    align-items:center;
    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme.black};

    img{
        width: 60%;
        margin: 40px 0;
    }
`;


export const NavLinkContainer = styled.div`
    display:flex;
    flex-direction: column;
    
`;

export const NavLink = styled(Link)`
    border-radius: 10px;
    display:flex;
    align-items:center;
    margin: 4px 0 0 0;
    gap: 12px;
    padding: 12px 20px;
    text-decoration:none;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => 
        props.$isActive ? (props) => props.theme.purple : "transparent"};

    &:hover{
        background-color: ${(props) => 
            props.$isActive ? (props) => props.theme.gren : (props) => props.theme.orange}
    }
`;

export const Footer = styled.footer`
    width: 100%;
    margin-top: auto;

`;



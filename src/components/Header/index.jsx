
import { Container, Content, HeaderLink, LinkContainer, Logout, Navigator, Options, Profile } from "./styles";

import { UserCircleIcon, ShoppingCartIcon } from '@phosphor-icons/react';  

import { useNavigate, useResolvedPath } from 'react-router-dom'
import { useUser } from "../../hooks/UserContent";

export function Header() {

    const navigate = useNavigate();
    const { pathname } = useResolvedPath();

    const { logout, userInfo } = useUser();

    function logoutUser() {
        logout()
        navigate('/login')
    }

    return (
        <Container>

            <Content>

                <Navigator>
                    <div>
                        <HeaderLink to='/' $isActive={pathname === '/'}>
                            Home
                        </HeaderLink>

                        <hr></hr>

                        <HeaderLink to="/cardapio" $isActive={pathname === '/cardapio'} >
                            Cardápio
                        </HeaderLink>
                    </div>
                </Navigator>

                <Options>

                    <Profile>
                        <UserCircleIcon color="#fff" size={25} />
                        <div>
                            <p>Olá, <span>{userInfo.name}</span></p>
                            <Logout onClick={logoutUser} >Sair</Logout>
                        </div>
                    </Profile>

                    <LinkContainer>
                        <ShoppingCartIcon color="#fff" size={25} />
                        <HeaderLink to='/carrinho'>Carrinho</HeaderLink>
                    </LinkContainer>

                </Options>

            </Content>

        </Container>
    )

}
import styled from 'styled-components';
import BannerHome from '../../assets/banner-home.svg';
import Background from '../../assets/bgRight.svg'

export const Banner = styled.div`
    background: url('${BannerHome}');
    background-size: cover;
    background-position: center;
    display:flex;
    justify-content: right;
    padding: 50px 200px 0 0;
    height: 480px;
    width: auto;

    h1{
        color:#fff;
        font-family: 'Road Rage', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 80px;
        height: 91px;
    }
`
export const Container = styled.section`
    background: linear-gradient(
        rgba(255,255,255, 0.5),
        rgba(255,255,255, 0.5)
    ), url('${Background}');

    height: 100%;
`;
// export const Content = styled.div`
// `;
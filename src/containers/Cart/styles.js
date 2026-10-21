import styled from 'styled-components'
import Texture from '../../assets/texture.svg'
import Background from '../../assets/bgRight.svg'

export const Container = styled.div`
    /* border: 3px solid #f14608; */
    width: 100%;
    min-height: 100dvh;
    background: linear-gradient(
        rgba(255,255,255, 0.5),
        rgba(255,255,255, 0.5)
    ),url('${Background}');

`;

export const Banner = styled.div`
    /* border: 2px solid #e8e40c;     */
    background: url(${Texture});
    background-size: cover;
    background-position: center;
    display:flex;
    align-items: center;
    justify-content: center;
    position: relative;

    height: 180px;
    img{
        height: 130px;
    }
`;

export const Title = styled.h1`
    font-size: 32px;
    font-weight: 800;
    padding-bottom: 12px;
    color: #61a120;
    text-align: center;
    position: relative;

    &::after{
        position: absolute;
        bottom: 0;
        content: '';
        width: 56px;
        height: 4px;
        background-color: #61a120;
        left: calc(50% - 28px)

    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 30%;
    width: 100%;
    max-width: 1280px;
    padding: 40px;
    margin: 0 auto;
    gap: 40px;

`;
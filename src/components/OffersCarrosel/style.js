import styled from 'styled-components';


export const Container = styled.div`
    .react-multiple-carousel__arrow--left{
        top:10px;
        left: 5px;
    }
    .react-multiple-carousel__arrow--right{
        top: 10px;
        right:43px;
    }
    .carousel-item {
        padding-right: 40px;
    }
    overflow-x: hidden;
    .react-multi-carousel-list{
        overflow: visible;
    }
    padding-left: 40px;
    padding-bottom: 40px;
`;

export const Title = styled.h2`

    font-size: 50px;
    color: #61A120;
    font-weight: 700;
    padding-bottom: 12px;
    position: relative;
    text-align: center;
    margin: 70px 0px;

    &::after{
        content: '';
        position: absolute;
        width: 56px;
        height: 4px;
        bottom: 0;
        background-color: #61A120;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 10px;
        opacity: 0.8;
        
    }
`;



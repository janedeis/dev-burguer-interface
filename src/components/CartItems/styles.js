import styled from 'styled-components'


export const ProductImg = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 16px;
`;

export const ButtomGroup = styled.div`
    display:flex;
    align-items:center;
    gap: 10px;

    button{
        background-color: #9758A6;
        border: none;
        width: 20px;
        height: 20px;
        color: #fff;
        border-radius: 5px;
        transition: all 0,4s;

        &:hover{
            background-color: #6f357c;
        }
    }
`;

export const EmptyCart = styled.p`
    font-size: 14px;
    font-weight: bolder;
`;

export const ProductTotalPrice = styled.p`
    font-weight: bold;
`

export const TrashImg = styled.img`
    width: 20px;
    height: 20px;
    cursor: pointer;
`;

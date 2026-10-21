import styled from 'styled-components'


export const Container = styled.div`
    background-color: ${(props) => props.theme.mainBlack};
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    

    p{
        color: #f9f1f1;
        font-size: 14px;
        font-weight: 400;
    }

`;
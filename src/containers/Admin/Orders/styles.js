import styled from 'styled-components'
import Select from 'react-select'

export const  ProductImage = styled.img`
    height: 80px;
    border-radius: 16px;  
    padding: 10px;  

`;


export const SelectStatus = styled(Select)`
    font-weight: bold;
    width: 240px;

`;

export const Filter = styled.div`
    display: flex;
    justify-content: center;
    margin: 28px 0;
    gap: 50px;

`


export const FilterOptions = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    color: ${(props) => props.$isActiveStatus ? props.theme.purple: props.theme.darkGray};
    font-size: 18px;
    border-bottom: ${(props) => props.$isActiveStatus ? `2px solid ${props.theme.purple}`: 'none'};
    line-height: 20px;
    padding-bottom: 5px;

`
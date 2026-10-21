import styled from 'styled-components'


export const Root = styled.table`
    width: 100%;
    border-collapse: collapse;
    background-color: #f5efef ;
    border-radius: 20px;
    /* border: 2px solid #000;  */
`;

export const Header = styled.thead``;

export const Tr = styled.tr`
    
`;

export const Th = styled.th`
    padding: 16px;
    text-align: left;
    color: #fff;
    background-color: #333232;
    border-bottom: 1px solid #141313;

    &:first-child{
        border-top-left-radius: 20px;
    }
    &:last-child{
        border-top-right-radius: 20px;
    }
`;

export const Td = styled.td`
    padding: 16px;
    color: #111114;
    font-weight: 500;
    line-height: 115%;
`;

export const Body = styled.tbody`

`;

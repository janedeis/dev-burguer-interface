import styled from 'styled-components';


export const Container = styled.div`
    background-color: #fff;
    border-radius: 20px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;

    * {
        color: #484848;
        font-weight: 500;
    }

    .container-top{
        display: grid;
        grid-gap: 20px 30%;
        grid-template-areas: 
        'title title'
        'items items-price'
        'delivery-tax delivery-tax-price'
        ;

        .title{
            grid-area: title;
            font-size: 20px;
            font-weight: 700;
            background-color: #484848;
            color: #fff;
            padding:13px;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            width: 100%;
            display:flex;
            justify-content: center;
        }

        .items{
            padding-left: 20px;
            grid-area: items;
            font-size: 18px;
        }

        .items-price{
            padding-right: 20px;
            grid-area:items-price;
            font-size: 18px;
        }

        .delivery-tax{
            padding-left: 20px;
            grid-area: delivery-tax;
            font-size: 18px;
        }

        .delivery-tax-price{
            padding-right: 20px;
            grid-area: delivery-tax-price;
            font-size: 18px;
        }
    }

    .container-bottom{
        display:flex;
        justify-content: space-between;
        font-size: 20px;
        margin-top: 20%;
        padding: 20px;

         * {
        color: #484848;
        font-weight: 700;
    }
    }
    
`;

export const Button = styled.button``;

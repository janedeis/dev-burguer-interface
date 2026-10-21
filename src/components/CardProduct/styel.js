
import styled from 'styled-components'


export const Container = styled.div`
    /* background-color: #fff; */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding:20px;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.5) 0 5px 15px;
    cursor: grab;

    div {
    /* border: 2px solid #11e418; */
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    gap: 10px;
    
        p{
            font-size: 18px;
            color: #FF8C05;
            line-height: 20px;
            font-weight: 700;
            margin-top: 50px;
        }
        
        strong{
            font-size: 22px;
            color: #363636;
            font-weight: 800;
            line-height: 20px;

        }
    
    }
`;

export const CardImage = styled.img`
    height: 100px;
    position: absolute;
    margin-top: -50px;
`;


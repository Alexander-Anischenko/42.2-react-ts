import styled from "@emotion/styled";

export const ProductItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 300px;
    min-height: 300px;
    border: 2px solid black;
    padding: 20px;
    background-color: lightblue;
`;

export const ProducName = styled.h3`

`;

export const ProductImgWrapper = styled.div`
    width: 100px;
    height: fit-content;
`;

export const ProductImg = styled.img`
width: 100%;
height: 100%;
`;

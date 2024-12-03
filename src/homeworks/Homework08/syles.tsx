import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Homework08Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color:#e9d4c37b ;
    gap: 30px;
    flex: 1;
`;

export const GeneralWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const InputWrapper = styled.div`
    display: flex;
    gap: 30px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    width: 100%;
`;

export const OutputWrapper = styled.div`
    display: flex;
    gap: 30px;
    width: 100%;
`;

const outputBlocksBasicStyles = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    border: 1px solid;
    border-radius: 4px;
`;

export const OutputBlockGreen = styled.div`
    ${outputBlocksBasicStyles}
    background: #aed4b3;
    color: #1e5926;
`;

export const OutputBlockBlue = styled.div`
    ${outputBlocksBasicStyles}
    background: #a4dadb;
    color: #235354;
`;

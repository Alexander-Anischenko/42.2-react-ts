//@import url(https://fonts.googleapis.com/css?family=Lato:100,100italic,300,300italic,regular,italic,700,700italic,900,900italic);
import styled from "@emotion/styled";

export const LoginFormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    width: 590px;
    height: 450px;
    background-color: #fff;
    padding: 60px;
    border-radius: 4px;
    border: 1px solid #000000;
    font-family: Lato, sans-serif;

    &:hover {
    background-color: #f7e8be;
    }
`;

export const LoginFormTitle = styled.div`
    font-size: 24px;
    width: 100%;
`;

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
`;

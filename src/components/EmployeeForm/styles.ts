import styled from "@emotion/styled";

export const EmployeeFormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    width: 590px;
    height: fit-content;
    background-color: #fff;
    padding: 60px;
    border-radius: 4px;
    border: 1px solid #000000;
    font-family: Lato, sans-serif;

    &:hover {
        background-color: #f7e8be;
    }
`;

export const FormTitle = styled.div`
    font-size: 24px;
    width: 100%;
`;

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
`;
export const CheckboxLable = styled.label``;

export const CheckboxContainer = styled.input`
    width: 25px;
    height: 25px;
`;

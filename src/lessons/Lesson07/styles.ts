import styled from "@emotion/styled";

interface BoxInfoStyledProps {
    primary?: boolean;
}

export const Lesson07Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    flex: 1;
    padding-top: 30px;
`;

export const BoxInfo = styled.div<BoxInfoStyledProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    background-color: ${(props) => (props.primary ? "red" : "blue")};
    border: ${({ primary }) =>
        primary ? "2px solid black" : "1px dotted red"};
`;

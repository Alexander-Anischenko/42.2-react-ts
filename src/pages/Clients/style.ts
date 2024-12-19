import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ClientsPages = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex: 1;
    padding: 20px;
    font-size: 30px;
`;
export const ClientsLink = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 20px;
`;


import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const LayoutEmployeesContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 120px;
    //padding: 20px;
    font-family: Lato, sans-serif;
    background-color: #faf9ff;
    border: 2px solid #000000;
    color: #000000;
`;

export const LogoContainer = styled.div`
    padding-left: 80px;
`;

export const NavContainer = styled.nav`
    display: flex;
    gap: 55px;
    padding-right: 95px;
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    font-size: 28px;
    color: #000000;
`;

export const Main = styled.div``;

//export const Main = styled.div``;

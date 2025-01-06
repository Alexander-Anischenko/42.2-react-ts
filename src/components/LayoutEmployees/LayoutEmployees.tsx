import { createContext, useContext, useState } from "react";

import {
    Header,
    LayoutEmployeesContainer,
    LogoContainer,
    Main,
    NavContainer,
    StyledNavLink,
} from "./styles";
import { Employee, EmployeeContextProps, LayoutEmployeesProps } from "./types";

// Создание контекста для управления состоянием сотрудника
const EmployeeContext = createContext<EmployeeContextProps | undefined>(
    undefined
);

// Хук для доступа к контексту
export const useEmployeeContext = () => {
    const context = useContext(EmployeeContext);
     // Проверка, что контекст используется в пределах провайдера EmployeeContext.Provider
    if (!context) {
        throw new Error(
            "useEmployeeContext must be used within LayoutEmployees"
        );
    } 
    // Возвращение контекста, если он существует
    return context;
};

function LayoutEmployees({ children }: LayoutEmployeesProps) {
    // Состояние для хранения данных текущего сотрудника
    const [employee, setEmployee] = useState<Employee | null>(null);
    // Флаг, указывающий, был ли сотрудник создан
    const [isEmployeeCreated, setEmployeeCreated] = useState(false);

    return (
        // Провайдер EmployeeContext, предоставляющий состояние и функции управления
        <EmployeeContext.Provider
            value={{
                employee,
                isEmployeeCreated,
                setEmployee,
                setEmployeeCreated,
            }}
        >
            <LayoutEmployeesContainer>
                <Header>
                    <LogoContainer>App Logo</LogoContainer>
                    <NavContainer>
                        <StyledNavLink
                            to="/create-employee"
                            style={({ isActive }) => ({
                                textDecoration: isActive ? "underline" : "none",
                            })}
                        >
                            Create Employee
                        </StyledNavLink>
                        <StyledNavLink
                            to="/employee"
                            style={({ isActive }) => ({
                                textDecoration: isActive ? "underline" : "none",
                            })}
                        >
                            Employee
                        </StyledNavLink>
                    </NavContainer>
                </Header>
                <Main>{children}</Main>
            </LayoutEmployeesContainer>
        </EmployeeContext.Provider>
    );
}

export default LayoutEmployees;

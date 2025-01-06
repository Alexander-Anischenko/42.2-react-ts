import { ReactNode } from "react";

export interface LayoutEmployeesProps {
    children: ReactNode;
}

// Тип данных для сотрудника
export interface Employee {
    name: string;
    lastName: string;
    age?: number;
    position: string;
}

// Типы для контекста
export interface EmployeeContextProps {
    employee: Employee | null;
    isEmployeeCreated: boolean;
    setEmployee: (employee: Employee) => void;
    setEmployeeCreated: (created: boolean) => void;
}

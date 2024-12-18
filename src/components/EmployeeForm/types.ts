export interface EmployeeFormValue {
    employee_name: string;
    employee_last_name: string;
    employee_age: number;
    employee_position: string;
    employee_agree: boolean;
}

export enum EMPLOYEE_FORM_NAMES {
    NAME = "employee_name",
    LAST_NAME = "employee_last_name",
    AGE = "employee_age",
    POSITION = "employee_position",
    AGREE = "employee_agree",
}

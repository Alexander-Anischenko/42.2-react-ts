import { useEmployeeContext } from "../../components/LayoutEmployees/LayoutEmployees";
import {
    Content,
    EmployeeCard,
    EmployeeContainer,
    EmployeeConten,
    NoEmployeeContainer,
    Title,
} from "./styles";

function Employee() {
    // деконструкция объекта, полученного из контекста
    const { employee, isEmployeeCreated } = useEmployeeContext();
    return (
        <EmployeeContainer>
            {isEmployeeCreated && employee ? (
                <EmployeeCard>
                    <EmployeeConten>
                        <Title>Name</Title>
                        <Content>{employee.name}</Content>
                    </EmployeeConten>
                    <EmployeeConten>
                        <Title>Surname</Title>
                        <Content>{employee.lastName}</Content>
                    </EmployeeConten>
                    <EmployeeConten>
                        <Title>Age</Title>
                        <Content>{employee.age || "N/A"}</Content>
                    </EmployeeConten>
                    <EmployeeConten>
                        <Title>Job Position</Title>
                        <Content>{employee.position}</Content>
                    </EmployeeConten>
                </EmployeeCard>
            ) : (
                <NoEmployeeContainer>
                    Please create an employee.
                </NoEmployeeContainer>
            )}
        </EmployeeContainer>
    );
}

export default Employee;

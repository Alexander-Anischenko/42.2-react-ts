import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "../Button/Button";
import Input from "../Input/Input";
import {
    CheckboxContainer,
    CheckboxLable,
    EmployeeFormWrapper,
    FormTitle,
    InputsContainer,
} from "./styles";
import { EMPLOYEE_FORM_NAMES, EmployeeFormValue } from "./types";

function EmployeeForm() {
    const shema = Yup.object().shape({
        [EMPLOYEE_FORM_NAMES.NAME]: Yup.string()
            .required("Field name is required")
            .test(
                "Check value lenght",
                "Min 2 symbols",
                (value) => value.length >= 2
            )
            .test(
                "Check value lenght",
                "Max 50 symbols",
                (value) => value.length <= 50
            ),
        [EMPLOYEE_FORM_NAMES.LAST_NAME]: Yup.string()
            .required("Field last name is required")
            .test(
                "Check value lenght",
                "Max 15 symbols",
                (value) => value.length <= 15
            ),
        [EMPLOYEE_FORM_NAMES.AGE]: Yup.number()
            .min(18, "Min age 18 years")
            .max(80, "Max age 80 years"),
        [EMPLOYEE_FORM_NAMES.POSITION]: Yup.string()
            .required("Field position is required")
            .test(
                "Check value lenght",
                "Max 30 symbols",
                (value) => value.length <= 30
            ),
        [EMPLOYEE_FORM_NAMES.AGREE]: Yup.boolean(),
    });

    const formik = useFormik({
        initialValues: {
            [EMPLOYEE_FORM_NAMES.NAME]: "",
            [EMPLOYEE_FORM_NAMES.LAST_NAME]: "",
            [EMPLOYEE_FORM_NAMES.AGE]: 0,
            [EMPLOYEE_FORM_NAMES.POSITION]: "",
            [EMPLOYEE_FORM_NAMES.AGREE]: false,
        } as EmployeeFormValue,
        validationSchema: shema,
        validateOnChange: false,
        onSubmit: (values: EmployeeFormValue) => {
            console.log(values);
        },
    });

    //console.log(formik.values);

    return (
        <EmployeeFormWrapper onSubmit={formik.handleSubmit}>
            <FormTitle>Employee form</FormTitle>
            <InputsContainer>
                <Input
                    label="Name*"
                    id="employeeName"
                    placeholder="Enter your name"
                    name={EMPLOYEE_FORM_NAMES.NAME}
                    onChange={formik.handleChange}
                    error={formik.errors[EMPLOYEE_FORM_NAMES.NAME]}
                />
                <Input
                    label="Last name*"
                    id="employeeLastName"
                    placeholder="Enter your last name"
                    name={EMPLOYEE_FORM_NAMES.LAST_NAME}
                    onChange={formik.handleChange}
                    error={formik.errors[EMPLOYEE_FORM_NAMES.LAST_NAME]}
                />
                <Input
                    label="Age"
                    id="employeeAge"
                    placeholder="Enter your age"
                    name={EMPLOYEE_FORM_NAMES.AGE}
                    onChange={formik.handleChange}
                    error={formik.errors[EMPLOYEE_FORM_NAMES.AGE]}
                />
                <Input
                    label="Position*"
                    id="employeeName"
                    placeholder="Enter your position"
                    name={EMPLOYEE_FORM_NAMES.POSITION}
                    onChange={formik.handleChange}
                    error={formik.errors[EMPLOYEE_FORM_NAMES.POSITION]}
                />
                <CheckboxLable htmlFor="checkbox_id">
                    Rules of use*
                </CheckboxLable>
                <CheckboxContainer
                    type="checkBox"
                    id="checkbox_id"
                    name={EMPLOYEE_FORM_NAMES.AGREE}
                    onChange={formik.handleChange}
                    checked={formik.values[EMPLOYEE_FORM_NAMES.AGREE]}
                />
            </InputsContainer>
            <Button
                buttonName="Create"
                type="submit"
                disabled={!formik.values[EMPLOYEE_FORM_NAMES.AGREE]}
            />
        </EmployeeFormWrapper>
    );
}

export default EmployeeForm;

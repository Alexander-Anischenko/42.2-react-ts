import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "../Button/Button";
import Input from "../Input/Input";
import { LoginFormWrapper, LoginFormTitle, InputsContainer } from "./styles.ts";
import { LoginFormValue, LOGIN_FORM_NAMES } from "./types.ts";

function LoginForm() {
    // создаем валидационную форму(форму проверки на валидность) через Yup
    const shema = Yup.object().shape({
        [LOGIN_FORM_NAMES.EMAIL]: Yup.string()
            .required("Field email is required")
            .email("Field has type email")
            .test(
                "Check value lenght",
                "Max 25 symbols",
                (value) => value.length <= 25
            ),
        [LOGIN_FORM_NAMES.PASSWORD]: Yup.number()
            .required("Field password is required")
            .typeError("Password must be number")
            .test('Check min password length', 'Min 10 symbols', value => String(value).length >= 10)
            .test('Check max password length', 'Max 20 symbols', value => String(value).length <=20),
        //проверки max и min работают с числовыми значениями и
        //они указывает на минимальное и минимальное значение в поле(!не количество сиволов)
        //.max(150, "Max 150")
        //.min(18, "Min 18"),
    });

    //Настройка формы. Сохраняем возвращаемое useFormik значение (объект) в переменную formik
    const formik = useFormik({
        initialValues: {
            // начальные значения используем брэкет-синтаксис обращаясь к emum
            [LOGIN_FORM_NAMES.EMAIL]: "",
            [LOGIN_FORM_NAMES.PASSWORD]: "",
        } as LoginFormValue,
        // типизация через 'as'  осуществляется в случае когда типизируется одно из свойств объекта в основном нужно для дальнейшей поддержки кода
        //----------------------------------------
        //привязка валидационной схемы Yup к формику формы LoginForm
        validationSchema: shema,
        validateOnChange: false,
        //validateOnMount:true,
        onSubmit: (values: LoginFormValue) => {
            console.log(values);
        },
    });

    //Лог показывает каждое изменение в любом из инпутов
    console.log(formik);

    return (
        <LoginFormWrapper onSubmit={formik.handleSubmit}>
            <LoginFormTitle>Login form</LoginFormTitle>
            <InputsContainer>
                <Input
                    label="Email*"
                    placeholder="Enter your email"
                    //type="email"
                    name={LOGIN_FORM_NAMES.EMAIL}
                    id="email-id"
                    value={formik.values[LOGIN_FORM_NAMES.EMAIL]}
                    onChange={formik.handleChange}
                    error={formik.errors[LOGIN_FORM_NAMES.EMAIL]}
                />
                <Input
                    label="Password*"
                    placeholder="Enter your password"
                    //type="password"
                    name={LOGIN_FORM_NAMES.PASSWORD}
                    id="password-id"
                    value={formik.values[LOGIN_FORM_NAMES.PASSWORD]}
                    onChange={formik.handleChange}
                    error={formik.errors[LOGIN_FORM_NAMES.PASSWORD]}
                />
            </InputsContainer>
            <Button buttonName="Login" type="submit" />
        </LoginFormWrapper>
    );
}

export default LoginForm;

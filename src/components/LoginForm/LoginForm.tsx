import Button from "../Button/Button";
import Input from "../Input/Input";
import { LoginFormWrapper, LoginFormTitle, InputsContainer } from "./styles.ts";

function LoginForm() {
    return (
        <LoginFormWrapper>
            <LoginFormTitle>Login form</LoginFormTitle>
            <InputsContainer>
                <Input
                    label="Email"
                    placeholder="Enter your email"
                    type="email"
                    name="userEmail"
                    id="email-id"
                />
                <Input
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    name="userPassword"
                    id="password-id"
                />
            </InputsContainer>
            <Button buttonName="Login" />
        </LoginFormWrapper>
    );
}

export default LoginForm;

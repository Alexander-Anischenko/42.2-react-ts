import "./styles.css";
import Button from "../Button/Button";
import Input from "../Input/Input";

function LoginForm() {
    return (
        <form className="loginform-wrapper" action="">
            <div className="loginform-name">Login form</div>
            <div className="loginform-input">
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
            </div>
            <Button buttonName="Login" />
        </form>
    );
}

export default LoginForm;

import "./styles.css";
import { ButtonProps } from "./types";

//props ='значение по умолчанию(default)'
function Button({ buttonName, type = "button", onClick }: ButtonProps) {
    //console.log(props);

    return (
        <button className="main-button" onClick={onClick}>
            {buttonName}
        </button>
    );
};

export default Button;

import { ButtonProps } from "./types";
import { MainButton } from "./styles.ts";

//props ='значение по умолчанию(default)'
function Button({ buttonName, type = "button", onClick, }: ButtonProps,) {
    //console.log(props);

    return <MainButton onClick={onClick} >{buttonName}</MainButton>;
}

export default Button;

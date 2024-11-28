import{ InputWrapper, Label, InputStyle } from "./styles.ts";
import { InputProps } from "./types";

function Input({ name, type = 'text', placeholder, label, id }: InputProps) {
    return (
        <InputWrapper>
            {/* Пример оператора условного рендеринга */}
            {label && <Label htmlFor={id}>{label}</Label>}
            <InputStyle
                type={type}
                placeholder={placeholder}
                name={name}
                id={id}
                className="input-style"
            />
        </InputWrapper>
    );
}

export default Input;

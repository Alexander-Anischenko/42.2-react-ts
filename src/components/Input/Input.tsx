import "./styles.css";
import { InputProps } from "./types";

function Input({ name, type = 'text', placeholder, label, id }: InputProps) {
    return (
        <div className="input-wrapper">
            {/* Пример оператора условного рендеринга */}
            {label && <label htmlFor={id}>{label}</label>}
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                id={id}
                className="input-style"
            />
        </div>
    );
}

export default Input;

import "./styles.css";
import { InputProps } from "./type";

/* interface InputProps {
    name?: string
    type?: React.HTMLInputTypeAttribute
    placeholder?: string
    id?: string
    label: React.ReactNode
} */

function Input({ name, type, placeholder, label, id }: InputProps) {
    return (
        <div className="input-wrapper">
            <label htmlFor={id}>{label}</label>
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

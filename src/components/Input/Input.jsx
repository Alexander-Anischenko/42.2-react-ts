import "./styles.css";

function Input({ name, type, placeholder, label, id }) {
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

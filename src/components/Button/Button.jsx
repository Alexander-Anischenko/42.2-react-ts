import "./styles.css";

//props ='значение по умолчанию(default)'
function Button({ buttonName, type = "button", onClick }) {
    //console.log(props);

    return (
        <button className="main-button" onClick={onClick}>
            {buttonName}
        </button>
    );
}

export default Button;

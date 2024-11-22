import Button from "../Button/Button";
import "./styles.css";
///Шаг 1 вызов хука из React
import { useState } from "react";

function Counter() {
    //Шаг 2 вызываем хук и передаем в него начальное состояние(initialState)
    //делаеммдеструктуризацию массива из двух элементов, который возвращает хук useState
    const [count, setCount] = useState(0);

    /* const result = useState(0);
    console.log(result);
    const count = result[0];
    console.log(count);
    const setCount = result[1];
    console.log(setCount); */

    const onPlusClick = () => {
        setCount((preValue) => preValue + 1);
    };

    const onMinusClick = () => {
        setCount((preValue) => preValue - 1);
    };

    return (
        <div className="counter-container">
            <div className="button-wrapper">
                <Button buttonName="-" onClick={onMinusClick} />
            </div>
            <div className="counter-result">{count}</div>
            <div className="button-wrapper">
                <Button buttonName="+" onClick={onPlusClick} />
            </div>
        </div>
    );
}

export default Counter;

import Button from "../Button/Button";
import "./styles.css";
///Шаг 1 вызов хука из React
import { useState } from "react";

function Counter() {
    //Шаг 2 вызываем хук и передаем в него начальное состояние(initialState)
    //делаеммдеструктуризацию массива из двух элементов, который возвращает хук useState
    /* const [count, setCount] = useState<number | undefined>(0); */
    const [count, setCount] = useState<number>(0);

    const onPlusClick = (): void => {
        setCount((preValue) => preValue + 1);
    };

    const onMinusClick = (): void => {
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

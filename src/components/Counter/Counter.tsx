import Button from "../Button/Button";
import "./styles.ts";
///Шаг 1 вызов хука из React
import { useState } from "react";
import { CounterContainer, ButtonWrapper, CounterResult } from "./styles.ts";

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
        <CounterContainer>
            <ButtonWrapper>
                <Button buttonName="-" onClick={onMinusClick} />
            </ButtonWrapper>
            <CounterResult>{count}</CounterResult>
            <ButtonWrapper>
                <Button buttonName="+" onClick={onPlusClick} />
            </ButtonWrapper>
        </CounterContainer>
    );
}

export default Counter;

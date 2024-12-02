import { ChangeEvent, useState } from "react";

import {
    Lesson08Container,
    GreenBox,
    BlueBox,
    InputExample,
} from "./styles.ts";
import Counter from "../../components/Counter/Counter.tsx";

function Lesson08() {
   //-------------Поднятие состояния
  // Поднятие состояние для компонента Counter, для более гибкой работы с компонентом
  // в итоге можно будет создавать разные состояния для Counter, внутри его родительских компонентов
    const [count, setCount] = useState<number>(0);

    const onPlusClick = (): void => {
        setCount((preValue) => preValue + 1);
    };

    const onMinusClick = (): void => {
        setCount((preValue) => preValue - 1);
    };
   // --------------------
  // Состояние для хранения значения инпута (только одного)
    const [inputValueExample, setInputValueExample] = useState<string>("");

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValueExample(event.target.value);
    };

    return (
        <Lesson08Container>
            {/* Контролируемые и неконтролируемые компоненты */}
            <InputExample
                name="example1"
                placeholder="example text"
                onChange={onChangeInput}
                value={inputValueExample}
            />
            {/* Поднятие состояния */}
            <Counter
                countValue={count}
                onMinus={onMinusClick}
                onPlus={onPlusClick}
            />
            {/* Emotion шаблоны */}
            <GreenBox>Green Box</GreenBox>
            <BlueBox>Blue Box</BlueBox>
        </Lesson08Container>
    );
}

export default Lesson08;

import { ChangeEvent, useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import {
    ButtonWrapper,
    GeneralWrapper,
    Homework08Container,
    InputWrapper,
    OutputBlockBlue,
    OutputBlockGreen,
    OutputWrapper,
} from "./syles";
//import { FormWrapper, Homework08Container, ResultWrapper, ResultBlock } from "./styles";

function Homework08() {
    const [inputNameValue, setInputNameValue] = useState<string>("");
    const [inputLastNameValue, setInputLastNameValue] = useState<string>("");
    const [outputData, setOutputData] = useState<{
        name: string;
        lastName: string;
    }>(Object);

    const onChangeNameInput = (event: ChangeEvent<HTMLInputElement>) => {
        setInputNameValue(event.target.value);
    };

    const onChangeLastNameInput = (event: ChangeEvent<HTMLInputElement>) => {
        setInputLastNameValue(event.target.value);
    };

    const clickDisplayData = () => {
        setOutputData({ name: inputNameValue, lastName: inputLastNameValue });
    };

    return (
        <Homework08Container>
            <GeneralWrapper>
                <InputWrapper>
                    <Input
                        name="input1"
                        placeholder="Enter your name"
                        onChange={onChangeNameInput}
                        value={inputNameValue}
                    />
                    <Input
                        name="input2"
                        placeholder="Enter your last name"
                        onChange={onChangeLastNameInput}
                        value={inputLastNameValue}
                    />
                </InputWrapper>
                <ButtonWrapper>
                    <Button
                        buttonName="Display data"
                        onClick={clickDisplayData}
                    />
                </ButtonWrapper>
                <OutputWrapper>
                    <OutputBlockGreen>{outputData.name}</OutputBlockGreen>
                    <OutputBlockBlue>{outputData.lastName}</OutputBlockBlue>
                </OutputWrapper>
            </GeneralWrapper>
        </Homework08Container>
    );

    // Пример Екатерины Завертяевой
    /* const [firstNote, setFirstNote] = useState<string>("");
    const [secondNote, setSecondNote] = useState<string>("");
    //переменная для контроля отображения блока с результатами
    const [isShowResults, setIsShowResults] = useState<boolean>(false);
    //стейты для хранения результатов из полей
    const [firstResult, setFirstResult] = useState<string>("");
    const [secondResult, setSecondResult] = useState<string>("");

    const firstNoteOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFirstNote(event.target.value);
    };

    const secondNoteOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSecondNote(event.target.value);
    };

    const showResult = (): void => {
        setFirstResult(firstNote);
        setSecondResult(secondNote);
        // Используем логический оператор НЕ(!), для изменения стейта на противоположный, при нажатии на кнопку (работает с boolean значениями)
        setIsShowResults(!isShowResults);
    };

    return (
        <Homework08Container>
            <FormWrapper>
                <Input
                    name="first-note"
                    placeholder="Enter first note"
                    value={firstNote}
                    onChange={firstNoteOnChange}
                />
                <Input
                    name="second-note"
                    placeholder="Enter second note"
                    value={secondNote}
                    onChange={secondNoteOnChange}
                />
                <Button buttonName="SHOW/HIDE RESULT" onClick={showResult} />
            </FormWrapper>
            // Использование оператора условного рендеринга для отображения блока с результатами
            {isShowResults && (
                <ResultWrapper>
                    // Использование оператора условного рендеринга для отображения отдельных значений блоков
                    {firstResult && <ResultBlock>{firstResult}</ResultBlock>}
                    {secondResult && <ResultBlock>{secondResult}</ResultBlock>}
                </ResultWrapper>
            )}
        </Homework08Container>
    ); */
}

export default Homework08;

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
}

export default Homework08;

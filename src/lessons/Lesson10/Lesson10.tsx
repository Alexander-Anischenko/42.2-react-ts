import { useEffect, useState } from "react";
import axios from "axios";
import {v4} from 'uuid'

import Button from "../../components/Button/Button";
import {
    ButtonWrapper,
    DataOutput,
    DataOutputWrapper,
    GeneralWrapper,
    Lesson10Container,
} from "./styles";

function Lesson10() {
    // Состояние массива строк фактов о котах
    const [catFacts, setCatFacts] = useState<string[]>([]);
    //Состояние выполнения запроса
    const [isButtonPushed, setIsButtonPushed] = useState<boolean>(false);

    //переменная содержащая URL
    const CAT_FACT_URL = "https://catfact.ninja/fact";

    const fetchCatFacts = async () => {
        try {
            const response = await axios.get(CAT_FACT_URL);
            //console.log(response);
            setCatFacts((prevCatFacts) => [
                ...prevCatFacts,
                response.data.fact,
            ]);
        } catch (err) {
            console.log(err);
        }
    };

    const getMoreCatFactsData = () => {
        setIsButtonPushed(true);
    };

    const deleteCatFacts = () => {
        setCatFacts([]);
    };

    useEffect(() => {
        fetchCatFacts();
    }, []);

    useEffect(() => {
        if (isButtonPushed) {
            fetchCatFacts();
            setIsButtonPushed(false);
        }
    }, [isButtonPushed]);

    

    const renderFacts = () => {
        return catFacts.map((catFacts) => (
            <DataOutput key={v4()}>
                {catFacts}
            </DataOutput>
        ));
    };

    return (
        <Lesson10Container>
            <GeneralWrapper>
                <ButtonWrapper>
                    <Button
                        buttonName="GET MORE INFO"
                        onClick={getMoreCatFactsData}
                    />
                    {catFacts.length> 0 && <Button buttonName="DELETE ALL DATA" onClick={deleteCatFacts}/>}
                </ButtonWrapper>
                <DataOutputWrapper>
                {catFacts.length> 0 && renderFacts()
        }
                </DataOutputWrapper>
            </GeneralWrapper>
        </Lesson10Container>
    );
}

export default Lesson10;

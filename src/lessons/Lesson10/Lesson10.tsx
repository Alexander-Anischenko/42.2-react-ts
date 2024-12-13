import { useEffect, useState } from "react";
import axios from "axios";
import {v4} from 'uuid'

import Button from "../../components/Button/Button";
import {
    ButtonWrapper,
    DataOutput,
    DataOutputWrapper,
    ErrorMessage,
    GeneralWrapper,
    Lesson10Container,
} from "./styles";

function Lesson10() {
    // Состояние массива строк фактов о котах
    const [catFacts, setCatFacts] = useState<string[]>([]);
    //Состояние выполнения запроса
    const [error, setError] = useState<any>(undefined);

    //переменная содержащая URL
    const CAT_FACT_URL = "https://catfact.ninja/fact";

    const fetchCatFacts = async () => {
        try {
            const response = await axios.get(CAT_FACT_URL);
    console.log(response);
            setCatFacts((prevCatFacts) => [
                ...prevCatFacts,
                response.data.fact,
            ]);
        } catch (error: any) {
            setError(error)
        }
    };

    const getMoreCatFactsData = () => {
        fetchCatFacts();
    };

    const deleteCatFacts = () => {
        setCatFacts([]);
    };

    useEffect(() => {
        fetchCatFacts();
    }, []);
    

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
                    {error && <ErrorMessage>{error.message}</ErrorMessage>}
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

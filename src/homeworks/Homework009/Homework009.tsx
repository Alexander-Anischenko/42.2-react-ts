import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { DogImg, ErrorMessage, Homework009Component, Spinner } from "./styles";
import Input from "../../components/Input/Input";

function Homework009() {
    const [search, setSearch] = useState<string>("");
    const [note, setNote] = useState<string>("");
    const [dogImageUrl, setDogImageUrl] = useState<string | undefined>(
        undefined
    );
    const [error, setError] = useState<any>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const DOG_URL = "https://dog.ceo/api/breeds/image/random";

    const onSearchCange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    const onNoteCange = (event: ChangeEvent<HTMLInputElement>) => {
        setNote(event.target.value);
    };

    const getDogPhoto = async () => {
        setDogImageUrl(undefined)
        setError(undefined)
        try {
            setIsLoading(true)
            const response = await axios.get(DOG_URL);
            /* const response = await axios.gpost(url, {
                name: 'Bob',
                email: 'bob@gmail.com'
            }); */
            //console.log(response);
            setDogImageUrl(response.data.message)
        } catch (error: any) {
            //console.log(error);
        } finally{
            setIsLoading(false)
        }
    };

    useEffect(() => {
        getDogPhoto()
    },[search])

    return (
        <Homework009Component>
            <Input
                name="search"
                placeholder="Enter word"
                value={search}
                onChange={onSearchCange}
            />
            <Input
                name="note"
                placeholder="Enter note"
                value={note}
                onChange={onNoteCange}
            />
            {dogImageUrl && <DogImg src={dogImageUrl} alt="random dog" />}
            {error && <ErrorMessage>{error.mesage}</ErrorMessage>}
            {isLoading && <Spinner></Spinner>}
        </Homework009Component>
    );
}
export default Homework009;

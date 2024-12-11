import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";

import Input from "../../components/Input/Input";
import {
    HomeWork09Container,
    InputWrapper,
    OutputWrapper,
    RandomDogImg,
} from "./styles";

function HomeWork09() {
    const [searchValue, setSearchValue] = useState<string>("");
    const [notSerch, setNotSerch] = useState<string>("");
    const [img, setImg] = useState<string | undefined>(undefined);

    const onSendChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const onNoChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNotSerch(event.target.value);
    };
    const fetchImg = async () => {
        try {
            const response = await axios.get(
                "https://dog.ceo/api/breeds/image/random"
            );
            //console.log(response);
            setImg(response.data.message);
        } catch (err) {
            console.log(err);
        }
    };

    /*  useEffect(()=>{
        fetchImg()
    }, []) */

    useEffect(() => {
        fetchImg();
    }, [searchValue]);

    return (
        <HomeWork09Container>
            <InputWrapper>
                <Input
                    name={"Sending on entry"}
                    placeholder="Print here"
                    value={searchValue}
                    onChange={onSendChange}
                />
                <Input
                    name={"Controlled input"}
                    placeholder="Just like that."
                    value={notSerch}
                    onChange={onNoChange}
                />
            </InputWrapper>
            <OutputWrapper>
                <RandomDogImg src={img} />
            </OutputWrapper>
        </HomeWork09Container>
    );
}

export default HomeWork09;

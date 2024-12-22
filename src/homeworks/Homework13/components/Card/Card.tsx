import Message from "../Message/Message";
import { CardContainer, Name } from "./styles";

function Card() {
    return (
        <CardContainer>
            <Name>Alexander Anischenko</Name>
            <Message />
        </CardContainer>
    );
}

export default Card;

import Button from "../../components/Button/Button";
import { HomeWork07Container, ButtonContainer } from "./styles.ts";

function Homework07() {
    return (
        <HomeWork07Container>
            <ButtonContainer>
                <Button buttonName="Disabled" disabled />
                <Button buttonName="Enabled" />
            </ButtonContainer>
        </HomeWork07Container>
    );
}

export default Homework07;

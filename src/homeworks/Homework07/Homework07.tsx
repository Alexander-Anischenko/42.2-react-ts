import Button from "../../components/Button/Button";
import { HomeWork07Container, ButtonContainer } from "./styles.ts";

function Homework07() {
    return (
        <HomeWork07Container>
            <ButtonContainer>
                <Button buttonName="Disabled" disabled onClick={() =>{
                    console.log('Button works');
                    
                }}/>
                <Button buttonName="Enabled" onClick={() =>{
                    console.log('Button don`t works');
                    
                }}/>
            </ButtonContainer>
        </HomeWork07Container>
    );
}

export default Homework07;

import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { GoBackWrapper } from "./styles";

function GoBack() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <GoBackWrapper>
            <Button buttonName="Go Back" onClick={goBack} />
        </GoBackWrapper>
    );
}

export default GoBack;

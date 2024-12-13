import { useNavigate } from "react-router-dom";

import Button from "../../components/Button/Button";
import { UsersPage } from "./styles";

function Users() {
    const navigate = useNavigate();

    const goToAboutPage = () => {
        navigate("/about");
    };

    return (
        <UsersPage>
            Content Users page
            <Button buttonName="Go to About Page" onClick={goToAboutPage} />
        </UsersPage>
    );
}

export default Users;
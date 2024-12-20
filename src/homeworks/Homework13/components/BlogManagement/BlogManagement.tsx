import Button from "../../../../components/Button/Button";
import { BlogManagementWrapper, TextAreaContainer } from "./styles";

function BlogManagement() {
    return (
        <BlogManagementWrapper>
            <TextAreaContainer></TextAreaContainer>
            <Button buttonName="Post" />
        </BlogManagementWrapper>
    );
}

export default BlogManagement;

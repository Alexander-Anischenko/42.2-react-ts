import { createContext, useState } from "react";

import Button from "../../../../components/Button/Button";
import Card from "../Card/Card";
import {
    BlogManagementWrapper,
    ButtonWrapper,
    TextAreaContainer,
} from "./styles";
import { MessageData } from "./types";

export const BlogManagementContext = createContext<MessageData>({
    message: "",
});

function BlogManagement() {
    const [messageContent, setMessageContent] = useState<string>("");
    const [postMessage, setPostMessage] = useState<string>("");

    const clickPostMessage = () => {
        setPostMessage(messageContent);
    };

    const onTextAreaChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setMessageContent(event.target.value);
    };
    return (
        <BlogManagementContext.Provider value={{ message: postMessage }}>
            <BlogManagementWrapper>
                <TextAreaContainer
                    value={messageContent}
                    onChange={onTextAreaChange}
                ></TextAreaContainer>
                {postMessage && <Card />}
                <ButtonWrapper>
                    <Button buttonName="Post" onClick={clickPostMessage} />
                </ButtonWrapper>
            </BlogManagementWrapper>
        </BlogManagementContext.Provider>
    );
}

export default BlogManagement;

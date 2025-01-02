import { useContext } from "react";

import { MessageWrapper } from "./styles";
import { BlogManagementContext } from "../BlogManagement/BlogManagement";

function Message() {
    const { message } = useContext(BlogManagementContext);

    return <MessageWrapper>{message}</MessageWrapper>;
}

export default Message;

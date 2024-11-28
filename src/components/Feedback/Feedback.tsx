import {
    FeedbackWrapper,
    ButtonFeedbackWrapper,
    ResultComtainer
} from "./styles.ts";
import Button from "../Button/Button";
import { useState } from "react";

function Feedback() {
    const [countLike, setLike] = useState<number>(0);
    const [countDislike, setDislike] = useState<number>(0);

    const onLikeClick = (): void => {
        setLike((plusLike) => (plusLike < 99 ? plusLike + 1 : plusLike));
    };

    const onDislikeClick = (): void => {
        setDislike((plusDislike) =>
            plusDislike < 99 ? plusDislike + 1 : plusDislike
        );
    };

    const onResetClick = (): void => {
        setLike(0);
        setDislike(0);
    };

    return (
        <FeedbackWrapper>
            <ButtonFeedbackWrapper>
                <ResultComtainer like>{countLike}</ResultComtainer>
                <Button buttonName="Like" onClick={onLikeClick} />
            </ButtonFeedbackWrapper>
            <ButtonFeedbackWrapper>
                <Button buttonName="Reset Results" onClick={onResetClick} />
            </ButtonFeedbackWrapper>
            <ButtonFeedbackWrapper>
                <Button buttonName="Dislike" onClick={onDislikeClick} />
                <ResultComtainer>{countDislike}</ResultComtainer>
            </ButtonFeedbackWrapper>
        </FeedbackWrapper>
    );
}

export default Feedback;

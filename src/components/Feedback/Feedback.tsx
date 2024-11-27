import "./styles.css";
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
        <div className="feetback-wrapper">
            <div className="button-feetback-wrapper">
                <div className="result like">
                    {countLike}
                </div>
                <Button buttonName="Like" onClick={onLikeClick} />
            </div>
            <div className="button-reset-wrapper">
                <Button buttonName="Reset Results" onClick={onResetClick} />
            </div>
            <div className="button-feetback-wrapper">
                <Button buttonName="Dislike" onClick={onDislikeClick} />
                <div className="result dislike">{countDislike}</div>
            </div>
        </div>
    );
}

export default Feedback;

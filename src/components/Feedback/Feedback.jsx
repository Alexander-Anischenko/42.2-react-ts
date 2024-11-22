import "./styles.css";
import Button from "../Button/Button";
import { useState } from "react";

function Feedback() {
    const [countLike, setLike] = useState(0);
    const [countDislike, setDislike] = useState(0);

    const onLikeClick = () => {
        setLike((plusLike) => (plusLike < 99 ? plusLike + 1 : plusLike));
    };

    const onDislikeClick = () => {
        setDislike((plusDislike) =>
            plusDislike < 99 ? plusDislike + 1 : plusDislike
        );
    };

    const onResetClick = () => {
        setLike(0);
        setDislike(0);
    };

    return (
        <div className="feetback-wrapper">
            <div className="button-feetback-wrapper">
                <div className="result like" max="100">
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

//@import url(https://fonts.googleapis.com/css?family=Lato:100,100italic,300,300italic,regular,italic,700,700italic,900,900italic);
import styled from "@emotion/styled";

interface ResultLikeDislikeProps {
    like?: boolean;
}

export const FeedbackWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    max-width: 100%;
    min-width: 900px;
    height: 100px;
    gap: 25px;
    background-color: rgb(155, 167, 163);
    border: 1px solid;
    border-radius: 4px;
`;

export const ButtonFeedbackWrapper = styled.div`
    display: flex;
    width: 180px;
    gap: 20px;
`;

export const ResultComtainer = styled.div<ResultLikeDislikeProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 60px;
    font-family: Lato sans-serif;
    color: ${(like) => like ? "chartreuse" : "red"};
    text-shadow: ${(like) =>
        like ? "gb(34, 34, 34) 1px 0 7px" : "rgb(255, 255, 255) 1px 0 7px;"};
`;

/* export const Like = styled.div`
    ${result()}
    color: chartreuse;
    text-shadow: rgb(34, 34, 34) 1px 0 7px;
`;

export const Dislike = styled.div`
    ${result()}
    color: red;
    text-shadow: rgb(255, 255, 255) 1px 0 7px;
`;
 */

import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";

export default function Comment(props) {
    const [likes, setLikes] = useState(props.likes);
    const [dislikes, setDislikes] = useState(props.dislikes);

    function updateReactions() {
        props.setComments(
            props.comments.map((e) => {
                if (e.id === props.id) {
                    e.comments[props.commentIndex].likes = likes;
                    e.comments[props.commentIndex].dislikes = dislikes;
                }

                return e;
            })
        );
    }

    useEffect(() => {
        return updateReactions();
    }, [likes, dislikes]);
    return (
        <div className="shadow border border-1 border-secondary rounded-pill py-3 px-5 mx-5 my-0 mb-3">
            <p className="text-center fs-5 text-secondary">{props.comment}</p>
            <div className="text-end mx-5">
                <Button
                    variant="transparent"
                    onClick={() => {
                        setLikes(likes + 1);
                    }}
                >
                    <i className="bi bi-hand-thumbs-up text-primary fs-4 mx-2"></i>
                    <span>{likes}</span>
                </Button>
                <Button
                    variant="transparent"
                    onClick={() => {
                        setDislikes(dislikes + 1);
                    }}
                >
                    <i className="bi bi-hand-thumbs-down text-secondary fs-4 mx-2"></i>
                    <span>{dislikes}</span>
                </Button>
            </div>
        </div>
    );
}

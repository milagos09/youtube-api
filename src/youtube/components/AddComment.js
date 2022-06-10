import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export default function AddComment(props) {
    const [comment, setComment] = useState("");

    function post() {
        if (comment.trim() === "") return;
        const find = props.comments.find((c) => c.id === props.id);
        if (find) {
            const newComments = props.comments.map((c) => {
                if (c.id === props.id) {
                    c.comments.push({ comment: comment, likes: 0, dislikes: 0 });
                }
                return c;
            });
            props.setComments(newComments);
        } else {
            props.setComments([
                ...props.comments,
                { id: props.id, comments: [{ comment: comment, likes: 0, dislikes: 0 }] },
            ]);
        }
        setComment("");
    }
    return (
        <div className="my-4">
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "100px", resize: "none" }}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
            </FloatingLabel>
            <Button variant="danger" className="d-block ms-auto mt-3 px-4" onClick={post}>
                Post
            </Button>
        </div>
    );
}

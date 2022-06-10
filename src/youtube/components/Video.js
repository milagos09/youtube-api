import AddComment from "./AddComment";
import Comment from "./Comment";
export default function Video(props) {
    const data = props.comments.find((comment) => comment.id === props.id);

    return (
        <div>
            <iframe
                src={`https://www.youtube.com/embed/${props.id}`}
                height="500px"
                width="900px"
                className="p-1"
                style={{ aspectRatio: 16 / 9, width: "100%" }}
                allowFullScreen
            />
            <p>
                <b>{props.data.snippet.title}</b>
            </p>
            <p className="text-muted">{props.data.snippet.description}</p>
            <AddComment id={props.id} comments={props.comments} setComments={props.setComments} />
            {data &&
                data.comments.map((c, i) => (
                    <Comment
                        key={i}
                        comment={c.comment}
                        likes={c.likes}
                        dislikes={c.dislikes}
                        id={props.id}
                        commentIndex={i}
                        comments={props.comments}
                        setComments={props.setComments}
                    />
                ))}
        </div>
    );
}

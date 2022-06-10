export default function (props) {
    const { snippet, id } = props.video;
    if (id.kind.includes("video")) {
        return (
            <div className="mb-3">
                <button onClick={() => props.changeActiveVideo(props.video)} className="bg-transparent border-0">
                    <img src={snippet.thumbnails.medium.url} className="img-fluid" alt={snippet.title}></img>
                    <p className="mt-2 text-center fw-bold text-primary">{snippet.title}</p>
                </button>
            </div>
        );
    }
}

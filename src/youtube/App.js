import { useEffect, useState } from "react";
import Axios from "axios";
import Search from "./components/Search";
import Video from "./components/Video";
import Snippet from "./components/Snippet";

export default function App() {
    const [search, setSearch] = useState("");
    const [activeVideo, setActiveVideo] = useState(null);
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [comments, setComments] = useState([]);

    //fetch videos api
    function fetchVideos() {
        setLoading(true);
        Axios.get(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&maxResults=10&key=${process.env.REACT_APP_API}`
        )
            .then((res) => {
                const getVideos = res.data.items.filter((item) => item.id.kind.includes("video"));
                if (getVideos.length > 0) {
                    setVideos(getVideos);
                    setActiveVideo(getVideos[0]);
                    console.log(process.env.REACT_APP_API);
                }

                setLoading(false);
            })
            .catch((err) => {
                alert("Error occurred while trying to fetch video/s, check console for error logs");
                console.log(err);
            });
    }

    //Change active video
    function changeActiveVideo(video) {
        setActiveVideo(video);
    }

    return (
        <>
            <nav>
                <Search search={search} setSearch={setSearch} fetchVideos={fetchVideos} loading={loading} />
            </nav>
            <main className="container-fluid row mx-auto mb-4">
                {videos.length > 0 && (
                    <>
                        <div className="col-sm-12 col-md-9">
                            <div className="sticky-top">
                                <Video
                                    id={activeVideo.id.videoId}
                                    data={activeVideo}
                                    comments={comments}
                                    setComments={setComments}
                                />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3 shadow text-center">
                            <h3 className="text-center">Related Videos</h3>
                            {videos.map((video, i) => {
                                if (video.id.videoId !== activeVideo.id.videoId) {
                                    return <Snippet key={i} video={video} changeActiveVideo={changeActiveVideo} />;
                                }
                            })}
                        </div>
                    </>
                )}
            </main>
        </>
    );
}

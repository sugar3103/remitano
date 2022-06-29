import { Link } from "react-router-dom";

function MainPage() {
  const getVideoList = localStorage.getItem("videoList");
  const videoList = JSON.parse(getVideoList);

  return (
    <div>
      <div className="">
        {videoList?.map((e) => (
          <div key={e?.id} className="flex my-3">
            <iframe
              className="w-2/4 h-48"
              title="youtube video"
              src={`https://www.youtube.com/embed/${e.videoId}?feature=oembed`}
              allow="fullscreen;"
            ></iframe>
            <div className="pl-4 w-2/4">
              <p className="font-bold">{e.title}</p>
              <p className="mt-2">
                Author name :{" "}
                <span className="font-bold">{e.author_name} </span>
              </p>
              <p>Video Url : {e.url}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center">
        {(videoList || []).length === 0 ? (
          <h1 className="text-3xl font-bold">
            No video to show please go to{" "}
            <Link to="/share" className="text-sky-400">
              Share
            </Link>{" "}
            your video
          </h1>
        ) : null}
      </div>
    </div>
  );
}

export default MainPage;

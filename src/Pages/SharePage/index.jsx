import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SharePage(props) {
  const { loginInfo } = props;
  const navigate = useNavigate();

  const [shareLink, setShareLink] = useState(null);

  function shareTheLink(e) {
    e.preventDefault();
    if (!shareLink.includes("youtube.com")) {
      alert("Must be a Youtube link");
    } else {
      const getVideoList = localStorage.getItem("videoList");
      const videoList = getVideoList ? JSON.parse(getVideoList) : [];

      const youtubeLink = `https://noembed.com/embed?url=${shareLink}`;

      fetch(youtubeLink)
        .then((response) => response.json())
        .then((result) => {
          const videoId = shareLink.split("v=")[1];
          const existedVideo = videoList.find((e) => e.videoId === videoId);
          if (result?.error) {
            alert("Video is not existed in Youtube / video ID not correct");
          } else if (!existedVideo) {
            const newVideoList = [...videoList, { videoId, ...result }];
            const stringNewVideoList = JSON.stringify(newVideoList);
            localStorage.setItem("videoList", stringNewVideoList);
            navigate("/");
          } else alert("Video existed in the list");
        })
        .catch((error) => alert("can't get video information", error));
    }
  }

  return (
    <div className="px-24 py-12">
      {loginInfo?.email ? (
        <div className="rounded-md border-2 border-black p-4">
          <div className="-mt-8 mb-6 px-2 bg-white w-6/12">
            Share a Youtube movie
          </div>
          <form onSubmit={shareTheLink}>
            <div className="">
              <label>Youtube URL : </label>
              <input
                type={"url"}
                required
                className="border-2 w-9/12 px-1"
                onChange={(e) => setShareLink(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full text-white rounded-md bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:bg-indigo-500/50 mt-4 pb-1"
            >
              Share
            </button>
          </form>
        </div>
      ) : (
        <div className="font-bold text-lg w-full flex justify-center">
          Please Login to share a Youtube link
        </div>
      )}
    </div>
  );
}

export default SharePage;

SharePage.propTypes = {
  loginInfo: PropTypes.object,
};

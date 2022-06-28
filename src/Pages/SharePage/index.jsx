import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SharePage(props) {
  const { loginInfo } = props;
  const navigate = useNavigate();

  const [shareLink, setShareLink] = useState(null);

  function shareTheLink(e) {
    e.preventDefault();
    console.log("share the link", shareLink);
    navigate("/");
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
                type={"text"}
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
        <div>Please Login to share a Youtube link</div>
      )}
    </div>
  );
}

export default SharePage;

SharePage.propTypes = {
  loginInfo: PropTypes.object,
};

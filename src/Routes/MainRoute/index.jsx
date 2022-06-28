import PropTypes from "prop-types";
import { Route, Routes } from "react-router-dom";
import MainPage from "../../Pages/MainPage";
import SharePage from "../../Pages/SharePage";

function MainRoute(props) {
  const { loginInfo } = props;

  return (
    <Routes>
      <Route path="" element={<MainPage />} />
      <Route path="/share" element={<SharePage loginInfo={loginInfo} />} />
    </Routes>
  );
}

export default MainRoute;

MainRoute.propTypes = {
  loginInfo: PropTypes.object,
};

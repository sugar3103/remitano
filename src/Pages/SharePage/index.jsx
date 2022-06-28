import PropTypes from "prop-types";

function SharePage(props) {
  const { loginInfo } = props;

  return <div>{loginInfo?.email} Share Page</div>;
}

export default SharePage;

SharePage.propTypes = {
  loginInfo: PropTypes.object,
};

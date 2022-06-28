import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../static/home-50.svg";

function Header(props) {
  const { loginInfo, setLoginInfo } = props;

  const [loginData, setLoginData] = useState({});

  function login(e) {
    e.preventDefault();
    localStorage.setItem("loginInfo", JSON.stringify(loginData));
    setLoginInfo(loginData);
    setLoginData({});
  }

  function logOut() {
    localStorage.removeItem("loginInfo");
    setLoginInfo(null);
  }

  return (
    <header className="w-full flex justify-between items-center py-8 md:px-8">
      <Link to="/" className="flex items-center">
        <span className="w-16">
          <HomeIcon />
        </span>
        <p className="text-4xl font-bold"> Funny Movies</p>
      </Link>
      <div className="flex">
        {loginInfo ? (
          <div className="flex">
            <p className="pr-2">
              Welcome : <span className="font-bold">{loginInfo.email}</span>
            </p>
            <Link
              to="/share"
              className="rounded-md bg-blue-500 shadow-lg shadow-blue-500/50 px-2 pb-1 mr-2 text-white"
            >
              Share a movie
            </Link>
            <button
              onClick={logOut}
              className="rounded-md bg-indigo-500 shadow-lg hover:shadow-indigo-500/40 px-2 pb-1 mr-2 text-white"
            >
              Logout
            </button>
          </div>
        ) : (
          <form className="flex items-center" onSubmit={login}>
            <input
              type="email"
              name="username"
              className="rounded-md border-2 mr-1 p-1"
              onChange={(e) =>
                setLoginData((init) => ({ ...init, email: e.target.value }))
              }
            />
            <input
              type="text"
              name="password"
              className="rounded-md border-2 mr-2 p-1"
              minLength={8}
              onChange={(e) =>
                setLoginData((init) => ({ ...init, password: e.target.value }))
              }
            />
            <button
              type="submit"
              className="rounded-md bg-indigo-500 shadow-lg hover:shadow-indigo-500/40 pt-1 pb-2 px-2 text-white"
            >
              Login
            </button>
          </form>
        )}
      </div>
    </header>
  );
}

export default Header;

Header.propTypes = {
  loginInfo: PropTypes.object,
  setLoginInfo: PropTypes.func.isRequired,
};

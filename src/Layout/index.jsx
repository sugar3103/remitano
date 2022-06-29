import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import MainRoute from "../Routes/MainRoute";
import Header from "./Header";

function Layout(props) {
  const [loginInfo, setLoginInfo] = useState(null);

  useEffect(() => {
    const getLoginData = localStorage.getItem("loginInfo");
    const loginData = JSON.parse(getLoginData);
    if (loginData?.email) {
      setLoginInfo(loginData);
    }
  }, []);

  return (
    <section className="w-full">
      <div className="flex justify-center">
        <div className="w-full md:w-[1024px]">
          <Header loginInfo={loginInfo} setLoginInfo={setLoginInfo} />
          <div className="flex justify-center pb-16">
            <div className="w-full md:w-[768px]">
              <MainRoute loginInfo={loginInfo} />
            </div>
          </div>
          <div className="fixed bottom-0 left-0 py-4 bg-sky-500 w-full flex justify-center">
            <h2 className="font-bold text-white">Made by Duong Phan</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
};

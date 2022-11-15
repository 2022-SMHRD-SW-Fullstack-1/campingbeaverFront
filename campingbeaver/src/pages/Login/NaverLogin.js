import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import naverImg from "../../components/img/naverLogo.png";
import "./Login.css";

const NaverLogin = () => {
  const [auth, setAuth] = useState(false);

  const [userInfo, setUserInfo] = useState({
    user_id: "",
    user_email: "",
    user_name: "",
  });

  const { naver } = window;
  const NAVER_CLIENT_ID = "ouUd18EIec7BAaiUuI6P";
  const NAVER_CALLBACK_URL = "http://localhost:3000/Login";

  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: NAVER_CLIENT_ID,
      callbackUrl: NAVER_CALLBACK_URL,
      isPopup: false,
      loginButton: { color: "green", type: 3, height: 55 },
      callbackHandle: true,
    });
    naverLogin.init();

    naverLogin.getLoginStatus(async function (status) {
      if (status) {
        console.log("가져오는값 : ", naverLogin.user);
        const userEmail = naverLogin.user.email;
        const userId = naverLogin.user.id;
        const userName = naverLogin.user.name;
        localStorage.setItem("userName", userName);
        localStorage.setItem("userEmail", userEmail);
        localStorage.setItem("userId", userId);
        setUserInfo({
          user_email: { userEmail },
          user_id: { userId },
          user_name: { userName },
        });
        setAuth(true);
      }
    });
  };

  const location = useLocation();
  const userAccessToken = () => {
    window.location.href.includes("access_token") && getToken();
  };

  const getToken = () => {
    const token = location.hash.split("=")[1].split("&")[0];
    localStorage.setItem("access_token", token);
  };

  const handleNaverClick = () => {
    const naverLoginButton = document.getElementById(
      "naverIdLogin_loginButton"
    );
    if (naverLoginButton) naverLoginButton.click();
  };

  useEffect(() => {
    initializeNaverLogin();
    userAccessToken();
    if (localStorage.userName != null) {
      document.location.href = "/";
    }
  });

  return (
    <>
      <div className="naverBtn" onClick={handleNaverClick}>
        <img src={naverImg} width="40px" />
        <span className="naverSpan">네이버 로그인 </span>
        <span></span>
      </div>
      <div id="naverIdLogin" style={{ display: "none" }}></div>
    </>
  );
};
export default NaverLogin;

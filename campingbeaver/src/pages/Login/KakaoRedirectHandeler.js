import React, { useEffect, useState } from "react";
import axios from "axios";

const KakaoRedirectHandler = ({ auth, setAuth }) => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    let params = new URL(document.location.toString()).searchParams;
    let code = params.get("code");

    const grant_type = "authorization_code";
    let client_id = "cf7a78d941b5d9b2470ad035a2afacc9";
    let url = `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=http://localhost:3000/oauth/callback/kakao&code=${code}`;
    axios
      .post(url, {
        headers: {
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      })
      .then((res) => {
        localStorage.setItem("token", res.data.access_token);
        setToken(res.data.access_token);
      })
      .catch((error) => {});
  }, []);

  useEffect(() => {
    axios
      .get(`https://kapi.kakao.com/v2/user/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        localStorage.setItem(
          "userName",
          res.data.kakao_account.profile.nickname
        );
        localStorage.setItem("userEmail", res.data.kakao_account.email);
        localStorage.setItem("userId", res.data.id);

        setUser(res.data);
        setAuth(true);

        if (res.data.id != null) {
          window.location.href = "/";
        } else {
          alert("아이디와 비밀번호를 확인해주세요");
        }
      })
      .catch(() => {});
  }, [token]);

  return <div></div>;
};

export default KakaoRedirectHandler;

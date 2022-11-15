import React, { useEffect, useState } from "react";
import axios from "axios";

const KakaoRedirectHandler = ({ auth, setAuth }) => {
  console.log("kakao.js");

  const [token, setToken] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    let params = new URL(document.location.toString()).searchParams;
    let code = params.get("code");

    const grant_type = "authorization_code";
    let client_id = "cf7a78d941b5d9b2470ad035a2afacc9";
    let url = `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=http://localhost:3000/oauth/callback/kakao&code=${code}`;

    console.log(url);

    axios
      .post(url, {
        headers: {
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      })
      .then((res) => {
        console.log("token success");

        console.log(res);
        console.log("로그인떴냐?");
        console.log(res.data.access_token);
        localStorage.setItem("token", res.data.access_token);
        setToken(res.data.access_token);
      })
      .catch((error) => {
        console.log("token failed : ", error);
      });
  }, []);

  useEffect(() => {
    console.log("token change", token);

    axios
      .get(`https://kapi.kakao.com/v2/user/me`, {
        //
        headers: {
          //헤더에 token을 담아서 전달
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("then");
        console.log(res.data);
        console.log(res.data.id);
        console.log(res.data.kakao_account.email);
        console.log(res.data.kakao_account.profile.nickname);
        localStorage.setItem(
          "userName",
          res.data.kakao_account.profile.nickname
        );
        localStorage.setItem("userEmail", res.data.kakao_account.email);
        localStorage.setItem("userId", res.data.id);

        setUser(
          // user_id = res.data.id,
          // user_email = res.data.kakao_account.email,
          // user_name = res.data.kakao_account.nickname,
          res.data
        );
        setAuth(true);

        console.log(user);

        if (res.data.id != null) {
          window.location.href = "/";
        } else {
          alert("아이디와 비밀번호를 확인해주세요");
        }
      })
      .catch(() => {
        console.log("catch");
      });
  }, [token]);

  return <div></div>;
};

export default KakaoRedirectHandler;

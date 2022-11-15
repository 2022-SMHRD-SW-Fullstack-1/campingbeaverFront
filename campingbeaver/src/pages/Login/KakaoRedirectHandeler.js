import React, { useEffect, useState } from "react";
import axios from "axios";

const KakaoRedirectHandler = ({ auth, setAuth }) => {
  console.log("kakao.js");

  //access_token 값 저장할 변수
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    // 화면이 갱신이 되면

    let params = new URL(document.location.toString()).searchParams;
    let code = params.get("code"); // 인가코드 받는 부분

    const grant_type = "authorization_code"; //고정
    let client_id = "cf7a78d941b5d9b2470ad035a2afacc9"; //앱 REST API 키
    let url = `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=http://localhost:3000/oauth/callback/kakao&code=${code}`;

    console.log(url);
    // 토큰받기 Request (카카오디벨롭REST API)
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
        // res에 포함된 토큰 받아서 원하는 로직을 하면된다.
        //document.location.href='/' //로그인성공시 메인으로 보내줌
      })
      .catch((error) => {
        console.log("token failed : ", error);
      });
  }, []);

  // useEffect이용해서 token의 값이 변화할 때 아래의 useEffect함수(axios통신,백엔드연결) 시행
  useEffect(() => {
    console.log("token change", token);

    axios //서버에서 유저정보 요청하는 url
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

  // useEffect(() => {
  //   fetch('/beaver/kakaologin',{
  //     method: 'POST',
  //     body: JSON.stringify({
  //       user_id: user.id,
  //       user_name: user.kakao_account.profile.nickname,
  //       user_email: user.kakao_account.email,
  //     }),
  //   })
  //   .then((response)=>response.json())
  //   .then((response)=>{
  //     console.log("백엔드감", response)
  //   })
  //   .catch(()=>{console.log('백엔드못감')})
  // }, [])

  return (
    <div>
      사실 이페이지는 크게 의미 없다. 첫화면으로 로직이 끝나면 이동시켜주면
      된다.
    </div>
  );
  //document.location.href = "/";
};

export default KakaoRedirectHandler;

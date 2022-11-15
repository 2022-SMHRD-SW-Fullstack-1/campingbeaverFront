import axios from "axios";

const kakaoLogin = (code) => {
  return function (dispatch, getStat, { history }) {
    axios({
      method: "GET",
      url: `http://localhost:3000/oauth/callback/kakao?code=${code}`,
    })
      .then((res) => {
        const ACCESS_TOKEN = res.data.accessToken;
        localStorage.setItem("token", ACCESS_TOKEN);
        window.alert("Login success...");
      })
      .catch((err) => {
        window.alert("Login failed...");
        history.replace("/login");
      });
  };
};

const actionCreators = { kakaoLogin };

export { actionCreators };

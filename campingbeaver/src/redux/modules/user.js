import axios from "axios";

const kakaoLogin = (code) => {
    return function (dispatch, getStat,{history}) {
        axios({
            method: "GET",
            url: `http://localhost:3000/oauth/callback/kakao?code=${code}`,
        })
        .then((res) => {
            //get token
            console.log(res);
            
            const ACCESS_TOKEN = res.data.accessToken;

            //local store (temp)
            localStorage.setItem("token", ACCESS_TOKEN);

            // history.replace("/main")

            window.alert("Login success...");
            //get token -> change page to HOME
            //history.replace("/"); 
        
        }).catch((err) => {
            console.log("Login error", err);
            window.alert("Login failed...");
            history.replace("/login")
        });
    }
};

const actionCreators = { kakaoLogin }; 

export { actionCreators }
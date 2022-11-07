import { React, useState } from 'react';
import { json, useNavigate } from 'react-router-dom';
import './Login.scss';
import {KAKAO_AUTH_URL} from './OAuth';
import Header from '../../components/Layout/Header';
import NaverLogin from './NaverLogin';
import './Login.css'
const Login = () => {
  if (localStorage.userName != null) {
    document.location.href = "/";
  }
 
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    id: '',
    pw: '',
  });

  const { id, pw } = inputValue;

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const goToMain = () => {
    fetch('beaver/login', {
      method: 'POST',
      body: JSON.stringify({
        user_id: id,
        user_pw: pw,
      }),
    })
    .then((response) => response.json())
    // .then((result) => console.log("결과: ", result))
    .then((response) => {
      console.log("=============");
      console.log("백엔드 응답 메세지 :", response);

      if (response.user_id.length > 0) {
        localStorage.setItem("userName", response.user_name);
        localStorage.setItem("userEmail", response.user_email);
        localStorage.setItem("userId", response.user_id);
        //localStorage.setItem('userName', response.user_name);
        window.location.href = '/'
        //this.props.history.push("/");
      } else {
        alert('아이디와 비밀번호를 확인해주세요')
      }
    
    });
      // .then(result => {
      //   if (result.access_token) {
      //     localStorage.setItem('Authorization', result.access_token);
      //     navigate('../');
      //   } else {
      //     alert('아이디와 비밀번호를 확인해주세요');
      //   }
      // });
  }

  const goToSignup = () => {
    navigate('../signup');
  };

  return (
    <div>
      <Header/>
      <section className="login">
        <div className="loginTitle">Camping Beaver</div>
        <div className="inputArea">
          <form className="idLine">
            <span className="idInputLine">Id</span>
            <input
              className="idInput"
              type="text"
              name="id"
              onChange={handleInput}
            />
          </form>
          <form className="pwLine">
            <span className="pwInputLine">Password</span>
            <input
              className="pwInput"
              type="password"
              name="pw"
              onChange={handleInput}
            />
          </form>
        </div>
        <button
          className="signBtn"
          disabled={!(id.length > 4 && pw.length >= 4)}
          onClick={goToMain}
        >
          SIGN IN
        </button>

        <a href={KAKAO_AUTH_URL}>
        <img className="kakaobtn" 
          src="kakao_login_medium_wide.png"
        />
        </a>
        <br/>
        <NaverLogin/>

        <br></br>
        
        <div className="loginFooter">
          <div className="findUser">
            <div className="forgotId">Forgot Your Id?</div>
            <div>or</div>
            <div className="forgotPw">Password</div>
          </div>
          <div className="createAccount" onClick={goToSignup}>
            CreateAccount
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
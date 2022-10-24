import React, {useState} from 'react'
import "./LoginRegister.css"

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  
  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
}

  const onSubmit = (event) => {
    event.preventDefault();
  }

  return (
      <div class="loginregister" >
        <form>
            <div><input name="email" type="email" placeholder="이메일" value={email} onChange={onEmailHandler} class="loginregister__input"/></div>
            <div><input name="password" type="password" placeholder="비밀번호" value={password} onChange={onPasswordHandler} class="loginregister__input"/></div>
            <div><button type="submit" onSubmit={onSubmit} class="loginregister__button">로그인</button></div>
            <div>
                <button name="kakaoLogin" class="kakaoLogin" >
                <img className="kakaobtn" src="kakao_login_medium_narrow.png"/>
                </button>
            </div>
        </form>
      </div>
    );
  }

export default LoginPage;
import React from "react";
import { KAKAO_AUTH_URL } from "./OAuth";
import { Link } from 'react-router-dom'





// 매개변수로 object를 적을 때 주의!
// 1) ({속성}) => 중괄호 생략 금지
// 2) 다중 속성을 가져올 때
//    ({속성},{속성}) => 틀린것임
//    ({속성, 속성}) => 하나의 객체({}) 안에 다중 속성
const Member = ({ name, teamName }) => {
  return (
    <div>
        <Link to="/LoginPage"></Link>
        <img className="kakaobtn" src="kakao_login_medium_narrow.png"/>
        <Link/>
      <br></br>
    </div>
    
  )
  return {KAKAO_AUTH_URL}
}

const KakaoLogin = () => {
    return {KAKAO_AUTH_URL}
}

export default Member 

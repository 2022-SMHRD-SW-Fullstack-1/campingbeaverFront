import React, {BrowserRouter, Route} from 'react'
import { Link, Routes } from 'react-router-dom'
import KakaoLogin from '../auth/KakaoLogin'
import LoginPage from '../auth/LoginPage'
import { KAKAO_AUTH_URL } from '../auth/OAuth'



const Header = () => {

  const linkStyle = {
    textDecoration :'none',
    color : 'green'
  }

  return (
    
    <h1 align="center">
      <Link to='/' style={linkStyle}>
        Camping beaver
      </Link>

      <Link to='/LoginPage'>
      <button><KakaoLogin/></button>
      </Link>
    </h1>
    
  )
}

export default Header
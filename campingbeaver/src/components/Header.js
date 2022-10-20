import React from 'react'
import { Link } from 'react-router-dom'

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

      <Link to='join'><button>회원가입</button></Link>
    </h1>
  )
}

export default Header
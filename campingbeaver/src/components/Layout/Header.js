import React,{usestate} from 'react'
import styles from './Header.module.scss'
import logo from '../img/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from 'react-router-dom'

const Header = ({auth, setAuth}) => {
  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <div>
        <Link to='/'><img src={logo} width='200px'/></Link>
        <span><Link to='/Login'> Login으로 이동 </Link></span>
        <span><Link to='/Reservation'> Reservation으로 이동 </Link></span>
        </div> 
        <Navbar bg="none" expand="lg" className={styles.navbar} >
      <Container>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/store">STORE</Nav.Link>
            <Nav.Link href="/recommendation">RECOMMENDATION</Nav.Link>
            <Nav.Link href="/cart">CART</Nav.Link>
            <NavDropdown title="MYPAGE" id="basic-nav-dropdown">
              <NavDropdown.Item href="/MyPage">마이페이지</NavDropdown.Item>
              <NavDropdown.Item href="/Wishlist">
                관심상품
              </NavDropdown.Item>
              <NavDropdown.Item href="/ReviewList">리뷰관리</NavDropdown.Item>
              <NavDropdown.Divider />
              {
                auth ?
                <NavDropdown.Item href="/Logout" onClick={()=>setAuth(false)}>
                로그아웃
                </NavDropdown.Item> :
                <NavDropdown.Item href="/Login">
                로그인
                </NavDropdown.Item>
              }
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
          </div>
    
    </header>
  )
}

export default Header
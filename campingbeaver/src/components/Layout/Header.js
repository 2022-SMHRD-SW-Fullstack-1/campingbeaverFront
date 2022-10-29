import React,{usestate} from 'react'
import styles from './Header.module.scss'
import logo from '../img/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <div>
        <Link to='/'><img src={logo} width='200px'/></Link>
        <span><Link to='/'> HOME으로 이동 </Link></span>
        <span><Link to='/Login'> Login으로 이동 </Link></span>
        <span><Link to='/Reservation'> Reservation으로 이동 </Link></span>
        </div> 
        <Navbar bg="none" expand="lg" className={styles.navbar} >
      <Container>
       
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/recommendation">RECOMMENDATION</Nav.Link>
            <Nav.Link href="/cart">CART</Nav.Link>
            <NavDropdown title="MYPAGE" id="basic-nav-dropdown">
              <NavDropdown.Item href="/MyPage">마이페이지</NavDropdown.Item>
              <NavDropdown.Item href="/Wishlist">
                관심상품
              </NavDropdown.Item>
              <NavDropdown.Item href="/MyPage">리뷰관리</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                로그인/로그아웃
              </NavDropdown.Item>
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
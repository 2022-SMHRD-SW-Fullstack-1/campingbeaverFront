import React from 'react'


import styles from './MyPage.module.scss'
import "bootstrap/dist/css/bootstrap.min.css";
import SideNav from './SideNav';
import Header from '../../components/Layout/Header';
import ReservList from './ReservCheck/ReservList';
import WishList from './WishList';
import ReservNotEmpty from './ReservCheck/ReservNotEmpty';


const Content = () => {
  return (
    <div>
      <Header/>
      <div className={styles.top}>
          <h1 className={styles.mypage}>
          My Page
          </h1>
          <p>마이페이지</p>
      </div>

          <hr></hr>
      <div className={styles.top}>
          <h4>
            admin님 반가워요!
          </h4>
          <p>admin@gmail.com</p>
      </div>

          
    
      <div className={styles.mid}>
      <div><SideNav/></div>
       
      </div> 
    </div>
  )
}

export default Content
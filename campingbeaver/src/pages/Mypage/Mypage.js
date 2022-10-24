import React from 'react'
import styles from './MyPage.module.scss'
import "bootstrap/dist/css/bootstrap.min.css";
import SideNav from './SideNav';
import Header from '../../components/Layout/Header';

const MyPage = () => {
  return (
    <div className={styles.top}>
      <Header/>
      
      <div>
          <h1 className={styles.MyPage}>
          My Page
          </h1>
          <p>마이페이지</p>
      </div>

          
      <div className={styles.MyInfo}>
          <h5>
            admin님 반가워요!
          </h5>
          <p>admin@gmail.com</p>
      </div>
          <hr></hr>
      
      
      <SideNav/>
      
      

    </div>
  )
}

export default MyPage
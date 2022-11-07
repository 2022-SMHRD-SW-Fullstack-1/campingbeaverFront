import React from 'react'
import styles from './MyPage.module.scss'
import "bootstrap/dist/css/bootstrap.min.css";
import SideNav from './SideNav';
// import './EditMyInfo.scss';


const userName = localStorage.getItem('userName')
const userEmail = localStorage.getItem('userEmail')

const MyPage = () => {
 
  return (
    <div className={styles.top}>

      <div>
          <h1 className={styles.MyPage}>
          {userName}님 반가워요!
          </h1>
          <p>{userEmail}</p>
      </div>
      <hr/>
      <SideNav/>
      
    </div>
  )
}

export default MyPage


import React from 'react'
import styles from './MyPage.module.scss'
import "bootstrap/dist/css/bootstrap.min.css";
import SideNav from './SideNav';
import Header from '../../components/Layout/Header';
import { useParams } from 'react-router-dom';


const MyPage = ({ userInfo }) => {

  
  const params = useParams();
  const name = userInfo[params.userName]
  const email = userInfo[params.userEmail]
  return (
    <div className={styles.top}>
      <Header/>
      
      <div>
          <h1 className={styles.MyPage}>
          {name}님 반가워요!
          </h1>
          <p>{email}</p>
      </div>
      <hr/>
          
      {/* <div className={styles.MyInfo}>
          <h5>
            admin님 반가워요!
          </h5>
          <p>admin@gmail.com</p>
      </div> */}
          
      
      
      <SideNav/>
      
    </div>
  )
}

export default MyPage


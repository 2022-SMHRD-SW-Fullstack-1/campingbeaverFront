import React from 'react'
import styles from './MyPage.module.scss'
import "bootstrap/dist/css/bootstrap.min.css";
import SideNav from './SideNav';



const userName = localStorage.getItem('userName')
const userEmail = localStorage.getItem('userEmail')

const MyPage = () => {
 
  return (
    <div className={styles.top}>
<<<<<<< HEAD
=======
      
>>>>>>> 80977c75c3076a450a91269951ee4d7a226fdb68
      
      <div>
          <h1 className={styles.MyPage}>
          {userName}님 반가워요!
          </h1>
          <p>{userEmail}</p>
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


import React from 'react'


import styles from './MyPage.module.scss'
import "bootstrap/dist/css/bootstrap.min.css";
import SideNav from './SideNav';


const Content = () => {
  return (
    <div>
      <div className={styles.top}>
          <h1 className={styles.mypage}>
          My Page
          </h1>
          <p>마이페이지</p>
      </div>

      <div className={styles.top}>
          <h4>
            admin님 반가워요!
          </h4>
          <p>admin@gmail.com</p>
      </div>

          <hr></hr>
      {/* <div className={styles.mid}>
        <div className={styles.menu}>  
          <a href='#'>예약/취소 정보</a>
          <a href='#'>관심상품</a>
          <a href='#'>회원 정보 수정</a>
        </div>
       
      </div> */}
      <SideNav/>
      
    </div>
  )
}

export default Content
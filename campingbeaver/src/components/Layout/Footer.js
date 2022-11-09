import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
  return (

    <div className='fter'>
      <footer className={styles.footer}>

        <div className={styles.contents}>
          <div>
            <h3> Camping Beaver</h3>
            <p className={styles.footerp}>대표자명 : 주상민<br />
              운영시간: 10:00 ~ 18:00<br />
              (점심시간: 12:30 ~ 13:30)</p>
          </div>
          <div>
            <h5>스마트인재개발원</h5>
            <p className={styles.footerp}>광주본점 : 광주 동구 예술길 31-15 3~5, 7층<br />
              광주남구점 : 광주 남구 송암로 60 2층
            </p>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Footer
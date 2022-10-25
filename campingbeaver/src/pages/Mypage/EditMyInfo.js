import React from 'react'
import styles from './MyPage.module.scss'
import ConfirmInfo from './ConfirmInfo'
const EditMyInfo = () => {
  return (
    <div>
        <div>
          <h1 className={styles.contact}>
          Edit Member Info
          </h1>
          <p className={styles.contact1}>회원 정보 수정</p>
        </div>

        <div>
          <ConfirmInfo/>
        </div>
    </div>
  )
}

export default EditMyInfo
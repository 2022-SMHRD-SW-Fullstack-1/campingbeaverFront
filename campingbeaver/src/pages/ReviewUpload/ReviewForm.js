import React from 'react'
import Header from '../../components/Layout/Header'
import styles from './ReviewForm.module.scss'
const Review = () => {
  return (
    <div className={styles.postForm}>
        <Header/>

        <div className={styles.title}>
          <h1>Review</h1>
          <p>리뷰 작성</p>
        </div>
        <form className={styles.reviewFormContainer} method="POST">
          <table>
            <thead>
              <tr>
                <th>제목</th>
                <td>
                  <input type="text" name="title"></input>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.textArea} colspan="2">
                  <textarea name="context"></textarea>
                </td>
              </tr>
              <tr>
                <th>사진첨부</th>
                <td>
                  <input type="text"></input>
                  <button>찾아보기</button>
                </td>
              </tr>
              <tr>
                <th>별점</th>
                <td></td>
              </tr>
              
              <tr>
                <th>비밀번호</th>
                <td>
                  <input type="password" name="password"></input>
                </td>
              </tr>
            </tbody>
          </table>
          <section className={styles.btns}>
            <div>
              <button className={styles.listBtn}>목록</button>
            </div>
            <div>
              <button className={styles.createBtn}>등록</button>
            </div>
            <div>
              <button className={styles.cancelBtn}>취소</button>
            </div>
          </section>
        </form>  
    </div>
  )
}

export default Review
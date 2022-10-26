import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Layout/Header'
import styles from './ReviewForm.module.scss'
const Review = () => {
  const navigate = useNavigate();
    const navigateToMyPage = () => {
    return (
      navigate("/MyPage")
    )
  }


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
                <th>별점</th>
                <td>
                <form class="mb-3" className={styles.myForm} method="post">
                  <fieldset>
                    {/* <span className={styles}>별점을 선택해주세요</span> */}
                    <input type="radio" name="reviewStar" value="5" id="rate1"/><label
                      for="rate1">★</label>
                    <input type="radio" name="reviewStar" value="4" id="rate2"/><label
                      for="rate2">★</label>
                    <input type="radio" name="reviewStar" value="3" id="rate3"/><label
                      for="rate3">★</label>
                    <input type="radio" name="reviewStar" value="2" id="rate4"/><label
                      for="rate4">★</label>
                    <input type="radio" name="reviewStar" value="1" id="rate5"/><label
                      for="rate5">★</label>
                  </fieldset>
                </form>
                </td>
              </tr>
              <tr>
                <th>사진첨부</th>
                <td>
                  <input type="file" multiple={true} id="fileUpload"></input>
                </td>
              </tr>
              
              
              {/* <tr>
                <th>비밀번호</th>
                <td>
                  <input type="password" name="password"></input>
                </td>
              </tr> */}
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
              <button 
                className={styles.cancelBtn}
                onClick={navigateToMyPage}
                >취소</button>
            </div>
          </section>
        </form>  
    </div>
  )
}

export default Review
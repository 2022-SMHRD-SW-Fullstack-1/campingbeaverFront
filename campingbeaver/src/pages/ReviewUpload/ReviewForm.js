import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Layout/Header'
import styles from './ReviewForm.module.scss'
import { GiRoundStar }  from 'react-icons/gi'
import styled from 'styled-components'
import Button from 'react-bootstrap/esm/Button'
const Review = () => {
  const navigate = useNavigate();
    const navigateToMyPage = () => {
    return (
      navigate("/MyPage")
    )
  }
  
  

  const [reviewContent, setReviewContent] = useState({
    title: '',
    context: '',
    rate: '',
    img: ''
  })

  const [viewContent, setViewContent] = useState([]);

  const [clicked, setClicked] = useState([false,false,false,false,false]);
  
  const starArray = [0, 1, 2, 3, 4]
  // 클릭한 별 el값을 이 함수로 보내서 클릭된 별만큼 true로 바뀌도록
  // for문이 el만큼 돌면서 false -> true 변경
  const handleStarClick = index => {
    let clickStates = [...clicked];
    for (let i = 0; i<5 ; i++) {
      clickStates[i] = i <= index ? true : false;
    }
     setClicked(clickStates);
  }
  // filter로 true값만 뽑아서 length를 이용해 개수 확인 후 별점 값 내보냄
  const sendReview = () => {
    let score = clicked.filter(Boolean).length;
    console.log(score);
  }

  const getValue = e => {
    const { name, value } = e.target;
    setReviewContent({
      ...reviewContent,
      [name]: value
    })
    console.log(reviewContent);
  }

  const submitHandle = () => {
    setViewContent(viewContent.concat({...reviewContent}))
  }


  useEffect(()=> {
    sendReview();
  }, [clicked]);

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
                  <input 
                    type="text"
                    name="title"
                    onChange={getValue}
                    ></input>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.textArea} colSpan="2">
                  <textarea
                    name="context"
                    onChange={getValue}
                   ></textarea>
                </td>
              </tr>
              <tr>
                <th>별점</th>
                <td>
                <Stars>
                {starArray.map((el, idx) => {
                  return(
                  <GiRoundStar
                    key={idx}
                    onClick={() => handleStarClick(el)}
                    className={clicked[el] && 'yellowStar'}
                    size="35"
                  />
                  )
                })}
                </Stars>
                </td>
              </tr>
              <tr>
                <th>사진첨부</th>
                <td>
                  <input 
                    type="file" 
                    multiple={true} 
                    id="fileUpload" 
                    accept='image/*'
                  />
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
              <button 
                className={styles.createBtn}
                onClick={submitHandle}
                
                >등록</button>
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

const Stars = styled.div`
  margin: 0 auto;

  & svg {
    color: #C4C4C4;
    cursor: pointer;
  }
  :hover svg {
    color: black;
  }
  & svg:hover ~ svg {
    color: #C4C4C4;
  }
  .black {
    color: black;
  }
`
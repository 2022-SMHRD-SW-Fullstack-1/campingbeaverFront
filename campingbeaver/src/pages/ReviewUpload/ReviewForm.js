import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import Header from '../../components/Layout/Header'
import styles from './ReviewForm.module.scss'
import { GiRoundStar }  from 'react-icons/gi'
import styled from 'styled-components'
import axios from 'axios'


const ReviewForm = () => {
  const params = useParams();
   
  const [numParams, setNumParams] = useState(params.resnum.replace(":",""));
  const [searchParams, setSearchParams] = useSearchParams();
  const pkgSeq = searchParams.get('pkg_seq')

  const [id, setId] = useState(localStorage.userId);

  const navigate = useNavigate();
    const navigateToMyPage = () => {
    return (
      navigate("/MyPage")
    )
  }

  
  // useEffect(() =>{
  //   console.log(pkgSeq)
  // },[])

  const [reviewContent, setReviewContent] = useState({
    // user_id: id,
    user_id: 'admin',
    reserv_num: numParams,
    pkg_seq: parseInt(pkgSeq),
    rv_content: '',
    rv_rating: '',
    rv_photo: '',
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
    setReviewContent({
      ...reviewContent,
      rv_rating: score,
    })
    console.log(score);
    
  }

  const getValue = e => {
    const { name, value } = e.target;
    setReviewContent({
      ...reviewContent,
      [name]: value
    })
    //console.log(reviewContent);
  }

  const submitHandle = (e) => {
    e.preventDefault()
    setViewContent(viewContent.concat({...reviewContent}))
    
    axios.post(`/beaver/write/${numParams}`, reviewContent)
    .then((res)=>{
      console.log(reviewContent)
      
      navigateToMyPage();
    }).catch((error)=>console.log('Network Error: ', error))


  }

  const [fileImage, setFileImage] = useState('');

  const saveFileImage = (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]))
    setReviewContent({
      ...reviewContent,
      rv_photo: fileImage
    })
    console.log(reviewContent)
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
                <th>예약번호</th>
                <td>
                  {numParams}
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.textArea} colSpan="2">
                  <textarea
                    name="rv_content"
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
                    onClick={() => handleStarClick(el) && getValue}
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
                <div>
                {fileImage && (
                  <img
                    alt="sample"
                    src={fileImage}
                    style={{ margin: "auto" }}
                  />  
                )}
                <div
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >

                  <input 
                    type="file"
                    accept="image/jpg, image/jpeg, image/png"
                    onChange={saveFileImage}
                    id="fileUpload"
                  />
                    </div>
                </div>
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
            >등록
            </button>
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

export default ReviewForm

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
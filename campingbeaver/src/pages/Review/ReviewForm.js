import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import styles from "./ReviewForm.module.scss";
import { GiRoundStar } from "react-icons/gi";
import styled from "styled-components";
import axios from "axios";

const ReviewForm = () => {
  const params = useParams();

  const [numParams, setNumParams] = useState(params.resnum.replace(":", ""));
  const [searchParams, setSearchParams] = useSearchParams();
  const pkgSeq = searchParams.get("pkg_seq");

  const [id, setId] = useState(localStorage.userId);

  const navigate = useNavigate();
  const navigateToMyPage = () => {
    return navigate("/Mypage/0");
  };

  const [reviewContent, setReviewContent] = useState({
    user_id: id,
    reserv_num: numParams,
    pkg_seq: parseInt(pkgSeq),
    rv_content: "",
    rv_rating: "",
    rv_photo: "",
  });

  const [viewContent, setViewContent] = useState([]);

  const [clicked, setClicked] = useState([false, false, false, false, false]);

  const starArray = [0, 1, 2, 3, 4];
  const handleStarClick = (index) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };

  const sendReview = () => {
    let score = clicked.filter(Boolean).length;
    setReviewContent({
      ...reviewContent,
      rv_rating: score,
    });
  };

  const getValue = (e) => {
    const { name, value } = e.target;
    setReviewContent({
      ...reviewContent,
      [name]: value,
    });
  };

  const submitHandle = (e) => {
    e.preventDefault();
    setViewContent(viewContent.concat({ ...reviewContent }));

    axios
      .post(`/beaver/rvwrite/${numParams}`, reviewContent)
      .then((res) => {
        navigateToMyPage();
      })
      .catch((error) => console.log("Network Error: ", error, reviewContent));
  };

  const [fileImage, setFileImage] = useState("");

  const saveFileImage = (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
    setReviewContent({
      ...reviewContent,
      rv_photo: e.target.value,
    });
  };

  useEffect(() => {
    sendReview();
  }, [clicked]);

  return (
    <div className={styles.postForm}>
      <div className={styles.title}>
        <h1>Review</h1>
        <p>리뷰 작성</p>
      </div>
      <form className={styles.reviewFormContainer} method="POST">
        <table>
          <thead>
            <tr>
              <th>예약번호</th>
              <td>{numParams}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.textArea} colSpan="2">
                <textarea name="rv_content" onChange={getValue}></textarea>
              </td>
            </tr>
            <tr>
              <th>별점</th>
              <td>
                <Stars>
                  {starArray.map((el, idx) => {
                    return (
                      <GiRoundStar
                        key={idx}
                        onClick={() => handleStarClick(el) && getValue}
                        className={clicked[el] && "star"}
                        size="35"
                      />
                    );
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
          </tbody>
        </table>
        <section className={styles.btns}>
          <div>
            <button className={styles.listBtn}>목록</button>
          </div>
          <div>
            <button className={styles.createBtn} onClick={submitHandle}>
              등록
            </button>
          </div>
          <div>
            <button className={styles.cancelBtn} onClick={navigateToMyPage}>
              취소
            </button>
          </div>
        </section>
      </form>
    </div>
  );
};

export default ReviewForm;

const Stars = styled.div`
  margin: 0 auto;

  & svg {
    color: #c4c4c4;
    cursor: pointer;
  }
  :hover svg {
    color: black;
  }
  & svg:hover ~ svg {
    color: #c4c4c4;
  }
  .star {
    color: black;
  }
`;

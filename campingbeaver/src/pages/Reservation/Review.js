import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import image1 from "../../components/img/image1.jpg";
import image2 from "../../components/img/image2.png";
import "./Review.scss";
const Review = () => {
  const params = useParams();

  const [pkg_seq, setPkg_seq] = useState(params.pkg_seq);
  const [reviewList, setReviewList] = useState([]);

  const getReviewList = () => {
    axios
      .get(`/beaver/storedetail/review/${pkg_seq}`)
      .then((res) => {
        //   console.log("가져오는 데이터 : ", res.data);
        console.log(res.data);
        setReviewList((reviewList) => {
          return res.data;
        });
      })
      .catch((err) => {
        console.log("err : ", err);
      });
  };

  const getRatingAvg = () => {};

  useEffect(() => {
    getReviewList();
    // console.log(reviewList);
  }, []);

  return (
    <div className="reviewContainer">
      <div className="titleContainer">
        <h2>Review</h2>
      </div>
      {reviewList &&
        reviewList.map(({ rv_seq, rv_photo, rv_rating, rv_content }) => {
          return (
            <ReviewBox
              key={rv_seq}
              rv_photo={rv_photo}
              rv_rating={rv_rating}
              rv_content={rv_content}
            />
          );
        })}
    </div>
  );
};

const ReviewBox = ({ rv_photo, rv_rating, rv_content }) => {
  return (
    <div className="contentContainer">
      <img src={rv_photo} className="reviewImg"></img>
      <div>
        <span>★{rv_rating}.0 / 5.0</span>
        <br />
        <span>{rv_content}</span>
      </div>
    </div>
  );
};
export default Review;

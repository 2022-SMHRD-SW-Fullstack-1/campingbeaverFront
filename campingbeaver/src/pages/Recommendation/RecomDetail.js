import React, { useEffect, useState } from "react";
import Map from "./Map";
import Axios from "axios";
import stylesheet from "./RecomDetail.css";
import { Carousel } from "react-bootstrap";
import sitelist from "../../data/sitelist.json";
import { useParams } from "react-router-dom";
import WeatherView from "./WeatherView";
import Footer from "../../components/Layout/Footer";

const RecomDetail = () => {
  let now = new Date();
  let todayMonth = now.getMonth() + 1;
  let todayDate = now.getDate();
  const [weatherAddr, setWeatherAddr] = useState([]);
  const [recommendation, setRecommendation] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [siteName, setSiteName] = useState("");
  let { site_seq } = useParams();

  console.log("useparams : ", site_seq);
  const imgSeq = site_seq - 2;
  console.log(imgSeq);
  useEffect(() => {
    Axios.get("/beaver/recomdetail", {
      params: {
        site_seq: site_seq,
      },
    }).then((response) => {
      setRecommendation(response.data);
      setWeatherAddr(recommendation.site_addr.split(" "));

      if (response.data) {
        // setRecommendation(response.data);
        // console.log(recommendation);
      } else {
        alert("failed");
      }
    });
  }, [recommendation.site_addr]);
  console.log(recommendation);
  console.log(weatherAddr);
  useEffect(() => {
    setLatitude(recommendation.site_lat);
    setLongitude(recommendation.site_lng);
    setSiteName(recommendation.site_name);
  });

  const decimalProps = {
    latitude,
    longitude,
    siteName,
  };

  const seq = site_seq;
  const siteList = sitelist.campsite.filter((word) => word.site_seq == seq);
  // console.log(siteList[site_seq].imgsrcfirst)

  useEffect(() => {
    // 카카오톡 sdk 추가
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, [seq]);

  const shareToKatalk = () => {
    // kakao sdk script 부른 후 window.Kakao로 접근
    if (window.Kakao) {
      const kakao = window.Kakao;

      // 중복 initialization 방지
      // 카카오에서 제공하는 javascript key를 이용하여 initialize
      if (!kakao.isInitialized()) {
        kakao.init("fc4721f013e6b878b7b516e4e662b043");
      }

      kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: "Camping Beaver",
          description: "캠핑 비버가 추천하는 캠핑장을 만나보세요",
          imageUrl:
            "https://www.snowpeak.co.kr/upload_files/main_brand/220225_Brand_main.jpg",
          link: {
            mobileWebUrl: `https://localhost:3000/recommendation${site_seq}`,
            webUrl: `https://localhost:3000/recommendation${site_seq}`,
          },
        },
      });
    }
  };

  return (
    <div>
      <div class="con list-1">
        <div class="title">
          <div class="main-title">{recommendation.site_name}</div>
          <div class="sub-title">{recommendation.site_addr}</div>
          <div class="read-more" onClick={shareToKatalk}>
            카카오톡으로 공유하기!
          </div>
        </div>
        <Carousel slide interval="3000">
          <Carousel.Item>
            <img
              style={{ height: "700px" }}
              className="d-block w-100"
              src={siteList[0].imgsrcfirst}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "700px" }}
              className="d-block w-100"
              src={siteList[0].imgsrcsecond}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "700px" }}
              className="d-block w-100"
              src={siteList[0].imgsrcthird}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <div class="row">
          <div class="cell">
            <div class="img-box">
              <div class="date">
                HOT<span> NEW</span>
              </div>
              {/* <img src={siteList[0].imgsrcfirst}/> */}
            </div>
            <div class="txt-box">
              <div class="txt1">
                <div class="head">
                  {/* <h1 class="name">Information</h1> */}
                  <div class="sub-name">입실</div>
                  <div class="location">
                    {sitelist.campsite[site_seq].intime}
                  </div>
                  <div class="sub-name">퇴실</div>
                  <div class="location">
                    {sitelist.campsite[site_seq].outtime}
                  </div>
                  <div class="sub-name">매너타임</div>
                  <div class="location">
                    {sitelist.campsite[site_seq].mannertime}
                  </div>
                </div>

                <div class="body">
                  <div class="des_title">{recommendation.site_addr}</div>
                  <Map {...decimalProps} />
                  <div class="des">
                    {weatherAddr[0]} {weatherAddr[1]}의 {todayMonth}월{" "}
                    {todayDate}
                    일부터 5일간의 날씨를 알려드립니다!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WeatherView {...decimalProps} />
      <Footer />
    </div>
  );
};

export default RecomDetail;

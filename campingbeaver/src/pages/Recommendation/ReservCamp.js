import React from "react";
import CampCard from "./CampCard";
import style from "./Reservation.module.scss";
import "./RecomDetail.css";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import sitelist from "../../data/sitelist.json";
import Button from "react-bootstrap/Button";
import Footer from "../../components/Layout/Footer";
import hashtag from "./iconimg/hashtag.png";

const Reservcamp = ({ tagHandler, setTagHandler, ...props }) => {
  const [recomList, setRecomList] = useState([]);
  const [finalResult, setFinalResult] = useState([]);
  const [searchCheck, setSearchCheck] = useState(true);
  useEffect(() => {
    Axios.get("/beaver/hash").then((response) => {
      setRecomList(response.data);
      if (response.data) {
      } else {
        alert("failed");
      }
    });
  }, []);
  let recomViewList = [];
  for (let i = 0; i < recomList.length; i++) {
    recomViewList.push(
      <div class="cell" key={recomList[i].site_seq}>
        <div class="img-box">
          <img src={sitelist.campsite[i].imgsrcfirst} height="220px" alt="" />
          <Link to={`/recommendation${recomList[i].site_seq}`}>
            <div class="view">
              <i class="fa fa-search" aria-hidden="true"></i>
              <span>view</span>
            </div>
          </Link>
        </div>
        <div class="txt-box">
          <div class="txt1">
            <div class="head">
              <h1 class="name">{recomList[i].site_name}</h1>
              <div class="sub-name"></div>
              <div class="sub-name2">{recomList[i].site_addr}</div>
            </div>

            <div class="body">
              <div class="first-line">
                <i class="fab fa-houzz" aria-hidden="true"></i>
                <div class="hashContainer">
                  <img src={hashtag} height="50px" />
                  <p>{recomList[i].site_hash}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  let hashList = [];
  for (let i = 0; i < recomList.length; i++) {
    hashList.push(recomList[i].site_hash);
  }

  let checkfilter = false;
  const arr = new Map();
  let finalArr = [];
  let reArr = [];

  const seq = recomList.site_seq;
  const siteList = sitelist.campsite.filter((word) => word.site_seq == seq);

  const arrBtn = () => {
    setSearchCheck(false);
    for (let i = 0; i < hashList.length; i++) {
      for (let j = 0; j < Object.keys(props).length; j++) {
        checkfilter = hashList[i].includes(props[j]);
        if (checkfilter) {
          arr.set(i * 7 + j * 17 - j - i + j * i + j * i - j + i * i, i); //site_seq와 일치시킴
          setTagHandler(tagHandler);
        } else {
        }
      }
    }
    let resultArr = Array.from(arr.values());
    const result = {};
    resultArr.forEach((x) => {
      result[x] = (result[x] || 0) + 1;
    });
    for (let k = 0; k < resultArr.length; k++) {
      if (result[k] == Object.keys(props).length) {
        finalArr.push(k);
      }
    }

    for (let m = 0; m < finalArr.length; m++) {
      reArr.push(recomList[finalArr[m]].site_name);
    }
    setFinalResult((finalResult) => [...finalArr]);
  };
  const readMorePick = () => {
    window.location.replace("/recommendation");
  };

  const pickCheck = () => {
    return searchCheck ? style.pick : style.searchpick;
  };

  return (
    <div className={style.reserv}>
      <Button variant="outline-success" onClick={arrBtn} type="button">
        검색하기
      </Button>{" "}
      <div className={pickCheck()}>
        <div className={style.reservtitle}>
          <div className="pickCon">
            <div>
              <div class="con list-2">
                <div class="title">
                  <div class="main-title">PICK</div>
                  <div class="sub-title">
                    캠핑 비버가 추천하는 캠핑장 리스트
                  </div>
                  <div class="read-more" onClick={readMorePick}>
                    read more pick
                  </div>
                </div>
                <div class="row" className={style.searchRecom}>
                  {finalResult.map((value) => (
                    <CampCard value={value} />
                  ))}
                </div>
                <div class="row">{searchCheck && recomViewList}</div>
              </div>

              <div class="con">
                <div class="footer">
                  <div class="footer-box">
                    <div class="footer-txt">
                      <h1>
                        편안한 머무름과 좋은 추억을 만들어 준 캠핑장이 있다면
                        캠핑 비버에 소개해주세요.
                      </h1>
                      <span>
                        알려주신 캠핑장에 대해 캠핑비버에서는 4가지 관점을 통해
                        장소의 가치를 탐구하여 소개해드리고자 합니다.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Reservcamp;

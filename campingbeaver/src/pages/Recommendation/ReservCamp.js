import React from 'react'
import CampCard from './CampCard'
import style from './Reservation.module.scss'
import surveyimg from './campimg/surveyimg.jpg'
import stylesheet from './RecomDetail.css'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import sitelist from '../../data/sitelist.json'
import Button from 'react-bootstrap/Button';
import Footer from '../../components/Layout/Footer'

const Reservcamp = ({tagHandler, setTagHandler, ...props}) => {

  let photo = [{
    name: '블라블라 캠핑장',
    url: 'https://campingagains3.s3.ap-northeast-2.amazonaws.com/medium_2021_10_17_11_38_57_fad16366d0.png'
  }, {
    name: '어쩌구저쩌구 캠핑장',
    url: 'https://campingagains3.s3.ap-northeast-2.amazonaws.com/medium_2021_12_26_12_15_24_34875d31d7.png'
  }, {
    name: '캠핑탈트 붕괴왔음',
    url: 'http://cdnimage.ebn.co.kr/news/202006/news_1592895124_1439525_m_1.jpeg'
  }]

  const [recomList, setRecomList] = useState([])
  const [finalResult, setFinalResult] = useState([])
  const [searchCheck, setSearchCheck] = useState(true)
  useEffect(() => {
    Axios.get("/beaver/hash").then((response) => {

      setRecomList(response.data);
      // console.log(recomList[0].site_seq)
      // console.log(recomList);
      if (response.data) {
        // setRecommendation(response.data);
        // console.log(recommendation);

      } else {
        alert("failed");
      }
    })
  }, [])

  // console.log(params)
  let recomViewList = [];
  for (let i = 0; i < recomList.length; i++) {
   
    // console.log(recomList[i].site_seq)
    recomViewList.push(
      <div class="cell" key={recomList[i].site_seq}>
        <div class="img-box">
          <img src={sitelist.campsite[i].imgsrcfirst} height='220px' alt="" />
          <Link to={`/recommendation${recomList[i].site_seq}`}><div class="view">
            <i class="fa fa-search" aria-hidden="true"></i>
            <span>view</span>
          </div></Link>
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
                <div><span>태그</span></div>

              </div>
              <p>{recomList[i].site_hash}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  let hashList = [];
  for (let i = 0; i < recomList.length; i++) {
    hashList.push(recomList[i].site_hash)
  }
  console.log("hashList:", hashList)

  let checkfilter = false;
  console.log("props:", props)
  const arr = new Map();
  let finalArr = [];
  let reArr = [];

  // for문이 실행되는데 랜더링 될 때 실행됨.
  // 처음에 값이 아무것도 없으니까 안나옴.
  // 버튼 선택할 시점에는 이미 실행되었으니까 실행 안 됨
  // 함수에 담아서 onClick이벤트나 useEffect에서 값이 바뀔때마다 실행되도록 하면 됨

  const seq = recomList.site_seq
  const siteList = sitelist.campsite.filter(word => (
	word.site_seq == seq
	
	))

  const arrBtn = () => {
    setSearchCheck(false)
    for(let i=0;i<hashList.length;i++){
      for(let j=0;j<Object.keys(props).length;j++){
        checkfilter=hashList[i].includes(props[j])
        // console.log("useeffect 안")
        if(checkfilter){
          console.log("true")        
          arr.set(i*7+j*17-j-i+j*i+j*i-j+i*i,i) //site_seq와 일치시킴
          setTagHandler(tagHandler)
        }else{
          console.log("false")
        }
      }
    }
    console.log(arr)
    let resultArr = Array.from(arr.values());
    console.log(resultArr)
    const result = {};
    resultArr.forEach((x) => { 
    result[x] = (result[x] || 0)+1; 
    });
    // console.log(result)
    // console.log(resultArr.length)
    
    // console.log(result[1])
    // console.log(Object.keys(props).length)
    for(let k=0;k<resultArr.length;k++){
      if(result[k]==Object.keys(props).length){
        finalArr.push(k)
      }
    }
    console.log('finalArr:',finalArr)
     
      for(let m=0;m<finalArr.length;m++){
        // console.log(recomList[finalArr[m]].site_name)
        reArr.push(recomList[finalArr[m]].site_name)
      
      }
     console.log('reArr:',reArr)
     setFinalResult(finalResult=>[...finalArr])
      console.log('final',finalResult)
      
  }
  const readMorePick = () => {
    window.location.replace("/recommendation")
  }

  return (

    <div className={style.reserv}>
      {/* <button onClick={arrBtn} className={style.clickbutton}>배열찾기</button> */}
      <Button variant="outline-success" onClick={arrBtn} type="button">검색하기</Button>{' '}
     {/* <CampCard {...finalArr}></CampCard> */}
      
      <div className={style.pick}>
      <div className={style.reservtitle}>
      <div>
      <div>
        <div class="con list-2">
          <div class="title">
            <div class="main-title">PICK</div>
            <div class="sub-title">캠핑 비버가 추천하는 캠핑장 리스트</div>
            <div class="read-more" onClick={readMorePick}>read more pick</div>
          </div>
          <div class="row">
          {finalResult.map(
        value => (<CampCard value={value}/>)
      )}
            {searchCheck&&recomViewList}
          </div>
        </div>

        
        <div class="con">
          <div class="footer">
            <div class="footer-box">
              <div class="footer-txt">
                <h1>편안한 머무름과 좋은 추억을 만들어 준 캠핑장이 있다면
                  캠핑 비버에 소개해주세요.</h1>
                <span>알려주신 캠핑장에 대해 캠핑비버에서는 4가지 관점을 통해 장소의 가치를 탐구하여 소개해드리고자 합니다.
                </span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <Footer/>
      </div>



    </div>
    </div>
  )
}

export default Reservcamp
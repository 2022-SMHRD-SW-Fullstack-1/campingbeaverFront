import React, { useEffect, useState } from 'react'
import Map from './Map'
import Axios from 'axios'
import Slider from "react-slick";
import stylesheet from './RecomDetail.css'
import surveyimg from './campimg/surveyimg.jpg'
import { Carousel } from "react-bootstrap";
import sitelist from '../../data/sitelist.json'
import { useParams } from 'react-router-dom';

const RecomDetail = () => {

  const [recommendation, setRecommendation] = useState("")
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [siteName, setSiteName] = useState("");
  let { site_seq } = useParams();
  console.log("useparams : ",site_seq)
  const imgSeq = site_seq-2
  console.log(imgSeq)
  useEffect(()=>{
    Axios.get("/beaver/recomdetail", {
      params :{
        site_seq : site_seq
      }
    }).then((response)=>{

      setRecommendation(response.data);
      
      
      if(response.data){
        // setRecommendation(response.data);
        // console.log(recommendation);
        
      }else{
        alert("failed");
      }
    })
},[])
console.log(recommendation);
  useEffect(()=>{
    setLatitude(recommendation.site_lat);
    setLongitude(recommendation.site_lng);
    setSiteName(recommendation.site_name);
  })
    
  // console.log(latitude);
  // console.log(longitude);

  const decimalProps ={
    latitude,
    longitude,
    siteName,
  }

  const seq = site_seq
  const siteList = sitelist.campsite.filter(word => (
	word.site_seq == seq
	
	))
	// console.log(siteList[site_seq].imgsrcfirst)
  
  
  return (
    <div>
             

    
              
<div class="con list-1">
	<div class="title">
		<div class="main-title">{recommendation.site_name}</div>
		<div class="sub-title">{recommendation.site_addr}</div>
		<div class="read-more">패키지 추천 바로가기!</div>
	</div>
	<Carousel fade>
    <Carousel.Item>
      <img
        style={{height:'700px'}}
        className="d-block w-100"
        src={siteList[0].imgsrcfirst}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        style={{height:'700px'}}
        className="d-block w-100"
        src={siteList[0].imgsrcsecond}
        alt="Second slide"
      />
    </Carousel.Item>
	<Carousel.Item>
      <img
        style={{height:'700px'}}
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
                        <h1 class="name">낙원장</h1>
                        <div class="sub-name">부티끄호텔</div>
                        <div class="location">서울/종로</div>
                    </div>
                    
                    <div class="body">
                        <div class="des_title">
                            전통에 품격을 더한 고택의 재해석
                        </div>
	
                        <div class="des">
                            안동 구름에 리조트는 전통 고택 리조트라는 새로운 개념의 스테이다. 고택과 리조트라는 상반된 단어는 전통과 현대를 적절하게 공존시키고자 하는 안동 구름에 리조트의 목표를 잘 보여주고 있다. ‘한국 정신문화의 수도’로 칭해지는 안동에서 고택의 가치와 장점은 지키고 불편함은 보완하며 안동 구름에 리조트는 그들만의 중심을 지키며 조용하게 안동에서 자리를 잡으며 운영되고 있다.
                        </div>
                    </div>
                </div>
			</div>
		</div>
	</div>

</div>
<Map {...decimalProps}/>
</div>

    
  )
}

export default RecomDetail
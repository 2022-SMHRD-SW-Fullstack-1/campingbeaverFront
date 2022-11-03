import React from 'react'
import CampCard from './CampCard'
import style from './Reservation.module.scss'
import surveyimg from './campimg/surveyimg.jpg'
import stylesheet from './RecomDetail.css'

const Reservcamp = (props) => {

    let photo = [{
        name : '블라블라 캠핑장',
        url : 'https://campingagains3.s3.ap-northeast-2.amazonaws.com/medium_2021_10_17_11_38_57_fad16366d0.png'
    },{
        name : '어쩌구저쩌구 캠핑장',
        url : 'https://campingagains3.s3.ap-northeast-2.amazonaws.com/medium_2021_12_26_12_15_24_34875d31d7.png'
    }, {
        name : '캠핑탈트 붕괴왔음',
        url : 'http://cdnimage.ebn.co.kr/news/202006/news_1592895124_1439525_m_1.jpeg'
    }]

const site_hash = ['값을받아오자','내일','스프링'];
const checkfilter = true;
var arr = new Set();
  for(const i=0;i<site_hash.length;i++){
    for(const j=0;j<props.length;j++){
    checkfilter=site_hash[i].includes(props[j])
      if(!checkfilter){
          arr.add(i+2) //site_seq와 일치시킴
      }
  }
}

  return (
  <div className={style.reserv}>
    {/* {photo.map(item => (<CampCard key={item.name} item={item}></CampCard>))} */}
    <div>
        <div class="con list-2">
		<div class="title"> 
		<div class="main-title">PICK</div>
		<div class="sub-title">캠핑 비버가 추천하는 캠핑장 리스트</div>
			{/* <div class="read-more">read more pick</div> */}
			</div>
		<div class="row">
			<div class="cell">
			<div class="img-box">
				<img src={surveyimg} alt=""/>
				<div class="view">
					<i class="fa fa-search" aria-hidden="true"></i>
					<span>view</span>
				</div>
			</div>
			<div class="txt-box">
				<div class="txt1">
                    <div class="head">
                        <h1 class="name">신두57 캠핑장</h1>
                        <div class="sub-name">owall hotel</div>
                        <div class="sub-name2">좋은 계절, 오월의 공간</div>
                    </div>
                    
                    <div class="body">
						<div class="first-line">
							<div class="location">
								<i class="fas fa-map-marker-alt" aria-hidden="true"></i>
								<span>서울/강남구</span>
							</div>
							<div class="kind-of">
								<i class="fab fa-houzz" aria-hidden="true"></i>
								<span>부티끄호텔</span>
							</div>
						</div>
						<div class="second-line">
							<div class="price">
								<i class="fas fa-coins" aria-hidden="true"></i>
								<span>250,000~350,000</span>
							</div>
							<div class="keyword">
								<i class="fas fa-star" aria-hidden="true"></i>
								<span>URBAN STAY, 도심여행</span>
							</div>
						</div>
					</div>
                </div>
			</div>
		</div>
		<div class="cell">
			<div class="img-box">
				<img src={surveyimg} alt=""/>
				<div class="view">
					<i class="fa fa-search" aria-hidden="true"></i>
					<span>view</span>
				</div>
			</div>
			<div class="txt-box">
				<div class="txt1">
                    <div class="head">
                        <h1 class="name">캠프더포레</h1>
                        <div class="sub-name">VILLA GREYS</div>
                        <div class="sub-name2">목가적 삶을 지향하는 건축가의 집</div>
                    </div>
                    
                    <div class="body">
						<div class="first-line">
							<div class="location">
								<i class="fas fa-map-marker-alt" aria-hidden="true"></i>
								<span>경상북도/경주시</span>
							</div>
							<div class="kind-of">
								<i class="fab fa-houzz" aria-hidden="true"></i>
								<span>디자인펜션</span>
							</div>
						</div>
						<div class="second-line">
							<div class="price">
								<i class="fas fa-coins" aria-hidden="true"></i>
								<span>180,000~320,000</span>
							</div>
							<div class="keyword">
								<i class="fas fa-star" aria-hidden="true"></i>
								<span>가족여행, 경주여행</span>
							</div>
						</div>
					</div>
                </div>
			</div>
		</div>
		<div class="cell">
			<div class="img-box">
				<img src={surveyimg} alt=""/>
				<div class="view">
					<i class="fa fa-search" aria-hidden="true"></i>
					<span>view</span>
				</div>
			</div>
			<div class="txt-box">
				<div class="txt1">
                    <div class="head">
                        <h1 class="name">캠프627</h1>
                        <div class="sub-name">HOSTEL HARU</div>
                        <div class="sub-name2">하루를 쉬는 곳</div>
                    </div>
                    
                    <div class="body">
						<div class="first-line">
							<div class="location">
								<i class="fas fa-map-marker-alt" aria-hidden="true"></i>
								<span>서울/종로</span>
							</div>
							<div class="kind-of">
								<i class="fab fa-houzz" aria-hidden="true"></i>
								<span>디자인호스텔</span>
							</div>
						</div>
						<div class="second-line">
							<div class="price">
								<i class="fas fa-coins" aria-hidden="true"></i>
								<span>35,000~220,000</span>
							</div>
							<div class="keyword">
								<i class="fas fa-star" aria-hidden="true"></i>
								<span>문화, 예술, 서울여행</span>
							</div>
						</div>
					</div>
                </div>
			</div>
		</div>
		<div class="cell">
			<div class="img-box">
      <img src={surveyimg} alt=""/>
				<div class="view">
					<i class="fa fa-search" aria-hidden="true"></i>
					<span>view</span>
				</div>
			</div>
			<div class="txt-box">
				<div class="txt1">
                    <div class="head">
                        <h1 class="name">연곡해변 솔향기캠핑장</h1>
                        <div class="sub-name">Nature trail</div>
                        <div class="sub-name2">싱그러운 자연 속 제주의 낮과 밤</div>
                    </div>
                    
                    <div class="body">
						<div class="first-line">
							<div class="location">
								<i class="fas fa-map-marker-alt" aria-hidden="true"></i>
								<span>제주/제주시</span>
							</div>
							<div class="kind-of">
								<i class="fab fa-houzz" aria-hidden="true"></i>
								<span>디자인펜션</span>
							</div>
						</div>
						<div class="second-line">
							<div class="price">
								<i class="fas fa-coins" aria-hidden="true"></i>
								<span>110,000~150,000</span>
							</div>
							<div class="keyword">
								<i class="fas fa-star" aria-hidden="true"></i>
								<span>태교여행, 힐링, 휴식</span>
							</div>
						</div>
					</div>
                </div>
			</div>
		</div>
		<div class="cell">
			<div class="img-box">
      <img src={surveyimg} alt=""/>
				<div class="view">
					<i class="fa fa-search" aria-hidden="true"></i>
					<span>view</span>
				</div>
			</div>
			<div class="txt-box">
				<div class="txt1">
                    <div class="head">
                        <h1 class="name">나로힐링캠핑장</h1>
                        <div class="sub-name">STAY LENTO</div>
                        <div class="sub-name2">포구 옆 시골마을의 작은 집</div>
                    </div>
                    
                    <div class="body">
						<div class="first-line">
							<div class="location">
								<i class="fas fa-map-marker-alt" aria-hidden="true"></i>
								<span>제주/제주시</span>
							</div>
							<div class="kind-of">
								<i class="fab fa-houzz" aria-hidden="true"></i>
								<span>렌탈하우스</span>
							</div>
						</div>
						<div class="second-line">
							<div class="price">
								<i class="fas fa-coins" aria-hidden="true"></i>
								<span>200,000~350,000</span>
							</div>
							<div class="keyword">
								<i class="fas fa-star" aria-hidden="true"></i>
								<span>사색, 힐링, 휴식</span>
							</div>
						</div>
					</div>
                </div>
			</div>
		</div>

		
		<div class="cell">
			<div class="img-box">
      <img src={surveyimg} alt=""/>
				<div class="view">
					<i class="fa fa-search" aria-hidden="true"></i>
					<span>view</span>
				</div>
			</div>
			<div class="txt-box">
				<div class="txt1">
                    <div class="head">
                        <h1 class="name">석양마을 주포캠핑장</h1>
                        <div class="sub-name">지금</div>
                        <div class="sub-name2">서울성곽길 아래 모던한옥</div>
                    </div>
                    
                    <div class="body">
						<div class="first-line">
							<div class="location">
								<i class="fas fa-map-marker-alt" aria-hidden="true"></i>
								<span>서울/종로</span>
							</div>
							<div class="kind-of">
								<i class="fab fa-houzz" aria-hidden="true"></i>
								<span>한옥스테이</span>
							</div>
						</div>
						<div class="second-line">
							<div class="price">
								<i class="fas fa-coins" aria-hidden="true"></i>
								<span>250,000~350,000</span>
							</div>
							<div class="keyword">
								<i class="fas fa-star" aria-hidden="true"></i>
								<span>휴식, 가족여행</span>
							</div>
						</div>
					</div>
                </div>
			</div>
		</div>
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
  )
}

export default Reservcamp
import React from 'react'
import CampCard from './CampCard'
import style from './Reservation.module.scss'
import surveyimg from './campimg/surveyimg.jpg'
import stylesheet from './RecomDetail.css'
import Pick from './Pick'

const Reservcamp = () => {

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



  return (
  <div className={style.reserv}>
    {/* {photo.map(item => (<CampCard key={item.name} item={item}></CampCard>))} */}
    <Pick/>

  
  </div>
  )
}

export default Reservcamp
import axios from 'axios'
import React, { useEffect } from 'react'
import image1 from '../../components/img/image1.jpg'
import image2 from '../../components/img/image2.png'
import './Review.scss'
const Review = () => {

    useEffect(()=>{
        axios.get()
    },[])

    return (     
        <div className='reviewContainer'>
            <div className='titleContainer'>
            <h2>Review</h2>
            </div>
            <img src={image1} className='reviewImg'></img>
            <div>
                <span>★4.8 / 5.0</span><br />
                <span>내는 것이 따뜻한 봄바람이다 인생에 따뜻한 봄바람을 불어 보내는 것은 청춘의 끓는 피다 청춘의 피가 뜨거운지라 인간의 동산에는 사랑의 풀이 돋고 이상의 꽃이 피고 희망의 놀이 뜨고 열락의 새가 운다사랑의 풀이 없으면</span>
            </div>
        </div>
    )
}

export default Review
{/* <div style={cont2}>
    <div>
    <img src={image2} width="300px"></img>
        <span>★5.0 / 5.0</span>
        <span>로고가 예쁘네요.</span>
    </div>
</div> */}
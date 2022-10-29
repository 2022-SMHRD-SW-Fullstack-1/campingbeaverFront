import React, {useState, useRef} from 'react'
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import bonfire from './iconimg/bonfire.png'
import court from './iconimg/court.png'
import hotwater from './iconimg/hotwater.png'
import mart from './iconimg/mart.png'
import park from './iconimg/park.png'
import pool from './iconimg/pool.png'
import storm from './iconimg/storm.png'
import wifi from './iconimg/wifi.png'
import { useAsyncValue } from 'react-router-dom';
import style from './Reservation.module.scss'

const FilterButton = () => {


  const [inputText, setInputText] = useState([]);
  let [btnActive, setBtnActive] = useState('passive');


  const clickHandle = (e) => {
 
    let overlap = true

    inputText.forEach(element =>{
      element == e.target.innerText && (overlap = false);
    })

    if(overlap){
      setInputText(inputText =>  [...inputText, e.target.innerText])
    }else{
      const without=inputText.filter((it)=> it !== e.target.innerText);
      setInputText(without)
    }
  }

  const inputTextList = inputText.map(inputText => <Button variant="outline-dark">{inputText}</Button>)


const clearBtn = (e) => {
  setInputText([]);
}
  



  return (

    <>
    <div>
    {[
      'secondary',
    ].map((variant) => (
      <Alert key={variant} variant={variant}>
        <p align='center'>원하시는 시설 상세 태그를 검색하시면 캠핑장을 추천해드립니다!</p>
        <Button variant="outline-dark" onClick={clickHandle}><p><img src={bonfire} width='50px'/></p>장작판매</Button>
        <Button variant="outline-dark" onClick={clickHandle}><p><img src={court} width='50px'/></p>운동시설</Button>
        <Button variant="outline-dark" onClick={clickHandle}><p><img src={hotwater} width='50px'/></p>온수</Button>
        <Button variant="outline-dark" onClick={clickHandle}><p><img src={mart} width='50px'/></p>마트/편의점</Button>
        <Button variant="outline-dark" onClick={clickHandle}><p><img src={park} width='50px'/></p>산책로</Button>
        <Button variant="outline-dark" onClick={clickHandle}><p><img src={pool} width='50px'/></p>물놀이장</Button>
        <Button variant="outline-dark" onClick={clickHandle}><p><img src={storm} width='50px'/></p>전기</Button>
        <Button variant="outline-dark" onClick={clickHandle}><p><img src={wifi} width='50px'/></p>와이파이</Button>
      </Alert>
    ))}
    {[
      'secondary',
    ].map((variant) => (
      <Alert key={variant} variant={variant}>
        {/* This is a {variant} check! */}
        <p align='center'>테마별 태그를 검색하시면 캠핑장을 추천해드립니다!</p>
        <Button variant="outline-dark"  onClick={clickHandle}>반려견동반</Button>
        <Button variant="outline-dark"  onClick={clickHandle}>익스트림</Button>
        <Button variant="outline-dark"  onClick={clickHandle}>커플</Button>
        <Button variant="outline-dark"  onClick={clickHandle}>아이들 놀기 좋은</Button>
        <Button variant="outline-dark"  onClick={clickHandle}>봄</Button>
        <Button variant="outline-dark" onClick={clickHandle}>여름</Button>
        <Button variant="outline-dark" onClick={clickHandle}>가을</Button>
        <Button variant="outline-dark" onClick={clickHandle}>겨울</Button>
        <Button variant="outline-dark" onClick={clickHandle}>문화유적</Button>
        <Button variant="outline-dark" onClick={clickHandle}>축제</Button>
        <Button variant="outline-dark" onClick={clickHandle}>별 보기 좋은</Button>
        <Button variant="outline-dark" onClick={clickHandle}>물놀이 하기 좋은</Button>
        <Button variant="outline-dark" onClick={clickHandle}>자전거 타기 좋은</Button>
        <Button variant="outline-dark" onClick={clickHandle}>깨끗한</Button>
        <Button variant="outline-dark" onClick={clickHandle}>바다가 보이는</Button>
        <Button variant="outline-dark" onClick={clickHandle}>차대기 편한</Button>
        <Button variant="outline-dark" onClick={clickHandle}>힐링</Button>
        <Button variant="outline-dark" onClick={clickHandle}>그늘이 많은</Button>
        <Button variant="outline-dark" onClick={clickHandle}>친절한</Button>
        <Button variant="outline-dark" onClick={clickHandle}>여유있는</Button>
        <Button variant="outline-dark" onClick={clickHandle}>계곡옆</Button>
        <Button variant="outline-dark" onClick={clickHandle}>사이트 간격이 넓은</Button>
        <Button variant="outline-dark" onClick={clickHandle}>가족</Button>
        <Button variant="outline-dark" onClick={clickHandle}>생태교육</Button>
      </Alert>
    ))}


    {[
      'secondary',
    ].map((variant) => (
      <Alert key={variant} variant={variant}>
        {/* This is a {variant} check! */}
        <p align='center'>선택한 태그</p>

       {inputTextList}
      </Alert>
      ))}

      <div align='center'>
        <Button variant="outline-danger" onClick={clearBtn}>초기화</Button>{' '}
        <Button variant="outline-success">검색하기</Button>{' '}
      </div>
    </div>
    </>
  )
}

export default FilterButton
import React from 'react'
import Product from './Product'

// 데이터가 들어있는 json 파일
import sell from '../../json/sell.json'

const Products = () => {

  const con ={
    display : 'flex',
    flexWrap : 'wrap'
  }

  let renderSellList = sell.list.map((item,idx)=>(<Product key={idx+item.title} item={item} idx={idx}></Product>))
  return (
    <>
    <div>
      <h2 align="center">패키지</h2>
      <div>
        <span>신상품순</span>
        <span>인기제품순</span>
        <span>가격낮은순</span>
        <span>가격높은순</span>
      </div>
    </div>
      <div style={con}>
        {renderSellList}
      </div>
    </>
  )
}

export default Products
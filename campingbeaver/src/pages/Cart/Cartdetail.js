import React from 'react'
import Header from '../../components/Layout/Header'
import CartListDetail from './CartListDetail'

const Cartdetail = () => {
  return (
    <div>
      <Header/>
      <h2>장바구니</h2>
      <em>1.</em>
      <span>장바구니</span>
      <em>2.</em>
      <span>주문결제</span>
      <em>3.</em>
      <span>주문완료</span>
      <CartListDetail/>
    </div>
  )
}

export default Cartdetail
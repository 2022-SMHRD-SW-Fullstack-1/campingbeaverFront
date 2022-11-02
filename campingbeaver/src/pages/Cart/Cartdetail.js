import React from 'react'
import Header from '../../components/Layout/Header'
import CartListDetail from './CartListDetail'
import styled from "styled-components";

const Cartdetail = () => {
  if (localStorage.userName == null) {
    alert("로그인 후 이용해 보세요! 🛒");
    document.location.href = "/login";
  }
  return (
    <>
      <ContentDiv>
        <CartPageHeader>
          <h2>장바구니</h2>
          <em>1.</em>
          <span>장바구니</span>
          <em>2.</em>
          <span>주문결제</span>
          <em>3.</em>
          <span>주문완료</span>
        </CartPageHeader>
      </ContentDiv>
      <CartListDetail />
    </>
  )
}

const ContentDiv = styled.div`
  padding-bottom: 64px;
  background: #fdfdfd;
`;

const CartPageHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-bottom: 4px;
  margin-bottom: 32px;
  padding-top: 40px;
  vertical-align: middle;
`;

export default Cartdetail
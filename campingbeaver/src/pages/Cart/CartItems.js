import React from 'react'
import styled, { css } from "styled-components";

const CartItems = () => {
  const cartItems = {
    boxShadow: '3px 3px 4px 0 rgb(234 234 234 / 50%)',
    background: '#ffffff',
    border: '1px solid #d9d9d9',
    marginTop: '10px'
  }
  const checkboxStyle = {
    background: 'transparent',
    display: 'inline-block',
    height: '18px',
    width: '18px',
    verticalAlign: 'middle',
    boxSizing: 'border-box',
    border: '0',
    margin: '0'
  }
  const cartItemSection = {
    display: 'flex',
    justifyContent: 'space-between',
    alingItems: 'center',
    padding: '21px 18px 21px 48px',
    borderTop: '1px solid #d9d9d9',
    marginTop: '-1px'
  }
  const cartItemLab = {
    display: 'inline-block',
    verticalAlign: 'middle',
    color: '#666666',
    fontSize: '13px'
  }
  const cartItemPrice = {
    color: '#333333',
    fontSize: '14px',
    lineHeight: '1.2',
    fontWeight: 'bold'
  }
  const cartCheckout = {
    backgroundColor: '#ffffff'
  }
  const cartCheckoutDesk = {
    display: 'flex',
    minHeight: '120px',
    paddingTop: '24px',
    borderRadius: '4px',
    border: '1px solid #333333',
    overflow: 'hidden'
  }
  const cartCheckoutDeskItem = {
    flex: '1 auto',
    textAlign: 'center'
  }
  const cartCheckoutDeskVal = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333333'
  }
  const cartCheckoutDeskValH = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#1e6e5e'
  }
  const cartCheckoutDeskFix = {
    paddingTop: '35px',
    fontSize: '24px',
    fontWeight: 'bold'
  }
  const cartBottom = {
    padding : '16px'
  }
  const cartBtn = {
    width : '100%',
    background : '#1e6e5e',
    border : '1px solid transparent',
    color : '#ffffff',
    fontSize : '16px',
    lineHeight : '46px',
    padding : '0 24px',
    display : 'inline-block',
    borderRadius : '2px',
    boxShadow : '0 1px 3px 0 rgb(220 220 220 / 30%)',
    boxSizing : 'border-box',
    cursor : 'pointer',
    fontWeight : '400',
    textAlign : 'center',
    textDecoration : 'none',
    transition : 'border-color cubic-bezier(0.075, 0.82, 0.165, 1)',
    verticalAlign : 'middle'
  }
  return (
    <>
      <div style={cartItems}>
        <div>
          <input style={checkboxStyle} type="checkbox"></input>
        </div>
        <div style={cartItemSection}>
          <div style={cartItemLab}>상품가격</div>
          <div style={cartItemPrice}>원</div>
        </div>
        <div style={cartItemSection}>
          <div style={cartItemLab}>배송비</div>
          <div style={cartItemPrice}>원</div>
        </div>
      </div>
      <div style={cartCheckout}>
        <div style={cartCheckoutDesk}>
          <div style={cartCheckoutDeskItem}>
            <div style={cartItemLab}>상품금액</div>
            <div style={cartCheckoutDeskVal}>0 원</div>
          </div>
          <div style={cartCheckoutDeskFix}>+</div>
          <div style={cartCheckoutDeskItem}>
            <div style={cartItemLab}>배송비</div>
            <div style={cartCheckoutDeskVal}>0 원</div>
          </div>
          <div style={cartCheckoutDeskFix}>=</div>
          <div style={cartCheckoutDeskItem}>
            <div style={cartItemLab}>결제 예정금액</div>
            <div style={cartCheckoutDeskValH}>0 원</div>
          </div>
        </div>
        <div style={cartBottom}>
          <button style={cartBtn}>주문하기</button>
        </div>
      </div>
    </>
  )
}

export default CartItems
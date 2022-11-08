import React,{useState, useEffect} from 'react'
import styled from "styled-components";
import CartEmpty from './CartEmpty';
import CartNotEmpty from './CartNotEmpty'
import axios from 'axios'
import styles from '../MyPage/MyPage.module.scss'

function Cart() {
  if (localStorage.userName == null) {
    alert("로그인 후 이용해 보세요! 🛒");
    document.location.href = "/login";
  }
  const [cartList, setCartList] = useState([]);
  useEffect(() => {
    axios.get("/beaver/basketlist")
    .then(response=>{
      console.log(response.data)
      
      setCartList(response.data);
    })
  }, []);
  return (
    <>
      {
        cartList.length == 0 ?
          <div>
            <CartEmpty />
          </div>
          :
          <div>

            <DimmedBackground />
            <ContentDiv>
              <CartPage>
                <CartPageHeader>
                  <PageHeaderTitle>장바구니</PageHeaderTitle>
                  <PageHeaderSteps>
                    <PageHeaderStepsLi className="active">
                      <em>1.</em>
                      <span>장바구니</span>
                      <Icon className="fas fa-chevron-right"></Icon>
                    </PageHeaderStepsLi>

                    <PageHeaderStepsLi>
                      <em>2.</em>
                      <span>주문결제</span>
                      <Icon className="fas fa-chevron-right"></Icon>
                    </PageHeaderStepsLi>

                    <PageHeaderStepsLi>
                      <em>3.</em>
                      <span>주문완료</span>
                    </PageHeaderStepsLi>
                  </PageHeaderSteps>
                </CartPageHeader>
                <div className={styles.ListContainer}>
                <CartNotEmpty cartList={cartList} />
                </div>
              </CartPage>
            </ContentDiv>
          </div>
      }
    </>
  )
}

const Icon = styled.i`
  margin: 0 8px;
  display: inline-block;
  font: normal normal normal 14px/1;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
`;

const PageHeaderStepsLi = styled.li`
  &.active {
    color: #333333;
  }
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  color: #d9d9d9;
`;

const PageHeaderSteps = styled.ol`
  flex: 1 auto;
  text-align: right;
`;

const PageHeaderTitle = styled.h2`
  flex: 1 auto;
  text-align: left;
  font-size: 24px;
  font-weight: bold;
  vertical-align: middle;
  color: #333333;
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

const CartPage = styled.div`
  width: 800px;
  margin: 0 auto;
`;

const ContentDiv = styled.div`
  margin-top: 100px;
  padding-bottom: 64px;
  background: #fdfdfd;
`;

const DimmedBackground = styled.div`
  display: none;
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: #333;
  opacity: 0.5;
  z-index: 150;
`;

export default Cart
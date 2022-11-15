import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import moment from "moment";
import "./Ordercom.css";

const Ordercom = () => {
  const [resdata, setResdata] = useState([]);

  useEffect(() => {
    axios.get("/beaver/ordercom").then((response) => {
      setResdata(response.data);
    });
  }, []);

  return (
    <>
      {resdata.length == 0 ? (
        <div></div>
      ) : (
        <div>
          <DimmedBackground />
          <ContentDiv>
            <CartPage>
              <CartPageHeader>
                <PageHeaderTitle>주문완료</PageHeaderTitle>
                <PageHeaderSteps>
                  <PageHeaderStepsLi>
                    <em>1.</em>
                    <span>장바구니</span>
                    <Icon className="fas fa-chevron-right"></Icon>
                  </PageHeaderStepsLi>

                  <PageHeaderStepsLi>
                    <em>2.</em>
                    <span>주문결제</span>
                    <Icon className="fas fa-chevron-right"></Icon>
                  </PageHeaderStepsLi>

                  <PageHeaderStepsLi className="active">
                    <em>3.</em>
                    <span>주문완료</span>
                  </PageHeaderStepsLi>
                </PageHeaderSteps>
              </CartPageHeader>
            </CartPage>
            <p align="center">주문이 완료되었습니다.</p>
            <div>
              <div className="ordercon">
                <div className="ordercon1">
                  <div>주문번호</div>
                  <div>주문일시</div>
                </div>
                <div className="ordercon2">
                  <div className="ordernum">
                    {moment(resdata[0].reserv_date)
                      .add(9, "hour")
                      .format("YYYYMMDD")}
                    {resdata[0].reserv_seq}
                  </div>
                  <div className="ordertime">
                    {moment(resdata[0].reserv_date)
                      .add(9, "hour")
                      .format("YYYY-MM-DD hh:mm:ss")}
                  </div>
                </div>
              </div>
              <div className="ordermenu" align="center">
                주문자 정보
              </div>
              <div className="ordercon">
                <div className="ordercon1">
                  <div>예약자명</div>
                  <div>휴대폰 번호</div>
                  <div>시작날짜</div>
                  <div>종료날짜</div>
                </div>
                <div className="ordercon2">
                  <div>{resdata[0].reserv_name}</div>
                  <div>{resdata[0].reserv_phone}</div>
                  <div>
                    {moment(resdata[0].reserv_s_date)
                      .add(9, "hour")
                      .format("YYYY-MM-DD (ddd)")}
                  </div>
                  <div>
                    {moment(resdata[0].reserv_e_date)
                      .add(9, "hour")
                      .format("YYYY-MM-DD (ddd)")}
                  </div>
                </div>
              </div>
              <div className="ordermenu" align="center">
                배송지 정보
              </div>
              <div className="ordercon">
                <div className="ordercon1">
                  <div>우편번호</div>
                  <div>배송지주소</div>
                </div>
                <div className="ordercon2">
                  <div>{resdata[0].reserv_post}</div>
                  <div>{resdata[0].reserv_addr}</div>
                </div>
              </div>
              <div className="ordercon">
                <div className="ordercon1">
                  <div>배송예정날짜</div>
                  <div>회수예정날짜</div>
                  <div>결제금액</div>
                </div>
                <div className="ordercon2">
                  <div>
                    {moment(resdata[0].reserv_s_date)
                      .add(-15, "hour")
                      .format("YYYY-MM-DD (ddd)")}
                  </div>
                  <div>
                    {moment(resdata[0].reserv_e_date)
                      .add(25, "hour")
                      .format("YYYY-MM-DD (ddd)")}
                  </div>
                  <div>{resdata[0].reserv_price}원</div>
                </div>
              </div>
            </div>
          </ContentDiv>
        </div>
      )}
    </>
  );
};

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

export default Ordercom;

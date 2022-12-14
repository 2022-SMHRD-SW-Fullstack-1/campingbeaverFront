import React from "react";
import styled from "styled-components";

const CartEmpty = () => {
  const CartEmpty = {
    marginTop: "150px",
  };

  return (
    <div style={CartEmpty}>
      <EmptyList>
        <EmptyListLogo>
          <LogoEmpty className="fa-solid fa-empty-set"></LogoEmpty>
          <div>
            <EmptyListText>
              장바구니가 비었습니다.
              <br />
              다양한 상품을 담아보세요.
            </EmptyListText>
          </div>
          <EmptyCartBtn
            type="button"
            onClick={() => window.location.replace("store")}
          >
            상품 구경하러 가기
          </EmptyCartBtn>
        </EmptyListLogo>
      </EmptyList>
    </div>
  );
};

const EmptyCartBtn = styled.button`
  width: 246px;
  margin-top: 36px;
  background: #1e6e5e;
  border: 1px solid transparent;
  color: #ffffff;
  font-size: 16px;
  line-height: 46px;
  padding: 0 24px;
  display: inline-block;
  border-radius: 2px;
  box-shadow: 0 1px 3px 0 rgb(220 220 220 / 30%);
  box-sizing: border-box;
  cursor: pointer;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  transition: border-color 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  vertical-align: middle;
`;
const EmptyListText = styled.p`
  text-align: center;
  font-size: 16px;
  color: #666666;
`;

const LogoEmpty = styled.i`
  vertical-align: middle;
  color: #1e6e5e;
  font-size: 120px !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  &:before {
    content: "!";
  }
`;

const EmptyListLogo = styled.div`
  margin-bottom: 40px;
`;

const EmptyList = styled.div`
  margin-top: 50px;
  margin: 0 auto;
  padding: 50px 0;
  text-align: center;
`;

export default CartEmpty;

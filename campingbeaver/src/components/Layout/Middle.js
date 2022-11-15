import React from "react";
import styled from "styled-components";
import Survey from "./Survey";

const MiddleDiv = styled.div`
  div {
    // height: 500px;
  }
`;

const Middle = () => {
  return (
    <MiddleDiv>
      <div id="2">
        <Survey />
      </div>
    </MiddleDiv>
  );
};

export default Middle;

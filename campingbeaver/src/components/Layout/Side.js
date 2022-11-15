import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll/modules";
import headimg from "../img/headimg.jpg";

const SideDiv = styled.div`
  width: 120%;
  position: relative;
  right: 5rem;

  margin-top: -124px;

  div {
    display: flex;
    flex-direction: column;
  }
`;

const Side = () => {
  return (
    <SideDiv>
      <div>
        <img src={headimg} />
        <Link to="2" spy={true} smooth={true} duration={400}>
          <button>이동하기!</button>
        </Link>
      </div>
    </SideDiv>
  );
};

export default Side;

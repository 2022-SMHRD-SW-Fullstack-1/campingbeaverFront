import React from "react";
import sitelist from "../../data/sitelist.json";
import { Link } from "react-router-dom";
const CampCard = ({ value }) => {
  return (
    <div class="cell" key={sitelist.campsite[value].site_seq}>
      <div class="img-box">
        <img src={sitelist.campsite[value].imgsrcfirst} height="220px" alt="" />
        <Link to={`/recommendation${sitelist.campsite[value].site_seq}`}>
          <div class="view">
            <i class="fa fa-search" aria-hidden="true"></i>
            <span>view</span>
          </div>
        </Link>
      </div>
      <div class="txt-box">
        <div class="txt1">
          <div class="head">
            <h1 class="name">{sitelist.campsite[value].site_name}</h1>
            <div class="sub-name"></div>
          </div>

          <div class="body">
            <div class="first-line">
              <i class="fab fa-houzz" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampCard;

import React, { Component } from "react";
import "./MainBottomCard.scss";

export class MainBottomCard extends Component {
  render() {
    const {
      cardTitleTop,
      cardTitleBottom,
      cardDescTop,
      cardDescBottom,
      cardBtnTxt,
    } = this.props;
    return (
      <div className="MainBottomCard">
        <div className="bottomCard">
          <div className="cardBorder">
            <div className="cardLeft">
              <p className="cardTitle">
                {cardTitleTop}
                <br />
                {cardTitleBottom}
              </p>
              <p className="cardDesc">
                {cardDescTop} <br />
                {cardDescBottom}
              </p>
            </div>
            <button className="cardBtn">{cardBtnTxt}</button>
          </div>
        </div>
      </div>
    );
  }
}

export default MainBottomCard;

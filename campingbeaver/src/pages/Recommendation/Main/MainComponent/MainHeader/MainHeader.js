import React, { Component } from "react";
import "./MainHeader.scss";

export class MainHeader extends Component {
  render() {
    const { headerTitle, headerDesc, btnText } = this.props;
    return (
      <div className="MainHeader">
        <header className="header">
          <div className="headerContainer">
            <h1 className="mainTitle">{headerTitle}</h1>
            <p className="mainDesc">{headerDesc}</p>
          </div>
          <button className="mainBtn">
            READ
            <br /> {btnText}
          </button>
        </header>
      </div>
    );
  }
}

export default MainHeader;

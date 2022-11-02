import React, { Component } from "react";

import "./PageButton.scss";

function Btn({ value, current, event }) {
  return (
    <li
      className={current ? "button clicked" : "button"}
      onClick={event}
    >
      {value}
    </li>
  );
}

export class PageButton extends Component {
  getTargetPage = (e) => {
    this.props.clickEvent(e.target.innerText);
    this.props.setNewOffset(e.target.innerText);
  };

  render() {
    const { pages } = this.props;

    return (
      <div className="PageButton">
        <Btn
          type="arrow"
          value="<"
          current={false}
          event={this.getTargetPage}
        />
        {pages.map((page, idx) => {
          return (
            <Btn
              key={idx}
              type="number"
              value={page.value}
              current={page.current}
              event={this.getTargetPage}
            />
          );
        })}
        <Btn type="arrow" value=">" current={false} event={this.getTargetPage} />
      </div>
    );
  }
}

export default PageButton;

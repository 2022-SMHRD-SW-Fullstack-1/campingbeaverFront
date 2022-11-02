import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./RoomImgSlider.scss";

function Arrow(props) {
  let className =
    props.type === "next"
      ? "nextArrowRight arrowHover"
      : "prevArrowLeft arrowHover";
  className += " arrow";
  const char =
    props.type === "next" ? (
      <i className="fas fa-angle-right"></i>
    ) : (
      <i className="fas fa-angle-left"></i>
    );
  return (
    <span className={className} onClick={props.onClick}>
      {char}
    </span>
  );
}

const roomsImgSettings = {
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  arrows: true,
  autoplay: false,
};

export class RoomImgSlider extends Component {
  render() {
    const { roomInfoList, roomImg } = this.props;
    return (
      <section className="RoomImgSlider">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
        />

        <div className="roomsImgContainer">
          <Slider
            {...roomsImgSettings}
            className="imgSliderContainer"
            nextArrow={<Arrow type="next" />}
            prevArrow={<Arrow type="prev" />}
          >
            {roomImg.length &&
              roomImg.map((roomImage, idx) => {
                return (
                  <img
                    className="roomsImg"
                    src={roomImage}
                    alt="room"
                    key={idx}
                  />
                );
              })}
          </Slider>
        </div>
      </section>
    );
  }
}

export default RoomImgSlider;

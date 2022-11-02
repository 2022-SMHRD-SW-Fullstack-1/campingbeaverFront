import React, { Component } from "react";
import "../Booking/Booking.scss";

const API = "http://10.58.1.45:8000/main/banner";

export class Booking extends Component {
  constructor() {
    super();
    this.state = {
      bookingBannerList: [],
      hover: false,
      id: "",
    };
  }

  componentDidMount = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          bookingBannerList: res.data,
          id: res.data[1].hotel_id,
        });
      });
  };

  render() {
    const { bookingBannerList, id } = this.state;
    console.log(bookingBannerList)

    return (
      <div className="Booking">
        <header>
          <div className="headerBox contentContainer">
            <div className="headerLeft">
              <div className="headerLeftContainer">
                <span className="switchTitle">MAP MODE</span>
                <label className="switchBtn">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
                <span className="switchOff">OFF</span>
              </div>
            </div>
            <div className="headerRight">
              <div className="headerRightContainer">
                <div className="searchSpan">
                  <span>SEARCH</span>
                </div>
                <div className="hBar"></div>
                <div className="checkInOutBox">
                  <div className="checkInBox">
                    <i className="far fa-calendar-alt"></i>
                    <span>Check In</span>
                  </div>
                  <div className="wBar"></div>
                  <div className="checkOutBox">
                    <i className="far fa-calendar-alt"></i>
                    <span>Check Out</span>
                  </div>
                </div>
                <div className="hBar"></div>
                <div className="planeIconBox">
                  <i className="far fa-paper-plane"></i>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="bookingBoard">
          {bookingBannerList?.map((banner, idx) => (
            <div
              className="bannerBox"
              key={idx}
              onClick={() => this.props.history.push(`/bookingDetail/${id}`)}
            >
              <img
                className="bannerImage"
                src={banner.thumbnail_url}
                alt="banner"
              />
              <div className="bannerTextContainer">
                <p className="bannerTopText noneStyle">LAUNCHING EVENT</p>
                <p className="bannerTitle">{banner.name}</p>
                <p className="bannerDesc noneStyle">{banner.introduction}</p>
                <button className="bannerBtn noneStyle">SHOW NOW</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Booking;

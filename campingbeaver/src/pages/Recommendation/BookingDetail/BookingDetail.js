import React, { Component } from "react";
import Slider from "react-slick";
import { withRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BookingDetail.scss";
import RoomsSlider from "./BookingDetailComponent/RoomsSlider/RoomsSlider";

const slickRoomsSettings = {
  infinite: true,
  speed: 0,
  slidesToShow: 1,
  autoplay: false,
  autoplaySpeed: 2500,
  arrows: true,
  draggable: false,
  dots: true,
};

const mockAPI =
  "http://localhost:3000/data/bookingDetailData/roomInfoData.json";

export class BookingDetail extends Component {
  constructor() {
    super();
    this.state = {
      roomInfoList: [],
      bottomInfoList: [],
    };
  }

  //`${API}/main/places/1`
  // componentDidMount() {
  //   fetch(`${API}/main/places/${this.props.match.params.id}`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       this.setState({
  //         roomInfoList: res.detail,
  //       });
  //     });
  // }

  render() {
    console.log(this.state.roomInfoList)
    const { roomInfoList, bottomInfoList } = this.state;

    return (
      <div className="BookingDetail">
        <section className="banner">
          <img
            className="bannerImg"
            alt="hotel"
            src={
              roomInfoList.length > 0 &&
              roomInfoList[0].common_info.hotel_image_url
            }
          />
          <div className="bannerTitle">
            <p className="titleText">
              {roomInfoList.length > 0 &&
                roomInfoList[0].common_info.hotel_english_name}
            </p>
          </div>
        </section>
        <div className="container">
          <section className="rooms">
            <header className="roomsHeader">
              <p className="roomsTitle">
                <span className="titleSpan">OUR</span> ROOMS
              </p>
              <p className="titleBottom">
                {roomInfoList.length > 0 &&
                  roomInfoList[0].common_info.hotel_introduction}
              </p>
            </header>
            <div className="roomsContainer">
              <Slider {...slickRoomsSettings} className="sliderWrapper">
                {roomInfoList.length &&
                  roomInfoList[0].rooms.map((roomInfo, idx) => {
                    return (
                      <RoomsSlider
                        {...this.state}
                        roomInfo={roomInfo}
                        key={idx}
                        roomCount={roomInfo.room_count}
                        roomName={roomInfo.room_name}
                        roomType={roomInfo.room_type}
                        roomIntroduction={roomInfo.room_introduction}
                        price={roomInfo.price}
                        checkIn={roomInfo.checkin_time}
                        checkOut={roomInfo.checkout_time}
                        minPeople={roomInfo.min_people}
                        maxPeople={roomInfo.max_people}
                        area={roomInfo.area}
                        roomId={roomInfo.room_id}
                        roomImg={roomInfo.room_image}
                        roomBed={roomInfo.bed}
                        roomTag={roomInfo.tags}
                        roomFacility={roomInfo.facility}
                        roomService={roomInfo.service}
                        history={this.props.history}
                      />
                    );
                  })}
              </Slider>
            </div>
          </section>
          <div>
            <p className="mapTitle">LOCATION</p>
            <div>
              <p>map들어갈 자리</p>
              {/* <MapContent id={this.props.match.params.id} /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookingDetail;

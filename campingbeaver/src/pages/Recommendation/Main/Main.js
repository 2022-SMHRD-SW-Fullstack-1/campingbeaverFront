import React, { Component } from "react";
import Slider from "react-slick";
import MainMagazine from "./MainComponent/MainMagazine/MainMagazine";
import MainHeader from "./MainComponent/MainHeader/MainHeader";
import MainBottomCard from "./MainComponent/MainBottomCard/MainBottomCard";
import PickArticle from "../Pick/PickArticle/PickArticle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Main.scss";

const bannerLIMIT = 10;
const LIMIT = 12;
// const bannerAPI = `${API}/main/banner?banners=${bannerLIMIT}`;
// const pickAPI = `${API}/main/picks?limit=12&offset=0`;

const bannerSettings = {
  dots: true,
  infinite: true,
  speed: 0,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows: false,
};

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      bannerList: [],
      searchedHotel: [],
      id: 0,
    };
  }

  goTobookingDetail = () => {
    this.props.history.push("/bookingDetail");
  };

  // componentDidMount() {
  //   fetch(bannerAPI)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       this.setState({
  //         bannerList: res.data,
  //         id: res.data[0].hotel_id,
  //       });
  //     });

  //   fetch(pickAPI)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       this.setState({
  //         searchedHotel: res.hotels,
  //       });
  //     });
  // }

  render() {
    const { bannerList, searchedHotel, id } = this.state;
    console.log(this.state.id);
    return (
      <main className="Main">
        <Slider {...bannerSettings} className="slick-container">
          {bannerList.map((banner, index) => (
            <div className="mainBanner" key={index}>
              <img
                className="bannerImage"
                src={banner.thumbnail_url}
                alt="banner"
              />
              <div className="bannerTextContainer">
                <p className="bannerTopText">LAUNCHING EVENT</p>
                <p className="bannerTitle">{banner.name}</p>
                <p className="bannerDesc">{banner.introduction}</p>
                <button
                  className="bannerBtn"
                  onClick={() =>
                    this.props.history.push(
                      `/bookingDetail/${bannerList[0].hotel_id}`
                    )
                  }
                >
                  SHOW NOW
                </button>
              </div>
            </div>
          ))}
        </Slider>
        <div className="mainContent">
          <section className="magazine">
            <div className="contentContainer">
              <MainHeader
                headerTitle="MAGAZINE"
                headerDesc="매주 한번 스테이폴리오가 이야기하는 유니크한 공간!"
                btnText="MORE MAGAZINE"
              />
              <MainMagazine />
            </div>
          </section>
          <section className="pickContainer">
            <div className="contentContainer">
              <MainHeader
                headerTitle="PICK"
                headerDesc="매일 하루 한번! 스테이폴리오가 추천합니다!"
                btnText="MORE PICK"
              />
              <div className="pickArticleContainer">
                {searchedHotel[1]?.picks.map((hotel) => (
                  <PickArticle
                    key={hotel.id}
                    name={hotel.name}
                    engName={hotel.english_name}
                    desc={hotel.introduction}
                    mainImg={hotel.thumbnail_url}
                    location={hotel.location}
                    type={hotel.category}
                    minPrice={hotel.min_price}
                    maxPrice={hotel.max_price}
                    tags={hotel.tags}
                    history={this.props.history}
                    id={hotel.id}
                  />
                ))}
              </div>
            </div>
          </section>
          <section className="mainBottom">
            <div className="cardBorderTop">
              <MainBottomCard
                cardTitleTop="유니크한 숙소 공간을"
                cardTitleBottom="추천해주세요."
                cardDescTop="스테이폴리오는 여행자와 창작자 사이에서"
                cardDescBottom="혁신적인 스테이 모델을 지속적으로 소개하고 있습니다."
                cardBtnTxt="CONTACT US"
              />
              <MainBottomCard
                cardTitleTop="FINE STAY AGENCY"
                cardTitleBottom="STAYFOLIO"
                cardDescTop="콘텐츠 제작, 마케팅 전략 수립, 예약 시스템"
                cardDescBottom="비즈니스 모델의 경쟁력을 높이는 호스트 솔루션을 만나보세요."
                cardBtnTxt="SHOW NOW"
              />
            </div>
          </section>
        </div>
      </main>
    );
  }
}

export default Main;

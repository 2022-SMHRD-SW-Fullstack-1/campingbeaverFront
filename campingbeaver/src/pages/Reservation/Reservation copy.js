import React from "react";
import DateRangePicker from "react-bootstrap-daterangepicker";
import Information from "./Information/Information";
import ReservationInput from "./ReservationInput/ReservationInput";
import PeopleOption from "./PeopleOption/PeopleOption";
import AdditionalOption from "./AdditionalOption/AdditionalOption";
import { API } from "../../config";
import { withRouter } from "react-router-dom";
import RESERVATION_DATA from "./reservationData";
import ReservationInfo from "./ReservationInfo/ReservationInfo"
import "./Reservation.scss";
import "bootstrap-daterangepicker/daterangepicker.css";
import "bootstrap/dist/css/bootstrap.css";

// const TOKEN =
  // "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.tm2qQm17jEeWhj-0zvLh7jt0xhk284HJpD74HqI_Z-A";
const TODAY = new Date();
const END_DATE = TODAY.setDate(TODAY.getDate() + 2);

class Reservation extends React.Component {
  constructor() {
    super();
    this.state = {
      checkInDate: "",
      checkOutDate: "",
      name: "",
      phoneNumber: "",
      email: "",
      adult: 0,
      child: 0,
      infant: 0,
      optionBreakfast: false,
      optionPickUp: false,
      demand: "",
      price: 0,
      discount: 0,
      total: 0,
      paymentId: 0,
      termCollection: false,
      termThirdParty: false,
      termRefund: false,
      termMarketing: false,
      allCheck: false,
      bookingInfo: {},
      nightAndDay: "2박 3일",
      optionTotal: 0,
      bookingId: 0,
      TOKEN: localStorage.getItem("token"),
      roomId: 0,
    };
  }

  componentDidMount() {
    const { TOKEN } = this.state;

    fetch(
      `${API}/booking/${this.props.match.params.id}?start=2020-10-29&end=2020-10-31`,
      {
        headers: {
          Authorization: TOKEN,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log("확인");
        this.setState({
          bookingInfo: res.booking_info,
          price: res.booking_info[0]?.total,
          discount: Math.floor(res.booking_info[0]?.total * 0.1),
          name: res.booking_info[0]?.user.name,
          email: res.booking_info[0]?.user.email,
          roomId: res.booking_info[0]?.room_id,
        });
      });
  }

  componentDidUpdate(prevPros, prevState) {
    const { checkInDate, checkOutDate, adult, child, infant } = this.state;
    if (
      prevState.checkInDate !== checkInDate ||
      prevState.checkOutDate !== checkOutDate
    ) {
      this.getPrice(checkInDate, checkOutDate);
    }

    if (
      prevState.optionTotal !== this.state.optionTotal ||
      prevState.price !== this.state.price
    ) {
      this.getTotal();
    }

    if (
      prevState.optionBreakfast !== this.state.optionBreakfast ||
      prevState.adult + prevState.child + prevState.infant !==
        adult + child + infant
    ) {
      this.handleOptionPrice();
    }
  }

  getPrice = (checkInDate, checkOutDate) => {
    const { TOKEN } = this.state;
    fetch(
      `${API}/booking/${this.props.match.params.id}?start=${checkInDate}&end=${checkOutDate}`,
      {
        headers: {
          Authorization: TOKEN,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          bookingInfo: res.booking_info,
          price: res.booking_info[0]?.total,
          discount: Math.floor(res.booking_info[0]?.total * 0.1),
        });
      });
  };

  getTotal = () => {
    const { price, discount, optionTotal } = this.state;
    const total = price - discount + optionTotal;
    this.setState({ total: total });
  };

  getDateValue = (event, picker) => {
    const bookingDate = event.target.value;
    const checkIn = bookingDate.split("-")[0].slice(0, 10).split("/");
    const checkOut = bookingDate.split("-")[1].slice(1, 11).split("/");

    this.setState({
      checkInDate: `${checkIn[2]}-${checkIn[0]}-${checkIn[1]}`,
      checkOutDate: `${checkOut[2]}-${checkOut[0]}-${checkOut[1]}`,
    });

    const getNightsAndDays = (checkIn, checkOut) => {
      const checkInMonth = +checkIn[0];
      const checkOutMonth = +checkOut[0];
      const checkInDays = +checkIn[1];
      const checkOutDays = +checkOut[1];

      if (checkInMonth === checkOutMonth) {
        const days = checkOutDays - checkInDays;
        this.setState({ nightAndDay: `${days}박 ${days + 1}일` });
      } else {
        if (checkInMonth % 2 === 0) {
          const days = 31 - checkInDays + checkOutDays;
          this.setState({ nightAndDay: `${days - 1}박 ${days}일` });
        } else if (checkInMonth % 2 !== 0) {
          const days = 30 - checkInDays + checkOutDays;
          this.setState({ nightAndDay: `${days - 1}박 ${days}일` });
        }
      }
    };
    getNightsAndDays(checkIn, checkOut);
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  getInputValue = (name, value) => {
    this.setState({ [name]: value });
  };

  getOptionValue = (name, value) => {
    console.log(name, value);
    const isChecked = value === "true" ? true : false;
    this.setState({ [name]: isChecked });
  };

  handlePayTool = (event) => {
    const { name } = event.target;
    const isPayment = event.currentTarget.value === "naver" ? 1 : 2;
    this.setState({ [name]: isPayment });
  };

  postReservationInfo = () => {
    const {
      checkInDate,
      checkOutDate,
      name,
      phoneNumber,
      email,
      adult,
      child,
      infant,
      discount,
      TOKEN,
      roomId,
      optionBreakfast,
      optionPickUp,
      demand,
      price,
      total,
      paymentId,
      termCollection,
      termThirdParty,
      termRefund,
      termMarketing,
    } = this.state;

    fetch(`${API}/booking/${roomId}`, {
      method: "POST",
      headers: {
        Authorization: TOKEN,
      },
      body: JSON.stringify({
        start: checkInDate,
        end: checkOutDate,
        name: name,
        phone_number: phoneNumber,
        email: email,
        adult: adult,
        child: child,
        infant: infant,
        breakfast: optionBreakfast,
        pickup: optionPickUp,
        demand: demand,
        price: price,
        discount: discount,
        total: total,
        payment_id: paymentId,
        term1: termCollection,
        term2: termThirdParty,
        term3: termRefund,
        term4: termMarketing,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("==================================");
        console.log("백엔드에서 오는 응답메세지: ", result.booking_id);

        if (result.booking_id) {
          this.props.history.push({
            pathname: "/checkPage",
            data: result.booking_id,
          });
        }
      });
  };

  handleOptionPrice = (name) => {
    const { adult, child, infant } = this.state;
    this.setState(
      { [name]: !this.state[name] },
      () => {
        const { optionBreakfast } = this.state;
        const breakFastCost = optionBreakfast
          ? 5000 * (Number(adult) + Number(child) + Number(infant))
          : 0;
        this.setState({ optionTotal: breakFastCost });
      },
      () => typeof this.state.optionBreakfast
    );
  };

  numberFormat = (inputNumber) => {
    return inputNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  render() {
    console.log(this.state.bookingInfo);
    const {
      checkInDate,
      checkOutDate,
      name,
      phoneNumber,
      email,
      adult,
      child,
      infant,
      optionBreakfast,
      optionPickUp,
      demand,
      paymentId,
      total,
      discount,
      price,
      nightAndDay,
      optionTotal,
      bookingInfo,
      TOKEN,
    } = this.state;
    console.log(this.state.roomId);
    return (
      <div className="Reservation">
        <div className="container">
          <header>
            <div>
              <span className="mainTitle">BOOKING</span>
              <br></br>
              <span className="titleDesc">
                원하시는 객실과 날짜를 선택해주세요.
              </span>
            </div>
          </header>
          <div className="reservationCon">
            <div className="outLine">
              <div className="content">
                <div className="reservationDesc">
                  <h1>RESERVATIONS</h1>
                  <span>예약 내용을 확인 후 결제해 주세요.</span>
                </div>

                <div className="reserveInfo">
                  <div className="hotelImg">
                    <img src={bookingInfo[0]?.room_image} />
                  </div>
                  <div className="date">
                    <span className="title">예약일</span>
                    <div className="datePickCon">
                      <DateRangePicker
                        initialSettings={{
                          startDate: END_DATE,
                          endDate: TODAY,
                        }}
                        onApply={this.getDateValue}
                      >
                        <input type="text" className="form-control" />
                      </DateRangePicker>
                      <span className="dateRange">{nightAndDay}</span>
                    </div>
                  </div>

                  {RESERVATION_DATA.INPUT_INFO.map((input, idx) => (
                    <ReservationInput
                      key={idx}
                      title={input.title}
                      name={input.name}
                      value={this.state[input.name]}
                      event={this.getInputValue}
                    />
                  ))}

                  <div className="people">
                    <span className="title">인원(최대 2명)</span>
                    <div className="selectWrap">
                      {RESERVATION_DATA.PEOPLE_OPTIONS.map((option, idx) => (
                        <PeopleOption
                          key={idx}
                          age={option.age}
                          name={option.name}
                          event={this.getInputValue}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="option">
                    <span className="optionTitle">추가/옵션 선택</span>
                    <div className="miniOption">
                      {RESERVATION_DATA.ADDITIONAL_OPTIONS.map(
                        (option, idx) => (
                          <AdditionalOption
                            key={idx}
                            img={option.img}
                            title={option.title}
                            info={option.info}
                            desc={option.desc}
                            name={option.name}
                            event={this.handleOptionPrice}
                          />
                        )
                      )}
                    </div>
                  </div>

                  <div className="request">
                    <span className="title">요청사항</span>
                    <textarea
                      name="demand"
                      onChange={this.handleInput}
                    ></textarea>
                  </div>

                  <div className="price">
                    <span className="title">Total</span>
                    <div className="totalDetail">
                      <div className="priceCon">
                        <span className="priceCategory">객실요금</span>
                        <div className="priceWon">
                          <span className="priceNum">
                            {this.numberFormat(price)}
                          </span>
                          <span className="won">원</span>
                        </div>
                      </div>

                      <div className="priceCon">
                        <span className="priceCategory">추가옵션</span>
                        <div className="priceWon">
                          <span className="priceNum">
                            {this.numberFormat(optionTotal)}
                          </span>
                          <span className="won">원</span>
                        </div>
                      </div>

                      <div className="priceCon">
                        <span className="priceCategory">할인금액</span>
                        <div className="priceWon">
                          <span className="priceNum">
                            {this.numberFormat(discount)}
                          </span>
                          <span className="won">원</span>
                        </div>
                      </div>

                      <div className="totalPriceCon">
                        <span className="priceCategory">총 결제금액</span>
                        <div className="">
                          <span className="totalPrice">
                            {this.numberFormat(total)}
                          </span>
                          <span className="won">원</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="payTool">
                    <span className="title">결제정보</span>
                    <div className="payOptions">
                      <label htmlFor="naverPay">
                        <input
                          type="radio"
                          name="paymentId"
                          value="naver"
                          onChange={this.handlePayTool}
                        />
                        네이버페이
                      </label>
                      <label htmlFor="creditCard">
                        <input
                          type="radio"
                          name="paymentId"
                          value="creditCard"
                          onChange={this.handlePayTool}
                        />
                        신용카드
                      </label>
                    </div>
                  </div>
                  <ReservationInfo />
                  <div className="btnCon">
                    <button
                      className="meaningBtn"
                      onClick={this.postReservationInfo}
                    >
                      예약하기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Information />
        </div>
      </div>
    );
  }
}

export default withRouter(Reservation);

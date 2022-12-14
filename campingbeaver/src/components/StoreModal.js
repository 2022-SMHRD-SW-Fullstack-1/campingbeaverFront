import { AiFillCloseSquare } from "react-icons/ai";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { GrFacebook, GrInstagram, GrTwitter } from "react-icons/gr";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState, useEffect } from "react";
import "./StoreModal.scss";
import Calendar from "react-calendar";
import "../pages/Reservation/Calendar.css";
import moment from "moment";
import axios from "axios";
import DaumPostcode from "react-daum-postcode";
import Review from "../pages/Reservation/Review";

const StoreModal = ({ items, closeModal }) => {
  const [postshow, setPostshow] = useState(false);
  const [addr, setAddr] = useState("");
  const [post, setPost] = useState("");
  const [avgRating, setAvgRating] = useState(0);
  const [user_id, setUser_id] = useState(localStorage.getItem("userId"));

  const [addrshow, setAddrshow] = useState("");
  const [postS, setPostS] = useState("");

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";
    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    console.log(fullAddress);
    setAddr(fullAddress);
    setAddrshow(fullAddress);
    console.log(data.zonecode);
    setPost(data.zonecode);
    setPostS(data.zonecode);
    setPostshow(false);
  };

  const handleSearch = (data) => {
    console.log(data);
  };

  const postmodal = () => {
    setPostshow(true);
  };

  const [count, setCount] = useState(1);
  const { id, img, itemName, price } = items;

  const currentCount = (e) => {
    const count = e.target;
    setCount(count);
  };

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
    if (count <= 1) {
      alert("?????? ????????? 1 ??????????????? ?????????.");
      setCount(1);
    }
  };

  const priceToString = Number(price).toLocaleString("ko-KR");
  const calculateTotalPrice = price * count;
  const totalPriceToString = calculateTotalPrice.toLocaleString("ko-KR");

  const [value, onChange] = useState([
    new Date(2022, 10, moment(new Date()).add(1, "day").format("DD")),
    new Date(2022, 10, moment(new Date()).add(2, "day").format("DD")),
  ]);

  const [value1, onChange1] = useState([
    new Date(2022, 10, moment(new Date()).add(1, "day").format("DD")),
    new Date(2022, 10, moment(new Date()).add(3, "day").format("DD")),
  ]);
  const [value3, onChange3] = useState([
    new Date(2022, 10, moment(new Date()).add(1, "day").format("DD")),
    new Date(2022, 10, moment(new Date()).add(4, "day").format("DD")),
  ]);
  const [value4, onChange4] = useState([
    new Date(2022, 10, moment(new Date()).add(1, "day").format("DD")),
    new Date(2022, 10, moment(new Date()).add(5, "day").format("DD")),
  ]);

  const [value2, onChange2] = useState([
    new Date(2022, 10, 25),
    new Date(2022, 10, 27),
  ]);

  const [reserv_s_date, setReserv_s_date] = useState("2022-11-25");
  const [reserv_e_date, setReserv_e_date] = useState("2022-11-27");

  const [date, setDate] = useState(0);

  let data = ["1??? 2???", "2??? 3???", "3??? 4???", "4??? 5???"];
  let [btnActive, setBtnActive] = useState("");
  const toggleActive = (e) => {
    setBtnActive(() => {
      setDate(e.target.value);
      return e.target.value;
    });
  };

  const [inputValue, setInputValue] = useState({
    user_id: user_id,
    pkg_seq: id,
    reserv_name: "",
    reserv_post: post,
    reserv_addr: addr,
    reserv_phone: "",
    reserv_price: calculateTotalPrice,
    reserv_pay: "Y",
    reserv_s_date: reserv_s_date,
    reserv_e_date: reserv_e_date,
  });

  let backdata = {
    user_id: user_id,
    pkg_seq: id,
    reserv_name: inputValue.reserv_name,
    reserv_post: post,
    reserv_addr: addr,
    reserv_phone: inputValue.reserv_phone,
    reserv_price: calculateTotalPrice,
    reserv_pay: "Y",
    reserv_s_date: reserv_s_date,
    reserv_e_date: reserv_e_date,
  };

  const [cartlist, setCartlist] = useState({
    user_id: user_id,
    pkg_seq: id,
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    axios.post("/beaver/cartadd", JSON.stringify(cartlist), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const cartpagebtn = () => {
    window.location.replace("cart");
  };

  useEffect(() => {
    const jquery = document.createElement("script");
    jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js";
    const iamport = document.createElement("script");
    iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
    document.head.appendChild(jquery);
    document.head.appendChild(iamport);
    return () => {
      document.head.removeChild(jquery);
      document.head.removeChild(iamport);
    };
  }, []);

  const onClickPayment = () => {
    const { IMP } = window;
    IMP.init("imp74633556"); // ????????? ???????????? // ?????? ????????? ??????
    const data = {
      pg: "html5_inicis", // PG??? (????????????)
      pay_method: "card", // ???????????? (????????????)
      merchant_uid: `mid_${new Date().getTime()}`, // ???????????? (????????????)
      name: itemName, // ????????? (????????????)
      amount: calculateTotalPrice, // ?????? (????????????)
      custom_data: { name: "????????????", desc: "?????? ????????????" },
      buyer_name: "??????", // ????????? ??????
      buyer_tel: "01041832735", // ????????? ???????????? (????????????)
      buyer_email: "artomes11@gmail.com", // ????????? ?????????
      buyer_addr: "??????",
      buyer_postalcode: "????????????", // ....
    };
    IMP.request_pay(data, callback);
  };

  const callback = (response) => {
    const { success, error_msg } = response;
    if (success) {
      alert("?????? ??????");
      axios.post("/beaver/reserv", JSON.stringify(backdata), {
        headers: {
          "Content-Type": "application/json",
        },
      });
      window.location.replace("/ordercom");
    } else {
      alert(`?????? ?????? : ${error_msg}`);
    }
  };

  return (
    <div className="storeModal">
      <div className="modalBackground" />
      <div className="modalComponent">
        <AiFillCloseSquare
          onClick={() => {
            closeModal(false);
          }}
          className="closeBtn"
        />
        <section className="imgSection">
          <img src={img} className="thumbnail" alt="Product Thumbnail" />
          <Review setAvgRating={setAvgRating} avgRating={avgRating} />
        </section>
        <section className="infoSection">
          <div className="nameContainer">
            <h2 className="itemName">{itemName}</h2>
            <div>??????</div>
            <h2>???{avgRating}/5.0</h2>
          </div>
          <hr />
          <table>
            <tr className="description">
              <th>?????? ????????????</th>
              <td>?????????</td>
            </tr>
            <tr className="price">
              <th>?????????</th>
              <td>???{priceToString}</td>
            </tr>
            <tr>
              <th>?????? ??????</th>
              <td>??????</td>
            </tr>
            <tr>
              <th>?????????</th>
              <td>???10,000 (???100,000 ?????? ?????? ??? ??????)</td>
            </tr>
            <tr>
              <th>SNS ????????????</th>
              <td className="snsBtn">
                <GrFacebook className="facebookBtn" />
                <GrTwitter className="twitterBtn" />
                <GrInstagram className="instagram" />
              </td>
            </tr>
          </table>
          <hr />
          <div>
            <div className="reservCalCon">
              <div className="reservBtn">
                {data.map((item, idx) => {
                  return (
                    <>
                      <button
                        value={idx}
                        className={"btn" + (idx == btnActive ? " active" : "")}
                        onClick={toggleActive}
                      >
                        {item}
                      </button>
                      <br />
                      <br />
                    </>
                  );
                })}
                <div className="reservDays">
                  <div className="date-box">
                    <span>???????????????</span>
                    <br />
                    <span className="text-gray-500 mt-4">
                      {moment(value1).format("YYYY-MM-DD") != "2022-11-25"
                        ? moment(new Date()).format("MM / DD (ddd)")
                        : moment(value1 - 86400).format("MM / DD (ddd)")}
                    </span>
                    <br />
                    <span>???????????????</span>
                    <br />
                    <span className="text-gray-500 mt-4">
                      {date == 0
                        ? moment(new Date() * 1.00014).format("MM / DD (ddd)")
                        : date == 2
                        ? moment(new Date() * 1.00024).format("MM / DD (ddd)")
                        : date == 3
                        ? moment(new Date() * 1.00028).format("MM / DD (ddd)")
                        : moment(value1).format("YYYY-MM-DD") != "2022-11-25"
                        ? moment(new Date() * 1.0002).format("MM / DD (ddd)")
                        : moment(new Date(value1))
                            .add(3, "day")
                            .format("MM / DD (ddd)")}
                    </span>
                    <br />
                  </div>
                </div>
              </div>
              <div className="Cal">
                {date == 0 ? (
                  <Calendar
                    onChange={onChange}
                    value={value}
                    defaultValue={date}
                    minDate={new Date(2022, 10, moment(new Date()).format("D"))}
                    next2Label={null}
                    prev2Label={null}
                    showNeighboringMonth={false}
                    formatDay={(local, date) => moment(date).format("DD")}
                    calendarType="US"
                  />
                ) : date == 2 ? (
                  <Calendar
                    onChange={onChange3}
                    value={value3}
                    defaultValue={date}
                    minDate={new Date(2022, 10, moment(new Date()).format("D"))}
                    next2Label={null}
                    prev2Label={null}
                    showNeighboringMonth={false}
                    formatDay={(local, date) => moment(date).format("DD")}
                    calendarType="US"
                  />
                ) : date == 3 ? (
                  <Calendar
                    onChange={onChange4}
                    value={value4}
                    defaultValue={date}
                    minDate={new Date(2022, 10, moment(new Date()).format("D"))}
                    next2Label={null}
                    prev2Label={null}
                    showNeighboringMonth={false}
                    formatDay={(local, date) => moment(date).format("DD")}
                    calendarType="US"
                  />
                ) : moment(value1).format("YYYY-MM-DD") != "2022-11-25" ? (
                  <Calendar
                    onChange={onChange1}
                    value={value1}
                    defaultValue={date}
                    minDate={new Date()}
                    next2Label={null}
                    prev2Label={null}
                    showNeighboringMonth={false}
                    formatDay={(local, date) => moment(date).format("DD")}
                    calendarType="US"
                  />
                ) : (
                  <Calendar
                    onChange={onChange2}
                    value={value2}
                    defaultValue={date}
                    minDate={new Date()}
                    next2Label={null}
                    prev2Label={null}
                    showNeighboringMonth={false}
                    formatDay={(local, date) => moment(date).format("DD")}
                    calendarType="US"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="amountTab">
            <span className="itemName">{itemName}</span>
            <div className="inputAmount">
              <div
                className="amountInput"
                onChange={currentCount}
                type="number"
              >
                <span>{count}</span>
              </div>
              <div className="amountHandler">
                <button onClick={increaseCount} className="up">
                  <IoMdArrowDropup className="arrow" />
                </button>
                <button onClick={decreaseCount} className="down">
                  <IoMdArrowDropdown className="arrow" />
                </button>
              </div>
            </div>
            <span className="amountPrice">???{totalPriceToString}</span>
          </div>
          <hr />
          <div className="totalPrice">
            ??? ???????????? :<span> ???{totalPriceToString} </span>({count}???)
          </div>
          <div>
            <main className="signup">
              <form className="inputLine">
                <div className="inputTitle">??????????????????</div>
                <input
                  type="text"
                  value={
                    moment(value1).format("YYYY-MM-DD") != "2022-11-25"
                      ? moment(new Date()).add(1, "day").format("YYYY-MM-DD")
                      : moment(value1).format("YYYY-MM-DD")
                  }
                  className="userInput"
                  onChange={handleInput}
                  name="reserv_s_date"
                />
                <div className="inputTitle">??????????????????</div>
                <input
                  type="text"
                  value={
                    date == 0
                      ? moment(new Date() * 1.00014).format("YYYY-MM-DD")
                      : date == 2
                      ? moment(new Date() * 1.00024).format("YYYY-MM-DD")
                      : date == 3
                      ? moment(new Date() * 1.00028).format("YYYY-MM-DD")
                      : moment(value1).format("YYYY-MM-DD") != "2022-11-25"
                      ? moment(new Date() * 1.0002).format("YYYY-MM-DD")
                      : moment(new Date(value1))
                          .add(3, "day")
                          .format("YYYY-MM-DD")
                  }
                  className="userInput"
                  onChange={handleInput}
                  name="reserv_e_date"
                />
              </form>

              <form className="inputLine">
                <div className="inputTitle">???????????????</div>
                <input
                  type="text"
                  className="userInput"
                  onChange={handleInput}
                  name="reserv_name"
                />
              </form>

              {postshow == true ? (
                <Modal show={postshow}>
                  <DaumPostcode
                    className="postmodal"
                    onComplete={handleComplete}
                    onSearch={handleSearch}
                  />
                </Modal>
              ) : (
                <></>
              )}
              <button onClick={postmodal}>????????????</button>
              <form className="addressLine1">
                <div className="address">?????????????????????</div>
                <input
                  type="text"
                  value={postS}
                  className="addressInput"
                  onChange={handleInput}
                  name="reserv_post"
                />
              </form>

              <form className="addressLine2">
                <div className="address">???????????????</div>
                <input
                  type="text"
                  value={addrshow}
                  className="addressInput"
                  onChange={handleInput}
                  name="reserv_addr"
                />
              </form>

              <form className="phoneLine">
                <div className="phone">Mobile Phone</div>
                <input
                  type="text"
                  className="phoneSecond"
                  onChange={handleInput}
                  name="reserv_phone"
                />
              </form>
            </main>
          </div>
          <div className="totalBuyBtn">
            <button className="buyBtn" onClick={onClickPayment}>
              ????????????
            </button>
            <button onClick={handleShow} className="cartBtn">
              CART
            </button>
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>????????????</Modal.Title>
              </Modal.Header>
              <Modal.Body>??????????????? ?????????????????????.</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={cartpagebtn}>
                  ??????????????? ??????
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
          <div></div>
        </section>
      </div>
    </div>
  );
};

export default StoreModal;

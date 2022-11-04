import { AiFillCloseSquare } from 'react-icons/ai';
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';
import { GrFacebook, GrInstagram, GrTwitter } from 'react-icons/gr';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState, useEffect } from 'react'
import './StoreModal.scss';
import Calendar from 'react-calendar'
import '../pages/Reservation/Calendar.css'
import moment from 'moment'
import axios from 'axios'

const StoreModal = ({ items, closeModal }) => {

  const [count, setCount] = useState(1);
  const { id, img, itemName, price, } = items;

  const currentCount = e => {
    const count = e.target;
    setCount(count);
  };

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
    if (count <= 1) {
      alert('주문 수량은 1 이상이어야 합니다.');
      setCount(1);
    }
  };

  const priceToString = Number(price).toLocaleString('ko-KR');
  const calculateTotalPrice = price * count;
  const totalPriceToString = calculateTotalPrice.toLocaleString('ko-KR');

  const [value, onChange] = useState(
    new Date()
  );


  const [date, setDate] = useState(0);

  let data = ['1박 2일', '2박 3일', '3박 4일', '4박 5일'];
  let [btnActive, setBtnActive] = useState('');
  const toggleActive = (e) => {
    setBtnActive(() => {
      setDate(e.target.value);
      return e.target.value;
    });
  };

  const [inputValue, setInputValue] = useState({
    user_id: 'admin',
    pkg_seq: id,
    reserv_name: '',
    reserv_post: '',
    reserv_addr: '',
    reserv_phone: '',
    reserv_price: calculateTotalPrice,
    reserv_pay: 'Y',
    reserv_s_date: '2022-11-05',
    reserv_e_date: '2022-11-08',
  });

  const [cartlist, setCartlist] = useState({
    user_id: 'admin',
    pkg_seq: id,
  })

  const handleInput = e => {
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
    axios.post("/beaver/cartadd", JSON.stringify(cartlist),{
      headers:{
        "Content-Type": "application/json",
      },
      })
  }

  const cartpagebtn = () => {
    window.location.replace('cart')
  }
  
  const reserv = () => {
    // console.log(inputValue)
    axios.post("/beaver/reserv", JSON.stringify(inputValue),{
    headers:{
      "Content-Type": "application/json",
    },
    })
  }

  const  checkBtn = () => {
    console.log(inputValue)
  }

  useEffect(() => {

  })

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
          <img src={img} alt="Product Thumbnail" />
        </section>
        <section className="infoSection">
          <h2 className="itemName">{itemName}</h2>
          <hr />
          <table>
            <tr className="description">
              <th>상품 간략설명</th>
              <td>패키지</td>
            </tr>
            <tr className="price">
              <th>판매가</th>
              <td>￦{priceToString}</td>
            </tr>
            <tr>
              <th>배송 방법</th>
              <td>택배</td>
            </tr>
            <tr>
              <th>배송비</th>
              <td>￦5,000 (￦50,000 이상 구매 시 무료)</td>
            </tr>
            <tr>
              <th>SNS 상품홍보</th>
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
              <div className='reservBtn'>
                {data.map((item, idx) => {
                  return (
                    <>
                      <button
                        value={idx}
                        className={"btn" + (idx == btnActive ? " active" : "")}
                        onClick={toggleActive}
                      >
                        {item}
                      </button><br /><br />
                    </>
                  );
                })}
                <div className='reservDays'>
                  <div className="date-box">
                    <span>배송예정일</span><br />
                    <span className="text-gray-500 mt-4">
                      {moment(value - 86400).format("MM / DD (ddd)")}
                    </span><br />
                    <span>회수예정일</span><br />
                    <span className="text-gray-500 mt-4">
                      {date == 3 ? moment(value * 1.00027).format("MM / DD (ddd)") : (date == 2 ? moment(value * 1.00021).format("MM / DD (ddd)") : (date == 1 ? moment(value * 1.00018).format("MM / DD (ddd)") : moment(value * 1.00013).format("MM / DD (ddd)")))}
                    </span><br />
                  </div>
                </div>
              </div>
              <div className='Cal'>
                <Calendar onChange={onChange} value={value} defaultValue={date} minDate={new Date()} next2Label={null} prev2Label={null} showNeighboringMonth={false} formatDay={(local, date) => moment(date).format("DD")} calendarType="US" />
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
            <span className="amountPrice">￦{totalPriceToString}</span>
          </div>
          <hr />
          <div className="totalPrice">
            총 상품금액 :<span> ￦{totalPriceToString} </span>({count}개)
          </div>
          <div>
            <main className="signup">
              <form className="inputLine">
                <div className="inputTitle">예약시작날짜</div>
                <input
                  type="text"
                  value={moment(value).format("YYYY-MM-DD")}
                  className="userInput"
                  name="reserv_s_date"
                />
                <div className="inputTitle">예약종료날짜</div>
                <input
                  type="text"
                  value={date == 3 ? moment(value * 1.00024).format("YYYY-MM-DD") : (date == 2 ? moment(value * 1.00017).format("YYYY-MM-DD") : (date == 1 ? moment(value * 1.00014).format("YYYY-MM-DD") : moment(value * 1.00007).format("YYYY-MM-DD")))}
                  className="userInput"
                  name="reserv_e_date"
                />
              </form>

              <form className="inputLine">
                <div className="inputTitle">예약자이름</div>
                <input
                  type="text"
                  className="userInput"
                  onChange={handleInput}
                  name="reserv_name"
                />
              </form>

              <form className="addressLine">
                <div className="address">예약자우편번호</div>
                <input
                  type="text"
                  className="addressInput"
                  onChange={handleInput}
                  name="reserv_post"
                />
              </form>

              <form className="addressLine">
                <div className="address">예약자주소</div>
                <input
                  type="text"
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
          <button onClick={checkBtn}>체크 버튼</button>
          <div className="totalBuyBtn">
            <button onClick={reserv} className="buyBtn">
              BUY NOW
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
                <Modal.Title>장바구니</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                장바구니에 추가되었습니다.
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={cartpagebtn}>장바구니로 이동</Button>
              </Modal.Footer>
            </Modal>
          </div>
          <div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default StoreModal;
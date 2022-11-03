import { AiFillCloseSquare } from 'react-icons/ai';
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';
import { GrFacebook, GrInstagram, GrTwitter } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import './StoreModal.scss';
import Calendar from 'react-calendar'
import '../pages/Reservation/Calendar.css'
import moment from 'moment'
import axios from 'axios'

const StoreModal = ({ items, closeModal }) => {
  const [count, setCount] = useState(1);
  const { id, img, itemName, price, option_product_id } = items;

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

  const navigate = useNavigate();

  const goToCart = () => {
    // axios.post('/beaver/basketadd',

    // )

    // axios(`http://localhost:8000/carts/`, {
    //   method: 'POST',
    //   headers: {
    //     Authorization: localStorage.getItem('Authorization'),
    //   },
    //   body: JSON.stringify({
    //     option_product_id: Number(option_product_id),
    //     count: Number(count),
    //   }),
    // })
    //   .then(res => res.json())
    //   .then(result => {
    //     if (result.message === 'SUCCESS') {
    //       navigate('../cart');
    //     }
    //   });
  };

  const priceToString = Number(price).toLocaleString('ko-KR');
  const calculateTotalPrice = price * count;
  const totalPriceToString = calculateTotalPrice.toLocaleString('ko-KR');

  const handleWishList = () => {
    alert('로그인 후 관심상품 등록을 해주세요.');
  };

  const goToDetail = () => {
    navigate(`/reservation`);
  };

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
          <div className="totalBuyBtn">
            <button onClick={goToDetail} className="buyBtn">
              BUY NOW
            </button>
            <button onClick={goToCart} className="cartBtn">
              CART
            </button>
          </div>
          <button onClick={handleWishList} className="wishList">
            <span>+ WISH LIST</span>
          </button>
        </section>
      </div>
    </div>
  );
};

export default StoreModal;
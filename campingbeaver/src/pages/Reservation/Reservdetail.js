
import React, { useState, useEffect } from 'react'
import Calendar from 'react-calendar'
import './Calendar.css'
import moment from 'moment'
import 'moment/locale/ko'
import Payment from '../payment/Payment'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Header from '../../components/Layout/Header';
import styles from '../MyPage/MyPage.module.scss'
import Axios from 'axios'
import image1 from '../../components/img/image1.jpg'
import image2 from '../../components/img/image2.png'
import OU1 from '../../components/img/free1.png'
import OU2 from '../../components/img/free2.png'

const Reservdetail= () => {

  const cont1 = {
    display: 'flex'
  }

  const contr1 = {
    display: 'flex',
    fontSize: '24px'
  }
  const contr2 = {
    display: 'flex',
    fontSize: '24px'
  }

  const [value, onChange] = useState(new Date());
  const [price, setPrice] = useState(89000);
  const [date, setDate] = useState(0);

  const [sendday, setSendday] = useState('');
  const [receiveday, setReceiveday] = useState('');

  const [reserv_seq, setReserv_seq] = useState('null');

  const [days, setDays] = useState('');
  const [reserv_s_date, setReserv_s_date] = useState('');
  const [reserv_e_date, setReserv_e_date] = useState('');

  const [senddata, setSenddata] = useState([]);

  const [cnt, setCnt] = useState(1);
  const onIncrease = () => {
    setCnt(cnt + 1);
    setPrice(price + 89000);
  }
  const onDecrease = () => {
    setCnt((cnt) => (cnt > 1 ? setCnt(cnt - 1) & setPrice(price - 89000) : setCnt(cnt) & setPrice(price)));
  }

  let data = ['1박 2일', '2박 3일', '3박 4일', '4박 5일'];
  let [btnActive, setBtnActive] = useState('');
  const toggleActive = (e) => {
    setBtnActive(() => {
      setDate(e.target.value);
      return e.target.value;
    });
  };

  const [wishprod, setWishProd] = useState('🤍');
  const wishSel = () => {
    wishprod === '🤍' ? setWishProd('🖤') : setWishProd('🤍');
  }

  const selectList = [
    { id: 0, value: '캠핑장 수령/ 반납 (+10,000원)', text: '캠핑장 수령/ 반납 (+10,000원)' },
    { id: 1, value: '텐트', text: '텐트' },
    { id: 2, value: '타프', text: '타프' },
    { id: 3, value: '체어', text: '체어' },
    { id: 4, value: '테이블', text: '테이블' }
  ];
  const [options, setOptions] = useState('');
  const [selected, setSelectList] = useState([]);

  const selectOption = (e) => {
    setSelectList(selected => [...selected, e.target.value]);
    setOptions(e.target.value);
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);

  }

  const dataCon = () => {

    setReserv_seq(reserv_seq);

    setDays(date == 0 ? '1박2일' : (date == 1 ? '2박3일' : (date == 2 ? '3박4일' : '4박5일')))

    setReserv_s_date(moment(value).format("YYYY-MM-DD"));
    setReserv_e_date(date == 3 ? moment(value * 1.00024).format("YYYY-MM-DD") : (date == 2 ? moment(value * 1.00017).format("YYYY-MM-DD") : (date == 1 ? moment(value * 1.00014).format("YYYY-MM-DD") : moment(value * 1.00007).format("YYYY-MM-DD"))));
    setSendday(moment(value - 86400).format("YYYY-MM-DD"));
    setReceiveday(date == 3 ? moment(value * 1.00027).format("YYYY-MM-DD") : (date == 2 ? moment(value * 1.00021).format("YYYY-MM-DD") : (date == 1 ? moment(value * 1.00017).format("YYYY-MM-DD") : moment(value * 1.00013).format("YYYY-MM-DD"))));



    // alert('user '+reserv_seq+'번째 예약 입니다.\n' + '예약일수 : '+days+'\n배송날짜 : '+sendday+'\n시작날짜 : '+reserv_s_date+'\n종료날짜 : '+reserv_e_date+'\n회수날짜 : '+receiveday)

    setSenddata({ reserv_seq, days, reserv_s_date, reserv_e_date })
    Axios.post('/beaver/basket/add',
      senddata
    ).then((res) => {
      console.log('error')
    })
      .post('/beaver/main', JSON.stringify(senddata), {
        headers: {
          "Content-Type": "application/json",
        },
      })



    console.log(senddata)
    // alert(reservation.reserv_seq+ reservation.user_id+ reservation.reserv_s_date+ reservation.reserv_e_date)
  }

  const [reservation, setReservation] = useState("")

  useEffect(() => {
    // Axios.post("/beaver/main").then((response)=>{
    //   if(response.data){
    //     setReservation(response.data);
    //   }else{
    //     alert("failed");
    //   }
    // })
  })


  return (
    <div className={styles.reservation}>
      <div className={styles.top}>
        <Header />
        <div className={styles.MyPage}>
          <h1>제품명<span onClick={wishSel}>{wishprod}</span><span><img src={OU1} width="44px"/><img src={OU2} width="44px"/></span></h1>
          <h3>1박 2일 89,000원 ~</h3>
          <p>★ 4.8 / 5.0</p>
          <h1>Reservation *</h1>
          *항목은 필수 선택 항목입니다.
          <h2>날짜 선택*</h2>
          <div style={cont1}>
            <div>
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

              <div className="date-box">
                <span>배송예정일</span><br />
                <span className="text-gray-500 mt-4">
                  {moment(value - 86400).format("MM / DD (ddd)")}
                </span><br />
                <span>회수예정일</span><br />
                <span className="text-gray-500 mt-4">
                  {date == 3 ? moment(value * 1.00027).format("MM / DD (ddd)") : (date == 2 ? moment(value * 1.00021).format("MM / DD (ddd)") : (date == 1 ? moment(value * 1.00017).format("MM / DD (ddd)") : moment(value * 1.00013).format("MM / DD (ddd)")))}
                </span><br />
              </div>
            </div>
            <div>
              <Calendar onChange={onChange} value={value} minDate={new Date()} next2Label={null} prev2Label={null} showNeighboringMonth={false} formatDay={(local, date) => moment(date).format("DD")} calendarType="US" />
            </div>
          </div>
          <div align="center">
            <h2>수량 선택 *</h2>
            <button onClick={onDecrease}>-</button>
            <span>{cnt}</span>
            <button onClick={onIncrease}>+</button>
          </div>
          <div>
            <h2>추가 선택</h2>

            <select onChange={selectOption} value={options} >
              {selectList.map((item) => (
                <option value={item.value} key={item.id}>{item.text}</option>
              ))}
            </select>
            {selected.map(sel => (<div>{sel}<button>-</button>
              <span>1</span>
              <button>+</button>
              <button>X</button></div>))}

            <h3 align="center">합계액<br />{price}</h3>

            <button onClick={dataCon}>담기</button>

            <Button variant="primary" onClick={handleShow}>
              장바구니 담기
            </Button>
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
                <Button variant="primary" onClick={() => window.location.replace("/cart")}>장바구니로 이동</Button>
              </Modal.Footer>
            </Modal>

            <Payment />

          <div>
            <img src={image1} width="300px"></img>
            <p>★4.8 / 5.0</p>
            <p>내는 것이 따뜻한 봄바람이다 인생에 따뜻한 <br/>봄바람을 불어 보내는 것은 청춘의 끓는 피다<br/> 청춘의 피가 뜨거운지라 인간의 동산에는<br/> 사랑의 풀이 돋고 이상의 꽃이 피고 희망의 놀이<br/> 뜨고 열락의 새가 운다사랑의 풀이 없으면</p>

            <img src={image2} width="300px"></img>
                    <p>★5.0 / 5.0</p>
                    <p>로고가 예쁘네요.</p>
          </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Reservdetail
import React, { useState } from 'react'
import Calendar from 'react-calendar'
import './Calendar.css'
import moment from 'moment'
import './Reservdetail.scss'
import 'moment/locale/ko'
import Payment from '../payment/Payment'

const Cal = () => {

  const cont1 = {
    display: 'flex'
  }

  const [value, onChange] = useState(new Date());
  const [price, setPrice] = useState(89000);
  const [date, setDate] = useState(0);

  const [cnt, setCnt] = useState(1);
  const onIncrease = () => {
    setCnt(cnt + 1);
    setPrice(price + 89000);
  }
  const onDecrease = () => {
    setCnt((cnt) => (cnt > 1 ? setCnt(cnt - 1) & setPrice(price - 89000) : setCnt(cnt) & setPrice(price)));
  }

  let data = ['1박 2일', '2박 3일', '3박 4일', '4박 5일'];
  let [btnActive, setBtnActive] = useState();
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
    {id:0, value:'캠핑장 수령/ 반납 (+10,000원)', text:'캠핑장 수령/ 반납 (+10,000원)'},
    {id:1, value:'텐트', text:'텐트'},
    {id:2, value:'타프', text:'타프'},
    {id:3, value:'체어', text:'체어'},
    {id:4, value:'테이블', text:'테이블'}
  ];
  const [options, setOptions] = useState('');
  const [selected,setSelectList] = useState([]);

  const selectOption = (e) => {
    setSelectList(selected =>[...selected, e.target.value]);
    setOptions(e.target.value);
  }

  const dataAlert = () => {
    alert(value)
    console.log(value)
    console.log(price)
    console.log(date)
    console.log(cnt)
    console.log(wishprod)
  }
  return (
    <div>
      <h1>제품명<button onClick={wishSel}>{wishprod}</button><button>공유</button></h1>
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
            {selectList.map((item)=>(
              <option value={item.value} key={item.id}>{item.text}</option>
            ))}
          </select>
        {selected.map(sel =>(<div>{sel}<button>-</button>
        <span>1</span>
        <button>+</button>
        <button>X</button></div>))}
        
        <h3 align="center">합계액<br/>{price}</h3>
        
        <button onClick={dataAlert}>장바구니 담기</button>
        <Payment/>
      </div>
    </div>
  )
}
export default Cal

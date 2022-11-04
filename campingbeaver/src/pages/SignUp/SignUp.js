import './Signup.scss';
import Agreement from './Agreement';
import AGREE_LIST from './agreeData';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [checkedList, setCheckedLists] = useState([]);
  const [inputValue, setInputValue] = useState({
    id: '',
    pw1: '',
    pw2: '',
    name: '',
    address: '',
    address2: '',
    phone: '',
    email: '',
    birthday: '',
    checked: true,
  });

  const [idAlertSentence, setIdAlertSentence] = useState(
    '아이디를 입력해 주세요(영문소문자/숫자,4~16자)'
  );
  const [pwAlertSentence, setPwAlertSentence] = useState('');
  const [emailAlertSentence, setEmailAlertSentence] = useState('');
  const [phoneAlertSentence, setPhoneAlertSentence] = useState('');
  const {
    id,
    pw1,
    pw2,
    name,
    address,
    address2,
    phone,
    email,
    birthday,
    checked,
  } = inputValue;

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const goToMain = () => {
    const time = new Date();
    let now = time.toTimeString();
    fetch('/beaver/sign', {
      method: 'POST',
      body: JSON.stringify({
        user_id: id,
        user_pw: pw2,
        user_name: name,
        user_phone: '010' + phone,
        user_addr: address + address2,
        user_type: 'N',
        user_joindate: now,
        user_email: email,
        //birth_date: birthday,
        //optional_agreement: checked,
      }),
    })
      .then(response => {
        if (response.ok) {
          response.json();
        } else {
          alert('입력창을 확인해 주세요');
        }
      })

      .then(result => {
        navigate('../login');
      });
  };

  useEffect(() => {
    setCheckedLists(AGREE_LIST);
  }, []);

  const handleCheck = e => {
    const allChecked = checkedList.map(item => {
      item.isChecked = !item.isChecked;
      return item;
    });
    setCheckedLists(allChecked);
  };

  const idCheck = id => {
    let regId = /[a-z0-9]{4,16}$/;
    if (regId.test(id)) {
      setIdAlertSentence('사용가능한 아이디입니다');
    } else {
      setIdAlertSentence('올바르지 않은 아이디입니다');
    }
  };

  const pwCheck = pw2 => {
    if (pw1 === pw2 && 3 < pw2.length && pw2.length < 17) {
      setPwAlertSentence('사용가능한 비밀번호입니다.');
    } else if (pw1 !== pw2) {
      setPwAlertSentence('비밀번호가 일치하지 않습니다.');
    } else {
      setPwAlertSentence('다시입력해 주세요');
    }
  };

  const emailCheck = email => {
    let regEmail = /[a-zA-Z0-9_-]+@[a-z]+.[a-z]+$/;
    if (!regEmail.test(email)) {
      setEmailAlertSentence('유효한 이메일을 입력해 주세요.');
    } else {
      setEmailAlertSentence('');
    }
  };

  const phoneCheck = phone => {
    if (phone.length !== 8) {
      setPhoneAlertSentence('숫자 8개만 입력해주세요');
    } else {
      setPhoneAlertSentence('');
    }
  };

  return (
    <div>
      <main className="signup">
        <h1 className="title">SIGN UP</h1>
        <title className="information">
          <h2>기본정보</h2>
          <div>*필수입력사항</div>
        </title>

        <section className="memberLine">
          <div className="memberTitle"> Member Type</div>
          <form className="memberRadio">
            <input type="radio" name="member" />
            <label>개인회원</label>
            <input type="radio" name="member" />
            <label>사업자 회원</label>
            <input type="radio" name="member" />
            <label>외국인 회원</label>
          </form>
        </section>

        <form className="inputLine">
          <div className="inputTitle">ID</div>
          <input
            type="text"
            className="userInput"
            onChange={handleInput}
            onBlur={() => idCheck(id)}
            name="id"
          />
          <div className="inputDescription">{idAlertSentence}</div>
        </form>

        <form className="inputLine">
          <div className="inputTitle">Password</div>
          <input
            type="password"
            className="userInput"
            onChange={handleInput}
            name="pw1"
          />
          <div className="inputDescription">(영문 대소문자/숫자 4자~16자)</div>
        </form>

        <form className="inputLine">
          <div className="inputTitle">Password Check</div>
          <input
            type="password"
            className="userInput"
            onChange={handleInput}
            onBlur={() => pwCheck(pw2)}
            name="pw2"
          />
          <div className="inputDescription">{pwAlertSentence}</div>
        </form>

        <form className="inputLine">
          <div className="inputTitle">Name</div>
          <input
            type="text"
            className="userInput"
            onChange={handleInput}
            name="name"
          />
        </form>

        <form className="addressLine">
          <div className="address">Address</div>
          <input
            type="text"
            className="addressInput"
            onChange={handleInput}
            name="address"
          />
          <div className="addressDescription">기본주소</div>
        </form>

        <form className="addressLine">
          <div className="address" />
          <input
            type="text"
            className="addressInput"
            onChange={handleInput}
            name="address2"
          />
          <div className="addressDescription">나머지 주소 (선택사항)</div>
        </form>

        <form className="phoneLine">
          <div className="phone">Phone</div>
          <select name="phone" className="phoneSelect">
            <option>02</option>
            <option>070</option>
            <option>031</option>
            <option>032</option>
            <option>033</option>
            <option>034</option>
          </select>
          <input type="text" className="phoneSecond" />
          -
          <input type="text" className="phoneThird" />
        </form>

        <form className="phoneLine">
          <div className="phone">Mobile Phone</div>
          <select name="phone" className="phoneSelect">
            <option>010</option>
            <option>011</option>
            <option>016</option>
            <option>017</option>
            <option>018</option>
            <option>019</option>
          </select>
          <input
            type="text"
            className="phoneSecond"
            onChange={handleInput}
            onBlur={() => phoneCheck(phone)}
            name="phone"
          />
          <div className="phoneDescription">{phoneAlertSentence}</div>
        </form>

        <form className="inputLine">
          <div className="inputTitle">E-Mail</div>
          <input
            type="text"
            className="userInput"
            name="email"
            onChange={handleInput}
            onBlur={() => emailCheck(email)}
          />
          <div className="inputDescription">{emailAlertSentence}</div>
        </form>

        <title className="addInformation">
          <h2>추가정보</h2>
        </title>
        <form className="birthdayLine">
          <div className="birthday">생년월일</div>
          <input
            type="text"
            className="birthdayInput"
            name="birthday"
            onChange={handleInput}
          />
          <div className="birthdayRadio">
            <input type="radio" name="birthday" />
            <label>양력</label>
            <input type="radio" name="birthday" />
            <label>음력</label>
          </div>
          <div className="birthdayDescription">
            8자리로 입력해주세요 ex)19960211
          </div>
        </form>

        <title className="agreement">
          <h2>전체 동의</h2>
        </title>
        <form className="agreementBox">
          <div className="allAgreement">
            <input
              type="checkbox"
              checked={
                checkedList.filter(item => item?.isChecked !== true).length < 1
              }
              onChange={e => {
                handleCheck(e.target.checked);
              }}
            />
            <div>
              이동약관 및 개인정보수집 및 이용,쇼핑정보 수신(선택)에 모두 동의
              합니다.
            </div>
          </div>
          {checkedList.map((item, i) => {
            return (
              <Agreement
                key={i}
                item={item}
                i={i}
                checkedList={checkedList}
                setCheckedLists={setCheckedLists}
              />
            );
          })}
        </form>
        <button
          onClick={goToMain}
          className="signupBtn"
          disabled={
            !(
              id.length > 3 &&
              pw2.length > 3 &&
              name.length > 1 &&
              address.length > 1 &&
              phone.length > 1 &&
              email.length > 1 &&
              birthday.length > 1
            )
          }
        >
          회원가입
        </button>
      </main>
    </div>
  );
};

export default Signup;
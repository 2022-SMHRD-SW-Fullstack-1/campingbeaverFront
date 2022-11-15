import React, { useState } from "react";
import { useHref, useNavigate } from "react-router-dom";
import styles from "./MyPage.module.scss";
import "./EditMyInfo.scss";
import axios from "axios";
import Logout from "../member/Logout";

const EditMyInfo = () => {
  const userId = localStorage.getItem("userId");
  const userName = localStorage.getItem("userName");

  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    id: "",
    pw1: "",
    pw2: "",
    name: "",
    address: "",
    address2: "",
    phone: "",
    email: "",
    birthday: "",
    checked: true,
  });

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

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const goToMain = () => {
    const time = new Date();
    let now = time.toTimeString();
    fetch("/beaver/update", {
      method: "POST",
      body: JSON.stringify({
        user_id: userId,
        user_pw: pw2,
        user_name: userName,
        user_phone: "010" + phone,
        user_addr: address + address2,
        user_type: "N",
        user_joindate: now,
        user_email: email,
      }),
    })
      .then((response) => {
        if (response.ok) {
          response.json();
        } else {
          alert("입력창을 확인해 주세요");
        }
      })

      .then((result) => {
        navigate("/");
      });
  };

  const handleDeleteProfile = () => {
    const time = new Date();
    let now = time.toTimeString();
    console.log(userId);

    if (window.confirm("확인을 누르면 회원 정보가 삭제됩니다.")) {
      fetch("/beaver/userdelete", {
        method: "POST",
        body: JSON.stringify({
          user_id: userId,
          user_pw: pw2,
          user_name: userName,
          user_phone: "010" + phone,
          user_addr: address + address2,
          user_type: "N",
          user_joindate: now,
          user_email: email,
        }),
      })
        .then(() => {
          localStorage.clear();
          alert("그동안 이용해주셔서 감사합니다.");
          navigate("/Logout");
        })
        .catch((err) => alert(err.response.data.message));
    } else {
      return;
    }
  };

  return (
    <div>
      <div>
        <h1>Edit Member Info</h1>
        <p className={styles.contact1}>회원 정보 수정</p>
      </div>

      <div>
        <h1 className="title"></h1>

        <title className="information">
          <h2>기본정보</h2>
          <div>*필수입력사항</div>
        </title>

        <form className="inputLine">
          <div className="inputTitle">ID</div>
          <div name="id">{userId}</div>

          <div className="inputDescription"></div>
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
            name="pw2"
          />
          <div className="inputDescription"></div>
        </form>

        <form className="inputLine">
          <div className="inputTitle">Name</div>
          <div>{userName}</div>
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
            name="phone"
          />
          <div className="phoneDescription"></div>
        </form>

        <form className="inputLine">
          <div className="inputTitle">E-Mail</div>
          <input
            type="text"
            className="userInput"
            name="email"
            onChange={handleInput}
          />
          <div className="inputDescription"></div>
        </form>

        <button onClick={goToMain} className="editBtn">
          정보 수정하기
        </button>

        <button onClick={handleDeleteProfile} className="editBtn">
          회원 탈퇴하기
        </button>
      </div>
    </div>
  );
};

export default EditMyInfo;

import React from "react";
import styles from "./MyPage.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import SideNav from "./SideNav";

const userName = localStorage.getItem("userName");
const userEmail = localStorage.getItem("userEmail");
const userId = localStorage.getItem("userId");

const MyPage = () => {
  return (
    <div className={styles.top}>
      <div className={styles.myInfoContainer}>
        <p className={styles.MyPage}>{userName}님 반가워요!</p>
        <p>{userEmail}</p>
      </div>
      <SideNav userId={userId} />
    </div>
  );
};

export default MyPage;

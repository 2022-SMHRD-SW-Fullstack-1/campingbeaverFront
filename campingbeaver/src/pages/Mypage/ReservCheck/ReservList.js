import React, { useState, useEffect } from "react";
import ReservEmpty from "./ReservEmpty";
import ReservNotEmpty from "./ReservNotEmpty";
import styles from "./ReservList.module.scss";
import axios from "axios";

const ReservList = (props) => {
  const [reservList, setReservList] = useState([]);
  const reservEmpty = reservList.length === 0;

  useEffect(() => {
    axios
      .get(`/beaver/reservlist/${props.userId}`, {
        headers: {
          Authorization: localStorage.access_token,
        },
      })
      .then((res) => {
        setReservList(res.data);
      })
      .catch((error) => console.log("Network Error: ", error));
  }, []);

  return (
    <div>
      <div>
        <h1 className={styles.contact}>My Reservation</h1>
        <p className={styles.contact1}>예약 / 취소 내역</p>
      </div>{" "}
      {reservEmpty ? (
        <ReservEmpty />
      ) : (
        <ReservNotEmpty reservList={reservList} />
      )}
    </div>
  );
};

export default ReservList;

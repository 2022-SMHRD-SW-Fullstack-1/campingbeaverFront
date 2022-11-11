import React from "react";
import ReservContent from "./ReservContent";
import Header from "../../components/Layout/Header";
import FilterButton from "./FilterButton";
import Styles from "./Reservation.module.scss";
import Reservcamp from "./ReservCamp";

const Reservation = () => {
  return (
    <div className={Styles.reservbutton}>
      <FilterButton />
    </div>
  );
};

export default Reservation;

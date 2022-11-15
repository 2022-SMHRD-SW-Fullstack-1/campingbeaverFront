import React from "react";
import Styles from "./Reservation.module.scss";
import FilterButton from "./FilterButton";

const ReservContent = () => {
  return (
    <div className={Styles.reservbutton}>
      <FilterButton />
    </div>
  );
};

export default ReservContent;

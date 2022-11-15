import React from "react";
import FilterButton from "./FilterButton";
import Styles from "./Reservation.module.scss";

const Reservation = () => {
  return (
    <div className={Styles.reservbutton}>
      <FilterButton />
    </div>
  );
};

export default Reservation;

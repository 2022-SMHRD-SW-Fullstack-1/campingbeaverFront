import React from "react";
import styles from "./Layout.module.scss";
import Survey from "./Survey";
import MainRecomm from "./MainRecomm";
import SubRecomm from "./SubRecomm";

const Layout = () => {
  return (
    <div className={styles.wrap}>
      <Survey />
      <MainRecomm />
      <SubRecomm />
    </div>
  );
};

export default Layout;

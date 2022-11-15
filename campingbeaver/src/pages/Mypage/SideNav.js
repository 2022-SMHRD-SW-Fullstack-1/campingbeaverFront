import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import EditMyInfo from "./EditMyInfo";
import ReservList from "./ReservCheck/ReservList";
import styles from "./SideNav.module.scss";
import WishList from "./WishList/WishList";
import "./SideNav.css";
import ReviewList from "../Review/ReviewList";
import { useParams } from "react-router-dom";

const SideNav = () => {
  const params = useParams();
  const [tab, setTab] = useState(params.tab);
  const userId = localStorage.getItem("userId");

  function TabContent(props) {
    if (props.tab === 0) {
      return (
        <div>
          <ReservList userId={userId} />
        </div>
      );
    } else if (props.tab === 1) {
      return (
        <div>
          <WishList userId={userId} />
        </div>
      );
    } else if (props.tab === 2) {
      return (
        <div>
          <ReviewList userId={userId} />
        </div>
      );
    } else if (props.tab === 3) {
      return (
        <div>
          <EditMyInfo userId={userId} />
        </div>
      );
    }
  }

  const clickHandle = () => {
    if (tab == 0) {
      document.getElementsByClassName("0")[0].click();
    } else if (tab == 1) {
      document.getElementsByClassName("1")[0].click();
    } else if (tab == 2) {
      document.getElementsByClassName("2")[0].click();
    } else if (tab == 3) {
      document.getElementsByClassName("3")[0].click();
    }
  };

  useEffect(() => {
    clickHandle();
  });

  return (
    <div className={styles.SideNav}>
      <div>
        <Nav
          className="flex-column mt-5 mb-3"
          variant="tabs"
          defaultActiveKey="link-0"
        >
          <Nav.Link className={styles.head} eventKey="disabled" disabled>
            My Page
          </Nav.Link>

          <Nav.Link
            className="0"
            eventKey="link-0"
            onClick={() => {
              setTab(0);
            }}
          >
            예약/취소 정보
          </Nav.Link>

          <Nav.Link
            className="1"
            eventKey="link-1"
            onClick={() => {
              setTab(1);
            }}
          >
            관심 상품
          </Nav.Link>

          <Nav.Link
            className="2"
            eventKey="link-2"
            onClick={() => {
              setTab(2);
            }}
          >
            리뷰 관리
          </Nav.Link>

          <Nav.Link
            className="3"
            eventKey="link-3"
            onClick={() => {
              setTab(3);
            }}
          >
            회원 정보 수정
          </Nav.Link>
        </Nav>
      </div>

      <div className={styles.myReservation}>
        <TabContent tab={tab} />
      </div>
      <div></div>
    </div>
  );
};

export default SideNav;

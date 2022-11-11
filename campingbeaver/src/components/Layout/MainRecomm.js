import React, { useEffect, useState } from "react";
import styles from "./MainRecomm.module.scss";
import ITEM_CARD_DATA from "../../data/wishList.json";
import left from "../img/back.png";
import right from "../img/next.png";
import axios from "axios";
import { Link } from "react-router-dom";

const MainRecomm = () => {
  const [items, setItems] = useState([]);
  const [move, setMove] = useState(0);

  const IMG_WIDTH = 300;
  const moveRight = () => {
    if (move >= -(items.length * IMG_WIDTH) + IMG_WIDTH * 3) {
      setMove((move) => move - IMG_WIDTH);
    }
  };

  const moveLeft = () => {
    if (move <= -IMG_WIDTH) {
      setMove((move) => move + IMG_WIDTH);
    }
  };

  useEffect(() => {
    axios.get("/beaver/pkglist").then((response) => {
      console.log(response.data);
      setItems(response.data);
    });
  }, []);

  return (
    <div className={styles.slider}>
      <img
        src={left}
        className={styles.leftArrow}
        onClick={moveLeft}
        alt="화살표 아이콘"
      />
      <img
        src={right}
        className={styles.rightArrow}
        onClick={moveRight}
        alt="화살표 아이콘"
      />
      <div className={styles.carouselWrapper}>
        <div className={styles.recommendTitleBox}>
          <h1>New Package</h1>
          <p>새롭게 출시된 패키지를 만나보세요</p>
        </div>
        <div
          className={styles.carousel}
          style={{ transform: `translateX(${move}px)` }}
        >
          {items.map(({ pkg_seq, pkg_name, pkg_photo }) => {
            return (
              <RecommItem
                key={pkg_seq}
                name={pkg_name}
                img={pkg_photo}
                seq={pkg_seq}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
const RecommItem = ({ img, name, seq }) => {
  return (
    <div className={styles.imgBox}>
      <Link to={`/storedetail${seq}`}>
        <img src={img} alt="제품 사진" />
      </Link>
      <div className={styles.text}>
        <p className={styles.recommendItemName}>{name}</p>
      </div>
    </div>
  );
};

export default MainRecomm;

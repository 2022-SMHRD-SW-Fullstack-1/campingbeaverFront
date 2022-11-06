import React, { useState } from 'react'
import styles from './MainRecomm.module.scss'
import ITEM_CARD_DATA from '../../data/wishList.json'
import left from '../img/back.png'
import right from '../img/next.png'


const MainRecomm = () => {
  
  const [move, setMove] = useState(0);
  
  const IMG_WIDTH = 389;
  const moveRight = () => {
    if (move >= -(ITEM_CARD_DATA.length * IMG_WIDTH) + IMG_WIDTH * 3) {
      setMove(move => move - IMG_WIDTH);
    }
  };

  const moveLeft = () => {
    if (move <= -IMG_WIDTH) {
      setMove(move => move + IMG_WIDTH);
    }
  };

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
          <p>함께 사용하기 좋은 제품</p>
        </div>
      <div
        className={styles.carousel}
        style={{ transform: `translateX(${move}px)` }}
      >
        {ITEM_CARD_DATA.wish.map(({wishName, wishPic}) => {
      return (
        <RecommItem
          key={wishName}
          name={wishName}
          img={wishPic}
        />
      );
    })}
      </div>
    </div>
  </div>
);  
    
 

}
const RecommItem = ({img, name}) => {
  return(
    <div className={styles.imgBox}>
      <img src={img} alt="제품 사진"/>
      <div className={styles.text}>
        <p className={styles.recommendItemName}>{name}</p>
      </div>
    </div>
  )
}


export default MainRecomm

import axios from 'axios'
import React, { useState, useEffect } from 'react'
import styles from '../MyPage.module.scss'
import WishEmpty from './WishEmpty'
import WishNotEmpty from './WishNotEmpty'

const WishList = () => {
  const [wishList, setWishList] = useState([]);
  const wishEmpty = wishList.length ===0;  
  
  useEffect(()=> {

    fetch('/data/wishList.json', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('Authorization'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setWishList(data);
      });
  }, []);
      

  return (
    <div>
            
              <div className={styles.top}>
                <h1 className={styles.contact}>
                  Wish List
                </h1>
                <p className={styles.contact1}>관심상품</p>
              </div>
            


            <div className={styles.ListContainer}>
                {wishEmpty ? (
                  <WishEmpty />
                ) : (
                  <WishNotEmpty wishList={wishList} />
                )}
            </div>  
    </div>
  )
}

export default WishList
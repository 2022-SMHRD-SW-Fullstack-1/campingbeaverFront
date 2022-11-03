import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styles from '../MyPage.module.scss'
import WishEmpty from './WishEmpty'
import WishNotEmpty from './WishNotEmpty'

const WishList = () => {
  const [wishList, setWishList] = useState([]);
  const wishEmpty = wishList.length ===0;  
  
  // useParams 
  // product 1
  
  // BE => /id 
  // '/beaver/wishlist/admin' 
  
  let url = '/beaver/wishlist/admin'
  const params = useParams();
  
  useEffect(()=> {
    // const {userId} = params.id
    const userId = 'admin'
    axios.get(`/beaver/wishlist/${userId}`,
      { headers: {
          Authorization: localStorage.access_token
      }}
    )
    .then((res) => {
        //console.log(res.data)
        setWishList(res.data)
      })
      .catch((error)=>console.log('Network Error: ', error))
    },[]);
    
  

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
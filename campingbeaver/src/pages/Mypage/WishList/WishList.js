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
    // const userId = params.id
    const userId = 'admin'
    axios.get(`/beaver/wishlist/${userId}`)
    .then((res) => {
        console.log(res.data)
    })
    .catch((error)=>console.log('Network Error: ', error))
  },[wishList]);
 
  // useEffect(()=> {
  //   axios({
  //     url:'/beaver/wishlist/admin',
  //     method: 'post',
  //     data: {user_id : 'admin'},
  //     baseURL: 'http://localhost:8123',
  //     responseType:'json',
  //     withCredentials: true,
  // }     
  // ).then(function(response) {
  //   setWishList(response.data)
  //   console.log(response.data)
  //   console.log(response.status)
  // })
  // })    

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
import React from 'react'
import WishItem from './WishItem'
import styles from '../MyPage.module.scss'
const WishNotEmpty = ({wishList}) => {
  return (
    <>
        {wishList.wish.map((item, i)=>{
            return <WishItem key={i} item={item} />;
        })}
    </>
  )
}

export default WishNotEmpty
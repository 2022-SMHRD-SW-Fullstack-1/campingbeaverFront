import React from 'react'
import WishItem from './WishItem'
import styles from '../MyPage.module.scss'
const WishNotEmpty = ({wishList}) => {
  return (
    <>
        {wishList && wishList.map(({pkg_name, pkg_price, pkg_photo})=>{
            return (<WishItem 
                    wishName={pkg_name}
                    wishPrice={pkg_price}
                    wishPic={pkg_photo}
                   />)
        })}
    </>
  )
}

export default WishNotEmpty
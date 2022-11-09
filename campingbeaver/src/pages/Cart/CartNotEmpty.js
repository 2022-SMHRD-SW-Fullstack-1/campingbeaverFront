import React from 'react'
import CartItem from './CartItem'

const CartNotEmpty = ({cartList}) => {
  return (
    <>
        {cartList && cartList.map(({basket_seq,pkg_name, pkg_price, pkg_photo})=>{
            return (<CartItem 
                    key={basket_seq}
                    basket_seq={basket_seq}
                    CartName={pkg_name}
                    CartPrice={pkg_price}
                    CartPic={pkg_photo}
                   />)
        })}
    </>
  )
}

export default CartNotEmpty
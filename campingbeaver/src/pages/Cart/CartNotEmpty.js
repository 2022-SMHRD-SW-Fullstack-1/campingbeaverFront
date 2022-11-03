import React from 'react'
import CartItem from './CartItem'

const CartNotEmpty = ({cartList}) => {
  return (
    <>
        {cartList && cartList.map(({pkg_seq, basket_seq, user_id})=>{
            return (<CartItem 
                    CartName={pkg_seq}
                    CartPrice={basket_seq}
                    CartPic={user_id}
                   />)
        })}
    </>
  )
}

export default CartNotEmpty
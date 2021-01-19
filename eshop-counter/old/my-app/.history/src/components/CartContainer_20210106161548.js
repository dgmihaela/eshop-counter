import React, {useState, useEffect} from 'react'


const CartContainer = () => {

    const {cartFlagValue} = useSelector((state) => state).flagCartClickedSlice;

    console.log('din app', cartFlagValue)
    return(
        <div>
            cart page
        </div>
    )
}

export default CartContainer;
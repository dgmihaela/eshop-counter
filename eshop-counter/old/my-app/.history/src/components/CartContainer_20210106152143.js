import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';

const CartContainer = () => {

    const {cartFlagValue} = useSelector(isClicked);

    console.log('din cart', cartFlagValue)

    return(
        <div>
            cart page
        </div>
    )
}

export default CartContainer;
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement } from '../slices/counterSlice';

import plus from '../assets/images/plus.png';
import minus from '../assets/images/minus.png';

const Counter = ({product}) => {
    const  {counter}  = useSelector((state) => state).counterSlice;

    const dispatch = useDispatch();

    const countItems = JSON.parse(JSON.stringify(counter));
    console.log('count items',countItems)

    console.log(product.id)

    function increment(event) {
        event.preventDefault(); 
        dispatch(decrement({productId: product.id, nrItems: countItems.nrItems }))
    }

    return(
        <div>
            <div className='btns-counter h-12 box-border flex flex-wrap content-start'>
                <button onClick={(e) => increment} className='inline-block rounded rounded-r-none w-12 h-12 bg-gray-200 pl-3 pt-1.5 hover:bg-gray-300' >
                    <div className='w-6 h-6 bg-no-repeat bg-contain' style={{backgroundImage: `url(${minus})`}}></div>
                </button>
                <p className='inline-block w-12 h-12 text-center bg-gray-100 leading-10 '><span>{countItems.nrItems}</span></p>
                <button onClick={(e) => {e.preventDefault(); dispatch(increment({productId: product.id, nrItems: countItems.nrItems }))}} className='inline-block rounded rounded-l-none w-12 h-12 bg-gray-200 pl-3 pt-1.5 hover:bg-gray-300' >
                    <div className='w-6 h-6 bg-no-repeat bg-contain' style={{backgroundImage: `url(${plus})`}}></div>
                </button>
            </div>  
        </div>
    )
}

export default Counter;
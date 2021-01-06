import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { setQuantity, decrement } from '../slices/counterSlice';

import plus from '../assets/images/plus.png';
import minus from '../assets/images/minus.png';

const Counter = ({product}) => {
    const  {counter}  = useSelector((state) => state).counterSlice;

    const thisCount = counter[product.id] || 0;
    const dispatch = useDispatch();

    const countItems = JSON.parse(JSON.stringify(counter));
    console.log('count items',countItems)

    console.log(product.id)

    function incrementComp(event) {
        event.preventDefault();
       
    }

    function decrementComp(event) {
        event.preventDefault();
        
    }

    return(
        <div>
            <div className='btns-counter h-12 box-border flex flex-wrap content-start'>
                <button type='button' onClick={() => dispatch(setQuantity({productId: product.id, nrItems: thisCount > 0 ? thisCount - 1 : 0 }))} className='inline-block rounded rounded-r-none w-12 h-12 bg-gray-200 pl-3 pt-1.5 hover:bg-gray-300' >
                    <div className='w-6 h-6 bg-no-repeat bg-contain' style={{backgroundImage: `url(${minus})`}}></div>
                </button>
                <p className='inline-block w-12 h-12 text-center bg-gray-100 leading-10 '><span>{thisCount}</span></p>
                <button type='button' onClick={() =>  dispatch(setQuantity({productId: product.id, nrItems: thisCount + 1 }))} className='inline-block rounded rounded-l-none w-12 h-12 bg-gray-200 pl-3 pt-1.5 hover:bg-gray-300' >
                    <div className='w-6 h-6 bg-no-repeat bg-contain' style={{backgroundImage: `url(${plus})`}}></div>
                </button>
            </div>  
        </div>
    )
}

export default Counter;
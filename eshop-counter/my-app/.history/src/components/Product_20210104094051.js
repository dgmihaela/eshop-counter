import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement } from '../slices/counterSlice';

import star from '../assets/images/star.png';
import plus from '../assets/images/plus.png';
import minus from '../assets/images/minus.png';
import greyStar from '../assets/images/greyStar.png';

const Product = ({product}) => {

    const  {counter}  = useSelector((state) => state).counterSlice;

    const dispatch = useDispatch();
   const countItems = {...counter};

   console.log('count items',countItems)

   console.log(product.id)
    
    return(
        <div className='w-80 h-96 bg-gray-50 shadow-md py-5 px-5 '>
            <p className='text-2xl font-bold'>{product.title}</p>
           
            <p className='text-lg my-2' >{product.description}</p>
            
            <p className='text-xl my-2'>&#36;{product.price}</p>
        
            <div className='w-6 h-6 mt-2 mb-4 inline-block'>
                <div className='bg-contain w-6 h-6 bg-no-repeat' style={{backgroundImage: `url(${star})`}}></div>
            </div>
            <div className='w-6 h-6 mt-2 mb-4 inline-block'>
                <div className='bg-contain w-6 h-6 bg-no-repeat' style={{backgroundImage: `url(${greyStar})`}}></div>
            </div>
            <div className='btns-counter h-12 box-border flex flex-wrap content-start'>
                <button onClick={() => dispatch(decrement())} className='inline-block rounded rounded-r-none w-12 h-12 bg-gray-200 pl-3 pt-1.5 hover:bg-gray-300' >
                    <div className='w-6 h-6 bg-no-repeat bg-contain' style={{backgroundImage: `url(${minus})`}}></div>
                </button>
                <p className='inline-block w-12 h-12 text-center bg-gray-100 leading-10 '><span>{countItems.nrItems}</span></p>
                <button onClick={() => dispatch(increment({productId: product.id, nrItems: countItems.nrItems }))} className='inline-block rounded rounded-l-none w-12 h-12 bg-gray-200 pl-3 pt-1.5 hover:bg-gray-300' >
                    <div className='w-6 h-6 bg-no-repeat bg-contain' style={{backgroundImage: `url(${plus})`}}></div>
                </button>
            </div>  
        
       </div>
    )
}

export default Product;
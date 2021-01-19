import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useSelector, useDispatch} from 'react-redux';
import { counterSlice, setQuantity } from '../slices/counterSlice';
import {updateQuantity} from '../slices/productsSlice';

import plus from '../assets/images/plus.png';
import minus from '../assets/images/minus.png';

const Counter = ({product}) => {
  
    const  {productWithQuantity}  = useSelector((state) => state).counterSlice;
    const thisCount = productWithQuantity[product.id] || 0;
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async() => {
            
            const result = await axios.put(`http://localhost:9000/products/${product.id}`,
            {   quantity: thisCount,
                id: product.id,
                title: product.title,
                category_id: category_id

            });
         
            dispatch(updateQuantity(result.data));

        }
        fetchData();
    }, [thisCount]);

    return(
        
        <div>
            <div className='btns-counter h-12 box-border flex flex-wrap content-start'>
                <button type='button' onClick={() => dispatch(setQuantity({productId: product.id, quantity: thisCount > 0 ? thisCount - 1 : 0 }))} className='inline-block rounded rounded-r-none w-12 h-12 bg-gray-200 pl-3 pt-1.5 hover:bg-gray-300' >
                    <div className='w-6 h-6 bg-no-repeat bg-contain' style={{backgroundImage: `url(${minus})`}}></div>
                </button>
                <p className='inline-block w-12 h-12 text-center bg-gray-100 leading-10 '><span>{thisCount}</span></p>
                <button type='button' onClick={() => dispatch(setQuantity({productId: product.id, quantity: thisCount + 1 }))} className='inline-block rounded rounded-l-none w-12 h-12 bg-gray-200 pl-3 pt-1.5 hover:bg-gray-300' >
                    <div className='w-6 h-6 bg-no-repeat bg-contain' style={{backgroundImage: `url(${plus})`}}></div>
                </button>
            </div>  
        </div>
    )
}

export default Counter;
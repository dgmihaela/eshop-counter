import React, {useEffect} from 'react';
import Counter from './Counter';
import axios from "axios";
import {useSelector, useDispatch} from 'react-redux';
import { setQuantity } from '../slices/counterSlice';
import { unwrapResult } from '@reduxjs/toolkit'

import plus from '../assets/images/plus.png';
import minus from '../assets/images/minus.png';
import star from '../assets/images/star.png';
import greyStar from '../assets/images/greyStar.png';

const Product = ({callback, product}) => {

    const {productWithQuantity} = useSelector((state) => state).counterSlice;
    const thisCount = productWithQuantity[product.id] || 1;
    const dispatch = useDispatch();


   const constNewProduct = JSON.parse(JSON.stringify(product));

   let totalCostGlobal = constNewProduct.totalCost;

    useEffect(() => {
        const fetchData = async() => {

            const result = await axios.put(`http://localhost:9000/products/${product.id}`,
             {  title: product.title,
                description:product.description,
                id_category: product.id_category,
                price: product.price,
                stars: product.stars,
                id: product.id,
                quantity: thisCount,
                totalCost: product.totalCost
            });

            callback(result.data)
        }
        fetchData();
    }, [thisCount]);

    function counterAction() {
       if(thisCount === 1) {
        totalCostGlobal = constNewProduct.price;
       } else if(thisCount > 1 ) {
        totalCostGlobal = constNewProduct.price * thisCount;
       }
    }
    

    const decrementAction = () => {
        dispatch(setQuantity({productId: product.id, quantity: thisCount > 1 ? thisCount - 1 : 1 }))
    }

    const incrementAction = () => {
        dispatch(setQuantity({productId: product.id, quantity: thisCount + 1 }))
    }



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
            <div>
                <div className='btns-counter h-12 box-border flex flex-wrap content-start'>
                    <button type='button' onClick={decrementAction } className='inline-block rounded rounded-r-none w-12 h-12 bg-gray-200 pl-3 pt-1.5 hover:bg-gray-300' >
                        <div className='w-6 h-6 bg-no-repeat bg-contain' style={{backgroundImage: `url(${minus})`}}></div>
                    </button>
                    <p className='inline-block w-12 h-12 text-center bg-gray-100 leading-10 '> <span>{thisCount}</span></p>
                    <button type='button' onClick={incrementAction} className='inline-block rounded rounded-l-none w-12 h-12 bg-gray-200 pl-3 pt-1.5 hover:bg-gray-300' >
                        <div className='w-6 h-6 bg-no-repeat bg-contain' style={{backgroundImage: `url(${plus})`}}></div>
                    </button>
                </div>  
            </div>
       </div>
    )
}

export default Product;
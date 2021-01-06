import React, {useEffect, useState} from 'react';
import axios from "axios";
import {selectProducts, getProducts} from '../slices/productsSlice';
import {useSelector, useDispatch} from 'react-redux';
import { selectCategories } from '../slices/categoriesSlice';

import star from '../assets/images/star.png';
import plus from '../assets/images/plus.png';
import minus from '../assets/images/minus.png';
import greyStar from '../assets/images/greyStar.png';

const Product = ({category}) => {

    const dispatch = useDispatch();

    const allProducts = useSelector(selectProducts);

    console.log(allProducts)

    useEffect(() => {
        const fetchData = async() => {
            
            const result = await axios.get(`http://localhost:9000/products?id_category=${category.id}`);
           
            dispatch(getProducts(result.data));
        }
        fetchData();
    }, []);

    const title = allProducts.map( (prod => <p className='text-2xl font-bold'>{prod.title}</p>));
    const description = allProducts.map( (prod => <p className='text-2xl font-bold'>{prod.description}</p>));
    const price = allProducts.map( (prod => <p className='text-2xl font-bold'>{prod.price}</p>));

    return(
        <div className='w-80 h-96 bg-gray-50 shadow-md py-5 px-5 '>
            {/* <p className='text-2xl font-bold'>{prod.title}</p> */}
            {title}
            {/* <p className='text-lg my-2' >{prod.description}</p> */}
            {description}
            {/* <p className='text-xl my-2'>&#36;{prod.price}</p> */}
            {price}
            <div className='w-6 h-6 mt-2 mb-4 inline-block'>
                <div className='bg-contain w-6 h-6 bg-no-repeat' style={{backgroundImage: `url(${star})`}}></div>
            </div>
            <div className='w-6 h-6 mt-2 mb-4 inline-block'>
                <div className='bg-contain w-6 h-6 bg-no-repeat' style={{backgroundImage: `url(${greyStar})`}}></div>
            </div>
            <div className='btns-counter h-12 box-border flex flex-wrap content-start'>
                <button className='inline-block rounded rounded-r-none w-12 h-12 bg-gray-200 pl-3 pt-1.5 hover:bg-gray-300' >
                    <div className='w-6 h-6 bg-no-repeat bg-contain' style={{backgroundImage: `url(${minus})`}}></div>
                </button>
                <p className='inline-block w-12 h-12 text-center bg-gray-100 leading-10 '><span>44</span></p>
                <button className='inline-block rounded rounded-l-none w-12 h-12 bg-gray-200 pl-3 pt-1.5 hover:bg-gray-300' >
                    <div className='w-6 h-6 bg-no-repeat bg-contain' style={{backgroundImage: `url(${plus})`}}></div>
                </button>
            </div>  
        
            
            )}
       </div>
    )
}

export default Product;
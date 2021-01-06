import React, {useEffect, useState} from 'react';
import axios from "axios";
import {selectProducts, getProducts} from '../slices/productsSlice';
import {useSelector, useDispatch} from 'react-redux';
import { selectCategories } from '../slices/categoriesSlice';

import star from '../assets/images/star.png';
import plus from '../assets/images/plus.png';
import minus from '../assets/images/minus.png';
import greyStar from '../assets/images/greyStar.png';
import Product from './Product';

const RightSideProducts = () => {

    const categories = useSelector(selectCategories);


    const dispatch = useDispatch();
    //const allProducts = useSelector(selectProducts);

    // useEffect(() => {
    //     const fetchData = async() => {
            
    //         const result = await axios.get(`http://localhost:9000/products?id_category=${category.id}`);
           
    //         dispatch(getProducts({products: result.data, id: category.id}));
    //         console.log(result.data)
    //     }
    //     fetchData();
    // }, []);


    return(
        <div  className='righttSide border-pink-600 w-4/5 '>
            <Product />
        </div>
    )
}

export default RightSideProducts;
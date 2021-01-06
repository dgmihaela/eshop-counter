import React, {useEffect, useState} from 'react';
import axios from "axios";
import {selectProducts, getProducts} from '../slices/productsSlice';
import {useSelector, useDispatch} from 'react-redux';
import { selectCategories } from '../slices/categoriesSlice';


import Product from './Product';

const RightSideProducts = () => {

    const categories = useSelector(selectCategories);

    const category = categories.map(category =>  <Product  category={category}/>)
    return(
        <div  className='righttSide border-pink-600 w-4/5 '>
           
        </div>
    )
}

export default RightSideProducts;
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {selectProducts, getProducts} from '../slices/productsSlice';
import {useSelector, useDispatch} from 'react-redux';
import { selectCategories } from '../slices/categoriesSlice';


import Product from './Product';

const RightSideProducts = () => {
    
    const allProducts = useSelector(selectProducts);
    const categories = useSelector(selectCategories);

    for(let category of categories){
        console.log(category)
    }

    // useEffect(() => {
    //     const fetchData = async() => {
            
    //         const result = await axios.get(`http://localhost:9000/products?id_category=${id_category}`);
           
    //         dispatch(getProducts(result.data));
    //     }
    //     fetchData();
    // }, []);


    const products = allProducts.map(prod =>  <Product key={prod.id}  product={prod}/>);
    return(
        <div  className='righttSide border-pink-600 w-4/5 '>
           {products}
        </div>
    )
}

export default RightSideProducts;
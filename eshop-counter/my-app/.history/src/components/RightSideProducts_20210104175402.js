import React, {useEffect} from 'react';
import axios from "axios";
import {selectProducts, getProducts} from '../slices/productsSlice';
import {useSelector, useDispatch} from 'react-redux';
import {updateQuantity} from '../slices/productsSlice';

import Product from './Product';

const RightSideProducts = ({category}) => {
    
    const allProducts = useSelector(selectProducts);
    const selectedProduct = allProducts[category.id] || []
    const {value} = useSelector((state) => state).flagIsClickedSlice;

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async() => {
            
            const result = await axios.get(`http://localhost:9000/products?id_category=${category.id}`);
           
            dispatch(getProducts({products: result.data, id: category.id}));
        }
        fetchData();
    }, []);

    function updateProductQuantity(updatedProduct){
        let indexOfOld = -1;
        for (let op of selectedProduct) {

            console.log(op)
            if (op.id == updatedProduct.id) {
                indexOfOld = selectedProduct.indexOf(op);
                break;
            }
        }
        let copyOldProducts = [...selectedProduct];
        copyOldProducts[indexOfOld] = updatedProduct;
        dispatch(updateQuantity(copyOldProducts));
    }

    const product = selectedProduct.map((prod, index) => {
        if( value.flag === true && value.id === prod.id_category){
            return <Product callback={updateProductQuantity} key={index}  product={prod}/>
        }
    });

    return(
        <div  className='rightSide border-pink-600 w-4/5 '>
           {product}
        </div>
    )
}

export default RightSideProducts;
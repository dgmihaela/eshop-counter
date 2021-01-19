import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { setQuantity } from '../slices/counterSlice';

import plus from '../assets/images/plus.png';
import minus from '../assets/images/minus.png';
import star from '../assets/images/star.png';
import greyStar from '../assets/images/greyStar.png';

const Product = ({ callback, product }) => {

    const { productWithQuantity } = useSelector((state) => state).counterSlice;
    const thisCount = productWithQuantity[product.id] || 0;
    const dispatch = useDispatch();

    const constNewProduct = JSON.parse(JSON.stringify(product));

    const [totalCost, setTotalCost] = useState(constNewProduct.price);


    const getProdCart = async () => {
        try {
            const result = await axios.get(`http://localhost:9000/cart/${product.id}`);

            console.log('GET: ', result.data)

            // callback(result.data);

        } catch (err) {
            console.log(err.message)
        }


    }

    const postProdCart = async () => {
        try {
            const result = await axios.post(`http://localhost:9000/cart`,
                {

                    id: product.id,
                    quantity: thisCount

                });

            console.log(result.data)

            // callback(result.data);

        } catch (err) {
            console.log(err.message)
        }


    }

    const putProdCart = async () => {
        try {
            const result = await axios.put(`http://localhost:9000/cart`,
                {

                    id: product.id,
                    quantity: thisCount

                });

            console.log(result.data)

            // callback(result.data);

        } catch (err) {
            console.log(err.message)
        }


    }

    useEffect(() => {
        const fetchData = async () => {

            const result = await getProdCart();

            // dispatch(getProducts({ products: result.data, id: category.id }));
        }
        fetchData();
    }, []);


    function counterAction() {
        let totalCostGlobal = constNewProduct.price;
        console.log('counter action: thisCount = ' + thisCount);
        if (thisCount === 0 && thisCount + 1 === 1) {
            totalCostGlobal = constNewProduct.price;
        } else if (thisCount + 1 === 2) {
            totalCostGlobal = (Math.round((constNewProduct.price * 2) * 100) / 100).toFixed(2);
        } else if (thisCount + 1 > 2) {
            totalCostGlobal = (Math.round((constNewProduct.price * (thisCount + 1)) * 100) / 100).toFixed(2);
        }
        console.log('counter action triggered: ', totalCostGlobal);
        setTotalCost(totalCostGlobal);
    }


    const decrementAction = () => {
        dispatch(setQuantity({ productId: product.id, quantity: thisCount > 0 ? thisCount - 1 : 0 }));
        counterAction();
    }

    const incrementAction = () => {
        dispatch(setQuantity({ productId: product.id, quantity: thisCount + 1 }));
        counterAction();
    }



    return (
        <div className='w-80 h-96 bg-gray-50 shadow-md py-5 px-5 '>
            <p className='text-2xl font-bold'>{product.title}</p>

            <p className='text-lg my-2' >{product.description}</p>

            <p className='text-xl my-2' onChange={counterAction}>&#36;{totalCost}</p>

            <div className='w-6 h-6 mt-2 mb-4 inline-block'>
                <div className='bg-contain w-6 h-6 bg-no-repeat' style={{ backgroundImage: `url(${star})` }}></div>
            </div>
            <div className='w-6 h-6 mt-2 mb-4 inline-block'>
                <div className='bg-contain w-6 h-6 bg-no-repeat' style={{ backgroundImage: `url(${greyStar})` }}></div>
            </div>
            <div>
                <div className='btns-counter h-12 box-border flex flex-wrap content-start'>
                    <button type='button' onClick={decrementAction} className='inline-block rounded rounded-r-none w-12 h-12 bg-gray-200 pl-3 pt-1.5 hover:bg-gray-300' >
                        <div className='w-6 h-6 bg-no-repeat bg-contain' style={{ backgroundImage: `url(${minus})` }}></div>
                    </button>
                    <p className='inline-block w-12 h-12 text-center bg-gray-100 leading-10 '> <span>{thisCount}</span></p>
                    <button type='button' onClick={incrementAction} className='inline-block rounded rounded-l-none w-12 h-12 bg-gray-200 pl-3 pt-1.5 hover:bg-gray-300' >
                        <div className='w-6 h-6 bg-no-repeat bg-contain' style={{ backgroundImage: `url(${plus})` }}></div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product;
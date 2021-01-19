import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { setQuantity } from '../slices/counterSlice';

import plus from '../assets/images/plus.png';
import minus from '../assets/images/minus.png';



const Counter = ({ product }) => {

    const { productWithQuantity } = useSelector((state) => state).counterSlice;

    // let thisCount = productWithQuantity[product.id] || 0;
    const constNewProduct = JSON.parse(JSON.stringify(product));
    const dispatch = useDispatch();

    const [totalCost, setTotalCost] = useState(constNewProduct.price);
    const [initialQuantity, setInitialQuantity] = useState(0);

    // const [isPost, setIsPost] = useState({ posted: false, prodId: product.id });

    const getProdCart = async () => {
        try {
            console.log('getting cart product: ' + product.id);
            const result = await axios.get(`http://localhost:9000/cart/${product.id}`);
            setInitialQuantity(result.data.quantity);
            console.log('quantity for product: ', result.data.quantity);
            // thisCount = result.data.quantity;
            dispatch(setQuantity({ productId: product.id, quantity: result.data.quantity }));

        } catch (err) {
            console.log(err.message)
        }
    }

    const postProdCart = async () => {
        // if (isPost.posted === false && initialQuantity === 1) {


        try {
            const result = await axios.post(`http://localhost:9000/cart`,
                {
                    id: product.id,
                    title: product.title,
                    quantity: 1,
                    price: product.price
                    // isPost: true
                });
            // setIsPost({ ...isPost, posted: result.data.isPost, prodId: result.data.id })
            console.log(result.data)
        } catch (err) {
            console.log(err.message)
        }
        // }
    }

    const deleteProdCart = async () => {
        try {
            const result = await axios.delete(`http://localhost:9000/cart/${product.id}`);
            console.log('deleted product: ', result);
            // setIsPost({ ...isPost, posted: false, prodId: result.data.id })
        } catch (err) {
            console.log(err.message)
        }
    }

    const putProdCart = async (nq) => {
        console.log('new quantity: ', nq);
        // if (isPost.posted === true) {
        try {
            const result = await axios.put(`http://localhost:9000/cart/${product.id}`,
                {
                    id: product.id,
                    title: product.title,
                    quantity: nq,
                    price: product.price
                    // isPost: isPost.posted
                });

        } catch (err) {
            console.log(err.message)
        }
        // }
    }

    useEffect(() => {
        const fetchData = async () => {
            const result = await getProdCart();
        }
        fetchData();
    }, []);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await postProdCart();
    //     }
    //     fetchData();

    //     const fetchData2 = async () => {
    //         const result2 = await putProdCart();
    //     }
    //     fetchData2();

    // }, [initialQuantity]);

    function counterAction(newCount, type) {
        console.log('new count value: ', newCount);
        console.log('type value: ', type);
        let totalCostGlobal = constNewProduct.price;
        if (newCount === 0 || newCount === 1) {
            totalCostGlobal = constNewProduct.price;
        } else if (newCount === 2) {
            totalCostGlobal = (Math.round((constNewProduct.price * 2) * 100) / 100).toFixed(2);
        } else if (newCount > 2) {
            totalCostGlobal = (Math.round((constNewProduct.price * (newCount)) * 100) / 100).toFixed(2);
        }
        setTotalCost(totalCostGlobal);
        setInitialQuantity(newCount);
        if (newCount == 0) {
            // DELETE
            deleteProdCart();
        } else {
            if (type == 'PUT') {
                //
                putProdCart(newCount);
                console.log('PUT 1  2->1');
            } else if (type == 'POST') {
                //
                postProdCart();
                console.log('POST 0->1')

            } else {
                // PUT
                putProdCart(newCount);
                console.log('PUT 2 null');
            }
        }
    }

    // 2 -> 1
    const decrementAction = () => {
        dispatch(setQuantity({ productId: product.id, quantity: initialQuantity > 0 ? initialQuantity - 1 : 0 }));
        counterAction(initialQuantity > 0 ? initialQuantity - 1 : 0, (initialQuantity - 1) == 1 ? 'PUT' : null);
    }

    // 0 -> 1
    const incrementAction = () => {
        dispatch(setQuantity({ productId: product.id, quantity: initialQuantity + 1 }));
        counterAction(initialQuantity + 1, (initialQuantity + 1) == 1 ? 'POST' : null);
    }


    return (
        <div className="flex">
            <div className='btns-counter h-12 box-border flex flex-wrap content-start'>
                <button type='button' onClick={decrementAction} className='inline-block rounded rounded-r-none w-12 h-12 bg-gray-200 pl-3 pt-1.5 hover:bg-gray-300' >
                    <div className='w-6 h-6 bg-no-repeat bg-contain' style={{ backgroundImage: `url(${minus})` }}></div>
                </button>
                <p className='inline-block w-12 h-12 text-center bg-gray-100 leading-10 '> <span>{initialQuantity}</span></p>
                <button type='button' onClick={incrementAction} className='inline-block rounded rounded-l-none w-12 h-12 bg-gray-200 pl-3 pt-1.5 hover:bg-gray-300' >
                    <div className='w-6 h-6 bg-no-repeat bg-contain' style={{ backgroundImage: `url(${plus})` }}></div>
                </button>
            </div>

            <div className="total-cost flex-1 pl-10"><p className='text-xl my-2' onChange={counterAction}>&#36;{totalCost}</p></div>
        </div>
    )
}

export default Counter;
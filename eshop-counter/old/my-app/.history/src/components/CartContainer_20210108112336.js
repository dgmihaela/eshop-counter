import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import axios from "axios";
import Counter from './Counter';

const CartContainer = () => {

    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            
            const result = await axios.get(`http://localhost:9000/cart`)
        
            setCartProducts(result.data)
        }
        fetchData();
    }, []);

    const productsinCart = cartProducts.map((prod,i) => {
        if(prod.quantity > 0){
            return(
                    <tr key={i}>
                        <td >{prod.title}</td>
                        <td>{prod.quantity}</td>
                        <td>
                           <Counter product={prod} />
                        </td>
                      
                    </tr>
            )
        }
    })

    return(
        <div>
            <table className="table-fixed">
                <thead>
                    <tr>
                    <th className="w-1/2 ...">Product</th>
                    <th className="w-1/4 ...">Quantity</th>
                    <th className="w-1/4 ...">Price</th>
                    </tr>
                </thead>
                <tbody>
                    { productsinCart}
                    <tr></tr>
                </tbody>
                </table>
        </div>
    )
}

export default CartContainer;
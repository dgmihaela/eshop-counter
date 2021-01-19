import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import axios from "axios";
import Counter from './Counter';
import { setQuantity } from '../slices/counterSlice';
import { useForm } from "react-hook-form";

const CartContainer = () => {

    const [cartProducts, setCartProducts] = useState([]);
    const { productWithQuantity } = useSelector((state) => state).counterSlice;

    const dispatch = useDispatch();

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    useEffect(() => {
        const fetchData = async() => {
            
            const result = await axios.get(`http://localhost:9000/cart`)
            console.log('result data: ', result.data);
            setCartProducts(result.data)
            for(let prod of result.data){
                dispatch(setQuantity({ productId: prod.id, quantity: result.data.quantity }));
            }
            

        }
        fetchData();
    }, []);

    const productsinCart = cartProducts.map((prod,i) => {
        if(prod.quantity > 0){
            return(
                <tr key={i}>
                    <td >{prod.title}</td>
                    <td>
                        <div>
                        <Counter product={prod} />
                        </div>
                        
                    </td>
                    <td>{prod.initialPrice * parseInt(productWithQuantity[prod.id])}
                    </td>

                    
                </tr>
            )
        }
    })

    function addressValidator(address) {
        if( address == 'aleea avrig' ) {
            return true;
        }
        return false;
    }

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
                <div className='formtest'>
                    <p>Form Test</p>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>Name</label>
                        <input name="name" ref={register({ required: true, maxLength: 20, minLength: 6 })} />
                        <label>Address</label>
                        <input name="address" ref={register({ required: true, validate: value => addressValidator(value), minLength: 6 })} />
                        <input type="submit" /> 
                    </form>
                </div>
        </div>
    )
}

export default CartContainer;
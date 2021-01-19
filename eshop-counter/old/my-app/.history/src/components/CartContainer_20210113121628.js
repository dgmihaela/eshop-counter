import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import axios from "axios";
import Counter from './Counter';
import { setQuantity } from '../slices/counterSlice';
import { useForm } from "react-hook-form";
import * as yup from "yup";




const CartContainer = () => {

    const [cartProducts, setCartProducts] = useState([]);
    const { productWithQuantity } = useSelector((state) => state).counterSlice;
    const dispatch = useDispatch();


    const Schema  = yup.object().shape({
        username: yup
          .string()
          .required()
          .min(3),
      });


    const { handleSubmit, register, reset, errors } = useForm({ validationSchema: Schema });

    function onSubmit(formData) {
      console.log(formData);
    }
  
    console.log(errors)




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
                <div>
                    <h1>react-hook-form</h1>
                    <form autoComplete="off" onSubmit={handleSubmit(onSubmit)} onReset={reset}>
                        <label>Username</label>
                        <input type="text" name="username" ref={register({required: true, maxLength: 20, minLength: 6})} />
                        {errors.username && "your input is required"}

                        <label>Age</label>
                        <input type="number" name="age" ref={register} />

                        <span>
                        <input type="checkbox" name="remember" ref={register} />
                        <label>Remember Me</label>
                        </span>

                        <button type="submit">Submit</button>
                    </form>
                </div>
        </div>
    )
}

export default CartContainer;
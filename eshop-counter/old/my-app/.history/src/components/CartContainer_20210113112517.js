import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import axios from "axios";
import Counter from './Counter';
import { setQuantity } from '../slices/counterSlice';
import { useForm } from "react-hook-form";
import * as yup from "yup";


const SignupSchema = yup.object().shape({
    firstName: yup.string().required(),
    age: yup
      .number()
      .required()
      .positive()
      .integer(),
    website: yup.string().url()
  });

const CartContainer = () => {

    const [cartProducts, setCartProducts] = useState([]);
    const { productWithQuantity } = useSelector((state) => state).counterSlice;
    const dispatch = useDispatch();



    const { register, handleSubmit, errors } = useForm({
        validationSchema: SignupSchema
      });
      const onSubmit = data => {
        alert(JSON.stringify(data));
      };




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
                    <div>
                        <label>First Name</label>
                        <input type="text" name="firstName" ref={register} />
                        {errors.firstName && <p>{errors.firstName.message}</p>}
                    </div>
                    <div style={{ marginBottom: 10 }}>
                        <label>Last Name</label>
                        <input type="text" name="lastName" ref={register} />
                        {errors.lastName && <p>{errors.lastName.message}</p>}
                    </div>
                    <div>
                        <label>Age</label>
                        <input type="text" name="age" ref={register} />
                        {errors.age && <p>{errors.age.message}</p>}
                    </div>
                    <div>
                        <label>Website</label>
                        <input type="text" name="website" ref={register} />
                        {errors.website && <p>{errors.website.message}</p>}
                    </div>
                    <input type="submit" />
                    </form>
                </div>
        </div>
    )
}

export default CartContainer;
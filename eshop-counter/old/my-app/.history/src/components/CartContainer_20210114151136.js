import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import axios from "axios";
import Counter from './Counter';
import { setQuantity } from '../slices/counterSlice';
import { useForm } from "react-hook-form";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const Schema = yup.object().shape({
    costName: yup
      .number()
      .typeError('Amount must be a number')
      .required(),
    costDetails: yup
      .string()
      .required()
      .min("Value min 6 char")
      .max("Value max 20 char"),
    type: yup.string().required(),
    rueValue: yup.string().required().url()
  });


const CartContainer = () => {

    const [cartProducts, setCartProducts] = useState([]);
    const { productWithQuantity } = useSelector((state) => state).counterSlice;
    const dispatch = useDispatch();


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
    });


    const { register, handleSubmit, errors } = useForm({
        mode: "onBlur",
        resolver: yupResolver(Schema)
      });
    
      const onSubmit = (data) => {
        alert(JSON.stringify(data));
      };


    return(
        <div>
            <table className="table-fixed">
                {/* <thead>
                    <tr>
                    <th className="w-1/2 ...">Product</th>
                    <th className="w-1/4 ...">Quantity</th>
                    <th className="w-1/4 ...">Price</th>
                    </tr>
                </thead>
                <tbody>
                    { productsinCart}
                    <tr></tr>
                </tbody> */}
                </table>
                <div className='border-dotted ring-1 ring-black'>
                    <h1>Hello React-hook-form</h1>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="individual-input mt-7">
                            <label htmlFor="costName">Cost Name</label>
                            <input
                                type="text"
                                ref={register}
                                name="costName"
                                placeholder="Cost operational depozit"
                            />
                            {errors.costName && <p>{errors.costName.message}</p>}
                        </div>
                        <div className="individual-input">
                            <label htmlFor="costDetails">Cost Details</label>
                            <input ref={register} name="cost" placeholder="Testeaza" />
                        </div>

                        <div className="individual-input">
                            <label htmlFor="type">Type</label>
                            <select ref={register} name="type">
                                <option>Fixed</option>
                                <option>Variable</option>
                            </select>
                        </div>

                        <section className="group">
                            <label htmlFor="rueValue">Rue Value</label>
                            <input ref={register} name="rueValue" />
                                <section className="sectionGroup">
                                    <div>
                                    <select
                                        className="selectionGroup-select"
                                        ref={register}
                                        name="type1"
                                    >
                                        <option>All</option>
                                        <option>Some</option>
                                    </select>
                                    <select
                                        className="selectionGroup-select"
                                        ref={register}
                                        name="type2"
                                    >
                                        <option>True</option>
                                        <option>False</option>
                                    </select>
                                    </div>
                                    <div>
                                        <select
                                        className="selectionGroup-select"
                                        ref={register}
                                        name="type3"
                                    >
                                        <option>Category1</option>
                                        <option>Category2</option>
                                    </select>
                                    <select
                                        className="selectionGroup-select"
                                        ref={register}
                                        name="type4"
                                    >
                                        <option>One</option>
                                        <option>Not One</option>
                                    </select>
                                    <input
                                        ref={register}
                                        name="adaugProdus"
                                        placeholder="adauga produs"
                                    />
                                    </div>
                                    <button className="add-new-section-group-btn" type="button">
                                    Add
                                    </button>
                                </section>                      
                            <button className="add-new-group-btn" type="button">
                                Add
                            </button>
                        </section>
                        <input className="save-btn" type="submit" />
                    </form>
                </div>
        </div>
    )
}

export default CartContainer;
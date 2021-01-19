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
      .test('lenght', 'Must be 2 characters', val => val.toString().length >= 2)
      .test('lenght1', 'Must be <12 characters', val => val.toString().length < 12)
      .min(10, "Min is 10")
      .max(88, 'Max is 88')
      .typeError('Amount must be a number')
      .required(),
    costDetails: yup
      .string()
      .required('Must enter a value'),
    type: yup.string().required('Select a type'),
    costType: yup.string().required(),
    rueValue: yup.string().required('Must enter a value').url(),
    type1: yup.string().required(),
    type2: yup.string().required(),
    type3: yup.string().required(),
    type4: yup.string().required(),
    adaugProdus: yup.string().required()
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
                <div >
                    <h1>Hello React-hook-form</h1>
                    <div className='mt-8'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="individual-input mt-7 pb-2">
                                <label className='mr-4 ' htmlFor="costName">Cost Name</label>
                                <input
                                    className='text-black border p-1 rounded'
                                    type="text"
                                    ref={register}
                                    name="costName"
                                    placeholder="Cost operational depozit"
                                />
                                {errors.costName && <p>{errors.costName.message}</p>}
                            </div>
                            <div className="individual-input pb-2">
                                <label className='mr-4' htmlFor="costDetails">Cost Details</label>
                                <input className='text-black border p-1 rounded' ref={register} name="cost" placeholder="Testeaza" />
                                {errors.cost && <p>{errors.cost.message}</p>}
                            </div>

                            <div className="individual-input pb-2">
                                <label className='mr-4 ' htmlFor="type">Cost Type</label>
                                <select className='text-black border p-1 rounded' ref={register} name="costType">
                                    <option>Fixed</option>
                                    <option>Variable</option>
                                </select>
                                {errors.costType && <p>{errors.costType.message}</p>}
                            </div>

                            <section className='group border-dotted border-2 ring-black p-4 my-4 overflow-auto'>
                                <label className='mr-4' htmlFor="rueValue">Rue Value</label>
                                <input className='text-black border p-1 rounded' ref={register} name="rueValue" placeholder='Rue Value' />
                                    <section className="sectionGroup border-dotted border-2 ring-black p-4 my-4 overflow-auto">
                                        <div className='pb-2'>
                                            <select
                                                className="selectionGroup-select mr-4 text-black border p-1 rounded"
                                                ref={register}
                                                name="type1"
                                            >
                                                <option>All</option>
                                                <option>Some</option>
                                            </select>
                                            {errors.type1 && <p>{errors.type1.message}</p>}
                                            <select
                                                className="selectionGroup-select mr-4 text-black border p-1 rounded"
                                                ref={register}
                                                name="type2"
                                            >
                                                <option>True</option>
                                                <option>False</option>
                                            </select>
                                            {errors.type2 && <p>{errors.type2.message}</p>}
                                        </div>
                                        <div className='pb-2'>
                                            <select
                                                className="selectionGroup-select mr-4 text-black border p-1 rounded"
                                                ref={register}
                                                name="type3"
                                            >
                                                <option>Category1</option>
                                                <option>Category2</option>
                                            </select>
                                            {errors.type3 && <p>{errors.type3.message}</p>}
                                            <select
                                                className="selectionGroup-select text-black border p-1 rounded"
                                                ref={register}
                                                name="type4"
                                            >
                                                <option>One</option>
                                                <option>Not One</option>
                                            </select>
                                            {errors.type4 && <p>{errors.type4.message}</p>}
                                            <input
                                                className='text-black border p-1 rounded'
                                                ref={register}
                                                name="adaugProdus"
                                                placeholder="Adauga produs"
                                                className='ml-4'
                                            />
                                            {errors.adaugProdus && <p>{errors.adaugProdus.message}</p>}
                                        </div>
                                        <button className="add-new-section-group-btn text-black border p-1 rounded ml-56 float-right" type="button">
                                            Add
                                        </button>
                                    </section>
                                  
                                    <button className="add-new-group-btn text-black border p-1 rounded float-right" type="button">
                                        Add
                                    </button>
                                                      
                               
                            </section>
                            <input className="save-btn text-black border p-1 rounded" type="submit" />
                        </form>
                    </div>
                    
                </div>
        </div>
    )
}

export default CartContainer;
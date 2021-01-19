import React, {useState, useEffect, Component } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import axios from "axios";
import Counter from './Counter';
import { setQuantity } from '../slices/counterSlice';
import { useForm, Controller, useFieldArray, useWatch  } from "react-hook-form";
import ReactSelect from "react-select";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const costTypeOptions = [
    {value: '', label: 'Select'},
    {value: 'Fixed', label: 'Fixed'},
    {value: 'Variable', label: 'Variable'},
];

const allSomeOptions = [
    {value: '', label: 'Select all/one'},
    {value: 'All', label: 'All'},
    {value: 'Some', label: 'Some'},
];
const trueFalseOptions = [
    {value: '', label: 'Select true/false'},
    {value: 'True', label: 'True'},
    {value: 'False', label: 'False'},
];

const categoryOptions = [
    {value: '', label: 'Select category'},
    {value: 'Category1', label: 'Category1'},
    {value: 'Category2', label: 'Category2'},
];

const oneManyOptions = [
    {value: '', label: 'Select one/many'},
    {value: 'One', label: 'One'},
    {value: 'Many', label: 'Many'},
]


const Schema = yup.object().shape({
    costType: yup.array(yup.object({ value: yup.string() })).required('Select a type').nullable(),
    costName: yup
      .number()
      .test('lenght', 'Must be 2 characters', val => val.toString().length >= 2)
      .test('lenght1', 'Must be <12 characters', val => val.toString().length < 12)
      .min(10, "Min is 10")
      .max(88, 'Max is 88')
      .typeError('Amount must be a number')
      .required(),
    costDetails: yup.string().required('Must enter a value'),
    rueValue: yup.string().matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        'Enter correct url!'
    ).required('Please enter website'),
    type1: yup.array(yup.object({ value: yup.string() })).required('Select a type').nullable(),
    type2: yup.array(yup.object({ value: yup.string() })).required('Select a type').nullable(),
    type3: yup.array(yup.object({ value: yup.string() })).required('Select a type').nullable(),
    type4: yup.array(yup.object({ value: yup.string() })).required('Select a type').nullable(),
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

    const [selectedOption, setSelectedOption] = useState(null);

    const { register, handleSubmit, control, errors } = useForm({
        mode: "onBlur",
        reValidateMode: "onBlur",
        resolver: yupResolver(Schema)
      });

      const {fields, append, remove} = useFieldArray({
          control,
          name: 'items'
      })
    
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
                                {errors.costName && <p style={{ color: "red", marginTop: ".5rem" }}>{errors.costName.message}</p>}
                            </div>
                            <div className="individual-input pb-2">
                                <label className='mr-4' htmlFor="costDetails">Cost Details</label>
                                <input className='text-black border p-1 rounded' ref={register} name="costDetails" placeholder="Testeaza" />
                                {errors.costDetails && <p style={{ color: "red", marginTop: ".5rem" }}>{errors.costDetails.message}</p>}
                            </div>

                            <div className="individual-input pb-2">
                                <label className='mr-4 ' htmlFor="costType">Cost Type</label>
                                <Controller
                                    as={ReactSelect}
                                    options={costTypeOptions}
                                    defaultValue={costTypeOptions[0].value}
                                    className='text-black border p-1 rounded w-1/4' 
                                    name="costType"
                                    control={control}
                                    isClearable
                                    isMulti
                                />
                               {errors?.costType && <span>{errors.costType.message}</span>}
                            </div>

                            <section className='group border-dotted border-2 ring-black p-4 my-4 overflow-auto'>
                                <label className='mr-4' htmlFor="rueValue">Rue Value</label>
                                <input className='text-black border p-1 rounded' ref={register} name="rueValue" placeholder='Rue Value' />
                                {errors.rueValue && <p style={{ color: "red", marginTop: ".5rem" }}>{errors.rueValue.message}</p>}

                                {fields.map( ({id}, index) => {
                                    return (
                                        <div key={id}>
                                            <input ref={ register()} name={`items[${index}].name`} />
                                            <select  ref={ register()} name={`items[${index}].type`}>
                                                <option value="">Select</option>
                                                <option value="item1">item1</option>
                                                <option value='item2'>item1</option>
                                            </select>
                                            <input  ref={ register()} type='number' name={`items[${index}].amount`}/>
                                            <button type='button' onClick={()=> remove()}>Remove</button>
                                        </div>
                                    )
                                    
                                   
                                } )}
                                <button type='button' onClick={() => append({})}>Append</button>

                                <section className="sectionGroup border-dotted border-2 ring-black p-4 my-4 overflow-auto">
                                    <div className='pb-2'>
                                        <Controller
                                            as={ReactSelect}
                                            defaultValue={allSomeOptions[0]}
                                            options={allSomeOptions}
                                            className="selectionGroup-select mr-4 text-black border p-1 rounded w-1/4"
                                            ref={register}
                                            name="type1"
                                            control={control}
                                            isClearable
                                            isMulti
                                        />
                                        {errors.type1 && <p style={{ color: "red", marginTop: ".5rem" }}>{errors.type1.message}</p>}
                                        <Controller
                                            as={ReactSelect}
                                            defaultValue={trueFalseOptions[0]}
                                            options={trueFalseOptions}
                                            className="selectionGroup-select mr-4 text-black border p-1 rounded w-1/4"
                                            ref={register}
                                            name="type2"
                                            control={control}
                                            isClearable
                                            isMulti
                                        />
                                        {errors.type2 && <p style={{ color: "red", marginTop: ".5rem" }}>{errors.type2.message}</p>}
                                    </div>
                                    <div className='pb-2'>
                                        <Controller
                                            as={ReactSelect}
                                            defaultValue={categoryOptions[0]}
                                            options={categoryOptions}
                                            className="selectionGroup-select mr-4 text-black border p-1 rounded w-1/4"
                                            ref={register}
                                            name="type3"
                                            control={control}
                                            isClearable
                                            isMulti
                                        />
                                        {errors.type3 && <p style={{ color: "red", marginTop: ".5rem" }}>{errors.type3.message}</p>}
                                        <Controller
                                            as={ReactSelect}
                                            defaultValue={oneManyOptions[0]}
                                            options={oneManyOptions}
                                            className="selectionGroup-select text-black border p-1 rounded w-1/4"
                                            ref={register}
                                            name="type4"
                                            control={control}
                                            isClearable
                                            isMulti
                                        />
                                        {errors.type4 && <p style={{ color: "red", marginTop: ".5rem" }}>{errors.type4.message}</p>}
                                        <input
                                            className='text-black border p-1 rounded'
                                            ref={register}
                                            name="adaugProdus"
                                            placeholder="Adauga produs"
                                            className='ml-4'
                                        />
                                        {errors.adaugProdus && <p style={{ color: "red", marginTop: ".5rem" }}>{errors.adaugProdus.message}</p>}
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
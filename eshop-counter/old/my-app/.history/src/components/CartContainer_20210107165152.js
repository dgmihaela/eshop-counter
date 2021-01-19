import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import axios from "axios";

const CartContainer = () => {

    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            
            const result = await axios.get(`http://localhost:9000/cart`)
           
           
         
            setCartProducts([result.data])
        }
        fetchData();
    }, []);

console.log(cartProducts)
    

    // const productsinCart = products.map((prod,i) => {
    //     if(prod.quantity > 0){
    //         return(
    //                 <tr key={i}>
    //                     <td >{prod.title}</td>
    //                     <td>
    //                         {/* <div>
    //                             <div className='btns-counter h-12 box-border flex flex-wrap content-start'>
    //                                 <button type='button' onClick={decrementAction } className='inline-block rounded rounded-r-none w-12 h-12 bg-gray-200 pl-3 pt-1.5 hover:bg-gray-300' >
    //                                     <div className='w-6 h-6 bg-no-repeat bg-contain' style={{backgroundImage: `url(${minus})`}}></div>
    //                                 </button>
    //                                 <p className='inline-block w-12 h-12 text-center bg-gray-100 leading-10 '> <span>{thisCount}</span></p>
    //                                 <button type='button' onClick={incrementAction} className='inline-block rounded rounded-l-none w-12 h-12 bg-gray-200 pl-3 pt-1.5 hover:bg-gray-300' >
    //                                     <div className='w-6 h-6 bg-no-repeat bg-contain' style={{backgroundImage: `url(${plus})`}}></div>
    //                                 </button>
    //                             </div>  
    //                         </div> */}
    //                     </td>
    //                     <td>&#36;{prod.totalCost}</td>
    //                 </tr>
    //         )
    //     }
    // })

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
                   /
                    <tr></tr>
                </tbody>
                </table>
        </div>
    )
}

export default CartContainer;
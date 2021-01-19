import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';


const CartContainer = () => {



    return(
        <div>
            <table className="table-fixed">
                <thead>
                    <tr>
                    <th className="w-1/2 ...">Product</th>
                    <th className="w-1/4 ...">Quantity</th>
                    <th className="w-1/4 ...">&#36;Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Intro to CSS</td>
                        <td>Adam</td>
                        <td>858</td>
                    </tr>
                </tbody>
                </table>
        </div>
    )
}

export default CartContainer;
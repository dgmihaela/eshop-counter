
import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios'

const LeftSideCategory = ({category}) => {
    
    const [loadProduct, setloadProduct] = useState(false);

    function showProducts() {
        setloadProduct(true);
    }

    return(
        <ul>
            <li className='hover:bg-gray-400 pl-5 h-12 text-2xl cursor-pointer leading-loose font-medium' key={category.id}>{category.name}</li>
        </ul>
    )
}

export default LeftSideCategory;
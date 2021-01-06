
import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios'


import Category from './Category';

const LeftSideCategory = ({category}) => {
    
    const [categories, setCategories] = useState([]);

    return(
        <div  className='leftSide w-1/4 '>
            <ul>
            <li className='hover:bg-gray-400 pl-5 h-12 text-2xl cursor-pointer leading-loose font-medium' key={category.id}>{category.name}</li>
            </ul>
        </div>
    )
}

export default LeftSideCategory;
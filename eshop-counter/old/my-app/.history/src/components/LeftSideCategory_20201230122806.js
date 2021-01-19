
import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios'


import Category from './Category';

const LeftSideCategory = () => {
    
    const [categories, setCategories] = useState([]);


    return(
        <div  className='leftSide w-1/4 '>
            <ul>
                {categoryComponents}
            </ul>
        </div>
    )
}

export default LeftSideCategory;
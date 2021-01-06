
import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios'


import Category from './Category';

const LeftSideCategory = ({category}) => {
    
    const [categories, setCategories] = useState([]);

console.log(category)
    return(
        <div  className='leftSide w-1/4 '>
            <ul>
               <Category category={category} />
            </ul>
        </div>
    )
}

export default LeftSideCategory;
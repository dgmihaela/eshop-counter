
import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux';
import { getCategories } from '../slices/categoriesSlice';
import {selectCategory, getCategories} from '../slices/categoriesSlice';

const LeftSideCategory = () => {

    useEffect(() =>{
        const fetchData = async() => {
            const result = await axios.get('http://localhost:9000/categories')
            .then(res => {
                console.log('result la get:', res.data)
                dispatch(getCategories(res.data))
            })
        }
    })

    return(
        <div  className='leftSide border-black w-1/3'>
            <ul>
                <li><div>All</div></li>
            </ul>
        </div>
    )
}

export default LeftSideCategory;
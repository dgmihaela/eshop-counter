
import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios'
import {selectCategories, getCategories} from '../slices/categoriesSlice';

const LeftSideCategory = () => {
    

    const [categories, setCategories] = useState([]);
    const CategoriesSelect = useSelector(selectCategories);
    const dispatch = useDispatch();
    console.log(CategoriesSelect)

    useEffect(() => {
        const fetchData = async() => {
            const result = await axios.get('http://localhost:9000/categories');
           
            dispatch(getCategories(result.data))
            console.log('results from get categ', result.data)
        }
        fetchData();
    }, [])

    return(
        <div  className='leftSide border-black w-1/3'>
            <ul>
                <li><div>All</div></li>
            </ul>
        </div>
    )
}

export default LeftSideCategory;
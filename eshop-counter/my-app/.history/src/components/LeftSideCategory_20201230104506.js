
import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios'
import {selectCategories, getCategories} from '../slices/categoriesSlice';

import Category from './Category';

const LeftSideCategory = () => {
    
    const [categories, setCategories] = useState([]);
    const CategoriesSelect = useSelector(selectCategories);
    const dispatch = useDispatch();
    console.log(CategoriesSelect)

    useEffect(() => {
        const fetchData = async() => {
            const result = await axios.get('http://localhost:9000/categories');
           
            dispatch(getCategories(result.data));
        }
        fetchData();
    }, [])
key
    let categoryComponents = CategoriesSelect.map(categObject => <Category id={categObject.id} category={categObject} />)

    return(
        <div  className='leftSide w-1/4 '>
            <ul>
                <li className='hover:bg-gray-400 pl-5 h-12 text-2xl cursor-pointer leading-loose font-medium'><div>All</div></li>
                {categoryComponents}
            </ul>
        </div>
    )
}

export default LeftSideCategory;
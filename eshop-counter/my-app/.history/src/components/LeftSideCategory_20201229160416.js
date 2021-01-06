
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
           
            dispatch(getCategories(result.data));
        }
        fetchData();
    }, [])

    let categoryComponents = CategoriesSelect.map(categObject => <li className='hover:bg-red-200' key={categObject.id}>{categObject.name}</li>)
    return(
        <div  className='leftSide bg-red-100 w-1/3'>
            <ul>
                <li><div>All</div></li>
                {categoryComponents}
            </ul>
        </div>
    )
}

export default LeftSideCategory;
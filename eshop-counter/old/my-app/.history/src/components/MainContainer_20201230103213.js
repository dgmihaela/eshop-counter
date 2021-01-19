import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios'
import {selectCategories, getCategories} from '../slices/categoriesSlice';
import LeftSideCategory from './LeftSideCategory';
import RightSideProducts from './RightSideProducts';
import Sorter from './Sorter';

const MainContainer = () => {

    const CategoriesSelect = useSelector(selectCategories);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async() => {
            const result = await axios.get('http://localhost:9000/categories');
           
            dispatch(getCategories(result.data));
            console.log(result.data)
        }
        fetchData();
    }, [])

    const categoryComponents = CategoriesSelect.map(categObject => )

    return(
        <div>
            <Sorter />
            <div className='flex box-border'>
                <LeftSideCategory />
                <RightSideProducts/>
            </div>
        </div>
        
    )
}

export default MainContainer;
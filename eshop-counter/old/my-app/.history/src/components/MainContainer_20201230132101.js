
import LeftSideCategory from './LeftSideCategory';
import RightSideProducts from './RightSideProducts';
import Sorter from './Sorter';
import axios from "axios";
import React, {useEffect, useState} from 'react';
import {selectProducts, getProducts} from '../slices/productsSlice';
import {useSelector, useDispatch} from 'react-redux';
import {selectCategories, getCategories} from '../slices/categoriesSlice';
import Category from './Category';

const MainContainer = () => {


    const CategoriesSelect = useSelector(selectCategories);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async() => {
            const result = await axios.get('http://localhost:9000/categories');
           
            dispatch(getCategories(result.data));
        }
        fetchData();
    }, [])

    let leftSideComponents = CategoriesSelect.map(categObject => <LeftSideCategory key={categObject.id} category={categObject} />);
    let rightSideComponents = CategoriesSelect.map(categObject => <RightSideProducts key={categObject.id} category={categObject} />);

    return(
        <div>
            <Sorter />
            <div className='flex box-border'>
                <div  className='leftSide w-1/4 '>
                    {leftSideComponents}
                </div>
                <div  className='righttSide border-pink-600 w-4/5 '>
                    {rightSideComponents}
                </div>
            </div>
        </div>
        
    )
}

export default MainContainer;
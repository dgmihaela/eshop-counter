
import LeftSideCategory from './LeftSideCategory';
import RightSideProducts from './RightSideProducts';
import Sorter from './Sorter';
import axios from "axios";
import React, {useEffect, useState} from 'react';
import {selectProducts, getProducts} from '../slices/productsSlice';
import {useSelector, useDispatch} from 'react-redux';
import { selectCategories } from '../slices/categoriesSlice';

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

    let rightSideComponents = CategoriesSelect.map(categObject => <RightSideProducts key={categObject.id} category={categObject} />)

    return(
        <div>
            <Sorter />
            <div className='flex box-border'>
                <LeftSideCategory />
                {rightSideComponents}
            </div>
        </div>
        
    )
}

export default MainContainer;
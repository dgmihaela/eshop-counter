import React from 'react';
import React, {useEffect} from 'react'
import { getCategories } from '../slices/categoriesSlice';

const LeftSideCategory = () => {

    function getCategories() {

    }

    return(
        <div  className='leftSide border-black w-1/3'>
            <ul>
                <li><div>All</div></li>
            </ul>
        </div>
    )
}

export default LeftSideCategory;
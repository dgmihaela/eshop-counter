import React from 'react';
import LeftSideCategory from './LeftSideCategory';
import RightSideProducts from './RightSideProducts';
import Sorter from './Sorter'

const MainContainer = () => {
    return(
        <div className='flex'>
            <Sorter />
            <LeftSideCategory />
            <RightSideProducts/>
        </div>
    )
}

export default MainContainer;
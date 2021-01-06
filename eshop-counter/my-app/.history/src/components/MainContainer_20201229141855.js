import React from 'react';
import LeftSideCategory from './LeftSideCategory';
import RightSideProducts from './RightSideProducts';

const MainContainer = () => {
    return(
        <div className='grid grid-cols-2'>
            <LeftSideCategory />
            <RightSideProducts/>
        </div>
    )
}

export default MainContainer;
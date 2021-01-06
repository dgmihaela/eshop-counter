import React from 'react';
import LeftSideCategory from './LeftSideCategory';
import RightSideProducts from './RightSideProducts';

const MainContainer = () => {
    return(
        <div className='grid grid-cols-2'>
            <LeftSideCategory className='leftSide border-black' />
            <RightSideProducts className='leftSide border-pink-600'/>
        </div>
    )
}

export default MainContainer;
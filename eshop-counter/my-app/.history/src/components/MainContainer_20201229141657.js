import React from 'react';
import LeftSideCategory from './LeftSideCategory';
import RightSideProducts from './RightSideProducts';

const MainContainer = () => {
    return(
        <div>
            <LeftSideCategory className='leftSide grid grid-cols-2' />
            <RightSideProducts />
        </div>
    )
}

export default MainContainer;
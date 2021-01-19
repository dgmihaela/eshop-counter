import React from 'react';
import LeftSideCategory from './LeftSideCategory';
import RightSideProducts from './RightSideProducts';
import Sorter from './Sorter';

const MainContainer = () => {
    return(
        <div>
              <Sorter />
              <div className='flex'>
          
            <LeftSideCategory />
            <RightSideProducts/>
        </div>
        </div>
        
    )
}

export default MainContainer;
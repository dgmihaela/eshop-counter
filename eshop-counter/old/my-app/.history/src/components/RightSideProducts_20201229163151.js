import React from 'react';
import star from '../assets/images/star.png';

const RightSideProducts = () => {
    return(
        <div  className='leftSide border-pink-600 w-3/4'>
            <div>
                <p>Chicken soup</p>
                <p>Desciption</p>
                <p>&#36;price</p>
                <div className='w-8 h-8'>
                    <div className='bg-contain w-8 h-8 bg-no-repeat' style={{backgroundImage: `url${star}`}}></div>
                </div>
                
            </div>
        </div>
    )
}

export default RightSideProducts;
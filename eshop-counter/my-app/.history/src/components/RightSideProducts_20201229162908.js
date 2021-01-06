import React from 'react';
import star from '../assets/images/star';

const RightSideProducts = () => {
    return(
        <div  className='leftSide border-pink-600 w-3/4'>
            <div>
                <p>Chicken soup</p>
                <p>Desciption</p>
                <p>&#36;price</p>
                <div style={{backgroundImage: `url${star}`}}></div>
            </div>
        </div>
    )
}

export default RightSideProducts;
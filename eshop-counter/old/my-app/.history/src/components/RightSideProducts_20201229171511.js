import React from 'react';
import star from '../assets/images/star.png';
import plus from '../assets/images/plus.png';
import minus from '../assets/images/minus.png';

const RightSideProducts = () => {
    return(
        <div  className='leftSide border-pink-600 w-4/5 '>
            <div className='w-80 h-96 bg-gray-50 shadow-md py-5 px-5 '>
                <p className='text-2xl font-bold'>Chicken soup</p>
                <p className='text-'g>Desciption</p>
                <p className='text-xl'>&#36;44.97</p>
                <div className='w-6 h-6'>
                    <div className='bg-contain w-6 h-6 bg-no-repeat' style={{backgroundImage: `url(${star})`}}></div>
                </div>
                <div className='btns-counter'>
                    <div className='inline-block w-12 h-12 bg-gray-100 mr-3 pl-3 pt-3'>
                        <button className='w-6 h-6 bg-no-repeat bg-contain 'style={{backgroundImage: `url(${plus})`}} ></button>
                    </div>
                    
                    <div className='inline-block'>ff</div>
                    <div className='inline-block w-12 h-12 bg-gray-100 ml-3 mr-3 pl-3 pt-3'>
                        <button  className='w-6 h-6 bg-no-repeat bg-contain' style={{backgroundImage: `url(${minus})`}}>+</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default RightSideProducts;
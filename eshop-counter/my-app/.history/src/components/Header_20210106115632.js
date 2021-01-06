import React from 'react';
import logo from '../assets/images/organicLogo.png';
import cart from '../assets/images/cart.png';
import {useSelector, useDispatch} from 'react-redux';
import {flagSelectorClick, updateCartIsClicked} from '../slices/flagCartClickedSlice';

const Header = () => {

  const { value} = useSelector((state) => state).flagCartClickedSlice;

    return(
      <div className='grid grid-cols-2 gap-50  h-12 justify-items-center bg-blue-400'>
          <div className="logo inline-block min-w-min w-36 flex justify-start h-12">
              <div className='logo-image w-20 h-12 ml-8'>
                <div className=' bg-contain w-20 h-12 bg-no-repeat' style={{backgroundImage: `url(${logo})`}} ></div>
              </div>
            <div className='w-36 h-12 my-3 -ml-8'>Ella's kitcken</div>
          </div>
          <div className="cart inline-block min-w-min w-36 flex justify-end h-12">
            <div className='text-right inline-block min-w-min w-36 h-12 py-3  -mr-10'>Hello Ela <button className='bg-white px-1 py-0.5 rounded'>Logout</button> </div>
            <div className='shopCart w-20 h-12 ml-12'>
                <button className='bg-contain w-12 h-12 bg-no-repeat inline-block' style={{backgroundImage: `url(${cart})`}}></button>
            </div>
          </div>
      </div>  	
    )
}

export default Header;
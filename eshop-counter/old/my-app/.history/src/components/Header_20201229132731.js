import React from 'react';
import logo from '../assets/images/logo.png';
import cart from '../assets/images/cart.png'

const Header = () => {

    return(
      <div className='grid grid-cols-2 gap-50  h-12 justify-items-center '>

          <div className="logo inline-block min-w-min w-36 flex justify-start h-12">
            <div className='logo-image bg-contain  w-20 h-12 ' style={{backgroundImage: `url(${logo})`}} ></div>
            <div className='w-36 h-12 my-2'>Ella's kitcken</div>
          </div>


          <div className=" min-w-min w-36 h-12 grid grid-cols-2 place-content-right border-gray-900">

            <div className='text-right inline-block min-w-min w-36  h-12'>Hello Ela <button>Logout</button> </div>

            <div className="shopCart  w-36  h-12 bg-red-500" style={{backgroundImage: `url(${cart})`}}></div>
            
          </div>

      </div>  	
    )
}

export default Header;
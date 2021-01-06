import React from 'react';
import logo from '../assets/images/organicLogo.png';
import cart from '../assets/images/cart.png'

const Header = () => {

    return(
      <div className='grid grid-cols-2 gap-50  h-12 justify-items-center bg-blue-400'>

          <div className="logo inline-block min-w-min w-36 flex justify-start h-12">
              <div className='logo-image w-20 h-12 ml-4'>
                <div className=' bg-contain w-20 h-12 bg-no-repeat' style={{backgroundImage: `url(${logo})`}} ></div>
              </div>
            
            <div className='w-36 h-12 my-2 -ml-6'>Ella's kitcken</div>
          </div>


          <div className="cart inline-block min-w-min w-36 flex justify-end h-12">

            <div className='text-right inline-block min-w-min w-36 h-12 py-2 ml-12'>Hello Ela <button className='bg-white px-1 py-0.5 rounded'>Logout</button> </div>

            <div className="shopCart m w-20 h-12 ml-12" ><button className='bg-contain w-20 h-12 bg-no-repeat' style={{backgroundImage: `url(${cart})`}}></button></div>
            
          </div>

      </div>  	
    )
}

export default Header;
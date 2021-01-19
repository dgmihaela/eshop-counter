import React from 'react';
import logo from '../assets/images/logo.png'

const Header = () => {

    return(
      <div className='grid grid-cols-2 gap-50  h-12 justify-items-center '>
          <div className="logo inline-block min-w-min w-36 flex justify-start h-12">
              <div className='flex h-12 inline-block'>
                <div className='logo-image bg-contain  w-20 h-12 mb-auto mt-auto' style={{backgroundImage: `url(${logo})`}} ></div>
                <div className='w-36 h-12 mb-auto mt-auto'>Ella's kitcken</div>
              </div>
          
          </div>
          <div className="inline-block min-w-min w-36 grid grid-cols-2 place-content-right ">
            <span className='text-right inline-block min-w-min w-12 '>Hello Ela Logout</span>
            <div>
              <img className="shopCart" alt="shopCart" />
            </div>
          </div>
      </div>  	
    )
}

export default Header;
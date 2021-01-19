import React from 'react';
import logo from '../assets/images/logo.png'

const Header = () => {

    return(
      <div className='grid grid-cols-2 gap-50  h-48 justify-items-center'>
          <div className="logo inline-block min-w-min w-36 grid grid-cols-1 place-content-leftt h-16">
           <div className='logo-image bg-contain  w-16' style={{backgroundImage: `url(${logo})`}} ></div>
          </div>
          <div className="inline-block min-w-min w-36 grid grid-cols-2 place-content-right h-16">
            <span className='text-right inline-block min-w-min w-12 '>Hello Ela Logout</span>
            <div>
              <img className="shopCart" alt="shopCart" />
            </div>
          </div>
      </div>  	
    )
}

export default Header;
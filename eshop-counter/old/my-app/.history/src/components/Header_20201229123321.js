import React from 'react';
import logo from '../assets/images/logo.png'

const Header = () => {

    return(
      <div className='grid grid-cols-8 gap-3 place-content-center h-48'>
          <div className="logo inline-block min-w-min w-36 grid grid-cols-1 place-content-leftt h-16">
           <div className='logo-image bg-contain' style={{backgroundImage: `url(${logo})`}} ></div>
          </div>
          <div className="inline-block min-w-min w-36 grid grid-cols-6 place-content-right h-16">
            <span className='text-right'>Hello Ela Logout</span>
            <div>
              <img className="shopCart" alt="shopCart" />
            </div>
          </div>
      </div>  	
    )
}

export default Header;
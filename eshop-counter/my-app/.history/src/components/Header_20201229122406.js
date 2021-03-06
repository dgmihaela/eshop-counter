import React from 'react';

const Header = () => {

    return(
      <div className='grid grid-cols-2 gap-3 place-content-center h-48'>
          <div className="logo inline-block min-w-min w-36 grid grid-cols-2 place-content-leftt h-24">
              <img className='logo-image' alt="logo image" style='background-image: url(../assets/images/logo.png)' />
          </div>
          <div className="inline-block min-w-min w-36 grid grid-cols-2 place-content-right h-24">
            <span className='text-right'>Hello Ela Logout</span>
            <div>
              <img className="shopCart" alt="shopCart" />
            </div>
          </div>
      </div>  	
    )
}

export default Header;
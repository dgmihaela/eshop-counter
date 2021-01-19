import React from 'react';

const Header = () => {

    return(
      <div>
          <div className="logo">
              <img alt="logo-mage" />
              <span className="logoText">Ela's Kitchen</span>
          </div>
          <div>
              <span>Hello Ela</span>
              <span>Logout</span>
          </div>
          <div>
              <img className="shopCart" alt="shopCart" />
          </div>
      </div>  	
    )
}

export default Header;
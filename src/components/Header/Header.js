import React from 'react';
import './Header.css';
import logo from '../../img/MuzicLogo.png';
import CenterMenu from '../CenterMenu/CenterMenu';

function Header() {
  return (
    <div className='Header'>
        <img className='img-header' src={logo}></img>
        <div>
            <CenterMenu />
        </div>
        <div className='f-button'>
            <button className='b-sign'>Sign Up</button>
            <button className='b-log'>Log In</button>
        </div>
    </div>
  )
}

export default Header
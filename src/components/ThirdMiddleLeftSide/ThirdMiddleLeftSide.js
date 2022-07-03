import React from 'react';
import bkg from '../../img/backgraphics.png';
import phone from '../../img/p 1.png';
import './ThirdMiddleLeftSide.css';

function ThirdMiddleLeftSide() {
  return (
    <div className='ThirdMiddleLeftSide'>
        <div className='ThirdMiddleLeftSidePhotos'>
          <img className="t-bkg" src={bkg}></img>
          <img className='t-phone' src={phone}></img> 
        </div>
    </div>
  )
}

export default ThirdMiddleLeftSide
import React from 'react';
import bkg from '../../img/backgraphics.png'; 
import phone from '../../img/p 1.png';
import playmusic from '../../img/p 2.png';
import './MiddleSideRight.css';

function MiddleSideRight() {
  return (
    <div className='MiddleSideRight'>
        <div className='RightPhotos'>
            <img className="bkg" src={bkg}></img>
            <img className="phone" src={phone}></img>
        </div>
    </div>
  )
}

export default MiddleSideRight
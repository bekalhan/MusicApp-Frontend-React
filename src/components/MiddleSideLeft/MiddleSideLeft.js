import React from 'react';
import './MiddleSideLeft.css';
import logoApple from '../../img/App Store.png';
import logoGoogle from '../../img/Google Play.png';


function MiddleSideLeft() {
  return (
    <div className='MiddleSideLeft'>
        <h1 className='f-text'>Experiance  The <br></br> 
            <span className="s-text">Best Quality Music</span>        
        </h1>

        <div className='icons'>
            <span className="t-text">download now on IOS and Android</span> <br></br>
            <div className='logo'>
                <img className='img-icon' src={logoApple}></img>
                <img className='img-icon' src={logoGoogle}></img>
            </div>
        </div>
    </div>
  )
}

export default MiddleSideLeft
import React from 'react';
import line from '../../img/Path 318.png';
import microphone from '../../img/Group 2.png';
import microphone2 from '../../img/Group 4.png';
import musiclogo from '../../img/music icon.png';

import './SecondMiddleSide.css';

function SecondMiddleSide() {
  return (
    <div className='SecondMiddleSide'>
        <img className='line' src={line}></img> <br></br>
        <h3 className="amazingApp">An amazing app can change your daily life <br></br>
        </h3>
        <h6 className="experience">Music Experinece</h6>
        <div className="card">
            <div>
                <img className='mic' src={microphone}></img>
                <h6 className="desc">For live music</h6>
                <h6 className="d-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h6>
                <button className="b-learn">Learn More</button>
            </div>
            <div>
                <img className='m-logo' src={musiclogo}></img>
                <h6 className="desc">For daily music</h6>
                <h6 className="d-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h6>
                <button className="b-learn">Learn More</button>
            </div>
            <div>
                <img className='mic2' src={microphone2}></img>
                <h6 className="desc">For Artist</h6>
                <h6 className="d-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h6>
                <button className="b-learn">Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default SecondMiddleSide
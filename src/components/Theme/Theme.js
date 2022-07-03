import React from 'react';
import Header from '../Header/Header';
import MiddleSide from '../MiddleSide/MiddleSide';
import SecondMiddleSide from '../SecondMiddleSide/SecondMiddleSide';
import ThirdMiddleSide from '../ThirdMiddleSide/ThirdMiddleSide';
import './Theme.css';

function Theme() {
  return (
    <div className="Theme">
        <Header />
        <MiddleSide />
        <SecondMiddleSide />
        <ThirdMiddleSide />
    </div>
  )
}

export default Theme
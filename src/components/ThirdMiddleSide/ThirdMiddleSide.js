import React from 'react';
import ThirdMiddleLeftSide from '../ThirdMiddleLeftSide/ThirdMiddleLeftSide';
import ThirdMiddleRightSide from '../ThirdMiddleRightSide/ThirdMiddleRightSide';
import './ThirdMiddleSide.css';

function ThirdMiddleSide() {
  return (
    <div className="ThirdMiddleSide">
        <ThirdMiddleLeftSide />
        <ThirdMiddleRightSide />
    </div>
  )
}

export default ThirdMiddleSide
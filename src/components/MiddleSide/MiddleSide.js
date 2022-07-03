import React from 'react';
import MiddleSideLeft from '../MiddleSideLeft/MiddleSideLeft';
import MiddleSideRight from '../MiddleSideRight/MiddleSideRight';
import './MiddleSide.css';

function MiddleSide() {
  return (
    <div className='MiddleSide'>
        <MiddleSideLeft />
        <MiddleSideRight />
    </div>
  )
}

export default MiddleSide
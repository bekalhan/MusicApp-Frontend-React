import React from 'react';
import {UilSearch} from '@iconscout/react-unicons';
import './LogoSearch.css';


function LogoSearch() {
  return (
         <div className='Search'>
            <input type='text' placeholder='Enter keyword or url' />
            <div className='t-icon'>
                <UilSearch />
            </div>
        </div>
  )
}

export default LogoSearch
import React from 'react';
import spinner from '../img/giphy.gif'

const Spinner = () => {
  return (
    <div className='spinner'>
      <img src={spinner} alt='Loading...' className='spinner_image'/>
    </div>
  );
}

export default Spinner;
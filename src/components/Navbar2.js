import React from 'react';
import {Link} from 'react-router-dom'

const Navbar2 = () => {
  return (
    <div>
    <nav className='navbar navbar-expand-lg bg-primary fixed-top'>
      <div className='container'>
     <a href='#' className='navbar-brand'>Frontend Bootcamp</a>
     <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#navmenu">
      <span className='navbar-toggler-icon'></span>

     </button>
    
      <div className='collapse  navbar-collapse' id="navmenu">
      <ul className='navbar-nav ms-auto'>
         
          <li className='nav-item'>
              <Link to='/' className='nav-link'>Home</Link>
          </li>
          <li className='nav-item'>
              <Link to='/news' className='nav-link'>News</Link>
          </li>
         
      </ul>
    
     </div>
     </div>
    </nav>
  </div>

  );
}

export default Navbar2;

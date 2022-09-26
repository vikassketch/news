import React from 'react';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Navbar3 = () => {
  const navigate=useNavigate()
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
            
              <a className='nav-link' onClick={()=>{navigate('/news/Sports')}} style={{cursor:"pointer"}}>Sports</a>
          </li>
          <li className='nav-item'>
              <a className='nav-link' onClick={()=>{navigate('/news/Finance')}} style={{cursor:"pointer"}}>Finance</a>
          </li>
          <li className='nav-item'>
              <a className='nav-link' onClick={()=>{navigate('/news/Business')}} style={{cursor:"pointer"}}>Business</a>
          </li>
          <li className='nav-item'>
              <Link to='/' className='nav-link' >Home</Link>
          </li>
          <li className='nav-item'>
              <Link to='/about' className='nav-link' >About</Link>
          </li>
         
      </ul>
    
     </div>
     </div>
    </nav>
  </div>
  );
}

export default Navbar3;

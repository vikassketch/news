import React from 'react';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


const NewsCategories = () => {
    const navigate=useNavigate()
  return (
    <>
      <section className='bg-dark text-warning'>
        <div className='container'>
            <div className='catt'>
                <h3 className='text-warning' onClick={()=>{navigate('/news/Sports')}}>Sports</h3>
           
                <h3 className='text-warning' onClick={()=>{navigate('/news/Finance')}}>Finance</h3>
           
                <h3 className='text-warning' onClick={()=>{navigate('/news/Business')}}>Bussiness</h3>
           
                <h3 className='text-warning' onClick={()=>{navigate('/news/Food')}}>Food</h3>
            </div>
             
        </div>

      </section>
      
    </>
  );
}

export default NewsCategories;

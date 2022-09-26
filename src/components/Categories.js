import React from 'react';
import Category from './Category';

const Categories = ({categories}) => {
  return (
    <section className='bg-secondary' id='categories'>
        <div className='container'>
         
            <div className='d-flex dd'>
                {categories.map((category)=><Category category={category}/>)}
           
            </div> 


        </div>
      
    </section>
  );
}

export default Categories;

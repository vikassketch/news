import React from 'react';
import {Link} from 'react-router-dom'

const Category = ({category}) => {
  // console.log(category)
  
  return (
    <>
    {category && 
    <div class="card carding my-5" >
  
    
    <div class="card-body">
      <h5 class="card-title">{category.name}</h5>
      <p class="card-text">{category.title}</p>
      <a href={`${category.link}`} target ='_blank' class="btn btn-primary">Learn More</a>
    </div>
  </div>}
  </>
  );
  
}

export default Category;

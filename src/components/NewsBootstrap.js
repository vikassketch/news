import React from 'react';
import { useNavigate } from 'react-router-dom';

const NewsBootstrap = ({item,id}) => {
    const navigate=useNavigate()
    console.log(id)
  return (
    <div class="card">
    <img  src={`${item.image}`}alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">{item.title}</h5>
      <p class="card-text"> {item.description}</p>
      <button  class="btn btn-primary" onClick={()=>{navigate(`/news/${id}/fullstory`)}}>Read Full Story</button>
    </div>
  </div>
  );
}

export default NewsBootstrap;

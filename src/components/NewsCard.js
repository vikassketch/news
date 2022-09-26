import React from 'react';
import { useNavigate } from 'react-router-dom';

const NewsCard = ({item}) => {
  const navigate=useNavigate()
  return (
    <div className='cardd'>
        <div className='card-inner'>
      <div className='card-front'>
        <img src={`${item.image}`} className="frontimage"/>

      </div>
      <div className='card-back'>
        <p>
            {item.description}
        </p>
        <button type="button" class="btn btn-primary" style={{position:"absolute",bottom:"15px",right:"15px"}} onClick={()=>{navigate(`/news/story/${item.source.name}`)}}>Read More</button>
       
      </div>
      </div>
    </div>
  );
}

export default NewsCard;
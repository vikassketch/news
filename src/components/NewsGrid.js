import React from 'react';
import Spinner from './Spinner';
import NewsCard from './NewsCard';

const NewsGrid = ({isLoading,data}) => {
  return isLoading ? (
   <Spinner/>
  ):(
    <div className='cards'>
      {/* {console.log(data)} */}
      {data.map((item,index)=><NewsCard key={index} item={item}/>)}
    </div>
  )
}

export default NewsGrid;
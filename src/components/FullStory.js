import React from 'react';
import Navbar3 from './Navbar3';
import NewsCategories from './NewsCategories';
import { useEffect,useState } from 'react';

const FullStory = () => {

    const[newsData,setData]=useState([])

    useEffect(()=>{
        const getNews=async()=>{
            // console.log("in news")
         
            const news=await fetch('https://gnews.io/api/v4/search?q=example&token=b3fabfe6a7de12fc769184b911378ad7&lang=en')
            const data=await news.json()
            console.log(data.articles)
            const data1=data.articles.slice(3,4)
            setData(data1[0])
            console.log(data1[0])
            
            // console.log("in news above")
          }
      
          getNews()


    },[])

  return (
    <>
    <Navbar3/>
    {/* <NewsCategories/> */}
    <div className='container final'>
    <div class="card" >
  {/* <img class="card-img-top" src={`${newsData.image}`} /> */}
  <div class="card-body">
    <h5 class="card-title">{newsData.title}</h5>
    <p class="card-text">{newsData.content}</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
</div>
      
    </>
  );
}

export default FullStory;

import React from 'react';
import {useParams} from 'react-router-dom'
import Navbar3 from './Navbar3';
import { useEffect,useState } from 'react';
import axios from 'axios'

const Idwise = () => {
    const [newsData,setData]=useState()
    const [particularData,setParticular]=useState({})
    let { id1 }=useParams();
    console.log(id1)

    useEffect(()=>{

        axios.get('https://gnews.io/api/v4/search?q=example&token=bd6ebe4b646b8ec72733fdaff4f99fcf&lang=en')
      .then((res) => {
       const result=res.data
        setData(result.articles)
        // console.log(result)
        
      })

      
        // const getNews=async()=>{
        //     // console.log("in news")
            
        //     const news=await fetch('https://gnews.io/api/v4/search?q=example&token=bd6ebe4b646b8ec72733fdaff4f99fcf&lang=en')
        //     const data=await news.json()
        //     console.log(data.articles)
        //     setData(data.articles)
        //     console.log(newsData)
           
        //     // console.log("in news above")
        //   }
      
        //   getNews()
    },[])

    const searchData=()=>{

        console.log("hi")
        
        newsData.forEach(data => {
    
            if(data.source.name===id1){
    
                   setParticular(data);
                //    console.log(data)
                   
                   
            }
    
           
            
        });
    } 


    newsData && searchData()

   
  


   


  return (
    <>
    <Navbar3/>
    <div className='container final'>
        <div className='card'>

        </div>

    </div>
    </>
//     <div>
//         <Navbar3/>
//         <div className='container final'>
//     <div class="card" >
//   {/* <img class="card-img-top" src={`${newsData.image}`} /> */}
//   <div class="card-body">
//     <h5 class="card-title">{newsData.title}</h5>
//     <p class="card-text">{newsData.content}</p>
//     {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
//   </div>
// </div>
// </div>
//       hello
//     </div>
  );
}

export default Idwise;

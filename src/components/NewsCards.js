import React from 'react';
import Spinner from './Spinner';
import NewsBootstrap from './NewsBootstrap';
import {useEffect,useState} from 'react';

const NewsCards = ({isLoading,data,id}) => {

    // const [item,setItem]=useState({})

    // useEffect(()=>{
    //     const setting=()=>{
    //         console.log("in newscards")
    //         console.log(data)
    //         const item1= data.slice(3,4)[0]
    //         console.log(item1)
    //         setItem(item1)
    //         console.log(item)
     
    //         // state(item1)
    //      }

    //      setting();
    //     //  getInvokeStateHandler();
    //     },[]
    // )

    // const getInvokeStateHandler = () => {
    //     console.log('getInvokeStateHandler Executed')
    //     stateHandler(item);
    // }

  
    return isLoading ? (
        <Spinner/>
       ):(
         <div className='cards'>
          
           {data.slice(3,4).map((item,index)=><NewsBootstrap key={index} item={item} id={id}/>)}
           
         </div>
       )
}

export default NewsCards;

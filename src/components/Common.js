import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar3 from './Navbar3';
import Weather from './Weather';
import { useEffect,useState } from 'react';
import axios from 'axios'
import NewsCards from './NewsCards';

const Common = () => {
  // const [item,setItem]=useState({})
  const[weatherData,setWeatherData]=useState({})
  const[newsData,setData]=useState([])
  const[isWeatherLoading,setIsWeatherLoading]=useState(true)
  const[isLoading,setIsLoading]=useState(true)

    let { id } = useParams();

    useEffect(()=>{

      const getNews=async()=>{
        // console.log("in news")
        setIsLoading(true)
        const news=await fetch('https://gnews.io/api/v4/search?q=example&token=53c785ac662969079447f24f25c3f045&lang=en')
        const data=await news.json()
        console.log(data.articles)
        setData(data.articles)
        console.log(newsData)
        setIsLoading(false)
        // console.log("in news above")
      }
  
      getNews()

      navigator.geolocation.getCurrentPosition(async(position)=>{
        console.log("in weather ")
        setIsWeatherLoading(true)
        const api = `https://api.openweathermap.org/data/2.5/weather?`;
      const apiKey = `b39548412f79124676048eaeed93c3ea`
      let finalApi = `${api}lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}`
      // const weather=await fetch('finalApi')
      // const data= await weather.text()
      // const data1=await weather.json()
      // console.log(data)
      // console.log(data1)
      axios.get(finalApi)
      .then((res) => {
        console.log(res.data)
        setWeatherData(res.data)
        setIsWeatherLoading(false)
        console.log("hii")
        
      })
      console.log("in weather below")
      console.log(position)
        console.log(position.coords)
       

    }) 


    },[])

    // const stateHandler=(item1)=>{
    //   setItem(item1)
    // console.log('statehandler Executed' , item1)
    //   console.log(item)

    // }

    
  return (
    <>
    <Navbar3/>
    {/* <section className='bg-dark text-warning'>
      <div className='container'>
        <div className='catt'> <h1>{id}</h1></div>
      </div>
      </section> */}
      <Weather isWeatherLoading={isWeatherLoading} data={weatherData}/>
      <NewsCards isLoading={isLoading} data={newsData} id={id} 
      // stateHandler = {(item) => stateHandler(item)}
      />
     
    </>
  );
}

export default Common;



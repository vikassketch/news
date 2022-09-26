import React from 'react';
import Spinner1 from './Spinner1';

const Weather = ({isWeatherLoading,data}) => {
    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        return `${day} ${date} ${month} ${year}`
      }

  return isWeatherLoading?(
    <div>
      <Spinner1/>
    </div>
  ):(
    <div className='topCard'>
        <div className='basicDetails'>
        <p className='text'>{data.name} {data.sys.country}</p>
        <p className='text'> {dateBuilder(new Date())}</p>
        </div>
        <div className='wDetails'>
        <p className='text'>Current Temperature {(Math.round(data.main.temp) - 273.15).toFixed(2)}°c</p>
        <p className='text'>Weather {data.weather[0].main}</p>
        <p className='text'>Humidity {data.main.humidity}</p>
        <p className='text'>Wind Speed {data.wind.speed}MPH</p>
        </div>
     
       </div>
  )
}

export default Weather;

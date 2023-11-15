import React, { useState } from 'react'
import './WeatherApp.css'
import search_icon from '../Assets/search.png'
import clear_icon from '../Assets/clear.png'
import cloud_icon from '../Assets/cloud.png'
import drizzle_icon from '../Assets/drizzle.png'
import rain_icon from '../Assets/rain.png'
import snow_icon from '../Assets/snow.png'
import wind_icon from '../Assets/wind.png'
import humidity_icon from '../Assets/humidity.png'
function WeatherApp() {
    const [cityInput, setCityInput] = useState('')
    const[humidity,setHumidity]=useState('')
    const[windSpeed,setWindSpeed]=useState('')
    const [temperature, settemperature] = useState('')
    const [location, setlocation] = useState('')
    const [wIcon, setwIcon] = useState(cloud_icon)
    let api_key='0424f203662f2ecaaead140f089af632'
    const search=()=>{
        if(cityInput=='')
        {
            alert('please enter a city name ')
        }else{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=Metric&appid=${api_key}`
            const response= fetch(url)
            .then((res)=>{
                res.json().then((data)=>{
                    setHumidity(data.main.humidity+'%')
                    setWindSpeed(data.wind.speed+"km/h")
                    settemperature(data.main.temp+'° C')
                    setlocation(data.name)
                    if(data.weather[0].icon === '01d' || data.weather[0].icon ==='01n'){
                        setwIcon(clear_icon)
                    }else if(data.weather[0].icon === '01d' || data.weather[0].icon ==='01n'){
                        setwIcon(cloud_icon)
                    }else if(data.weather[0].icon === '03d' || data.weather[0].icon ==='03n'){
                        setwIcon(drizzle_icon)
                    }else if(data.weather[0].icon === '04d' || data.weather[0].icon ==='04n'){
                        setwIcon(drizzle_icon)

                    }else if(data.weather[0].icon === '09d' || data.weather[0].icon ==='09n'){
                        setwIcon(rain_icon)
                    }else if(data.weather[0].icon === '10d' || data.weather[0].icon ==='10n'){
                        setwIcon(rain_icon)
                    }
                    else if(data.weather[0].icon === '13d' || data.weather[0].icon ==='13n'){
                        setwIcon(snow_icon)
                    }
                    else{
                        setwIcon(clear_icon)
                    }
                })
            })
            .catch((rej)=>{
                alert('please enter a valid City name')
            })
        }
    }

  return (
    <div className='container'>
        <div className="top-bar">

            <input onChange={(e)=>setCityInput(e.target.value)} type="text" className="cityInput" placeholder='Search' />
            <div onClick={search} className="search-icon">
                <img src={search_icon} alt="" />
            </div>


        </div>
        <div className="weather-image">
            <img src={wIcon} alt="" />
        </div>
        <div className="weather-temp">{temperature} </div>
        <div className="weather-location">{location}</div>
        <div className="data-container">
            <div className="element">
                <img src={humidity_icon} alt="" className='icon' />
                <div className="data">
                    <div className="humidity-percentage">{humidity}</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={wind_icon} alt="" className='icon' />
                <div className="data">
                    <div className="humidity-percentage">{windSpeed}</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default WeatherApp
import React, { useState, useEffect } from 'react';
import 'weather-icons/css/weather-icons.css';
import axios from 'axios';


const API_KEY = "8a9d27ce0b11afef8878bf5bd490dae5";

const Weather = (props) => {
    const [search_city, setSearchCity] = useState('')
    const [name, setName] = useState(null);
    const [temp, setTemp] = useState(null);
    const [temp_min, setMinTemp] = useState(null);
    const [temp_max, setMaxTemp] = useState(null);
    const [weather, setWeather] = useState(null);
    const [weatherID, setWeatherID] = useState(null);

    useEffect(() => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${search_city}&appid=${API_KEY}`)
            .then(res => {
                console.log(res.data)
                setName(res.data.name)
                setTemp(res.data.main.temp)
                setMinTemp(res.data.main.temp_min)
                setMaxTemp(res.data.main.temp_max)
                setWeather(res.data.weather[0].description);
                setWeatherID(res.data.weather[0].id)
            })
            .catch(err => {
                console.log(err)
            })
    }, [search_city, weatherID]);

    const minMaxTemp = (temp_min, temp_max) => {

        return (
            <div>
                {temp_min !== null && temp_max !== null &&
                    <h3>
                        <span>{(temp_min - 273.15).toFixed(2)}&deg;C</span>
                        <span> {(temp_max - 273.15).toFixed(2)}&deg;C</span>
                    </h3>
                }
            </div>

        )
    }
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(e.target[0].value)
    }
    const weatherIcon = (id) => {
        let myInterval = id;
        //Trying to do range-wise instead of icon from res.data.weather[1]
        if (myInterval >= 200 && myInterval <= 232) {
            return 'http://openweathermap.org/img/wn/11d@2x.png';
        }
        else if (myInterval >= 300 && myInterval <= 321) {
            return 'http://openweathermap.org/img/wn/9d@2x.png';
        }
        else if (myInterval >= 500 && myInterval <= 531) {
            return 'http://openweathermap.org/img/wn/10d@2x.png';
        }
        else if (myInterval >= 700 && myInterval <= 781) {
            return 'http://openweathermap.org/img/wn/50d@2x.png';
        }
        else if (myInterval >= 801 && myInterval <= 804) {
            return 'http://openweathermap.org/img/wn/04d@2x.png';
        }
        else if (myInterval >= 600 && myInterval <= 622) {
            return 'http://openweathermap.org/img/wn/13d@2x.png';
        }
        else if (myInterval === 800) {
            return 'http://openweathermap.org/img/wn/01d@2x.png';
        }
    }
    return (<div className="container">
        <div className="cards">

            <form onSubmit={submitHandler}>
                <label>Enter City Name <span>&nbsp;</span></label>
                <input type="text" value={search_city} onChange={(e) => setSearchCity(e.target.value)} />
            </form>
            <h2 className="pt-2"> <u> {name} </u></h2>
            {weatherID !== null &&
                <div>
                    <img src={`${weatherIcon(weatherID)}`} alt="Weather"></img>
                    <h2 className="py-2">{(temp - 273.15).toFixed(2)}&deg;C           </h2>
                    <h4 className="py-4"> {minMaxTemp(temp_min, temp_max)}  </h4>
                    <h5 className="py-2"> {weather.toUpperCase()} </h5>
                </div>
            }
        </div>
    </div>)
}

export default Weather;

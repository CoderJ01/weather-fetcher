// React 
import React, { useState, useEffect, useCallback } from 'react';

// CSS
import './Dashboard.style.css';

// utils
import { popularCites } from './Dashboard.util';

// components
import Forecast from '../../components/Forecast/Forecast.component';

// other imports
import axios from 'axios';

const Dashboard = () => {
    const [input, setInput] = useState('');
    const [selection, setSelection] = useState('');
    const [city, setCity] = useState('');
    const [temperature, setTemperature] = useState(0);
    const [windSpeed, setWindSpeed] = useState(0);
    const [humidity, setHumidity] = useState(0);
    const [fethced, setFetched] = useState(false);
    const [daily, setDaily] = useState([]);

    const handleSearchSubmit = useCallback(() => {
        if(input !== '') {

            for(let i = 0; i < popularCites.length; i++) {
                if(input.toLowerCase() === popularCites[i].toLowerCase()) {
                    alert(`Use button for ${popularCites[i]}`);
                    return;
                }
            }

            const fetchCurrentWeather = async () => {
                try {
                    const response = await axios.request(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`);
                    const response_5day = await axios.request(`https://api.openweathermap.org/data/2.5/onecall?lat=${response.data.coord.lat}&&units=imperial&lon=${response.data.coord.lon}&exclude=hourly&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`);
                    setCity(response.data.name);
                    setTemperature(response.data.main.temp);
                    setWindSpeed(response.data.wind.speed);
                    setHumidity(response.data.main.humidity);
                    setDaily(response_5day.data.daily);
                    setFetched(true);
                    console.log(response.data);
                    console.log(response_5day.data.daily)
                }
                catch(error) {
                    console.log(error);
                }
            }
            fetchCurrentWeather();
        }
    }, [input])

    const handlePopularSubmit = useCallback(() => {
        if(selection !== '') {
            const fetchCurrentWeather = async () => {
                try {
                    const response = await axios.request(`https://api.openweathermap.org/data/2.5/weather?q=${selection}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`);
                    const response_5day = await axios.request(`https://api.openweathermap.org/data/2.5/onecall?lat=${response.data.coord.lat}&&units=imperial&lon=${response.data.coord.lon}&exclude=hourly&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`);
                    setCity(response.data.name);
                    setTemperature(response.data.main.temp);
                    setWindSpeed(response.data.wind.speed);
                    setHumidity(response.data.main.humidity);
                    setFetched(true);
                    setDaily(response_5day.data.daily);
                    console.log(response.data);
                    console.log(response_5day.data.daily)
                }
                catch(error) {
                    console.log(error);
                }
            }
            fetchCurrentWeather();
        }
    }, [selection])

    useEffect(() => {
        if(selection !== '') {
            handlePopularSubmit();
        }
    }, [selection, handlePopularSubmit]);

    return (
        <>
        <div className='weather'>
            <div className='search'>
                <div className='search-input'>
                    <input value={input} onChange={(e) => {setInput(e.target.value)}}></input>
                    <button onClick={handleSearchSubmit}>Search</button>
                </div>
                <div className='search-popular'>
                {
                    popularCites.map(city => {
                        return (
                            <button onClick={() => {setSelection(city)}}>{city}</button>
                        );
                    })
                }
                </div>
            </div>
            <Forecast
                city={city}
                temp={temperature}
                wind={windSpeed}
                humidity={humidity}
                fetched={fethced}
                daily={daily}
            />
        </div>
        <div className='history'>

        </div>
        </>
    );
}

export default Dashboard;
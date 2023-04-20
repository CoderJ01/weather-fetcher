// React 
import React, { useState, useEffect, useCallback } from 'react';

// CSS
import './Dashboard.style.css';

// components
import Forecast from '../../components/Forecast/Forecast.component';

// other imports
import axios from 'axios';

const Dashboard = () => {
    const [input, setInput] = useState('');
    const [weatherInfo, setWeatherInfo] = useState([]);

    const city = 'Casper';

    const handleSearchSubmit = useCallback(() => {
        if(input !== '') {
            const fetchCurrentWeather = async () => {
                try {
                    const response = await axios.request(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`);
                    setWeatherInfo(response);
                    console.log(response);
                }
                catch(error) {
                    console.log(error);
                }
            }
            fetchCurrentWeather();
        }
    }, [input])

    const handlePopularSubmit = () => {
        setInput(city);
    }

    useEffect(() => {
        if(input !== '') {
            console.log(input);
            handleSearchSubmit();
        }
    }, [input, handleSearchSubmit]);

    return (
        <>
        <div className='weather'>
            <div className='search'>
                <div className='search-input'>
                    <input value={input} onChange={(e) => {setInput(e.target.value)}}></input>
                    <button onClick={handleSearchSubmit}>Search</button>
                </div>
                <div className='search-popular'>
                    <button onClick={handlePopularSubmit}>{city}</button>
                </div>
            </div>
            <Forecast/>
        </div>
        <div className='history'>

        </div>
        </>
    );
}

export default Dashboard;
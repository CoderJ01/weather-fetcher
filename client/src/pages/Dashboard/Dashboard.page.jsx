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
    const [weatherInfo, setWeatherInfo] = useState([]);

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

    const handlePopularSubmit = useCallback(() => {
        if(selection !== '') {
            const fetchCurrentWeather = async () => {
                try {
                    const response = await axios.request(`https://api.openweathermap.org/data/2.5/weather?q=${selection}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`);
                    setWeatherInfo(response);
                    console.log(response);
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
            <Forecast weather={weatherInfo}/>
        </div>
        <div className='history'>

        </div>
        </>
    );
}

export default Dashboard;
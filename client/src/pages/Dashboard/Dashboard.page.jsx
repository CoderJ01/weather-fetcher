// React 
import React, { useState, useEffect, useCallback } from 'react';

// CSS
import './Dashboard.style.css';

// utils
import { popularCites } from './Dashboard.util';
import { baseURL } from '../../utils/urls';

// components
import Forecast from '../../components/Forecast/Forecast.component';
import PopularSearches from '../../components/PopularSearches/PopularSearches.component';

// other imports
import axios from 'axios';

const selectedButton = {
    backgroundImage: 'linear-gradient(to left, rgb(63, 162, 219), rgb(182, 135, 255))',
    borderImage: 'linear-gradient(to left, rgb(63, 162, 219), rgb(182, 135, 255))',
    borderWidth: '2px'
}

const Dashboard = () => {
    const [input, setInput] = useState('');
    const [selection, setSelection] = useState('');
    const [weather, setWeather] = useState([]);
    const [city, setCity] = useState('');
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
                    setWeather(response.data);
                    setCity(response.data.name);
                    setDaily(response_5day.data.daily);
                }
                catch(error) {
                    console.log(error);
                    return;
                }
         
                axios.post(`${baseURL}/search-history`, 
                    {
                        input: input
                    }
                )
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error);
                })
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
                    setWeather(response.data);
                    setCity(response.data.name);
                    setDaily(response_5day.data.daily);
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
                    popularCites.map(popularCity => {
                        if(city === popularCity) {
                            return (
                                <button onClick={() => {setSelection(popularCity)}} style={selectedButton}>{popularCity}</button>
                            );
                        }
                        else {
                            return (
                                <button onClick={() => {setSelection(popularCity)}}>{popularCity}</button>
                            );
                        }
                    })
                }
                </div>
            </div>
            <Forecast
                weather={weather}
                daily={daily}
            />
        </div>
        <PopularSearches/>
        </>
    );
}

export default Dashboard;
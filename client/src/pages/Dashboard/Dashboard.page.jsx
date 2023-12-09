// React 
import React, { useState, useEffect, useCallback } from 'react';

// CSS
import './Dashboard.style.css';

// utils
import { popularCites, processInput, processSelection, selectedButton } from './Dashboard.util';

// components
import Forecast from '../../components/Forecast/Forecast.component';
import PopularSearches from '../../components/PopularSearches/PopularSearches.component';

// other imports
import axios from 'axios';

const Dashboard = () => {
    const [input, setInput] = useState('');
    const [selection, setSelection] = useState('');
    const [weather, setWeather] = useState([]);
    const [city, setCity] = useState('');
    const [daily, setDaily] = useState([]);

    const handleSearchSubmit = () => {
        processInput(input, setWeather, setCity, setDaily);
    }

    const handlePopularSubmit = useCallback(() => {
        processSelection(selection, setWeather, setCity, setDaily);
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
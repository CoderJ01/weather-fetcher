// React 
import React from 'react';

// CSS 
import './Forecast.style.css';

const Forecast = ({ weather }) => {
    console.log(weather);
    return (
        <div className='forecast'>
            <div className='f-current'>
                <h1>{weather.name}</h1>
                <br/>
                <p>Temp: {((weather.main.temp - 273.15) * (9/5) + 32).toFixed(2)}°F</p>
                <br/>
                <p>Wind: {weather.wind.speed} mph</p>
                <br/>
                <p>Humidity: {weather.main.humidity}%</p>
            </div>
            <div className='f-future'>
                <div className='ff-day'>

                </div>
                {/* next four days */}
            </div>
            <div className='f-most-searched'>

            </div>
        </div>
    );
}

export default Forecast;
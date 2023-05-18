// React 
import React from 'react';

// CSS 
import './Forecast.style.css';

// other imports
import moment from 'moment';

const Forecast = ({ weather = [], daily = []}) => {

    return (
        <div className='forecast'>
            <div className='f-current'>
            {
                weather.length === 0 ? 
                (
                    <>
                    <h1>City</h1>
                    <br/>
                    <p style={{ fontWeight: 'bold' }}>Temp:</p>
                    <br/>
                    <p style={{ fontWeight: 'bold' }}>Wind:</p>
                    <br/>
                    <p style={{ fontWeight: 'bold' }}>Humidity:</p>
                    </>
                ) : 
                (
                    <>
                    <h1>{weather.name}</h1>
                    <br/>
                    <p><span style={{ fontWeight: 'bold' }}>Temp:</span> {((weather.main.temp - 273.15) * (9/5) + 32).toFixed(2)}°F</p>
                    <br/>
                    <p><span style={{ fontWeight: 'bold' }}>Wind:</span> {weather.wind.speed} mph</p>
                    <br/>
                    <p><span style={{ fontWeight: 'bold' }}>Humidity:</span> {weather.main.humidity}%</p>
                    </>
                )
            }
                
            </div>
            <div className='f-future'>
                <h2>5-day Forecast</h2>
                <div className='ff-display'>
                {
                    daily.length === 0 ? 
                    (
                        Array.apply(0, Array(5)).map(function(x, i) {
                            return (
                                <div className='ffd-day'>
                                    <p style={{ fontWeight: 'bold' }}>Date</p>
                                    <p style={{ fontWeight: 'bold' }}>Temp: </p>
                                    <p style={{ fontWeight: 'bold' }}>Wind: </p>
                                    <p style={{ fontWeight: 'bold' }}>Humidity: </p>
                                </div>
                            );
                        })
                    ) : 
                    (
                        Array.apply(0, Array(5)).map(function(x, i) {
                            return (
                                <div className='ffd-day'>
                                    <p><span style={{ fontWeight: 'bold' }}>Date:</span> {moment().add(i + 1,'day').format('L')}</p>
                                    <p><span style={{ fontWeight: 'bold' }}>Temp:</span> {daily[i + 1].temp.day}°F</p>
                                    <p><span style={{ fontWeight: 'bold' }}>Wind:</span> {daily[i + 1].wind_speed} mph</p>
                                    <p><span style={{ fontWeight: 'bold' }}>Humidity:</span> {daily[i + 1].humidity}%</p>
                                </div>
                            );
                        })
                    )
                }
                </div>
            </div>
        </div>
    );
}

export default Forecast;
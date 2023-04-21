// React 
import React from 'react';

// CSS 
import './Forecast.style.css';

const Forecast = ({ city, temp, wind, humidity, fetched, daily = []}) => {
    return (
        <div className='forecast'>
            <div className='f-current'>
            {
                !fetched ? 
                (
                    <>
                    <h1>City</h1>
                    <br/>
                    <p>Temp:</p>
                    <br/>
                    <p>Wind:</p>
                    <br/>
                    <p>Humidity:</p>
                    </>
                ) : 
                (
                    <>
                    <h1>{city}</h1>
                    <br/>
                    <p>Temp: {((temp - 273.15) * (9/5) + 32).toFixed(2)}°F</p>
                    <br/>
                    <p>Wind: {wind} mph</p>
                    <br/>
                    <p>Humidity: {humidity}%</p>
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
                                    <p>Date</p>
                                    <p>Temp: </p>
                                    <p>Wind: </p>
                                    <p>Humidity: </p>
                                </div>
                            );
                        })
                    ) : 
                    (
                        Array.apply(0, Array(5)).map(function(x, i) {
                            console.log(x);
                            console.log(i);
                            return (
                                <div className='ffd-day'>
                                    <p>Date:</p>
                                    <p>Temp: {daily[i + 1].temp.day}°F</p>
                                    <p>Wind: {daily[i + 1].wind_speed} mph</p>
                                    <p>Humidity: {daily[i + 1].humidity}%</p>
                                </div>
                            );
                        })
                    )
                }
                </div>
            </div>
            <div className='f-most-searched'>

            </div>
        </div>
    );
}

export default Forecast;
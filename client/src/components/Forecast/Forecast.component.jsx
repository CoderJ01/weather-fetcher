// React 
import React from 'react';

// CSS 
import './Forecast.style.css';

const Forecast = ({ city, temp, wind, humidity, fetched }) => {
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
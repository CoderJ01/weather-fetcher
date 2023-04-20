// React 
import React from 'react';

// CSS 
import './Forecast.style.css';

const Forecast = ({ weather }) => {
    return (
        <div className='forecast'>
            <div className='f-current'>

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
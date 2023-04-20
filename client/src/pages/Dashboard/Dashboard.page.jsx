// React 
import React, { useState } from 'react';

// CSS
import './Dashboard.style.css';

// components
import Forecast from '../../components/Forecast/Forecast.component';

const Dashboard = () => {
    const [input, setInput] = useState('');

    return (
        <>
        <div className='weather'>
            <div className='search'>
                <div className='search-input'>
                    <input value={input} onChange={(e) => {setInput(e.target.value)}}></input>
                    <button>Search</button>
                </div>
                <div className='search-popular'>

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
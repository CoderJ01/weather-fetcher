// React 
import React from 'react';

// CSS
import './Dashboard.style.css';

// components
import Forecast from '../../components/Forecast/Forecast.component';

const Dashboard = () => {
    return (
        <>
        <div className='weather'>
            <div className='search'>
                <div className='input'>

                </div>
                <div className='popular'>

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
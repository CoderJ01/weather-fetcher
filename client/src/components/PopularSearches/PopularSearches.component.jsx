// React
import React, { useState, useEffect, useCallback } from 'react';

// CSS
import './PopularSearches.style.css';

// URL
import { baseURL } from '../../utils/urls';

// other imports
import axios from 'axios';

const PopularSearches = () => {
    const [topSeaches, setTopSearches] = useState([]);
    
    console.log(topSeaches);

    const fetchCities = useCallback(async () => {
        try {
            const response = await axios.get(`${baseURL}/search-history`);
            console.log(response.data);
            setTopSearches(response.data);
        }
        catch(error) {
            console.log(error);
        }
    }, [setTopSearches]);

    useEffect(() => {
        fetchCities();
    }, [fetchCities]);

    return (
        <div className='popular-searches'>
            <h2>Top Searches</h2>
            <p>1. City</p>
            <p>2. City</p>
            <p>3. City</p>
        </div>
    );
}

export default PopularSearches;
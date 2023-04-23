// React
import React, { useState, useEffect, useCallback } from 'react';

// CSS
import './PopularSearches.style.css';

/// component
import Loader from '../Loader/Loader.component';

// util
import { toTitleCase } from './PopularSearches.util';

// URL
import { baseURL } from '../../utils/urls';

// other imports
import axios from 'axios';

const PopularSearches = () => {
    const [topSearches, setTopSearches] = useState([]);
    const [fetched, setFetched] = useState(false);

    const fetchCities = useCallback(async () => {
        try {
            const response = await axios.get(`${baseURL}/search-history`);
            console.log(response.data);
            setTopSearches(response.data);
            setFetched(true);
        }
        catch(error) {
            console.log(error);
        }
    }, [setTopSearches]);

    useEffect(() => {
        fetchCities();
    }, [fetchCities]);

    return (
        <>
        {
            topSearches.length === 0 ? 
            (
                ''
            ) : 
            (
                <div className='popular-searches'>
                    <h2>Top Searches</h2>
                    {
                        !fetched ? 
                        (
                            <Loader/>
                        ) : 
                        (
                            topSearches.map((search, i) => {
                                if(i < 5) {
                                    return (
                                        <p>{i + 1}. {toTitleCase(search.city)}</p>
                                    );
                                }
                                else {
                                    return<></>
                                }
                            })
                        )
                    }
                </div>
            )
        }
        </>
    );
}

export default PopularSearches;
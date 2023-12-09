// React
import React, { useState } from 'react';

// CSS
import './PopularSearches.style.css';

/// component
import Loader from '../Loader/Loader.component';

// util
import { toTitleCase } from './PopularSearches.util';
import { GetData } from '../../utils/request';

const PopularSearches = () => {
    const [fetched, setFetched] = useState(false);

    const data = GetData(`search-history`, setFetched);

    return (
        <div className='popular-searches'>
            <h2>Top Searches</h2>
            {
                !fetched ? 
                (
                    <Loader/>
                ) : 
                (
                    data?.data?.map((search, i) => {
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
    );
}

export default PopularSearches;
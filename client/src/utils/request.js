// React
import { useState, useEffect, useCallback } from 'react';

// other imports
import axios from 'axios';

const baseURL_server = process.env.REACT_APP_DEPLOYED_BACKEND;

// GET
export function GetData(route, setFetched) {
    const [data, setData] = useState([]);

    const getInfo = useCallback(async() => {
        try {
            const response = await axios.get(`${baseURL_server}/${route}`);
            setData(response);
            setFetched(true);
        }
        catch(error) {
            console.log(error);
        }
    }, [route, setFetched]);

    useEffect(() => {
        getInfo();
    }, [getInfo]);

    return data;
}

// POST
export function postInfo(route, input) {
    axios.post(`${baseURL_server}/${route}`, {
       input: input
    })
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    });
}




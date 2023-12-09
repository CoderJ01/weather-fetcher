// utils
import { postInfo } from '../../utils/request';

// other imports
import axios from 'axios';

export const popularCites = ['Austin', 'Chicago', 'New York', 'Orlando', 'San Francisco', 'Seattle', 'Denver', 'Atlanta'];

export const checkPopularCity = (input) => {
    for(let i = 0; i < popularCites.length; i++) {
        if(input.toLowerCase().trim() === popularCites[i].toLowerCase().trim()) {
            alert(`Use button for ${popularCites[i]}`);
            return true;
        }
    }
    return false;
}

export const processInput = async (input, setWeather, setCity, setDaily) => {
    if(input === '' || checkPopularCity(input)) return;
    
    try {
        const response = await axios.request(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`);
        const response_5day = await axios.request(`https://api.openweathermap.org/data/2.5/onecall?lat=${response.data.coord.lat}&&units=imperial&lon=${response.data.coord.lon}&exclude=hourly&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`);
        setWeather(response.data);
        setCity(response.data.name);
        setDaily(response_5day.data.daily);
    }
    catch(error) {
        console.log(error);
        return;
    }

    postInfo(`search-history`);
}

export const selectedButton = {
    backgroundImage: 'linear-gradient(to left, rgb(63, 162, 219), rgb(182, 135, 255))',
    borderImage: 'linear-gradient(to left, rgb(63, 162, 219), rgb(182, 135, 255))',
    borderWidth: '2px'
}
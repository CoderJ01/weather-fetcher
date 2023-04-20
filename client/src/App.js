// React
import { useEffect } from 'react';

// CSS
import './App.css';

// other imports
import axios from 'axios';

function App() {

	useEffect(() => {
		const fetchCurrentWeather = async () => {
			try {
				const response = await axios.request(`https://api.openweathermap.org/data/2.5/onecall?lat=33.44&&units=imperial&lon=-94.04&exclude=hourly&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`);
				console.log(response);
			}
			catch(error) {
				console.log(error);
			}
		}
		fetchCurrentWeather();
	}, []);

	return (
		<div className='App'>
			
		</div>
	);
}

export default App;

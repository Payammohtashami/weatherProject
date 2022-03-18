import React , {useState , createContext , useEffect} from 'react';
import { GetData } from '../service/api';
import { notify } from '../toast'


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const WeatherContext = createContext();
export const CityContext = createContext();
const Weather = (props) => {

    const [weatherData, setWeatherData] = useState([]);
    const [city, setCity] = useState("Marivan");
    
    useEffect(() => {
        const fetchAPI = async() =>{
            try{

                const data = (await GetData(city)).data;
                setWeatherData(data);
            } catch {
                const Notic = notify("error",city)
                return Notic
            }

        }
        fetchAPI();
    },[city])
    
    return (
        <WeatherContext.Provider value={weatherData}> 
            <CityContext.Provider value={setCity}>
                    {props.children}
                    <ToastContainer />
            </CityContext.Provider>
        </WeatherContext.Provider>

    );
};
export default Weather;
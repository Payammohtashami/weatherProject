import React , {useState , createContext , useEffect} from 'react';
import { GetData } from '../service/api';
import { notify } from '../toast'


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const WeatherContext = createContext();
export const CityContext = createContext();
export const StatusContext = createContext();
const Weather = (props) => {

    const [weatherData, setWeatherData] = useState([]);
    const [city, setCity] = useState("Marivan");
    const [statuses , setStatus] = useState()
    
    useEffect(() => {
        const fetchAPI = async() =>{
            try{

                const data = (await GetData(city)).data;
                const status =  (await GetData(city)).status;
                setStatus(status)
                setWeatherData(data);
            } catch {
                const Notic = notify("error",city)
                return Notic
            }

        }
        fetchAPI();
    },[statuses , city])
    
    return (
        <WeatherContext.Provider value={weatherData}> 
            <CityContext.Provider value={setCity}>
                <StatusContext.Provider value={statuses}>
                    {props.children}
                    <ToastContainer />
                </StatusContext.Provider>
            </CityContext.Provider>
        </WeatherContext.Provider>

    );
};
export default Weather;
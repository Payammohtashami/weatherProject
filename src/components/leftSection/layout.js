// my used Packes
import React, {useContext} from 'react';

// Components
import Body from './body';
import Footer from './footer';
import Loading from '../loading/layout'

// Styles
import '../../assets/scss/leftStyles.scss';

// Context
import { WeatherContext } from '../../Context/WeatherContext';


const Layout = () => {
    
    const weatherData = useContext(WeatherContext)
    
    return (
        <div className="mainLeftContainer">
            <div className="bodyLeftStyles">
                {weatherData.length === 0 ?
                <Loading />
                :
                <Body
                    name={weatherData.name}
                    temp={weatherData.main.temp}
                    country={weatherData.sys.country}
                    desc={weatherData.weather[0].description}
                />
                }
            <div>
                < Footer />
            </div>
            </div>
        </div>
    );
};

export default Layout;
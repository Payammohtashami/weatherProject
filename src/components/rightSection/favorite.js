import React,{useContext} from 'react';

// Styles
import "../../assets/scss/rightStyle.scss";

// Components
import Card from './card';

// Image
import pic1 from '../../assets/image/RightSection/Florans.png'
import pic2 from '../../assets/image/RightSection/NewYork.png'
import pic3 from '../../assets/image/RightSection/Paris.png'

// Context
import { CityContext } from '../../Context/WeatherContext';

const Favorite = () => {
    
    const cityContext = useContext(CityContext)

    return (
        <div className="favoriteContainer">
            <div className="favoriteTitle">
                <h1> <span> Weather </span>Forecast</h1>
            </div>
            <div className="favoriteCards">
                <button onClick={() => {
                    cityContext("New York")
                } }><Card image={pic2} city="NewYork" country="USA" /></button>
                <button onClick={() => {
                    cityContext("Florence")
                } }><Card image={pic1} city="Florence" country="Italy" /></button>
                <button onClick={() => {
                    cityContext("Paris")
                } }><Card image={pic3} city="Paris" country="France" /></button>
                <div className="addtoFavorite">
                    <h2>+</h2>
                    <h2>add City</h2>
                </div>
            </div>
        </div>
    );
};

export default Favorite;
import React, { useContext, useState } from 'react';

// Styles
import "../../assets/scss/rightStyle.scss";

// Context
import { CityContext} from '../../Context/WeatherContext';



const Header = () => {
    const cityContext = useContext(CityContext)
    const [search , setSearch] = useState("");


// Handler
    const searchHandler = e => {
        setSearch(e.target.value)
    }
    const cityhHandler = () => {
            cityContext(search)
            setSearch("")
    }  

    return (
        <>
            <div className="searchContainer">
                <div className="searchBox">
                    <input type="text" onChange={searchHandler} value={search} placeholder="Search new place..." />
                    <button onClick={cityhHandler}>Search</button>
                </div>
            </div>
        </>
    );
};
export default Header;
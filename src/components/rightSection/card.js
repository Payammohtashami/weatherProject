import React from 'react';
import "../../assets/scss/rightStyle.scss";

const Card = ({image , city ,country}) => {

    return (
        <div className="cardContainer">
            <img src={image}  alt={city} />
            <p>{city} , {country}</p>
        </div>
    );
};

export default Card;
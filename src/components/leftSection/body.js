import React from 'react';
import   '../../assets/scss/leftStyles.scss'

import { WeekDays , Month ,dayTime , hour , setMood } from '../../helper/functions'


const Body = ({name , temp , country ,desc }) => {



    let temp1 = temp - 273

    const days = new Date().getDate()

    return (
        <div className="leftCon">
            <div>
                <h1 className="todayText">Today</h1>
                <p className="timezone">{WeekDays()} , {days} {Month()} </p>
            </div>
            <div className="mainSection">
                <img src={setMood(desc)} alt="pic1" />
                <h1>{temp1.toFixed(1)}<span className="degree">°C</span></h1>
            </div>
            <div className="location">
                <p>{name} , {country}</p>
            </div>
            <div className="clock">
                <p>{dayTime()} {hour()}</p>
            </div>
        </div>
    );
};



export default Body;
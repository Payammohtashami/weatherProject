import React from 'react';
import styles from './assets/css/daily.module.css'
import DayData from './dayData';


// Image
import pic1 from "../../assets/image/RightSection/1.png"
import pic2 from "../../assets/image/RightSection/2.png"
import pic3 from "../../assets/image/RightSection/3.png"
import pic4 from "../../assets/image/RightSection/4.png"
import pic5 from "../../assets/image/RightSection/5.png"
import pic6 from "../../assets/image/RightSection/6.png"
import pic7 from "../../assets/image/RightSection/7.png"
import pic8 from "../../assets/image/RightSection/8.png"
import pic9 from "../../assets/image/RightSection/9.png"
import pic10 from "../../assets/image/RightSection/10.png"
import pic11 from "../../assets/image/RightSection/11.png"
import pic12 from "../../assets/image/RightSection/12.png"
const daily = () => {


    return (
        <div className={styles.container}>
            <div className={styles.titr}>
                <ul>
                    <li className={styles.list}>Week</li>
                    <li>Month</li>
                    <li>3 Month</li>
                    <li>6 Month</li>
                </ul>
            </div>
            <div >
                <DayData day="Sunday" persent="45" min="10" max="17" mood={pic2} />
                <DayData day="Tuesday" persent="23" min="12" max="21" mood={pic1} />
                <DayData day="Wednesday" persent="54" min="7" max="9" mood={pic4} />
                <DayData day="Thurdday" persent="50" min="5" max="10" mood={pic6} />
                <DayData day="Friday" persent="47" min="-1" max="7" mood={pic7} />
                <DayData day="Saturday" persent="56" min="0" max="6" mood={pic9} />
                <DayData day="Monday" persent="74" min="6" max="15" mood={pic10} />
            </div>
        </div>
    );
};

export default daily;
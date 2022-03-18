import React from 'react';
// Styles
import "../../assets/scss/rightStyle.scss";
// Image
import drop from '../../assets/image/RightSection/drop.png';
import styled from 'styled-components';




const DayData = ({day , persent , min , max , mood}) => {
    const Div = styled.div`
        width: ${persent}%;
        height: 5px;
        background-color: #ff6666;
        border-radius: 20px;
    }`
    

    return (
        <div className="dayDataContainer">
            <table>
                <tbody>
                    <tr className="daysTable">
                        <td className="dayTables">{day}</td>
                        <td ><img className="drop" src={drop} alt="drop" /> {persent}%</td>
                        <td ><img className="drop" src={mood} alt="drop" /></td>
                        <td>{min}°C</td>
                        <td>
                            <div  className="chart">
                               <Div />
                            </div>
                        </td>
                        <td>{max}°C</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default DayData;
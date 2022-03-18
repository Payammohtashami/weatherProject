import React from 'react';
// Styles
import '../../assets/scss/leftStyles.scss';

// Styled Components
import styled from 'styled-components'
const TD = styled.td`
        &:hover {
        color: #ffcc00;
        }
    } `
    const Div = styled.div`
        &:hover {
            background-color: #ffcc00;
        }
    `
    
const footer = () => {

    return (
        <div className="leftFooterContainer">
            <div className="leftFooter">

                <div className="footerTitle">
                    <h4>Chance of rain</h4>
                </div>

                <div className="leftChart">
                    <div className="rainAmount">
                        <p>sunny</p>
                        <p>rainy</p>
                        <p>heavy rain</p>
                    </div>
                    <div className="chartColumn">
                        <table className="chartHeight">
                            <thead >
                                <tr className="columnChart">
                                    <td><Div></Div></td>
                                    <td><Div></Div></td>
                                    <td><Div></Div></td>
                                    <td><Div></Div></td>
                                    <td><Div></Div></td>
                                    <td><Div></Div></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="leftChartTime">
                                    <TD>10AM</TD>
                                    <TD>12AM</TD>
                                    <TD>2AM</TD>
                                    <TD>4AM</TD>
                                    <TD>6AM</TD>
                                    <TD>8AM</TD>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default footer;
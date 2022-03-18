import React from 'react';
// Styles
import "../../assets/scss/rightStyle.scss";

// Components
import Header from './header';
import Favorite from './favorite';
import Daily from './daily';


const Layout = () => {
    


    return (
        <div className="rightMainContainer">
            <div className="rightContainers">
                <div>
                    <Header />
                </div>
                <div>
                    <Favorite />
                </div>
                <div>
                    <Daily />
                </div>
            </div>
        </div>
    );
};

export default Layout;
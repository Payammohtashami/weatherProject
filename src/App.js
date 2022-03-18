import React from 'react';

// Styles
import './assets/scss/mainStyle.scss'
//Components
import Leftlayout from './components/leftSection/layout';
import Rightlayout from './components/rightSection/layout';

// Context
import Weather from './Context/WeatherContext';
// toast

function App() {
  

  document.title = "Weather";

  return (
    <Weather>
      <div className="App">
        {/* <button onClick={clickHandler}>click</button> */}
        <div className="mainContainer">
          <div className="rightContainer">
            <Rightlayout />
          </div>
          <div className="leftContainer">
            <Leftlayout/>
          </div>
        </div>
      </div>
    </Weather>
  );
}

export default App;

import React from 'react';
import { TopNavBar } from './Navbar';
import icon from './icon.png';

function App() {
  return (
    <div className="App">
      <div className="header_image">
      <TopNavBar />
      <div><img className="icon_header" src={icon} alt=""/></div>
        <h1 className="heading_primary">
          <div className="heading-primary-main">WELCOME HOME</div>
          <div className="heading-primary-secondary">YOUR FUTURE HOME AWAITS</div>
          <a href="" className="button_color button_styling">AVALIABLE HOMES</a>
        </h1>
      </div>
    </div>
  );
}

export default App;

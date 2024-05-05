import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="App">
        <header id="header">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="header_top">
                <div className="header_top_left">
                  <ul className="top_nav">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="pages/contact.html">Contact</a></li>
                  </ul>
                </div>
                <div className="header_top_right">
                  <p>Friday, December 05, 2045</p>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="header_bottom">
                <div className="logo_area"><a href="index.html" className="logo"><img src="images/logo.jpg" alt=""/></a>
                </div>
                <div className="add_banner"><a href="#"><img src="images/addbanner_728x90_V1.jpg" alt=""/></a></div>
              </div>
            </div>
          </div>
        </header>

      </div>
  );
}

export default App;

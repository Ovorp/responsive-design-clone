import React, { Component } from 'react';
import NavBar from './components/NavBar';
import './css/App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="welcome">
          <NavBar />
          <div className="hero">
            <h2>Welcome To Our Studio!</h2>
            <h3>IT'S NICE TO MEET YOU</h3>
            <button className="tellBTN">TELL ME MORE</button>
          </div>
        </div>
      </div>
    );
  }
}

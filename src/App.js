import React, { Component } from 'react';
import NavBar from './components/NavBar';
import './css/App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="welcome">
          <NavBar />
          <h1>Welcome To Our Studio!</h1>
          <h2>IT'S NICE TO MEET YOU</h2>
          <button>TELL ME MORE</button>
        </div>
      </div>
    );
  }
}

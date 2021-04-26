import React, { Component } from 'react';
import navBarLogo from './navbar-logo.svg';
import './../css/NavBar.css';

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDropMenu: false,
    };
  }

  render() {
    const navBarLinks = ['SERVICES', 'PORTFOLIO', 'ABOUT', 'TEAM', 'CONTACT'];

    return (
      <nav className={this.state.showDropMenu ? 'expand' : ''}>
        <div className="header">
          <h1>
            <img src={navBarLogo} alt="logo" />
          </h1>

          <button
            className="menuBTN"
            onClick={() =>
              this.setState({ showDropMenu: !this.state.showDropMenu })
            }
          >
            MENU
            <div>
              <div className="hamburger" />
              <div className="hamburger" />
              <div className="hamburger" />
            </div>
          </button>
        </div>
        <div className="menu">
          <ul>
            {navBarLinks.map((val) => (
              <li key={val}>{val}</li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

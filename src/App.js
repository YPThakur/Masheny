import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import whiteLogo from './assets/images/white-logo.png';
import contentImage from './assets/images/image-1.jpg';
import Login from './login/login';

class App extends Component {


  render() {
    document.body.className = 'login';
    document.title = "Login";
    return (
      <Login />
    );
  }
}

export default App;

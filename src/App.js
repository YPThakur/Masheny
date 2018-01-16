import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Login from './login/Login';
import { Switch, Route } from 'react-router-dom'
import { Routes } from './web/Routes';

class App extends Component {


  render() {
    document.body.className = 'login';
    document.title = "Login";
    return (
      <div>
        <Routes />
      </div>
    );
  }
}

export default App;

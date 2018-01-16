import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Importing Component for routing
import { Login } from './../login/Login';


export class Routes extends React.Component {

    render() {
        return (
            <Route exact path='/' component={Login} />
        );
    }
}
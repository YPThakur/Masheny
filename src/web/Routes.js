import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Importing Components for routing
import { LoginComponent } from './../Components/Login/LoginComponent';
import { HomeComponent } from './../Components/Home/HomeComponent'


export class Routes extends React.Component {

    constructor() {
        super();
    }


    render() {
        return (
            <Switch>
                <Route exact path='/' component={LoginComponent} />
                <Route exact path='/sign-in' component={LoginComponent} />
            </Switch>
        );
    }
}
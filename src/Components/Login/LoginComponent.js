import React, { Component } from 'react';
import { MainLoginWrapper } from './MainLoginWrapper';
import { Route, Switch, Redirect } from 'react-router-dom';
import $ from 'jquery';
import './../../assets/js/custom.js';
import AuthService from './../../Services/AuthService';
const LoggedIn = true;
const PageTitle = "Login";
export class LoginComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            isLoggedIn: LoggedIn !== null ? true : false,
        };
    }

    componentDidMount() {
        
    }
    componentWillMount() {
        // Setting up document title
        document.title = PageTitle;

        // Adds login class to the body
        document.body.className = 'login';
    }


    componentWillUnmount() {
        document.body.className = '';
    }

    //Renders Main login wrapper
    render() {
        return (
            <div className="wrapper">
                {AuthService.isAuthenticated()}
                <MainLoginWrapper></MainLoginWrapper>
            </div>
        );
    }



}
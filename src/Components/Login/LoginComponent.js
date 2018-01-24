import React, { Component } from 'react';
import { MainLoginWrapper } from './MainLoginWrapper';
import { Route, Redirect } from 'react-router-dom';
import $ from 'jquery';
import './../../assets/js/custom.js';
import AuthService from './../../Services/AuthService';  
const LoggedIn = false;
export class LoginComponent extends React.Component {

    constructor() {
        super();
        this.documentTitle('Login');
        this.state = {
            isLoggedIn: LoggedIn !== null ? true : false,
        }; 
    }

    componentDidMount() {
        this.redirectIfAuthenticated();
    } 

    documentTitle(title) {
        // Setting up document title
        document.title = title;

        // Adds login class to the body
        document.body.className = 'login';
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
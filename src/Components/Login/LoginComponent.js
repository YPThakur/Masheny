import React, { Component } from 'react';
import { MainLoginWrapper } from './MainLoginWrapper';
import { Route, Redirect } from 'react-router-dom';
import $ from 'jquery';
import './../../assets/js/custom.js';

//const Auth = new AuthService();
const LoggedIn = false;
//const LoggedIn = localStorage.getItem('loggedIn') !== null ? JSON.parse(localStorage.getItem('loggedIn')) : null;
export class LoginComponent extends React.Component {

    constructor() {
        super();
        this.documentTitle('Login');
        this.state = {
            isLoggedIn: LoggedIn !== null ? true : false,
        };
//        AuthService.testFunction();
        console.log();
        this.redirectIfAuthenticated = this.redirectIfAuthenticated.bind(this);
    }

    componentDidMount() {
        this.redirectIfAuthenticated();
    }

    redirectIfAuthenticated() {
        if (this.state.isLoggedIn) {
            // <Redirect to="/borrower"/>
        }
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
            <MainLoginWrapper>dfdsffdsadfdsfasdf</MainLoginWrapper>
        );
    }



}
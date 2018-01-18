import React, { Component } from 'react';
import { MainLoginWrapper } from './MainLoginWrapper';
import $ from 'jquery';
import './../../assets/js/custom.js';

export class LoginComponent extends React.Component {

    constructor() {
        super();
        // Save data to sessionStorage
        sessionStorage.setItem('key', 'value');
        this.documentTitle('Login');
    }

    documentTitle(title) {
        // Setting up document title
        document.title = title;

        // Adds login class to the body
        document.body.className = 'login';
    }

    //Renders Main login wrapper
    render() {
        console.log(sessionStorage.getItem('key'));
        return (
            <MainLoginWrapper />
        );
    }



}


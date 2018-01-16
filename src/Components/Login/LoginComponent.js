import React, { Component } from 'react';
import { MainLoginWrapper } from './MainLoginWrapper';


export class LoginComponent extends React.Component {

    constructor() {
        super();
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
        return (
            <MainLoginWrapper />
        );
    }



}


import React, { Component } from 'react';
import { LoginHeader } from './LoginHeader';
import { LoginGreating } from './LoginGreating';
import { LoginForm } from './LoginForm';
import { LoginFooter } from './LoginFooter';

export class MainLoginWrapper extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            
            <div className="main-wrapper">
                <LoginHeader />
                <div className="body-content">
                    <div className="container clearfix">
                        <LoginGreating />
                        <LoginForm />
                    </div>
                </div>
                <LoginFooter />
            </div>
        );
    }
}
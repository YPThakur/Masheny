import React, { Component } from 'react';
import { LoginHeader } from './LoginHeader';
import { LoginGreating } from './LoginGreating';
import { LoginForm } from './LoginForm';
import { LoginFooter } from './LoginFooter';

export class MainLoginWrapper extends React.Component {



    render() {
        return (
            <div class="main-wrapper">
                <LoginHeader />
                <div class="body-content">
                    <div class="container clearfix">
                        <LoginGreating />
                        <LoginForm />
                    </div>
                </div>
                <LoginFooter />
            </div>
        );
    }
}
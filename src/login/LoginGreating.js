import React, { Component } from 'react';
import WelcomeImage from './../assets/images/image-1.jpg'

export class LoginGreating extends React.Component {


    render() {
        return (
            <div class="login-image">
                <div class="overlay-content">
                    <h2>Welcome back.</h2>
                    <p>We are here to help.</p>
                </div>
                <img src={WelcomeImage} />
            </div>
        );
    }

}
import React, { Component } from 'react';
import HeaderLogo from './../assets/images/white-logo.png';



export class LoginHeader extends React.Component {



    render() {
        return (
            <header class="home">
                <div class="container">
                    <div class="logo">
                        <a href="javascript:void(0);">
                            <img src={HeaderLogo} alt="logo" />
                        </a>
                    </div>
                </div>
            </header>
        );
    }
}
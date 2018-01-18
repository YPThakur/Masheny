import React, { Component } from 'react';
import HeaderLogo from './../../assets/images/white-logo.png';



export class LoginHeader extends React.Component {



    render() {
        return (
            <header className="home">
                <div className="container">
                    <div className="logo">
                        <a href="javascript:void(0);">
                            <img src={HeaderLogo} alt="logo" />
                        </a>
                    </div>
                </div>
            </header>
        );
    }
}
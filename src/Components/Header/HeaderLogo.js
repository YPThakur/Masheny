import React, { Component } from 'react';
import LogoInYellow from './../../assets/images/yellow-logo.png';

export class HeaderLogo extends React.Component {

    render() {
        return (
            <div class="logo">
                <a href="javascript:void(0);">
                    <img src={LogoInYellow} />
                </a>
            </div>
        );
    }
}
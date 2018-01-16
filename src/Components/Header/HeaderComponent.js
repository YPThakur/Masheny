import React, { Component } from 'react';
import { HeaderLogo } from './HeaderLogo';
import { HeaderNav } from './HeaderNav';
export class HeaderComponent extends React.Component {
    render() {
        return (
            <header>
                <div className="container">
                    <HeaderLogo />
                    <HeaderNav />
                </div>
            </header>
        );
    }
}
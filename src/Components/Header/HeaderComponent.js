import React, { Component } from 'react';
import { HeaderLogo } from './HeaderLogo';
import { HeaderNav } from './HeaderNav';
export class HeaderComponent extends React.Component {
    render() {
        return (
            <header>
                <div class="container">
                    <HeaderLogo />
                    <HeaderNav />
                </div>
            </header>
        );
    }
}
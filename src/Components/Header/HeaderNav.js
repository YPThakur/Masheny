import React, { Component } from 'react';

export class HeaderNav extends React.Component {
    render() {
        return (
            <div className="navigation">
                <ul>
                    <li><a href="javascript:void(0);">Borrow</a></li>
                    <li><a href="javascript:void(0);">Lend</a></li>
                    <li><a href="javascript:void(0);">Sign In</a></li>
                </ul>
            </div>
        );
    }
}
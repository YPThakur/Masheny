import React, { Component } from 'react';

export class HeaderNav extends React.Component {
    render() {
        return (
            <div className="navigation">
                <ul>
                    <li><a href={'/borrower'}>Borrow</a></li>
                    <li><a href={'/lender'}>Lend</a></li>
                    <li><a href={'/'}>Sign In</a></li>
                </ul>
            </div>
        );
    }
}
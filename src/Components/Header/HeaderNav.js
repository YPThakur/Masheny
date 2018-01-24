import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class HeaderNav extends React.Component {
    render() {
        return (
            <div className="navigation">
                <ul>
                    <li><Link to="/borrower">Borrow</Link></li>
                    <li><Link to="/lender">Lend</Link></li>
                    <li><Link to="/">Sign In</Link></li>
                </ul>
            </div>
        );
    }
}
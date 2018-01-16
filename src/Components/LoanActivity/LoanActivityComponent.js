import React, { Component } from 'react';
import { HeaderComponent } from '../Header/HeaderComponent';
import { FooterComponent } from '../Footer/FooterComponent';
import ActiveLoanDemo from './../../assets/images/active-loan.png';

export class LoanActivityComponent extends React.Component {
    render() {
        return (
            <div className="main-wrapper">
                <HeaderComponent />
                <div className="body-content loan-request active-loan">
                    <div className="container">
                        <h2>Loans Activity</h2>
                        <div id="horizontalTab">
                            <ul className="resp-tabs-list">
                                <li>Active Loans</li>
                                <li>Loan Requests</li>
                            </ul>
                            <div className="resp-tabs-container">
                                <div>
                                    <img src={ActiveLoanDemo} />
                                </div>
                                <div>
                                    <p>This tab has icon in consectetur adipiscing eliconse consectetur adipiscing elit. Vestibulum nibh urna, ctetur adipiscing elit. Vestibulum nibh urna, t.consectetur adipiscing elit. Vestibulum nibh urna,  Vestibulum nibh urna,it.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <FooterComponent />
            </div>
        );
    }
}
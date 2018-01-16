import React, { Component } from 'react';
import InvestmentImage from './../../assets/images/investment-2.png';

export class SolutionSection extends React.Component {
    render() {
        return (
            <div className="investment-section ease-section">
                <div className="container">
                    <h2>Simple & Easy-to-Use Solution.</h2>
                    <div className="main-invest">
                        <div className="left-invest">
                            <ul>
                                <li>Lorem ipsum dolor sit amet, consec. </li>
                                <li>Lorem ipsum dolor sit amet, consec. </li>
                                <li>Lorem ipsum dolor sit amet, consec. </li>
                                <li>Lorem ipsum dolor sit amet, consec. </li>
                            </ul>
                        </div>
                        <div className="right-invest">
                            <img src={InvestmentImage} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
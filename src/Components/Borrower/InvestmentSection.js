import React, { Component } from 'react';
import InvestmentCircleImage from './../../assets/images/investment-1.jpg';
import InvestmentRectImage from './../../assets/images/investment-2.png';

export class InvestmentSection extends React.Component {
    render() {
        return (
            <div className="investment-section">
                <div className="container">
                    <h2>Diversify Your Investments,<br />
                        Become a Lender with MASHENY.</h2>
                    <div className="main-invest">
                        <div className="left-invest">
                            <img src={InvestmentCircleImage} />
                        </div>
                        <div className="right-invest">
                            <img src={InvestmentRectImage} />
                            <a href="javascript:void(0);">Become a Lender</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
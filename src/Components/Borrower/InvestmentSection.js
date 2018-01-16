import React, { Component } from 'react';
import InvestmentCircleImage from './../../assets/images/investment-1.jpg';
import InvestmentRectImage from './../../assets/images/investment-2.png';

export class InvestmentSection extends React.Component {
    render() {
        return (
            <div class="investment-section">
                <div class="container">
                    <h2>Diversify Your Investments,<br />
                        Become a Lender with MASHENY.</h2>
                    <div class="main-invest">
                        <div class="left-invest">
                            <img src={InvestmentCircleImage} />
                        </div>
                        <div class="right-invest">
                            <img src={InvestmentRectImage} />
                            <a href="#">Become a Lender</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
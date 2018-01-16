import React, { Component } from 'react';
import StockChartImage from './../../assets/images/stock-investment-in-facebook-stock.gif';

export class ChartSection extends React.Component {
    render() {
        return (
            <div className="chart-section">
                <div className="container">
                    <img src={StockChartImage} />
                    <h2>Describe benefits and potential profit of each option.</h2>
                </div>
            </div>
        );
    }
}
import React, { Component } from 'react';
import LoanImage from './../../assets/images/loan-logo.png';
export class FormHeader extends React.Component {
    render() {
        return (
            <div>
                <div className="loan-image">
                    <img src={LoanImage} />
                </div>
                <h2>Send a Loan Request</h2>
            </div>
        );
    }
}
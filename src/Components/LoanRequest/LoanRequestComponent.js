import React, { Component } from 'react';
import { HeaderComponent } from './../Header/HeaderComponent';
import { FooterComponent } from '../Footer/FooterComponent';
import { FormSection } from './FormSection';
export class LoanRequestComponent extends React.Component {

    render() {
        return (
            <div className="main-wrapper">
                <HeaderComponent />
                <div className="body-content loan-request">
                    <div className="container">
                        <FormSection />
                    </div>
                </div>
                <FooterComponent />
            </div>
        );
    }
}
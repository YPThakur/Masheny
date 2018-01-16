import React, { Component } from 'react';
import { HeaderComponent } from './../Header/HeaderComponent';
import { FooterComponent } from './../Footer/FooterComponent';
import { BannerSection } from './BannerSection';
import { MoneySection } from './MoneySection';
import { StoriesSection } from './StoriesSection';
import { ChartSection } from './ChartSection';
import { SolutionSection } from './SolutionSection';



export class LenderComponent extends React.Component {
    render() {
        return (
            <div className="main-wrapper">
                <HeaderComponent />
                <div className="body-content">
                    <BannerSection />
                    <MoneySection />
                    <StoriesSection />
                    <ChartSection />
                    <SolutionSection />




                </div>
                <FooterComponent />
            </div>
        );
    }
}

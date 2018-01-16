import React, { Content } from 'react';
import { HeaderComponent } from './../Header/HeaderComponent';
import { FooterComponent } from './../Footer/FooterComponent';
import { BannerSection } from './BannerSection';
import { MoneySection } from './MoneySection';
import { StorySection } from './StorySection';
import { MashenySection } from './MashenySection';
import { InvestmentSection } from './InvestmentSection';

export class BorrowerComponent extends React.Component {

    render() {
        return (
            <div class="main-wrapper">
                <HeaderComponent />
                <div class="body-content">
                    <BannerSection />
                    <MoneySection />
                    <StorySection />
                    <MashenySection />
                    <InvestmentSection />



                    

                </div>
                <FooterComponent />
            </div>
        );
    }
}
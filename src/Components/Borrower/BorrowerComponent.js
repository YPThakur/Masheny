import React, { Content } from 'react';
import { HeaderComponent } from './../Header/HeaderComponent';
import { FooterComponent } from './../Footer/FooterComponent';
import { BannerSection, MoneySection } from './BorrowerSections';

export class BorrowerComponent extends React.Component {

    render() {
        return (
            <div class="main-wrapper">
                <HeaderComponent />
                <div class="body-content">
                    <BannerSection />
                    <MoneySection />


                    <div class="story-section">
                        <div class="container">
                            <h2>Customer Stories</h2>
                            <div class="main-story">

                                <div class="column-story">
                                    <div class="story-image">
                                        <img src="images/story-1.jpg" />
                                    </div>
                                    <div class="story-content">
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
                                    </div>
                                </div>

                                <div class="column-story">
                                    <div class="story-image">
                                        <img src="images/story-2.jpg" />
                                    </div>
                                    <div class="story-content">
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
                                    </div>
                                </div>

                                <div class="column-story">
                                    <div class="story-image">
                                        <img src="images/story-3.jpg" />
                                    </div>
                                    <div class="story-content">
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="masheny-section">
                        <div class="container">
                            <h2>MASHENY is here when you need it.</h2>
                            <div class="alternate-section">
                                <div class="left-right">
                                    <div class="masheny-image">
                                        <img src="images/story-4.jpg" />
                                    </div>
                                    <div class="masheny-content">
                                        <h3>Lorem ipsum dolor sit amet, consec. </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
                                    </div>
                                </div>

                                <div class="left-right right-left">
                                    <div class="masheny-image">
                                        <img src="images/story-5.jpg" />
                                    </div>
                                    <div class="masheny-content">
                                        <h3>Lorem ipsum dolor sit amet, consec. </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
                                    </div>
                                </div>

                                <div class="left-right">
                                    <div class="masheny-image">
                                        <img src="images/story-6.jpg" />
                                    </div>
                                    <div class="masheny-content">
                                        <h3>Lorem ipsum dolor sit amet, consec. </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="investment-section">
                        <div class="container">
                            <h2>Diversify Your Investments,<br />
                                Become a Lender with MASHENY.</h2>
                            <div class="main-invest">
                                <div class="left-invest">
                                    <img src="images/investment-1.jpg" />
                                </div>
                                <div class="right-invest">
                                    <img src="images/investment-2.png" />
                                    <a href="#">Become a Lender</a>
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
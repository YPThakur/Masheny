import React, { Component } from 'react';
import BannerImage from './../../assets/images/banner-1.jpg';

export class BannerSection extends React.Component {

    render() {
        return (
            <div class="banner-section">
                <div class="image-section">
                    <img src={BannerImage} />
                </div>
                <div class="banner-top">
                    <h2>Borrowing. The way it should be.</h2>
                    <p>When borrowing money is this easy, everyone wins.</p>
                </div>

                <div class="banner-bottom">
                    <a href="javascript:void(0);">Request a Loan</a>
                    <p>Checking your rate won't affect your credit score.</p>
                </div>

            </div>
        );
    }
}



export class MoneySection extends React.Component {
    render() {
        return (
            <div class="money-section">
                <div class="container">
                    <h2>Get the money you need with MASHENY.</h2>
                    <div class="main-column">
                        <div class="column-3">
                            <span>1</span>
                            <h2>SIMPLE ACCESSS</h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
                        </div>
                        <div class="column-3">
                            <span>2</span>
                            <h2>SEND LOAN REQUEST</h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
                        </div>

                        <div class="column-3">
                            <span>3</span>
                            <h2>GET RESULTS</h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
                        </div>
                    </div>

                    <div class="get-started">
                        <a href="#">Get Started</a>
                    </div>

                </div>
            </div>
        );
    }
}
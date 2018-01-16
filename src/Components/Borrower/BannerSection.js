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
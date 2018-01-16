import React, { Component } from 'react';
import BannerImage from './../../assets/images/lend-banner.jpg';

export class BannerSection extends React.Component {
    render() {
        return (
            <div class="banner-section leader-banner">
                <div class="image-section">
                    <img src={BannerImage} />
                </div>
                <div class="banner-top">
                    <h2>Options. We all want them.</h2>
                    <p>The most innovative way to diversify your portfolio.</p>
                </div>

                <div class="banner-bottom">
                    <a href="javascript:void(0);">Become a Lender</a>
                </div>

            </div>
        );
    }
}
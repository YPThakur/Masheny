import React, { Component } from 'react';
import BannerImage from './../../assets/images/lend-banner.jpg';

export class BannerSection extends React.Component {
    render() {
        return (
            <div className="banner-section leader-banner">
                <div className="image-section">
                    <img src={BannerImage} />
                </div>
                <div className="banner-top">
                    <h2>Options. We all want them.</h2>
                    <p>The most innovative way to diversify your portfolio.</p>
                </div>

                <div className="banner-bottom">
                    <a href="javascript:void(0);">Become a Lender</a>
                </div>

            </div>
        );
    }
}
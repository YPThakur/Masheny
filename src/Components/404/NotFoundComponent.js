import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HeaderLogo from './../../assets/images/yellow-logo.png';
import BackgroundImage from './../../assets/images/banner-image.jpg';

export class NotFoundComponent extends React.Component {
    overlayMargin = '0px';
    constructor() {
        super();
        this.state = {
            overlayMargin: '0px'
        };

    }
    componentWillMount() {
        let Body = document.body;
        document.title = 'Not Found';
        Body.className = 'page-not-found';
        Body.style.backgroundImage = 'url(' + BackgroundImage + ')';
    }
    componentDidMount() {
        let overlayContent = document.getElementById('overlay-content');
        this.setState({ 'overlayMargin': (window.innerHeight - overlayContent.offsetHeight) / 2 });
        //this.overlayMargin = (window.innerHeight - overlayContent.offsetHeight) / 2;
    }
    render() {
        return (
            <div className="wrapper">
                <div className="body-content">
                    <div className="container clearfix" style={{ 'padding-top': this.state.overlayMargin + 'px' }}>
                        <div className="overlay-content" id="overlay-content" style={{ position: 'relative' }}>
                            <Link to={'/'}>
                                <img src={HeaderLogo} alt="logo" />
                            </Link>
                            <h2>Page Not Found</h2>
                            <p>We're sorry. The page you are looking for cannot be found.</p>
                        </div >
                    </div>
                </div>
            </div>
        );
    }
}
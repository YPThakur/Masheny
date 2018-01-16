import React, { Component } from 'react';
import StoryFourImage from './../../assets/images/story-4.jpg';
import StoryFiveImage from './../../assets/images/story-5.jpg';
import StorySixImage from './../../assets/images/story-6.jpg';

export class MashenySection extends React.Component {
    render() {
        return (
            <div className="masheny-section">
                <div className="container">
                    <h2>MASHENY is here when you need it.</h2>
                    <div className="alternate-section">
                        <div className="left-right">
                            <div className="masheny-image">
                                <img src={StoryFourImage} />
                            </div>
                            <div className="masheny-content">
                                <h3>Lorem ipsum dolor sit amet, consec. </h3>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
                            </div>
                        </div>

                        <div className="left-right right-left">
                            <div className="masheny-image">
                                <img src={StoryFiveImage} />
                            </div>
                            <div className="masheny-content">
                                <h3>Lorem ipsum dolor sit amet, consec. </h3>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
                            </div>
                        </div>

                        <div className="left-right">
                            <div className="masheny-image">
                                <img src={StorySixImage} />
                            </div>
                            <div className="masheny-content">
                                <h3>Lorem ipsum dolor sit amet, consec. </h3>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
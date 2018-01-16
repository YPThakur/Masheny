import React, { Component } from 'react';
import StoryFourImage from './../../assets/images/story-4.jpg';
import StoryFiveImage from './../../assets/images/story-5.jpg';
import StorySixImage from './../../assets/images/story-6.jpg';

export class MashenySection extends React.Component {
    render() {
        return (
            <div class="masheny-section">
                <div class="container">
                    <h2>MASHENY is here when you need it.</h2>
                    <div class="alternate-section">
                        <div class="left-right">
                            <div class="masheny-image">
                                <img src={StoryFourImage} />
                            </div>
                            <div class="masheny-content">
                                <h3>Lorem ipsum dolor sit amet, consec. </h3>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
                            </div>
                        </div>

                        <div class="left-right right-left">
                            <div class="masheny-image">
                                <img src={StoryFiveImage} />
                            </div>
                            <div class="masheny-content">
                                <h3>Lorem ipsum dolor sit amet, consec. </h3>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
                            </div>
                        </div>

                        <div class="left-right">
                            <div class="masheny-image">
                                <img src={StorySixImage} />
                            </div>
                            <div class="masheny-content">
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
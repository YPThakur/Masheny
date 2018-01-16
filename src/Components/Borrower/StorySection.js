import React, { Component } from 'react';
import StoryOneImage from './../../assets/images/story-1.jpg';
import StoryTwoImage from './../../assets/images/story-2.jpg';
import StoryThreeImage from './../../assets/images/story-3.jpg';

export class StorySection extends React.Component {
    render() {
        return (
            <div class="story-section">
                <div class="container">
                    <h2>Customer Stories</h2>
                    <div class="main-story">

                        <div class="column-story">
                            <div class="story-image">
                                <img src={StoryOneImage} />
                            </div>
                            <div class="story-content">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
                            </div>
                        </div>

                        <div class="column-story">
                            <div class="story-image">
                                <img src={StoryTwoImage} />
                            </div>
                            <div class="story-content">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
                            </div>
                        </div>

                        <div class="column-story">
                            <div class="story-image">
                                <img src={StoryThreeImage} />
                            </div>
                            <div class="story-content">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}






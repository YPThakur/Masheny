import React, { Component } from 'react';
import StoryImage from './../../assets/images/image-2.png';
export class StoriesSection extends React.Component {
    render() {
        return (
            <div className="success-story">
                <div className="container clearfix">
                    <div className="column-2">
                        <div className="inner-class">
                            <h2>Success Stories</h2>
                        </div>
                    </div>
                    <div className="column-2">
                        <div className="stories">
                            <div className="stories-image">
                                <img src={StoryImage} />
                            </div>
                            <div className="stories-content">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
                            </div>
                        </div>
                    </div>

                    <div className="column-2">
                        <div className="stories">
                            <div className="stories-image">
                                <img src={StoryImage} />
                            </div>
                            <div className="stories-content">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
                            </div>
                        </div>
                    </div>

                    <div className="column-2">
                        <div className="stories">
                            <div className="stories-image">
                                <img src={StoryImage} />
                            </div>
                            <div className="stories-content">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
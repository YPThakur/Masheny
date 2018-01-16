import React, { Component } from 'react';


export class MoneySection extends React.Component {
    render() {
        return (
            <div className="money-section">
                <div className="container">
                    <h2>How it works</h2>
                    <div className="main-column">
                        <div className="column-3">
                            <span>1</span>
                            <h2>SIMPLE ACCESSS</h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
                        </div>
                        <div className="column-3">
                            <span>2</span>
                            <h2>SEND LOAN REQUEST</h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
                        </div>

                        <div className="column-3">
                            <span>3</span>
                            <h2>GET RESULTS</h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
                        </div>
                    </div>

                    <div className="get-started">
                        <a href="javascript:void(0);">Get Started</a>
                    </div>

                </div>
            </div>
        );
    }
}
import React, { Component } from 'react';


export class FooterSocial extends React.Component {

    render() {
        return (
            <div className="social-icons">
                <ul>
                    <li><a href="javascript:void(0);"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="javascript:void(0);"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                    <li><a href="javascript:void(0);"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                    <li><a href="javascript:void(0);"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                </ul>
            </div>
        );
    }
}
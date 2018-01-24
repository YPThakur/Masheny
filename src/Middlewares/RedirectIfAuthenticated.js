import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';

const Authenticated = false;
export class RedirectIfAuthenticated extends React.Component {
    constructor(props) {
        super(props);
        this.situtation = this.situtation.bind(this); 
    }

    situtation() {
        if (this.props.authenticated) {
            return <Redirect to={this.props.to} />
        } else {
            return <Redirect to={this.props.elseTo} />
        }
    }

    render() {
        return (
            <Route exact path='/' render={this.situtation} />
        )
    }

}
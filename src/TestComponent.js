import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:3333';
// testing-perpose.auth0.com
export class TestComponent extends React.Component {

    render() {
        var url = BASE_URL+'/api/jokes/food';
        axios.get(url).then(response => {
            console.log(response);
        });
        return (
            <div>asdfasdfasdfasdfasdfasdf</div>
        );
    }
}
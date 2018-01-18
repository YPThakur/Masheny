import React, { Component } from 'react';

export class LoginForm extends React.Component {

    render() {
        return (
            <div className="login-form">
                <h1>Sign In</h1>
                <form action="/borrower">
                    <div className="form-control">
                        <label>User ID</label>
                        <input type="text" />
                    </div>
                    <div className="form-control">
                        <label>Password</label>
                        <input type="password" />
                    </div>
                    <div className="form-control">
                        <input type="checkbox" id="checkboxG3" />
                        <label htmlFor="checkboxG3" className="checkbox">Remember My User ID</label>
                    </div>
                    <div className="action">
                        <input type="submit" value="Sign In" />
                    </div>
                </form>
                <div className="conditions">
                    <span>By clicking Sign In, you agree to our
                        <a href="#">Terms & Conditions.</a>
                    </span>
                    <a href="#">I forgot my user ID or Password.</a>
                    <span>New to MASHENY?
                        <a href="#">Sign Up</a>
                    </span>
                </div>
            </div>
        );
    }
}
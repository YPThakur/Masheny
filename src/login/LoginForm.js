import React, { Component } from 'react';

export class LoginForm extends React.Component {

    render() {
        return (
            <div class="login-form">
                <h1>Sign In</h1>
                <form>
                    <div class="form-control">
                        <label>User ID</label>
                        <input type="text" />
                    </div>
                    <div class="form-control">
                        <label>Password</label>
                        <input type="password" />
                    </div>
                    <div class="form-control">
                        <input type="checkbox" id="checkboxG3" />
                        <label for="checkboxG3" class="checkbox">Remember My User ID</label>
                    </div>
                    <div class="action">
                        <input type="submit" value="Sign In" />
                    </div>
                </form>
                <div class="conditions">
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
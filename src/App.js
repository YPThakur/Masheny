import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import whiteLogo from './assets/images/white-logo.png';
import contentImage from './assets/images/image-1.jpg';

class App extends Component {
  render() {
    document.body.className = 'login';
    return ( 
      <div class="">
            <header class="home">
        <div class="container">
            <div class="logo">
                <a href="#">
                    <img src={whiteLogo} alt="logo"/>
                </a>
            </div>
        </div>
    </header>
    <div class="body-content">
        <div class="container clearfix">
            <div class="login-image">
                <div class="overlay-content">
                    <h2>Welcome back.</h2>
                    <p>We are here to help.</p>
                </div>
                <img src={contentImage}/>
            </div>
            <div class="login-form">
                <h1>Sign In</h1>
                <form>
                    <div class="form-control">
                        <label>User ID</label>
                        <input type="text"/>
                    </div>
                    <div class="form-control">
                        <label>Password</label>
                        <input type="password"/>
                    </div>
                    <div class="form-control">
                        <input type="checkbox" id="checkboxG3"/>
                        <label for="checkboxG3" class="checkbox">Remember My User ID</label>
                    </div>
                    <div class="action">
                        <input type="submit" value="Sign In"/>
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
        </div>
    </div>
    <footer>
        <div class="container">
            <div class="copyright">
                <p>© 2018 Masheny, LLC. All rights reserved.</p>
            </div>
        </div>
    </footer>
      </div>
    );
  }
}

export default App;

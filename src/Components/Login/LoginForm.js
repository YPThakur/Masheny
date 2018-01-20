import React, { Component } from 'react';

export class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            remember: false,
            accountType: 'borrower'
        };


        // bind this to input change
        this.inputChange = this.inputChange.bind(this);

        // binding this to focusable input on page load
        this.onLoadFocus = this.onLoadFocus.bind(this);

        // Bind this to signIn function
        this.signIn = this.signIn.bind(this);


    }

    componentDidMount() {
        this.onLoadFocus();
    }



    // function to auto focus input on page load
    onLoadFocus() {
        this.onloadFocusField.focus();
        console.log(localStorage.getItem('loggedIn'));
        console.log(window);
    }

    // function to trigger when an input fields is get changed
    inputChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' || target.type === 'radio' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }



    // function {signIn} handles form submittion 
    signIn(event) {
        event.preventDefault();
        if (this.state.username === 'swap.yashp@gmail.com' && this.state.password === "9882426384") {
            localStorage.setItem('loggedIn', JSON.stringify(this.state));
            window.location.reload();
        } else {
            alert('User doesn\'t exists');
            localStorage.setItem('loggedIn', "");
        }

    }




    // Render component and it's children
    render() {
        return (
            <div className="login-form">
                <h1>Sign In</h1>
                <form action="javascript:void(0);" onSubmit={this.signIn}>
                    <div className="form-control">
                        <label>User ID</label>
                        <input type="text" name="username" onChange={this.inputChange} value={this.state.username} ref={(onloadFocusField) => { this.onloadFocusField = onloadFocusField; }} />
                    </div>
                    <div className="form-control">
                        <label>Password</label>
                        <input type="password" name="password" onChange={this.inputChange} value={this.state.password} />
                    </div>
                    <div className="form-control">
                        <input type="checkbox" checked={this.state.remember} onChange={this.inputChange} name="remember" id="remember" />
                        <label htmlFor="remember" className="checkbox">Remember My User ID</label>
                    </div>
                    <div className="action">
                        <input type="submit" value="Sign In" />
                    </div>
                </form>
                <div className="conditions">
                    <span>By clicking Sign In, you agree to our
                        <a href="javascript:void(0);">Terms & Conditions.</a>
                    </span>
                    <a href="javascript:void(0);">I forgot my user ID or Password.</a>
                    <span>New to MASHENY?
                        <a href="javascript:void(0);">Sign Up</a>
                    </span>
                </div>
            </div>
        );
    }
}

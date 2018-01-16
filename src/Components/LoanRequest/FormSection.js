import React, { Component } from 'react';
import { FormHeader } from './FromHeader';


export class FormSection extends React.Component {
    render() {
        return (
            <div className="form-section">
                <FormHeader />
                <form>
                    <div className="form-group">
                        <label>Let's Start with Your Zip Code</label>
                        <div className="column-full">
                            <input type="text" placeholder="Zip Code" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>How much would you like to borrow?</label>
                        <div className="input-group column-full amount">
                            <span className="input-group-addon">$</span>
                            <input type="text" className="form-control" placeholder="Amount ($0.00 - $0.00)" />
                        </div>
                        <div className="form-group select-amount">
                            <select className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Create your account</label>
                        <div className="column-full">
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="column-full">
                            <input type="password" placeholder="Password" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Tell us about yourself</label>
                        <div className="column-full">
                            <div className="column-two">
                                <input type="text" placeholder="First Name" />
                            </div>
                            <div className="column-two">
                                <input type="text" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="column-full">
                            <input type="text" placeholder="Home Address" />
                        </div>
                        <div className="column-full">
                            <div className="column-three">
                                <input type="text" placeholder="City" />
                            </div>
                            <div className="column-three">
                                <select className="form-control">
                                    <option>State</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div className="column-three">
                                <input type="text" placeholder="Zip code" />
                            </div>
                        </div>
                        <div className="column-full select-amount">
                            <select className="form-control">
                                <option>Employment Status</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="input-group column-full amount">
                            <span className="input-group-addon">$</span>
                            <input type="text" className="form-control" placeholder="Yearly Income" />
                        </div>
                        <div className="column-full">
                            <input type="text" placeholder="Date of Birth (MM/DD/YYYY)" />
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio. <strong>By clicking the box below, you confirm that you agree by electronic signature to:</strong>
                    </p>
                    <div className="form-check">
                        <div className="checkbox">

                            <input type="checkbox" value="option1" id="checkbox-new" />
                            <label for="checkbox-new"> Terms & Conditions</label>

                        </div>
                    </div>
                    <div className="form-button">
                        <input type="submit" value="Submit Request" />
                    </div>
                </form>
            </div>
        );
    }
}
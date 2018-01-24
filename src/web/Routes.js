import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Importing Components for routing
import { LoginComponent } from './../Components/Login/LoginComponent';
import { BorrowerComponent } from './../Components/Borrower/BorrowerComponent'
import { LenderComponent } from '../Components/Lender/LenderComponent';
import { LoanRequestComponent } from '../Components/LoanRequest/LoanRequestComponent';
import { LoanActivityComponent } from '../Components/LoanActivity/LoanActivityComponent';
import { TestComponent } from '../TestComponent';
import { NotFoundComponent } from '../Components/404/NotFoundComponent';


export class Routes extends React.Component {

    constructor() {
        super();
    }


    render() {
        return (
            <Switch>
                <Route exact path='/' component={LoginComponent} />
                <Route exact path='/borrower' component={BorrowerComponent} />
                <Route exact path='/lender' component={LenderComponent} />
                <Route exact path='/loan-request' component={LoanRequestComponent} />
                <Route exact path='/activity' component={LoanActivityComponent} />
                <Route exact path='/test' component={TestComponent} />
                {/* Route for page not found */}
                <Route path="*" component={NotFoundComponent}/>
            </Switch>
        );
    }
}
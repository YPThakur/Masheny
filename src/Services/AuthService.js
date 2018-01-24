import React, { Component } from 'react';
import { RedirectIfAuthenticated } from '../Middlewares/RedirectIfAuthenticated';


class AuthService {

    isAuthenticated() { 
        return(<RedirectIfAuthenticated authenticated={true} to={'/borrower'} elseTo={'/asdfasdf'} />);
    }
}

export default new AuthService();
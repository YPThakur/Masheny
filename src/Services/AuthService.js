import React, { Component } from 'react';
import { RedirectIfAuthenticated } from '../Middlewares/RedirectIfAuthenticated';


class AuthService {

    isAuthenticated() { 
        return(<RedirectIfAuthenticated authenticated={false} to={'/borrower'} elseTo={'/'} />);
    }
}

export default new AuthService();
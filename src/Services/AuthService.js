import React, { Component } from 'react';
import { RedirectIfAuthenticated } from '../Middlewares/RedirectIfAuthenticated';


class AuthService {

    testFunction() {
        return(<RedirectIfAuthenticated authenticated={false} to={'/borrower'} elseTo={'/'} />);
    }
}

export default new AuthService();
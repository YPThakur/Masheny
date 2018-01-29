


export class Auth {

    user() {
        return JSON.parse(localStorage.getItem('authUser'));
    }
}
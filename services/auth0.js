// src/Auth/Auth.js

import auth0 from 'auth0-js';
import Cookies from 'js-cookie';
// import { resolve } from 'dns';
// import { rejects } from 'assert';

class Auth0 {

    constructor() {
        this.auth0 = new auth0.WebAuth({
            domain: 'portfolio-gustavo.auth0.com',
            clientID: '7mc3hlqKkLNS9oJJwgL2QAKM7yIfU7cR',
            redirectUri: 'http://localhost:3000/callback',
            responseType: 'token id_token',
            scope: 'openid profile'
          });

          this.login = this.login.bind(this);
          this.logout = this.logout.bind(this);
          this.handleAuthentication = this.handleAuthentication.bind(this);
          this.isAuthenticated = this.isAuthenticated.bind(this);
        }

        handleAuthentication() {
            this.auth0.parseHash((err, authResult) => {
              if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
                resolve();
              } else if (err) {
                  rejects(err);
                console.log(err);
                alert(`Error: ${err.error}. Check the console for further details.`);
              }
            });
          }

     setSession(authResult) {
         const expiresAt = JSON.stringify((authResult.expiresIn = 1000) + new Date().getTime());

        //  localStorage.setItem('id_token', authResult.idToken);

        Cookies.set('user', authResult.idTokenPayload);
        Cokkies.set('jwt', authResult.idToken);
        Cokkies.set('expiresAt', expiresAt);
    }

    logout() {
        Cookies.remove('user');
        Cokkies.remove('jwt');
        Cokkies.remove('expiresAt');

        this.auth0.logout({
            returnTo: '',
            clientID: '7mc3hlqKkLNS9oJJwgL2QAKM7yIfU7cR'
        })
    }
        

  login() {
    this.auth0.authorize();
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = Cookies.getJSON('expiresAt');
    return new Date().getTime() < expiresAt;
  }
}


const auth0Client = new Auth0();

export default auth0Client;
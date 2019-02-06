// src/Auth/Auth.js

import auth0 from 'auth0-js';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import axios from 'axios';
//  import { resolve } from 'dns';
 import { rejects } from 'assert';

const CLIENT_ID = process.env.CLIENT_ID;

import { getCookieFromReq } from '../helpers/utils';


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
        }

    handleAuthentication() {
        return new Promise((resolve, reject) => {
            this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
             this.setSession(authResult);
             resolve();
        } else if (err) {
             rejects(err);
                console.log(err);
                /* alert(`Error: ${err.error}. Check the console for further details.`);*/
            }
         });
        })
        }

    setSession(authResult) {
         const expiresAt = JSON.stringify((authResult.expiresIn = 1000) + new Date().getTime());

        //  localStorage.setItem('id_token', authResult.idToken);

        Cookies.set('user', authResult.idTokenPayload);
        Cookies.set('jwt', authResult.idToken);
        Cookies.set('expiresAt', expiresAt);
    }

    logout() {
        Cookies.remove('user');
        Cookies.remove('jwt');
        Cookies.remove('expiresAt');

        this.auth0.logout({
            returnTo: '',
            clientID: '7mc3hlqKkLNS9oJJwgL2QAKM7yIfU7cR'
        })
    }  

    login() {
    this.auth0.authorize();
  }

    async getJWKS() {
        const res = await axios.get('https://portfolio-gustavo.auth0.com/.well-known/jwks.json');
        const jwks = res.data;
        return jwks;

  }

   async verifyToken(token) {
      if (token) {
          const decodedToken = jwt.decode(token, { complete: true});
          
          if (!decodedToken) { return undefined; }

          const jwks = await this.getJWKS();   
          console.log(jwks);
          const jwk = jwks.keys[0];
          // BUILD CERTIFICATE
          let cert = jwk.x5c[0];
          cert = cert.match(/.{1,64}/g).join('\n');
          cert = `-----BEGIN CERTIFICATE-----\n${cert}\n-----END CERTIFICATE------\n`;

          if (jwk.kid === decodedToken.header.kid){
              try {
                 const verifiedToken = jwt.verify(token, cert); 
                 const expiresAt = verifiedToken.exp * 1000;

                 return (verifiedToken && new Date().getTime() < expiresAt) ? decodedToken : undefined;
              } catch (err) {
                return undefined;
              }
          }   
      }

      return undefined;
  }

    async clientAuth() {
      const token = Cookies.getJSON('jwt');
      const verifiedToken = await this.verifyToken(token);

      return verifiedToken;
  }

    async serverAuth(req) {
      if(req.headers.cookie) {
        const token = getCookieFromReq(req, 'jwt');
        const verifiedToken = await this.verifyToken(token);
        
        return verifiedToken;
      }

      return undefined;
  }
}


const auth0Client = new Auth0();

export default auth0Client;
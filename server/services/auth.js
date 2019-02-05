const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');


// MIDDLEWARE
exports.checkJWT = jwt({ 
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestPerMinute: 15,
        jwksUri: 'https://portfolio-gustavo.auth0.com/.well-known/jwks.json'
      }),

    audience: '7mc3hlqKkLNS9oJJwgL2QAKM7yIfU7cR',
    issuer: 'https://portfolio-gustavo.auth0.com/',
    algorithms: ['RS256']
})
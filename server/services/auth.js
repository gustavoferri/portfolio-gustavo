const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const namespace = 'http://localhost:3000/';

// MIDDLEWARE
exports.checkJWT = jwt({ 
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestPerMinute: 50,
        jwksUri: 'https://portfolio-gustavo.auth0.com/.well-known/jwks.json'
      }),
    audience: '7mc3hlqKkLNS9oJJwgL2QAKM7yIfU7cR',
    issuer: 'https://portfolio-gustavo.auth0.com/',
    algorithms: ['RS256']
})

    exports.checkRole = role => (req, res, next) => {
        const user = req.user;
        
        if (user && (user[namespace + 'role'] === role)) {
            next();
        } else {
            return res.status(401).send({title: 'Not Authorizes', detail: 'You are not authorized acess this data'})
        }
    }
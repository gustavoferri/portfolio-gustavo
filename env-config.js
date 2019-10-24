const prod = process.env.NODE_ENV === 'production';

module.exports = {
    'process.env.BASE_URL': prod ? 'https://gustavoferri.herokuapp.com' : 'http://localhost:3000',
    'process.env.NAMESPACE': 'https://gustavoferri.herokuapp.com',
    'process.env.CLIENT_ID': '7mc3hlqKkLNS9oJJwgL2QAKM7yIfU7cR'
}
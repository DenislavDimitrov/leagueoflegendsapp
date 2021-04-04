const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    port: process.env.PORT || 3003,
    dbURL: 'mongodb://localhost:27017/leagueoflegendsapp',
    authCookieName: 'x-auth-token'
  },
  production: {}
};

module.exports = config[env];
// open db connection

const 
    pgp = require('pg-promise')(),
    env = require('./env'),
    db = pgp(env.dbURL);

module.exports = db;



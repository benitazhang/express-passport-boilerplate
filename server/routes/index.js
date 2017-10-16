'use strict';

const
    path = require('path'),
    passport = require('../../config/passport'),
    loginRoute = require('./login');

function init(server) {

    // main route - serves app
    server.get('/', function (req, res) { 
        res.sendFile(path.join(__dirname,'../../client/index.html'));
    });

    // REGISTER ROUTES - include all server routes below
    server.use('/login/facebook', loginRoute);
}

module.exports = {
    init: init
};
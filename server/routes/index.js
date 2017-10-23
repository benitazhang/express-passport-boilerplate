const
    path = require('path'),
    loginRoute = require('./loginRoute');


function init(server) {

    // main route - serves app
    server.get('/', function (req, res) { 
        res.sendFile(path.join(__dirname,'../../client/index.html'));
    });

    // REGISTER ROUTES - include all server routes below
    server.use('/login', loginRoute);
}


module.exports = {
    init
};
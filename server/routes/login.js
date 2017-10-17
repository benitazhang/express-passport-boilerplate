'use strict';

const
    express = require('express'),
    loginCtrl = require('../controllers/login'),
    passport = require('../../config/passport');
    
let
    router = express.Router(),
    // authenticate through facebook
    // disable server session since we are using JSON web tokens 
    fbAuth = passport.authenticate('facebook', {session:false});


// kicks us to facebook to authenticate
router.get('/facebook', fbAuth);

// return route - after fb authorizes user, kick us back to this route
router.get('/facebook/callback', 
    fbAuth,
    (req, res) => {
        let token = req.user
        res.redirect(`/?token=${token}`)
    }
);

module.exports = router;

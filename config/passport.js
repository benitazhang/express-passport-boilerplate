// configures passport to use facebook oauth
const
    passport = require('passport'),
    FacebookStrategy = require('passport-facebook'),
    moment = require('moment'),
    env = require('./env'),
    loginCtrl = require('../server/controllers/loginCtrl');

    
function formatFacebookProfile (profile) {
    return {
        fbId: profile.id,
        firstName: profile.first_name,
        lastName: profile.last_name,
        email: profile.email || null,
        picture: profile.picture.data.url || null,
        createdAt: moment.utc().toISOString()
    }
}

// config for facebook auth
passport.use(
    new FacebookStrategy({
        clientID: env.fb.appID,
        clientSecret: env.fb.appSecret,
        // redirect route after fb authenticates
        callbackURL: env.fb.callbackURL,
        profileFields: ['id','name','emails', 'photos']
    },
    // callback executed after user authenticates on FB page
    async (accessToken, refreshToken, profile, callback) => {
        try {
            const user = formatFacebookProfile(profile._json);
            let token = await loginCtrl.authorizeUser(user);

            callback(null, token);

        } catch (e){
            console.log("error: ", e)
        }
    })
);


module.exports = passport;


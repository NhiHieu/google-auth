const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy

module.exports = passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CONSUMER_KEY,
    clientSecret: process.env.GOOGLE_CONSUMER_SECRET,
    callbackURL: "http://localhost/login/auth/google/callback"
}, (token, tokenSecret, profile, done)=>{
    console.log("Profile:" + profile)
    URLSearchParams.findOrCreate({googleId: profile.id}, (err,user)=>{
        console.log("user:" + user)
        return done(err, user)
    })
}))

const express =require('express')
const passport = require('passport')
const LoginRoutes = express.Router();

const router = () =>{
    LoginRoutes.route('/')
        .get((req ,res) =>{
            res.render('login');
        })

    LoginRoutes.get('/auth/google',
                        passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));
    
        LoginRoutes.get('/ad',(req ,res )=>{
            res.send("Ok man!")
        })

    LoginRoutes.route('/auth/google/callback')
        .get(passport.authenticate('google', { failureRedirect: '/login' }), (req ,res) =>{

            //passed
            console.log("req:"+req)
            if(req.user)
                console.log("user in req:" + req.user)
            res.redirect('/profile')
        })
    return LoginRoutes;
}

module.exports = router;
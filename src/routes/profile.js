const express = require('express')


const ProfileRoutes = express.Router();

const router = () =>{
    ProfileRoutes.route('/')
        .get((req ,res) =>{
            res.send("Ok");
        })

    return ProfileRoutes;
}

module.exports = router;
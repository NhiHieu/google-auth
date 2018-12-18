const app = require('express')();
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()


//connect mongoose
mongoose.connect('mongodb://localhost:3000/test_auth', {useNewUrlParser: true})
require('./auth/stragety.google')

const LoginRoutes = require('./routes/login')()
const ProfileRoutes = require('./routes/profile')()

app.use('/login', LoginRoutes)
app.use('/profile', ProfileRoutes)

app.set('view engine', 'ejs')
app.set('views', 'src/views')

app.listen(3000, () =>{
    console.log('listening on port 3000')
})




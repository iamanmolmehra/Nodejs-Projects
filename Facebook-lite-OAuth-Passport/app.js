const express = require('express')
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const authRoutes = require('./routers/auth-routes');
const profileRoutes = require('./routers/profile-routes');
const passportSetup = require('./config/passport-setup');
const keys = require('./config/keys');
require('dotenv').config();
const db = require('./database/db')
const models = require('./database/models')
const {signup} = require('./routers/signup')
const {login} = require('./routers/login')

const app = express();
app.use(express.json());

// set view engine
app.set('view engine', 'ejs');

// set up session cookies
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());


// connect to mongodb
mongoose.connect(keys.mongodb.dbURI, () => {
    console.log('connected to mongodb');
});

// set up routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

// create home route
app.get('/', (req, res) => {
    res.render('home', { user: req.user });
});

app.post('/signup', signup)
app.post('/login', login)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`You are now connected with PORT ${PORT}`);
});


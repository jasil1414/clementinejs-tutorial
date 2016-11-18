'use strict';

var express = require('express'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    session = require('express-session'),
    cookieParser = require('cookie-parser'),
    routes = require('./app/routes/index.js');

var MemoryStore = require('session-memory-store')(session);

var app = express();
require('dotenv').load();
require('./app/config/passport')(passport);
app.set('port',(process.env.PORT||3000));

mongoose.connect(process.env.MONGO_URI);

app.use('/public', express.static(process.cwd()+'/public'));
app.use('/controllers', express.static(process.cwd()+ '/app/controllers'));
app.use('/common', express.static(process.cwd() + '/app/common'))

app.use(cookieParser())
app.use(session({
  secret:'mySecretClementine',
  resave:false,
  saveUninitialized:true,
  store:new MemoryStore()
}));

app.use(passport.initialize());
app.use(passport.session());
routes(app,passport);

app.listen(app.get('port'),function(){
  console.log('Listening on Port: '+ app.get('port'));

});

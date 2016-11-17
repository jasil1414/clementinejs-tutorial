'use strict';

var express = require('express'),
    mongoose = require('mongoose'),
    routes = require('./app/routes/index.js');

var app = express();
app.set('port',(process.env.PORT||3000));

mongoose.connect('mongodb://localhost:27017/clementinejs');

app.use('/public', express.static(process.cwd()+'/public'));
app.use('/controllers', express.static(process.cwd()+ '/app/controllers'));

routes(app);

app.listen(app.get('port'),function(){
  console.log('Listening on Port: '+ app.get('port'));

});

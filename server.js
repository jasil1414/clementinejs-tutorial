'use strict';

var express = require('express'),
    mongo = require('mongodb').MongoClient,
    routes = require('./app/routes/index.js');

var app = express();
app.set('port',(process.env.PORT||3000));

mongo.connect('mongodb://localhost:27017/clementinejs', function(err,db){
  if(err) {
    throw new Error('Failed to connect to database');
  }
  else{
    console.log('Succcessfully connected to database');
  }

  app.use('/public', express.static(process.cwd()+'/public'));
  app.use('/controllers', express.static(process.cwd()+ '/app/controllers'));

  routes(app,db);

  app.listen(app.get('port'),function(){
    console.log('Listening on Port: '+ app.get('port'));

  });
});

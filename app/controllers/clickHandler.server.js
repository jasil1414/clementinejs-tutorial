'use strict';
var Users = require('../models/users.js');
function ClickHandler(){

  this.getClicks = function(req,res){
    Users.findOne({'github.id':req.user.github.id}, {'_id':false})
    .exec(function(err, result){
      if (err) throw err;

        res.json(result.nbrClicks);
      });
    };

  this.addClick = function(req,res){
      Clicks.findOneAndUpdate({'github.id':req.user.github.id},{$inc:{'nbrClicks.clicks':1}})
            .exec(function(err,result){
              if(err) throw err;
              res.json(result.nbrClicks);
      });
  }

  this.resetClick = function(req,res){
    clicks.update({'github.id':req.user.github.id},{'nbrClicks.clicks':0})
          .exec(function(err,result){
            if(err) throw err;
            res.json(result.nbrClicks);
    });
  }
  }

module.exports= ClickHandler;

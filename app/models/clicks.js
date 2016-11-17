var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Click = new Schema(
  {clicks: Number},
  {versionKey: false}
);

model.exports = mongoose.model('Click',Click);

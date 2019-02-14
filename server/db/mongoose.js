var mongoose = require('mongoose');
var keys = require('../../config/keys').configKeys;

mongoose.Promise = global.Promise;
mongoose.connect(keys.mlabConnStr, { useMongoClient: true });

module.exports = { mongoose };
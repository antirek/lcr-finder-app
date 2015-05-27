
var config = require('./config');
var Server = require('lcr-finder');

var server = new Server(config);
server.start();
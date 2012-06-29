var config = require('config');
var amqp = require('amqp');
var debug = require('debug')('fuzz');
var eventHandlers = require('./eventHandlers');

module.exports = fuzz = function(){
  self = this;
  self.rabbit = null;
  self.defaultConfig = config.rabbitMQ;
  self.connected = false;
  };

fuzz.prototype.connect = function(conf, cb){
  var self = this;
  if(typeof conf == 'function'){
    var cb = conf;
    conf = false;
  }
  if(self.rabbit){
    // If rabbit connection already exists, close it
    self.rabbit.end(); // Will trigger the 'close' event, invoking the eventHandler for close
  }
  self.rabbit = amqp.createConnection(conf || config.rabbitmq);
  // Set up event handlers. Each handler function name matches an amqp event
  for(var i in eventHandlers){
    self.rabbit.on(i, eventHandlers[i].bind(self));
  }
}

fuzz.prototype.on = function(event, cb){
  self.rabbit.on(event, cb);
}

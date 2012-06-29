var config = require('config');
var amqp = require('amqp');
var debug = require('debug')('eventHandlers');
var eventEmitter = require('events').EventEmitter;
var util = require('util');

var eventHandlers = function(){
  var self = this;
  eventEmitter.call(self);
}

util.inherits(eventHandlers, eventEmitter);

module.exports = eventHandlers;

eventHandlers.prototype.ready = function(){
  self = this;
  debug("connection ready");
  self.connected = true;
  self.rabbit = rabbit;
  cb(null, rabbit);
}

eventHandlers.prototype.close = function(){
  self = this;
  debug("connection closed");
  self.connected = false;
}

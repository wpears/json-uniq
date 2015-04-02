var Transform = require('readable-stream/transform');
var inherits =  require('inherits');
var deepEqual = require('deep-equal');

var objMode = {objectMode:1};

Uniq.prototype._transform = function(chunk, enc, cb){
  if(!this.lastItem){
    this.lastItem = chunk;
    this.push(chunk);
    return cb();
  }

  var matched = this.matcher(this.lastItem, chunk)
  if(matched){
  }
  cb();
}

function Uniq(matcher, obj){
  if(!(this instanceof Uniq)) return new Uniq(matcher, obj); 
  if(!matcher) matcher = deepEqual;
  if(!obj) obj = objectMode;

  this.matcher = matcher;
  this.lastItem = null;

  Transform.call(this, obj);
}

module.exports = Uniq;

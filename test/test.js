var request = require('request');
var through = require('through2');
var parser = require('JSONStream');

request.post("http://localhost:9200/address/point/_search?pretty=true",{form:'{' + 
  '"query": {"match_all":{}},' +
  '"sort": {"properties.address":{"order":"asc"}},' +
  '"size": 5}'
  }).pipe(parser.parse('hits.hits.*'))
    .pipe(through.obj(function(chunk, enc, cb){
      this.push(JSON.stringify(chunk)+'\n\n');
      cb();
    }))
    .pipe(process.stdout);

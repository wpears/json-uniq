var request = require('request');

request.post("http://localhost:9200/address/point/_search?pretty=true",{form:'{' + 
  '"query": {"match_all":{}},' +
  '"sort": {"properties.address":{"order":"asc"}},' +
  '"size": 5}'
  }).pipe(process.stdout);

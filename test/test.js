var test = require('tape');
var concat = require('concat-object-stream');
var uniq = require('../index.js');

var uniques = [
  {a:3},
  {a:4},
  {a:5},
  {a:6}
]

var firstTwoMatch = [
  {a:3},
  {a:3},
  {a:4},
  {a:5}
]

var lastThreeMatch = [
  {a:3},
  {a:4},
  {a:4},
  {a:4}
]

var fullMatch = [
  {a:3},
  {a:3},
  {a:3},
  {a:3}
]

var twoPairs= [
  {a:3},
  {a:3},
  {a:4},
  {a:4}
]

var three = [
  {a:3}
]

var threeFour = [
  {a:3},
  {a:4}
]

var threeFourFive = [
  {a:3},
  {a:4},
  {a:5}
]

function getUniques(arr, matcher, cb){
 var uniqTrans = new uniq(matcher);
 uniqTrans.pipe(concat(cb));
 arr.forEach(function(v,i){
  if(i < arr.length - 1) uniqTrans.write(v);
  else uniqTrans.end(v);
 })
}

test('Uniques', function(t){ 
  t.plan(1);
  getUniques(uniques,function(uniqs){
    t.deepEqual(uniqs, uniques);
  });
});

var stdev = require("../src/index");
var test = new stdev();
test.push(20,55.23133358,31.2662295);
console.log("push n=20,mu=55.23133358,sd=31.2662295","sd=",test.sd);
test.push(20,41.56803915,26.84190397);
console.log("push n=20,mu=41.56803915,sd=26.84190397","sd=",test.sd);
test.remove(20,41.56803915,26.84190397);
console.log("remove n=20,mu=55.23133358,sd=31.2662295","sd=",test.sd);

test.push(20,41.56803915,26.84190397);
console.log("push n=20,mu=41.56803915,sd=26.84190397","sd=",test.sd);
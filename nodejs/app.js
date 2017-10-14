var stuff = require('./stuff');

myCounter = stuff.counter(['mael','batman','rick']);
myAdder = stuff.adder(1,2);

console.log(myCounter);
console.log(myAdder);
console.log(`Pi is: ${stuff.pi}`);

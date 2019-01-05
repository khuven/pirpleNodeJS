var x = '/hello/my/friend';
var s2 = x.replace(/ˆ\/+|\/$/g,'');

console.log(x);
console.log(s2);

var environment = {};

environment.staging = 'Hello Buddy';
console.log(environment['staging']);





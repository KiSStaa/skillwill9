const validator = require('validator');

const result = validator.isEmail('test@test.com');
const result1 = validator.isEmail('abcDE123');

console.log(result)
console.log(result1)
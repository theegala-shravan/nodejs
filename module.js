const math=require("./math");
console.log(math.add(2,3));
//or
const { add, subtract, multiply, divide } = require("./math");
console.log(add(2,3));
console.log(subtract(2,3));
console.log(multiply(2,3));
console.log(divide(2,3));
const calculator = require("./calcs");
const { plus, minus, cross, value } = calculator;
console.log("Sum " + "= " + plus(10, 5));
console.log("Sub = " + minus(20, 5));
console.log("Mul = " + cross(3, 5));
console.log(value);

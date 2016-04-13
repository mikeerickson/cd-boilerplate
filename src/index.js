// index.js
// =============================================================================

import Calculator from './Calculator';

console.log('cd-boilerplate index')

let myCalc = new Calculator(0)
myCalc.add(4).subtract(2).multiply(3).divide(2)
console.log('calculator total', myCalc.total())

let myCalc2 = new Calculator(33)
myCalc2.add(7).subtract(3).multiply(33).divide(2)
console.log('calculator total2', myCalc2.total());

'use strict';
const { MutableList, MutableNumber } = require('../src');

const numberA = new MutableNumber(2);
const numberB = new MutableNumber(3);

const sum = numberA.add(numberB);

console.log('sum (5):', sum.get());

numberA.set(7);

console.log('sum (10):', sum.get());

const numbers = new MutableList([1, 2, 3, 4]);

const sum2 = numbers.reduce((sum, number) => sum + number, 0);

console.log('sum (10):', sum2.get());

// pushing a new number in the list
numbers.push(5);

console.log('sum (15):', sum2.get());

# Derivative
This librairy expose two kinds of objects types: mutables and derivatives. Mutables hold a current immutable value. Their current value can be replaced, that's why it's called a mutable. Derivatives are values derived from one or more mutables or other derivatives (their source values). Each derivative have a function that describe their relationship to their source values and they will always maintain that relationship true, even if their source value change.

## Example of what you can do
```js
const numberA = new MutableNumber(2);
const numberB = new MutableNumber(3);

const sum = numberA.add(numberB);

console.log('sum:', sum.get());
// sum: 5

numberA.set(7);

console.log('sum:', sum.get());
// sum: 10

// sum will always be the sum of the 2 other numbers, even when the two numbers change.
```

### Another sum example using a list
```js
const numbers = new MutableList([1, 2, 3, 4]);

const sum = numbers.reduce((sum, number) => sum + number, 0);

console.log('sum:', sum.get());
// sum: 10

// pushing a new number in the list
numbers.push(5);

console.log('sum:', sum.get());
// sum: 15
```

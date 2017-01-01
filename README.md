# Derivative
A derivative is an object that hold some value. You can base derivatives on other derivatives in a way that the relation between the two is always maintained, even when the source derivative value change.

## Example of what you can do
```js
const numberA = new Derivative(2);
const numberB = new Derivative(3);

const sum = new Derivative([numberA, numberB], (a, b) => a + b);

console.log('sum:', sum.getValue());
// sum: 5

numberA.setValue(7);

console.log('sum:', sum.getValue());
// sum: 10

// sum will always be the sum of the 2 other numbers, even when the two numbers change.
```

### Another sum example using an array
```js
const numbers = new Derivative([1, 2, 3, 4]);

const sum = numbers.derive(array =>
    array.reduce((sum, number) => sum + number, 0)
);

console.log('sum:', sum.getValue());
// sum: 10

// pushing a new number in the list
numbers.setValue(numbers.getValue().concat([5]));
// we use concat here instead of push because derivative values are intended to be immutable

console.log('sum:', sum.getValue());
// sum: 15
```

## API

### new Derivative(sources, transformation)
Create a derivate from one or more other derivatives.
 - **sources**: array of derivatives to base the new derivative on.
 - **transformation**: function that specify how to calculate the new derivative value based on the sources derivatives. The function will receive each source derivative value as a separate argument.

### new Derivative(value)
Create a derivative from a fixed value.

### derivative.getValue()
Get the derivative current value.

### derivative.setValue(value)
Change the current derivative value.

### derivative.derive(transformation)
Create a new derivative by applying a transformation to the current one.
This is the same as doing: `new Derivative([derivative], transformation)`

### derivative.onChange(changeListener)
Listen for changes of the derivative value. In some cases the change listener could be called even if the value didn't actually change. But it will always be called if the value actually change.
 - **changeListener**: function that will be called when the derivative value change or need to be recalculated

### derivative.removeChangeListener(changeListener)
Remove a change listener added with derivative.onChange.
 - **changeListener**: function previously passed to derivative.onChange

### Derivative.ensure(value)
Ensure that the value is a derivative. It will be wrapped inside a derivative if it's not.

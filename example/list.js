'use strict';
const { MutableList, MutableNumber } = require('../src');

function display(value) {
    return console.log(JSON.stringify(value));
}

const list = new MutableList();
const lastItem = list.last();
const size = list.getSize();
const factor = new MutableNumber(2);
const doubleSize = size.multiply(factor);

display({ list, lastItem, size, doubleSize });

list.push('a');
list.push('b');
list.push('c');
display({ list, lastItem, size, doubleSize });

list.push('d');
display({ list, lastItem, size, doubleSize });

list.pop();
display({ list, lastItem, size, doubleSize });

list.remove(1);
display({ list, lastItem, size, doubleSize });

factor.increment();
display({ list, lastItem, size, doubleSize });

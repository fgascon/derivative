'use strict';
const { MutableString } = require('../src');

function display(value) {
    return console.log(JSON.stringify(value));
}

const string = new MutableString('test');
const items = string.split(',');
const count = items.getSize();
const list = items.concat(['a', 'b']);
const newString = list.join(', ');

display({ string, items, count, list, newString });

string.append(',test2');
display({ string, items, count, list, newString });

string.prepend('test3,');
display({ string, items, count, list, newString });

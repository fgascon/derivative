'use strict';
const { DerivativeList, MutableNumber } = require('../src');

function display(value) {
    return console.log(JSON.stringify(value));
}

const start = new MutableNumber(1);
const end = new MutableNumber(5);
const list = DerivativeList.range(start, end);
const size = list.getSize();

display({ start, end, list, size });

end.set(20);
display({ start, end, list, size });

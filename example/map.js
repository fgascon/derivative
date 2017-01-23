'use strict';
const { MutableMap } = require('../src');

function display(value) {
    return console.log(JSON.stringify(value));
}

const map = new MutableMap();
const size = map.getSize();

map.setKey('a', 1);
map.setKey('b', 2);
map.setKey('c', 3);
display({ map, size });

map.setKey('d', 4);
display({ map, size });

map.delete('b');
display({ map, size });

'use strict';
const { MutableMap, DerivativeMap } = require('../src');

function display(value) {
    return console.log(JSON.stringify(value));
}

const map = new MutableMap();
const size = map.getSize();
const map2 = DerivativeMap.from({
    test: 1212,
    size,
});

map.setKey('a', 1);
map.setKey('b', 2);
map.setKey('c', 3);
display({ map, size, map2 });

map.setKey('d', 4);
display({ map, size, map2 });

map.delete('b');
display({ map, size, map2 });

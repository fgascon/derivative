'use strict';
const Map = require('immutable').Map;
const Derivative = require('./Derivative');
const slice = [].slice;

class DerivativeMap extends Derivative {
    _ensureType (value) {
        return Map.isMap(value) ? value : new Map(value);
    }
}

DerivativeMap.from = function (obj) {
    const keys = Object.keys(obj);
    const sources = keys.map(key => obj[key]);
    return new DerivativeMap(sources, function () {
        const args = slice.call(arguments);
        const values = {};
        keys.forEach(function (key, index) {
            values[key] = args[index];
        });

        return values;
    });
};

module.exports = DerivativeMap;

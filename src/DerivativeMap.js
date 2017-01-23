'use strict';
const Map = require('immutable').Map;
const Derivative = require('./Derivative');

class DerivativeMap extends Derivative {
    _ensureType (value) {
        return Map.isMap(value) ? value : new Map(value);
    }
}

module.exports = DerivativeMap;

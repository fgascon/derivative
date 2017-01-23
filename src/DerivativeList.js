'use strict';
const List = require('immutable').List;
const Derivative = require('./Derivative');

class DerivativeList extends Derivative {
    _ensureType (value) {
        return List.isList(value) ? value : new List(value);
    }
}

module.exports = DerivativeList;

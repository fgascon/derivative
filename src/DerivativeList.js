'use strict';
const { List, Range } = require('immutable');
const Derivative = require('./Derivative');

class DerivativeList extends Derivative {
    _ensureType (value) {
        return List.isList(value) ? value : new List(value);
    }
}

DerivativeList.fromRange = function (start, end, step) {
    return new DerivativeList([start, end, step], (start, end, step) => Range(start, end, step));
};

module.exports = DerivativeList;

'use strict';
const { List, Range } = require('immutable');
const Derivative = require('./Derivative');
const slice = [].slice;

class DerivativeList extends Derivative {
    _ensureType (value) {
        return List.isList(value) ? value : new List(value);
    }
}

DerivativeList.range = function (start, end, step) {
    return new DerivativeList([start, end, step], (start, end, step) => Range(start, end, step));
};

DerivativeList.from = function (array) {
    return new DerivativeList(array, function () {
        return slice.call(arguments);
    });
};

module.exports = DerivativeList;

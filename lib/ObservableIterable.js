'use strict';

var Derivative = require('./Derivative');
var DerivativeNumber = require('./DerivativeNumber');
var DerivativeBoolean = require('./DerivativeBoolean');
var DerivativeString = require('./DerivativeString');
var DerivativeList = require('./DerivativeList');
var DerivativeMap = require('./DerivativeMap');

module.exports = {
    //side effects
    forEach: function forEach(sideEffect, context) {
        return this.get().forEach(sideEffect, context);
    },

    //reading values
    getKey: function getKey(key, notSetValue) {
        return new Derivative([this, key, notSetValue], function (list, key, notSetValue) {
            return list.get(key, notSetValue);
        });
    },

    has: function has(key) {
        return new DerivativeBoolean([this, key], function (list, key) {
            return list.has(key);
        });
    },

    includes: function includes(value) {
        return new DerivativeBoolean([this, value], function (list, value) {
            return list.includes(value);
        });
    },

    first: function first() {
        return new Derivative([this], function (list) {
            return list.first();
        });
    },

    last: function last() {
        return new Derivative([this], function (list) {
            return list.last();
        });
    },

    getSize: function getSize() {
        return new DerivativeNumber([this], function (list) {
            return list.size;
        });
    },

    //reducing a value
    reduce: function reduce(reducer, initial, context) {
        return new Derivative([this, initial], function (list, initial) {
            return list.reduce(reducer, initial, context);
        });
    },

    reduceRight: function reduceRight(reducer, initialReduction, context) {
        return new Derivative([this, initial], function (list, initial) {
            return list.reduceRight(reducer, initial, context);
        });
    },

    every: function every(predicate, context) {
        return new DerivativeBoolean([this], function (list) {
            return list.every(predicate, context);
        });
    },

    some: function some(predicate, context) {
        return new DerivativeBoolean([this], function (list) {
            return list.some(predicate, context);
        });
    },

    join: function join(separator) {
        return new DerivativeString([this, separator], function (list, separator) {
            return list.join(separator);
        });
    },

    isEmpty: function isEmpty() {
        return new DerivativeBoolean([this], function (list) {
            return list.isEmpty();
        });
    },

    count: function count(predicate, context) {
        return new DerivativeNumber([this], function (list) {
            return list.count(predicate, context);
        });
    },

    //search for value
    find: function find(predicate, context, notSetValue) {
        return new Derivative([this], function (list) {
            return list.find(predicate, context, notSetValue);
        });
    },

    findLast: function findLast(predicate, context, notSetValue) {
        return new Derivative([this], function (list) {
            return list.findLast(predicate, context, notSetValue);
        });
    },

    findEntry: function findEntry(predicate, context, notSetValue) {
        return new Derivative([this], function (list) {
            return list.findEntry(predicate, context, notSetValue);
        });
    },

    findLastEntry: function findLastEntry(predicate, context, notSetValue) {
        return new Derivative([this], function (list) {
            return list.findLastEntry(predicate, context, notSetValue);
        });
    },

    findKey: function findKey(predicate, context) {
        return new Derivative([this], function (list) {
            return list.findKey(predicate, context);
        });
    },

    findLastKey: function findLastKey(predicate, context) {
        return new Derivative([this], function (list) {
            return list.findLastKey(predicate, context);
        });
    },

    keyOf: function keyOf(searchValue) {
        return new Derivative([this, searchValue], function (list, searchValue) {
            return list.keyOf(searchValue);
        });
    },

    lastKeyOf: function lastKeyOf(searchValue) {
        return new Derivative([this, searchValue], function (list, searchValue) {
            return list.lastKeyOf(searchValue);
        });
    },

    max: function max(comparator) {
        return new Derivative([this], function (list) {
            return list.max(comparator);
        });
    },

    maxBy: function maxBy(comparatorValueMapper, comparator) {
        return new Derivative([this], function (list) {
            return list.maxBy(comparatorValueMapper, comparator);
        });
    },

    min: function min(comparator) {
        return new Derivative([this], function (list) {
            return list.min(comparator);
        });
    },

    minBy: function minBy(comparatorValueMapper, comparator) {
        return new Derivative([this], function (list) {
            return list.minBy(comparatorValueMapper, comparator);
        });
    },

    //comparison
    isSubset: function isSubset(iterable) {
        return new DerivativeBoolean([this, iterable], function (list, iterable) {
            return list.isSubset(iterable);
        });
    },

    isSuperset: function isSuperset(iterable) {
        return new DerivativeBoolean([this, iterable], function (list, iterable) {
            return list.isSuperset(iterable);
        });
    },

    //conversion
    toList: function toList() {
        return new DerivativeList([this], function (map) {
            return map.toList();
        });
    },

    toMap: function toMap() {
        return new DerivativeMap([this], function (list) {
            return list.toMap();
        });
    }
};
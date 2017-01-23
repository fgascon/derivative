'use strict';

var Derivative = require('./Derivative');
var DerivativeNumber = require('./DerivativeNumber');
var DerivativeBoolean = require('./DerivativeBoolean');
var DerivativeString = require('./DerivativeString');
var DerivativeList = require('./DerivativeList');

module.exports = {
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

    //sequence algorithms
    map: function map(mapper, context) {
        return new DerivativeList([this], function (list) {
            return list.map(mapper, context);
        });
    },

    filter: function filter(predicate, context) {
        return new DerivativeList([this], function (list) {
            return list.filter(predicate, context);
        });
    },

    filterNot: function filterNot(predicate, context) {
        return new DerivativeList([this], function (list) {
            return list.filterNot(predicate, context);
        });
    },

    reverse: function reverse() {
        return new DerivativeList([this], function (list) {
            return list.reverse();
        });
    },

    sort: function sort(comparator) {
        return new DerivativeList([this], function (list) {
            return list.sort(comparator);
        });
    },

    sortBy: function sortBy(comparatorValueMapper, comparator) {
        return new DerivativeList([this], function (list) {
            return list.sortBy(comparatorValueMapper, comparator);
        });
    },

    //side effects
    forEach: function forEach(sideEffect, context) {
        return this.get().forEach(sideEffect, context);
    },

    //creating subsets
    slice: function slice(begin, end) {
        return new DerivativeList([this, begin, end], function (list, begin, end) {
            return list.slice(begin, end);
        });
    },

    rest: function rest() {
        return new DerivativeList([this], function (list) {
            return list.rest();
        });
    },

    butLast: function butLast() {
        return new DerivativeList([this], function (list) {
            return list.butLast();
        });
    },

    skip: function skip(amount) {
        return new DerivativeList([this, amount], function (list, amount) {
            return list.skip(amount);
        });
    },

    skipLast: function skipLast(amount) {
        return new DerivativeList([this, amount], function (list, amount) {
            return list.skipLast(amount);
        });
    },

    skipWhile: function skipWhile(predicate, context) {
        return new DerivativeList([this, predicate], function (list, predicate) {
            return list.skipWhile(predicate, context);
        });
    },

    skipUntil: function skipUntil(predicate, context) {
        return new DerivativeList([this, predicate], function (list, predicate) {
            return list.skipUntil(predicate, context);
        });
    },

    take: function take(amount) {
        return new DerivativeList([this, amount], function (list, amount) {
            return list.take(amount);
        });
    },

    takeLast: function takeLast(amount) {
        return new DerivativeList([this, amount], function (list, amount) {
            return list.takeLast(amount);
        });
    },

    takeWhile: function takeWhile(predicate, context) {
        return new DerivativeList([this, predicate], function (list, predicate) {
            return list.takeWhile(predicate, context);
        });
    },

    takeUntil: function takeUntil(predicate, context) {
        return new DerivativeList([this, predicate], function (list, predicate) {
            return list.takeUntil(predicate, context);
        });
    },

    //combination
    concat: function concat(iterable) {
        return new DerivativeList([this, iterable], function (list, iterable) {
            return list.concat(iterable);
        });
    },

    interpose: function interpose(separator) {
        return new DerivativeList([this, separator], function (list, separator) {
            return list.interpose(separator);
        });
    },

    interleave: function interleave(iterable) {
        return new DerivativeList([this, iterable], function (list, iterable) {
            return list.interleave(iterable);
        });
    },

    zip: function zip(iterable) {
        return new DerivativeList([this, iterable], function (list, iterable) {
            return list.zip(iterable);
        });
    },

    zipWith: function zipWith(zipper, iterable) {
        return new DerivativeList([this, iterable], function (list, iterable) {
            return list.zipWith(zipper, iterable);
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

    indexOf: function indexOf(searchValue) {
        return new Derivative([this, searchValue], function (list, searchValue) {
            return list.indexOf(searchValue);
        });
    },

    lastIndexOf: function lastIndexOf(searchValue) {
        return new DerivativeNumber([this, searchValue], function (list, searchValue) {
            return list.lastIndexOf(searchValue);
        });
    },

    findIndex: function findIndex(predicate, context) {
        return new DerivativeNumber([this], function (list) {
            return list.findIndex(predicate, context);
        });
    },

    findLastIndex: function findLastIndex(predicate, context) {
        return new DerivativeNumber([this], function (list) {
            return list.findLastIndex(predicate, context);
        });
    },

    isSubset: function isSubset(iterable) {
        return new DerivativeBoolean([this, iterable], function (list, iterable) {
            return list.isSubset(iterable);
        });
    },

    isSuperset: function isSuperset(iterable) {
        return new DerivativeBoolean([this, iterable], function (list, iterable) {
            return list.isSuperset(iterable);
        });
    }
};
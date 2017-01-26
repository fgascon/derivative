'use strict';
const Derivative = require('./Derivative');
const DerivativeBoolean = require('./DerivativeBoolean');
const DerivativeMap = require('./DerivativeMap');

module.exports = {
    //reading values
    getKey: function (key, notSetValue) {
        return new Derivative([this], (map) => map.get(key, notSetValue));
    },

    has: function (key) {
        return new DerivativeBoolean([this], (map) => map.has(key));
    },

    includes: function (value) {
        return new DerivativeBoolean([this], (map) => map.includes(value));
    },

    first: function () {
        return new Derivative([this], (map) => map.first());
    },

    last: function () {
        return new Derivative([this], (map) => map.last());
    },

    //sequence algorithms
    map: function (mapper, context) {
        return new DerivativeMap([this], (map) => map.map(mapper, context));
    },

    filter: function (predicate, context) {
        return new DerivativeMap([this], (map) => map.filter(predicate, context));
    },

    filterNot: function (predicate, context) {
        return new DerivativeMap([this], (map) => map.filterNot(predicate, context));
    },

    reverse: function () {
        return new DerivativeMap([this], (map) => map.reverse());
    },

    sort: function (comparator) {
        return new DerivativeMap([this], (map) => map.sort(comparator));
    },

    sortBy: function (comparatorValueMapper, comparator) {
        return new DerivativeMap([this], (map) => map.sortBy(comparatorValueMapper, comparator));
    },

    //creating subsets
    slice: function (begin, end) {
        return new DerivativeMap([this, begin, end], (map, begin, end) => map.slice(begin, end));
    },

    rest: function () {
        return new DerivativeMap([this], map => map.rest());
    },

    butLast: function () {
        return new DerivativeMap([this], map => map.butLast());
    },

    skip: function (amount) {
        return new DerivativeMap([this, amount], (map, amount) => map.skip(amount));
    },

    skipLast: function (amount) {
        return new DerivativeMap([this, amount], (map, amount) => map.skipLast(amount));
    },

    skipWhile: function (predicate, context) {
        return new DerivativeMap([this, predicate], (map, predicate) => map.skipWhile(predicate, context));
    },

    skipUntil: function (predicate, context) {
        return new DerivativeMap([this, predicate], (map, predicate) => map.skipUntil(predicate, context));
    },

    take: function (amount) {
        return new DerivativeMap([this, amount], (map, amount) => map.take(amount));
    },

    takeLast: function (amount) {
        return new DerivativeMap([this, amount], (map, amount) => map.takeLast(amount));
    },

    takeWhile: function (predicate, context) {
        return new DerivativeMap([this, predicate], (map, predicate) => map.takeWhile(predicate, context));
    },

    takeUntil: function (predicate, context) {
        return new DerivativeMap([this, predicate], (map, predicate) => map.takeUntil(predicate, context));
    },

    //combination
    concat: function (iterable) {
        return new DerivativeMap([this, iterable], (map, iterable) => map.concat(iterable));
    },

    flatten: function (depth) {
        return new DerivativeMap([this, depth], (map, depth) => map.flatten(depth));
    },

    //sequence functions
    flip: function () {
        return new DerivativeMap([this], (map) => map.flip());
    },
};

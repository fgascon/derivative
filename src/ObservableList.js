'use strict';
const DerivativeNumber = require('./DerivativeNumber');
const DerivativeList = require('./DerivativeList');

module.exports = {
    //sequence algorithms
    map: function (mapper, context) {
        return new DerivativeList([this], (list) => list.map(mapper, context));
    },

    filter: function (predicate, context) {
        return new DerivativeList([this], (list) => list.filter(predicate, context));
    },

    filterNot: function (predicate, context) {
        return new DerivativeList([this], (list) => list.filterNot(predicate, context));
    },

    reverse: function () {
        return new DerivativeList([this], (list) => list.reverse());
    },

    sort: function (comparator) {
        return new DerivativeList([this], (list) => list.sort(comparator));
    },

    sortBy: function (comparatorValueMapper, comparator) {
        return new DerivativeList([this], (list) => list.sortBy(comparatorValueMapper, comparator));
    },

    //creating subsets
    slice: function (begin, end) {
        return new DerivativeList([this, begin, end], (list, begin, end) => list.slice(begin, end));
    },

    rest: function () {
        return new DerivativeList([this], list => list.rest());
    },

    butLast: function () {
        return new DerivativeList([this], list => list.butLast());
    },

    skip: function (amount) {
        return new DerivativeList([this, amount], (list, amount) => list.skip(amount));
    },

    skipLast: function (amount) {
        return new DerivativeList([this, amount], (list, amount) => list.skipLast(amount));
    },

    skipWhile: function (predicate, context) {
        return new DerivativeList([this, predicate], (list, predicate) => list.skipWhile(predicate, context));
    },

    skipUntil: function (predicate, context) {
        return new DerivativeList([this, predicate], (list, predicate) => list.skipUntil(predicate, context));
    },

    take: function (amount) {
        return new DerivativeList([this, amount], (list, amount) => list.take(amount));
    },

    takeLast: function (amount) {
        return new DerivativeList([this, amount], (list, amount) => list.takeLast(amount));
    },

    takeWhile: function (predicate, context) {
        return new DerivativeList([this, predicate], (list, predicate) => list.takeWhile(predicate, context));
    },

    takeUntil: function (predicate, context) {
        return new DerivativeList([this, predicate], (list, predicate) => list.takeUntil(predicate, context));
    },

    //combination
    concat: function (iterable) {
        return new DerivativeList([this, iterable], (list, iterable) => list.concat(iterable));
    },

    flatten: function (depth) {
        return new DerivativeList([this, depth], (list, depth) => list.flatten(depth));
    },

    interpose: function (separator) {
        return new DerivativeList([this, separator], (list, separator) => list.interpose(separator));
    },

    interleave: function (iterable) {
        return new DerivativeList([this, iterable], (list, iterable) => list.interleave(iterable));
    },

    zip: function (iterable) {
        return new DerivativeList([this, iterable], (list, iterable) => list.zip(iterable));
    },

    zipWith: function (zipper, iterable) {
        return new DerivativeList([this, iterable], (list, iterable) => list.zipWith(zipper, iterable));
    },

    //search for value
    indexOf: function (searchValue) {
        return new DerivativeNumber([this, searchValue], (list, searchValue) => list.indexOf(searchValue));
    },

    lastIndexOf: function (searchValue) {
        return new DerivativeNumber([this, searchValue], (list, searchValue) => list.lastIndexOf(searchValue));
    },

    findIndex: function (predicate, context) {
        return new DerivativeNumber([this], (list) => list.findIndex(predicate, context));
    },

    findLastIndex: function (predicate, context) {
        return new DerivativeNumber([this], (list) => list.findLastIndex(predicate, context));
    },
};

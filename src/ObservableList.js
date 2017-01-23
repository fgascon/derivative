'use strict';
const Derivative = require('./Derivative');
const DerivativeNumber = require('./DerivativeNumber');
const DerivativeBoolean = require('./DerivativeBoolean');
const DerivativeString = require('./DerivativeString');
const DerivativeList = require('./DerivativeList');

module.exports = {
    //reading values
    getKey: function (key, notSetValue) {
        return new Derivative([this, key, notSetValue], (list, key, notSetValue) => list.get(key, notSetValue));
    },

    has: function (key) {
        return new DerivativeBoolean([this, key], (list, key) => list.has(key));
    },

    includes: function (value) {
        return new DerivativeBoolean([this, value], (list, value) => list.includes(value));
    },

    first: function () {
        return new Derivative([this], (list) => list.first());
    },

    last: function () {
        return new Derivative([this], (list) => list.last());
    },

    getSize: function () {
        return new DerivativeNumber([this], (list) => list.size);
    },

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

    //side effects
    forEach: function (sideEffect, context) {
        return this.get().forEach(sideEffect, context);
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

    //reducing a value
    reduce: function (reducer, initial, context) {
        return new Derivative([this, initial], (list, initial) => list.reduce(reducer, initial, context));
    },

    reduceRight: function (reducer, initialReduction, context) {
        return new Derivative([this, initial], (list, initial) => list.reduceRight(reducer, initial, context));
    },

    every: function (predicate, context) {
        return new DerivativeBoolean([this], (list) => list.every(predicate, context));
    },

    some: function (predicate, context) {
        return new DerivativeBoolean([this], (list) => list.some(predicate, context));
    },

    join: function (separator) {
        return new DerivativeString([this, separator], (list, separator) => list.join(separator));
    },

    isEmpty: function () {
        return new DerivativeBoolean([this], (list) => list.isEmpty());
    },

    count: function (predicate, context) {
        return new DerivativeNumber([this], (list) => list.count(predicate, context));
    },

    //search for value
    find: function (predicate, context, notSetValue) {
        return new Derivative([this], (list) => list.find(predicate, context, notSetValue));
    },

    findLast: function (predicate, context, notSetValue) {
        return new Derivative([this], (list) => list.findLast(predicate, context, notSetValue));
    },

    findEntry: function (predicate, context, notSetValue) {
        return new Derivative([this], (list) => list.findEntry(predicate, context, notSetValue));
    },

    findLastEntry: function (predicate, context, notSetValue) {
        return new Derivative([this], (list) => list.findLastEntry(predicate, context, notSetValue));
    },

    findKey: function (predicate, context) {
        return new Derivative([this], (list) => list.findKey(predicate, context));
    },

    findLastKey: function (predicate, context) {
        return new Derivative([this], (list) => list.findLastKey(predicate, context));
    },

    keyOf: function (searchValue) {
        return new Derivative([this, searchValue], (list, searchValue) => list.keyOf(searchValue));
    },

    lastKeyOf: function (searchValue) {
        return new Derivative([this, searchValue], (list, searchValue) => list.lastKeyOf(searchValue));
    },

    max: function (comparator) {
        return new Derivative([this], (list) => list.max(comparator));
    },

    maxBy: function (comparatorValueMapper, comparator) {
        return new Derivative([this], (list) => list.maxBy(comparatorValueMapper, comparator));
    },

    min: function (comparator) {
        return new Derivative([this], (list) => list.min(comparator));
    },

    minBy: function (comparatorValueMapper, comparator) {
        return new Derivative([this], (list) => list.minBy(comparatorValueMapper, comparator));
    },

    indexOf: function (searchValue) {
        return new Derivative([this, searchValue], (list, searchValue) => list.indexOf(searchValue));
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

    isSubset: function (iterable) {
        return new DerivativeBoolean([this, iterable], (list, iterable) => list.isSubset(iterable));
    },

    isSuperset: function (iterable) {
        return new DerivativeBoolean([this, iterable], (list, iterable) => list.isSuperset(iterable));
    },
};

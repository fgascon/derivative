'use strict';
const Derivative = require('./Derivative');
const DerivativeNumber = require('./DerivativeNumber');
const DerivativeBoolean = require('./DerivativeBoolean');
const DerivativeString = require('./DerivativeString');
const DerivativeList = require('./DerivativeList');
const DerivativeMap = require('./DerivativeMap');

module.exports = {
    //side effects
    forEach: function (sideEffect, context) {
        return this.get().forEach(sideEffect, context);
    },

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

    //comparison
    isSubset: function (iterable) {
        return new DerivativeBoolean([this, iterable], (list, iterable) => list.isSubset(iterable));
    },

    isSuperset: function (iterable) {
        return new DerivativeBoolean([this, iterable], (list, iterable) => list.isSuperset(iterable));
    },

    //conversion
    toList: function () {
        return new DerivativeList([this], (map) => map.toList());
    },

    toMap: function () {
        return new DerivativeMap([this], (list) => list.toMap());
    },
};

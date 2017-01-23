'use strict';

var DerivativeNumber = require('./DerivativeNumber');
var DerivativeList = require('./DerivativeList');

module.exports = {
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

    flatten: function flatten(depth) {
        return new DerivativeList([this, depth], function (list, depth) {
            return list.flatten(depth);
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

    //search for value
    indexOf: function indexOf(searchValue) {
        return new DerivativeNumber([this, searchValue], function (list, searchValue) {
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
    }
};
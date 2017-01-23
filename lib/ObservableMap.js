'use strict';

var DerivativeMap = require('./DerivativeMap');

module.exports = {
    //sequence algorithms
    map: function map(mapper, context) {
        return new DerivativeMap([this], function (map) {
            return map.map(mapper, context);
        });
    },

    filter: function filter(predicate, context) {
        return new DerivativeMap([this], function (map) {
            return map.filter(predicate, context);
        });
    },

    filterNot: function filterNot(predicate, context) {
        return new DerivativeMap([this], function (map) {
            return map.filterNot(predicate, context);
        });
    },

    reverse: function reverse() {
        return new DerivativeMap([this], function (map) {
            return map.reverse();
        });
    },

    sort: function sort(comparator) {
        return new DerivativeMap([this], function (map) {
            return map.sort(comparator);
        });
    },

    sortBy: function sortBy(comparatorValueMapper, comparator) {
        return new DerivativeMap([this], function (map) {
            return map.sortBy(comparatorValueMapper, comparator);
        });
    },

    //creating subsets
    slice: function slice(begin, end) {
        return new DerivativeMap([this, begin, end], function (map, begin, end) {
            return map.slice(begin, end);
        });
    },

    rest: function rest() {
        return new DerivativeMap([this], function (map) {
            return map.rest();
        });
    },

    butLast: function butLast() {
        return new DerivativeMap([this], function (map) {
            return map.butLast();
        });
    },

    skip: function skip(amount) {
        return new DerivativeMap([this, amount], function (map, amount) {
            return map.skip(amount);
        });
    },

    skipLast: function skipLast(amount) {
        return new DerivativeMap([this, amount], function (map, amount) {
            return map.skipLast(amount);
        });
    },

    skipWhile: function skipWhile(predicate, context) {
        return new DerivativeMap([this, predicate], function (map, predicate) {
            return map.skipWhile(predicate, context);
        });
    },

    skipUntil: function skipUntil(predicate, context) {
        return new DerivativeMap([this, predicate], function (map, predicate) {
            return map.skipUntil(predicate, context);
        });
    },

    take: function take(amount) {
        return new DerivativeMap([this, amount], function (map, amount) {
            return map.take(amount);
        });
    },

    takeLast: function takeLast(amount) {
        return new DerivativeMap([this, amount], function (map, amount) {
            return map.takeLast(amount);
        });
    },

    takeWhile: function takeWhile(predicate, context) {
        return new DerivativeMap([this, predicate], function (map, predicate) {
            return map.takeWhile(predicate, context);
        });
    },

    takeUntil: function takeUntil(predicate, context) {
        return new DerivativeMap([this, predicate], function (map, predicate) {
            return map.takeUntil(predicate, context);
        });
    },

    //combination
    concat: function concat(iterable) {
        return new DerivativeMap([this, iterable], function (map, iterable) {
            return map.concat(iterable);
        });
    },

    flatten: function flatten(depth) {
        return new DerivativeMap([this, depth], function (map, depth) {
            return map.flatten(depth);
        });
    },

    //sequence functions
    flip: function flip() {
        return new DerivativeMap([this], function (map) {
            return map.flip();
        });
    }
};
'use strict';

var DerivativeString = require('./DerivativeString');
var DerivativeList = require('./DerivativeList');

module.exports = {
    concat: function concat(string) {
        return new DerivativeString([this, string], function (s1, s2) {
            return s1 + s2;
        });
    },

    split: function split(separator) {
        return new DerivativeList([this, separator], function (string, separator) {
            return string.split(separator);
        });
    }
};
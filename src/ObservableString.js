'use strict';
const DerivativeString = require('./DerivativeString');
const DerivativeList = require('./DerivativeList');

module.exports = {
    concat: function (string) {
        return new DerivativeString([this, string], (s1, s2) => s1 + s2);
    },

    split: function (separator) {
        return new DerivativeList([this, separator], (string, separator) => string.split(separator));
    },
};

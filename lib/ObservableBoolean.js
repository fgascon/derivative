'use strict';

var DerivativeBoolean = require('./DerivativeBoolean');

module.exports = {
    not: function not(boolean) {
        return new DerivativeBoolean([this], function (b1) {
            return !b1;
        });
    },

    and: function and(boolean) {
        return new DerivativeBoolean([this, boolean], function (b1, b2) {
            return b1 && b2;
        });
    },

    or: function or(boolean) {
        return new DerivativeBoolean([this, boolean], function (b1, b2) {
            return b1 || b2;
        });
    }
};
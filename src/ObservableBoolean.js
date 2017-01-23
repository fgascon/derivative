'use strict';
const DerivativeBoolean = require('./DerivativeBoolean');

module.exports = {
    not: function (boolean) {
        return new DerivativeBoolean([this], (b1) => !b1);
    },

    and: function (boolean) {
        return new DerivativeBoolean([this, boolean], (b1, b2) => b1 && b2);
    },

    or: function (boolean) {
        return new DerivativeBoolean([this, boolean], (b1, b2) => b1 || b2);
    },
};

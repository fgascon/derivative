'use strict';

var DerivativeNumber = require('./DerivativeNumber');
var DerivativeString = require('./DerivativeString');
var DerivativeBoolean = require('./DerivativeBoolean');

module.exports = {
    add: function add(number) {
        return new DerivativeNumber([this, number], function (n1, n2) {
            return n1 + n2;
        });
    },

    subtract: function subtract(number) {
        return new DerivativeNumber([this, number], function (n1, n2) {
            return n1 - n2;
        });
    },

    multiply: function multiply(number) {
        return new DerivativeNumber([this, number], function (n1, n2) {
            return n1 * n2;
        });
    },

    divide: function divide(number) {
        return new DerivativeNumber([this, number], function (n1, n2) {
            return n1 / n2;
        });
    },

    modulo: function modulo(number) {
        return new DerivativeNumber([this, number], function (n1, n2) {
            return n1 % n2;
        });
    },

    pow: function pow(number) {
        return new DerivativeNumber([this, number], function (n1, n2) {
            return Math.pow(n1, n2);
        });
    },

    max: function max(number) {
        return new DerivativeNumber([this, number], function (n1, n2) {
            return Math.max(n1, n2);
        });
    },

    min: function min(number) {
        return new DerivativeNumber([this, number], function (n1, n2) {
            return Math.min(n1, n2);
        });
    },

    floor: function floor() {
        return new DerivativeNumber([this], function (n1) {
            return Math.floor(n1);
        });
    },

    ceil: function ceil() {
        return new DerivativeNumber([this], function (n1) {
            return Math.ceil(n1);
        });
    },

    round: function round() {
        return new DerivativeNumber([this], function (n1) {
            return Math.round(n1);
        });
    },

    sqrt: function sqrt() {
        return new DerivativeNumber([this], function (n1) {
            return Math.sqrt(n1);
        });
    },

    sin: function sin() {
        return new DerivativeNumber([this], function (n1) {
            return Math.sin(n1);
        });
    },

    cos: function cos() {
        return new DerivativeNumber([this], function (n1) {
            return Math.cos(n1);
        });
    },

    isNaN: function isNaN() {
        return new DerivativeBoolean([this], function (number) {
            return Number.isNaN(number);
        });
    },

    toFixed: function toFixed(digits) {
        return new DerivativeString([this, digits], function (number, digits) {
            return number.toFixed(digits);
        });
    },

    toPrecision: function toPrecision(precision) {
        return new DerivativeString([this, precision], function (number, precision) {
            return number.toPrecision(precision);
        });
    },

    toExponential: function toExponential(fractionDigits) {
        return new DerivativeString([this, fractionDigits], function (number, fractionDigits) {
            return number.toExponential(fractionDigits);
        });
    }
};
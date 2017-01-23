'use strict';
const DerivativeNumber = require('./DerivativeNumber');
const DerivativeString = require('./DerivativeString');
const DerivativeBoolean = require('./DerivativeBoolean');

module.exports = {
    add: function (number) {
        return new DerivativeNumber([this, number], (n1, n2) => n1 + n2);
    },

    subtract: function (number) {
        return new DerivativeNumber([this, number], (n1, n2) => n1 - n2);
    },

    multiply: function (number) {
        return new DerivativeNumber([this, number], (n1, n2) => n1 * n2);
    },

    divide: function (number) {
        return new DerivativeNumber([this, number], (n1, n2) => n1 / n2);
    },

    modulo: function (number) {
        return new DerivativeNumber([this, number], (n1, n2) => n1 % n2);
    },

    pow: function (number) {
        return new DerivativeNumber([this, number], (n1, n2) => Math.pow(n1, n2));
    },

    max: function (number) {
        return new DerivativeNumber([this, number], (n1, n2) => Math.max(n1, n2));
    },

    min: function (number) {
        return new DerivativeNumber([this, number], (n1, n2) => Math.min(n1, n2));
    },

    floor: function () {
        return new DerivativeNumber([this], (n1) => Math.floor(n1));
    },

    ceil: function () {
        return new DerivativeNumber([this], (n1) => Math.ceil(n1));
    },

    round: function () {
        return new DerivativeNumber([this], (n1) => Math.round(n1));
    },

    sqrt: function () {
        return new DerivativeNumber([this], (n1) => Math.sqrt(n1));
    },

    sin: function () {
        return new DerivativeNumber([this], (n1) => Math.sin(n1));
    },

    cos: function () {
        return new DerivativeNumber([this], (n1) => Math.cos(n1));
    },

    isNaN: function () {
        return new DerivativeBoolean([this], (number) => Number.isNaN(number));
    },

    toFixed: function (digits) {
        return new DerivativeString([this, digits], (number, digits) => number.toFixed(digits));
    },

    toPrecision: function (precision) {
        return new DerivativeString([this, precision], (number, precision) => number.toPrecision(precision));
    },

    toExponential: function (fractionDigits) {
        return new DerivativeString([this, fractionDigits], (number, fractionDigits) => number.toExponential(fractionDigits));
    },
};

'use strict';
const Derivative = require('./Derivative');

class DerivativeNumber extends Derivative {
    _ensureType (value) {
        return Number(value);
    }
}

module.exports = DerivativeNumber;

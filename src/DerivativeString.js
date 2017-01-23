'use strict';
const Derivative = require('./Derivative');

class DerivativeString extends Derivative {
    _ensureType (value) {
        return String(value);
    }
}

module.exports = DerivativeString;

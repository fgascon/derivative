'use strict';
const Derivative = require('./Derivative');

class DerivativeBoolean extends Derivative {
    _ensureType (value) {
        return Boolean(value);
    }
}

module.exports = DerivativeBoolean;

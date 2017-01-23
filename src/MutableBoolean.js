'use strict';
const Mutable = require('./Mutable');

class MutableBoolean extends Mutable {
    constructor (initialValue) {
        super(Boolean(initialValue));
    }

    inverse () {
        this.set(!this.get());
    }
}

module.exports = MutableBoolean;

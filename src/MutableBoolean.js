'use strict';
const Mutable = require('./Mutable');

class MutableBoolean extends Mutable {
    constructor (initialValue) {
        super(Boolean(initialValue));
    }

    set (value) {
        super.set(typeof value === 'boolean' ? value : Boolean(value));
    }

    inverse () {
        this.set(!this.get());
    }
}

module.exports = MutableBoolean;

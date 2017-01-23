'use strict';
const Mutable = require('./Mutable');

class MutableNumber extends Mutable {
    constructor (initialValue) {
        super(Number(initialValue));
    }

    increment (value) {
        this.set(this.get() + (typeof value === 'undefined' ? 1 : value));
    }

    decrement (value) {
        this.set(this.get() - (typeof value === 'undefined' ? 1 : value));
    }
}

module.exports = MutableNumber;

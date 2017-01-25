'use strict';
const Mutable = require('./Mutable');

class MutableNumber extends Mutable {
    constructor (initialValue) {
        super(Number(initialValue));
    }

    set (value) {
        super.set(typeof value === 'number' ? value : Number(value));
    }

    increment (value) {
        this.set(this.get() + (typeof value === 'undefined' ? 1 : value));
    }

    decrement (value) {
        this.set(this.get() - (typeof value === 'undefined' ? 1 : value));
    }
}

module.exports = MutableNumber;

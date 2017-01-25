'use strict';
const Mutable = require('./Mutable');

class MutableString extends Mutable {
    constructor (initialValue) {
        super(String(initialValue));
    }

    set (value) {
        super.set(typeof value === 'string' ? value : String(value));
    }

    append (string) {
        this.set(this.get() + string);
    }

    prepend (string) {
        this.set(string + this.get());
    }
}

module.exports = MutableString;

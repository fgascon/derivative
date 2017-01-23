'use strict';
const Mutable = require('./Mutable');

class MutableString extends Mutable {
    constructor (initialValue) {
        super(String(initialValue));
    }

    append (string) {
        this.set(this.get() + string);
    }

    prepend (string) {
        this.set(string + this.get());
    }
}

module.exports = MutableString;

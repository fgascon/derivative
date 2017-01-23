'use strict';
const Observable = require('./Observable');

class Mutable extends Observable {
    constructor (initialValue) {
        super();
        this._value = initialValue;
    }

    get () {
        return this._value;
    }

    set (value) {
        if (this._value !== value) {
            this._value = value;
            this._notifyChange();
        }
    }

    mutate (fnc) {
        this.set(fnc(this.get()));
    }
}

module.exports = Mutable;

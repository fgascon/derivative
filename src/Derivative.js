'use strict';
const Observable = require('./Observable');

class Derivative extends Observable {
    constructor (sources, compute) {
        super();
        this._dirty = true;
        this._sources = sources;
        this._compute = compute;

        sources.forEach(source => {
            if (source instanceof Observable) {
                source.onChange(() => {
                    if (!this._dirty) {
                        this._dirty = true;
                        this._notifyChange();
                    }
                });
            }
        });
    }

    _ensureType (value) {
        return value;
    }

    _updateValue () {
        this._value = this._ensureType(this._compute.apply(this, this._sources.map(Observable.value)));
        this._dirty = false;
    }

    get () {
        if (this._dirty) {
            this._updateValue();
        }

        return this._value;
    }
}

module.exports = Derivative;

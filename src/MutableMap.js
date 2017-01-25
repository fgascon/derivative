'use strict';
const Map = require('immutable').Map;
const Mutable = require('./Mutable');

class MutableMap extends Mutable {
    constructor (initialValue) {
        const formattedValue = initialValue ? (
                Map.isMap(initialValue) ? initialValue : new Map(initialValue)
            ) :
            new Map();
        super(formattedValue);
    }

    set (value) {
        super.set(Map.isMap(value) ? value : new Map(value));
    }

    //persistent changes
    setKey (key, value) {
        this.set(this.get().set(key, value));
    }

    remove (key) {
        this.set(this.get().remove(key));
    }

    delete (key) {
        this.remove(key);
    }

    clear () {
        this.set(this.get().clear());
    }

    update (key, notSetValue, updater) {
        this.set(this.get().update(key, notSetValue, updater));
    }

    assign (iterable) {
        if (arguments.length > 1) {
            const map = this.get();
            this.set(map.merge.apply(map, arguments));
        } else {
            this.set(this.get().merge(iterable));
        }
    }
}

module.exports = MutableMap;

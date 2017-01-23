'use strict';

class Observable {
    constructor () {
        this._changeListeners = [];
    }

    _notifyChange () {
        this._changeListeners.forEach(function (listener) {
            listener();
        });
    }

    onChange (listener) {
        this._changeListeners.push(listener);
    }

    removeChangeListener (listener) {
        const index = this._changeListeners.indexOf(listener);
        if (index >= 0) {
            this._changeListeners.splice(index, 1);
        }
    }

    toString () {
        return String(this.get());
    }

    toJSON () {
        const value = this.get();
        if (value && typeof value.toJSON === 'function') {
            return value.toJSON();
        } else {
            return value;
        }
    }
}

Observable.value = function (maybeObservable) {
    return maybeObservable instanceof Observable ? maybeObservable.get() : maybeObservable;
};

module.exports = Observable;

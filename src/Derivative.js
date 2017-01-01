'use strict';

class Derivative {
    constructor (sourcesOrValue, compute) {
        this._derivatives = [];
        this._changeListeners = null;
        if (typeof compute === 'function') {
            this._dirty = true;
            this._sources = sourcesOrValue.map(source => Derivative.ensure(source));
            this._compute = compute;
            this._value = null;
            this._sources.forEach(source => {
                source._derivatives.push(this);
            });
        } else {
            this._dirty = false;
            this._sources = [];
            this._compute = null;
            this._value = sourcesOrValue;
        }
    }

    _setDirty () {
        if (!this._dirty) {
            this._dirty = true;
            this._derivatives.forEach(function (derivative) {
                derivative._setDirty();
            });
        }
    }

    _notifyChange () {
        if (this._changeListeners) {
            this._changeListeners.forEach(function (listener) {
                listener();
            });
        }

        this._derivatives.forEach(function (derivative) {
            derivative._setDirty();
            derivative._notifyChange();
        });
    }

    _resolve () {
        if (this._dirty) {
            const sourcesValues = this._sources.map(source => source.getValue());
            this._value = this._compute.apply(this, sourcesValues);
            this._dirty = false;
        }
    }

    getValue () {
        this._resolve();
        return this._value;
    }

    setValue (value) {
        this._dirty = false;
        if (this._value !== value) {
            this._value = value;
            this._notifyChange();
        }
    }

    onChange (listener) {
        if (this._changeListeners) {
            this._changeListeners.push(listener);
        } else {
            this._changeListeners = [listener];
        }
    }

    removeChangeListener (listener) {
        if (this._changeListeners) {
            const index = this._changeListeners.indexOf(listener);
            if (index >= 0) {
                this._changeListeners.splice(index, 1);
            }
        }
    }

    derive (transformation) {
        return new Derivative([this], transformation || (a => a));
    }
}

Derivative.ensure = function (value) {
    if (value instanceof Derivative) {
        return value;
    } else {
        return new Derivative(value);
    }
};

Derivative.all = function (derivatives) {
    return new Derivative(derivatives, function () {
        return slice.call(arguents);
    });
};

Derivative.props = function (derivatives) {
    const keys = Object.keys(derivatives);
    const sources = keys.map(key => derivatives[key]);
    return new Derivative(sources, function () {
        const args = arguments;
        const object = {};
        keys.forEach(function (key, index) {
            object[key] = args[index];
        });

        return object;
    });
};

module.exports = Derivative;

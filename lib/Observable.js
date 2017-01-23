'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Observable = function () {
    function Observable() {
        _classCallCheck(this, Observable);

        this._changeListeners = [];
    }

    _createClass(Observable, [{
        key: '_notifyChange',
        value: function _notifyChange() {
            this._changeListeners.forEach(function (listener) {
                listener();
            });
        }
    }, {
        key: 'onChange',
        value: function onChange(listener) {
            this._changeListeners.push(listener);
        }
    }, {
        key: 'removeChangeListener',
        value: function removeChangeListener(listener) {
            var index = this._changeListeners.indexOf(listener);
            if (index >= 0) {
                this._changeListeners.splice(index, 1);
            }
        }
    }, {
        key: 'toString',
        value: function toString() {
            return String(this.get());
        }
    }, {
        key: 'toJSON',
        value: function toJSON() {
            var value = this.get();
            if (value && typeof value.toJSON === 'function') {
                return value.toJSON();
            } else {
                return value;
            }
        }
    }]);

    return Observable;
}();

Observable.value = function (maybeObservable) {
    return maybeObservable instanceof Observable ? maybeObservable.get() : maybeObservable;
};

module.exports = Observable;
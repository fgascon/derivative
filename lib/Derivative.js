'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Observable = require('./Observable');

var Derivative = function (_Observable) {
    _inherits(Derivative, _Observable);

    function Derivative(sources, compute) {
        _classCallCheck(this, Derivative);

        var _this = _possibleConstructorReturn(this, (Derivative.__proto__ || Object.getPrototypeOf(Derivative)).call(this));

        _this._dirty = true;
        _this._sources = sources;
        _this._compute = compute;

        sources.forEach(function (source) {
            if (source instanceof Observable) {
                source.onChange(function () {
                    if (!_this._dirty) {
                        _this._dirty = true;
                        _this._notifyChange();
                    }
                });
            }
        });
        return _this;
    }

    _createClass(Derivative, [{
        key: '_ensureType',
        value: function _ensureType(value) {
            return value;
        }
    }, {
        key: '_updateValue',
        value: function _updateValue() {
            this._value = this._ensureType(this._compute.apply(this, this._sources.map(Observable.value)));
            this._dirty = false;
        }
    }, {
        key: 'get',
        value: function get() {
            if (this._dirty) {
                this._updateValue();
            }

            return this._value;
        }
    }]);

    return Derivative;
}(Observable);

module.exports = Derivative;
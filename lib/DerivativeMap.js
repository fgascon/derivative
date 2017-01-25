'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Map = require('immutable').Map;
var Derivative = require('./Derivative');
var slice = [].slice;

var DerivativeMap = function (_Derivative) {
    _inherits(DerivativeMap, _Derivative);

    function DerivativeMap() {
        _classCallCheck(this, DerivativeMap);

        return _possibleConstructorReturn(this, (DerivativeMap.__proto__ || Object.getPrototypeOf(DerivativeMap)).apply(this, arguments));
    }

    _createClass(DerivativeMap, [{
        key: '_ensureType',
        value: function _ensureType(value) {
            return Map.isMap(value) ? value : new Map(value);
        }
    }]);

    return DerivativeMap;
}(Derivative);

DerivativeMap.from = function (obj) {
    var keys = Object.keys(obj);
    var sources = keys.map(function (key) {
        return obj[key];
    });
    return new DerivativeMap(sources, function () {
        var args = slice.call(arguments);
        var values = {};
        keys.forEach(function (key, index) {
            values[key] = args[index];
        });

        return values;
    });
};

module.exports = DerivativeMap;
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Map = require('immutable').Map;
var Mutable = require('./Mutable');

var MutableMap = function (_Mutable) {
    _inherits(MutableMap, _Mutable);

    function MutableMap(initialValue) {
        _classCallCheck(this, MutableMap);

        var formattedValue = initialValue ? Map.isMap(initialValue) ? initialValue : new Map(initialValue) : new Map();
        return _possibleConstructorReturn(this, (MutableMap.__proto__ || Object.getPrototypeOf(MutableMap)).call(this, formattedValue));
    }

    //persistent changes


    _createClass(MutableMap, [{
        key: 'setKey',
        value: function setKey(key, value) {
            this.set(this.get().set(key, value));
        }
    }, {
        key: 'remove',
        value: function remove(key) {
            this.set(this.get().remove(key));
        }
    }, {
        key: 'delete',
        value: function _delete(key) {
            this.remove(key);
        }
    }, {
        key: 'clear',
        value: function clear() {
            this.set(this.get().clear());
        }
    }, {
        key: 'update',
        value: function update(key, notSetValue, updater) {
            this.set(this.get().update(key, notSetValue, updater));
        }
    }, {
        key: 'assign',
        value: function assign(iterable) {
            if (arguments.length > 1) {
                var map = this.get();
                this.set(map.merge.apply(map, arguments));
            } else {
                this.set(this.get().merge(iterable));
            }
        }
    }]);

    return MutableMap;
}(Mutable);

module.exports = MutableMap;
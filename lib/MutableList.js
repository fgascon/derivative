'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = require('immutable').List;
var Mutable = require('./Mutable');

var MutableList = function (_Mutable) {
    _inherits(MutableList, _Mutable);

    function MutableList(initialValue) {
        _classCallCheck(this, MutableList);

        var formattedValue = initialValue ? List.isList(initialValue) ? initialValue : new List(initialValue) : new List();
        return _possibleConstructorReturn(this, (MutableList.__proto__ || Object.getPrototypeOf(MutableList)).call(this, formattedValue));
    }

    //persistent changes


    _createClass(MutableList, [{
        key: 'setSize',
        value: function (_setSize) {
            function setSize(_x) {
                return _setSize.apply(this, arguments);
            }

            setSize.toString = function () {
                return _setSize.toString();
            };

            return setSize;
        }(function (size) {
            this.set(this.get().setSize(setSize));
        })
    }, {
        key: 'setKey',
        value: function setKey(key, value) {
            this.set(this.get().set(key, value));
        }
    }, {
        key: 'remove',
        value: function remove(index) {
            this.set(this.get().remove(index));
        }
    }, {
        key: 'delete',
        value: function _delete(index) {
            this.remove(index);
        }
    }, {
        key: 'insert',
        value: function insert(index, value) {
            this.set(this.get().insert(index, value));
        }
    }, {
        key: 'clear',
        value: function clear() {
            this.set(this.get().clear());
        }
    }, {
        key: 'push',
        value: function push(item) {
            var list = this.get();
            var newList = arguments.length > 1 ? list.push.apply(list, arguments) : list.push(item);
            this.set(newList);
        }
    }, {
        key: 'pop',
        value: function pop() {
            return this.set(this.get().pop());
        }
    }, {
        key: 'shift',
        value: function shift() {
            return this.set(this.get().shift());
        }
    }, {
        key: 'unshift',
        value: function unshift(item) {
            var list = this.get();
            var newList = arguments.length > 1 ? list.unshift.apply(list, arguments) : list.unshift(item);
            this.set(newList);
        }
    }, {
        key: 'update',
        value: function update(number, notSetValue, updater) {
            this.set(this.get().update(number, notSetValue, updater));
        }
    }, {
        key: 'toggle',
        value: function toggle(value) {
            var list = this.get();
            if (list.includes(value)) {
                this.set(list.remove(value));
            } else {
                this.set(list.push(value));
            }
        }
    }, {
        key: 'splice',
        value: function splice(index, removeNum, item) {
            if (arguments.length > 3) {
                this.set(this.get().splice.apply(list, arguments));
            } else {
                this.set(this.get().splice(index, removeNum, item));
            }
        }
    }]);

    return MutableList;
}(Mutable);

module.exports = MutableList;
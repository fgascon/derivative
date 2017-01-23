'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mutable = require('./Mutable');

var MutableString = function (_Mutable) {
    _inherits(MutableString, _Mutable);

    function MutableString(initialValue) {
        _classCallCheck(this, MutableString);

        return _possibleConstructorReturn(this, (MutableString.__proto__ || Object.getPrototypeOf(MutableString)).call(this, String(initialValue)));
    }

    _createClass(MutableString, [{
        key: 'append',
        value: function append(string) {
            this.set(this.get() + string);
        }
    }, {
        key: 'prepend',
        value: function prepend(string) {
            this.set(string + this.get());
        }
    }]);

    return MutableString;
}(Mutable);

module.exports = MutableString;
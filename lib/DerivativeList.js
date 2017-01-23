'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = require('immutable').List;
var Derivative = require('./Derivative');

var DerivativeList = function (_Derivative) {
    _inherits(DerivativeList, _Derivative);

    function DerivativeList() {
        _classCallCheck(this, DerivativeList);

        return _possibleConstructorReturn(this, (DerivativeList.__proto__ || Object.getPrototypeOf(DerivativeList)).apply(this, arguments));
    }

    _createClass(DerivativeList, [{
        key: '_ensureType',
        value: function _ensureType(value) {
            return List.isList(value) ? value : new List(value);
        }
    }]);

    return DerivativeList;
}(Derivative);

module.exports = DerivativeList;
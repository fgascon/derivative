'use strict';

function addMethods(type, methods) {
    Object.assign(type.prototype, methods);
}

exports.Mutable = require('./Mutable');
exports.MutableNumber = require('./MutableNumber');
exports.MutableBoolean = require('./MutableBoolean');
exports.MutableString = require('./MutableString');
exports.MutableList = require('./MutableList');
exports.MutableMap = require('./MutableMap');

exports.Derivative = require('./Derivative');
exports.DerivativeNumber = require('./DerivativeNumber');
exports.DerivativeBoolean = require('./DerivativeBoolean');
exports.DerivativeString = require('./DerivativeString');
exports.DerivativeList = require('./DerivativeList');
exports.DerivativeMap = require('./DerivativeMap');

addMethods(exports.DerivativeNumber, require('./ObservableNumber'));
addMethods(exports.MutableNumber, require('./ObservableNumber'));

addMethods(exports.DerivativeBoolean, require('./ObservableBoolean'));
addMethods(exports.MutableBoolean, require('./ObservableBoolean'));

addMethods(exports.DerivativeString, require('./ObservableString'));
addMethods(exports.MutableString, require('./ObservableString'));

addMethods(exports.DerivativeList, require('./ObservableIterable'));
addMethods(exports.DerivativeList, require('./ObservableList'));
addMethods(exports.MutableList, require('./ObservableIterable'));
addMethods(exports.MutableList, require('./ObservableList'));

addMethods(exports.DerivativeMap, require('./ObservableIterable'));
addMethods(exports.DerivativeMap, require('./ObservableMap'));
addMethods(exports.MutableMap, require('./ObservableIterable'));
addMethods(exports.MutableMap, require('./ObservableMap'));

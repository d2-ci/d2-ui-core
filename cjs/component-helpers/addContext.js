"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

exports.default = addContext;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addContext(Component, contextTypes) {
    Component.contextTypes = Component.contextTypes || {};
    (0, _assign2.default)(Component.contextTypes, contextTypes);

    return Component;
}
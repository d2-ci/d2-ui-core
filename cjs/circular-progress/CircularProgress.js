'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

exports.default = CircularProgress;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CircularProgress = require('material-ui/CircularProgress/CircularProgress');

var _CircularProgress2 = _interopRequireDefault(_CircularProgress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getSizes(large, small) {
    // Size calculations for the MUI Circular Progress (https://github.com/callemall/material-ui/releases/tag/v0.16.0-rc1)
    var defaultMaterialUISize = 59.5; // Represents the pre 0.16 values size value 1
    var defaultMaterialUIMargin = 5.25; // Represents the pre 0.16 values size value 1

    if (large) {
        return {
            size: defaultMaterialUISize * 2,
            margin: defaultMaterialUIMargin * 2
        };
    }

    if (small) {
        return {
            size: defaultMaterialUISize / 2,
            margin: defaultMaterialUIMargin / 2
        };
    }

    return {
        size: defaultMaterialUISize,
        margin: defaultMaterialUIMargin
    };
}

function CircularProgress(_ref) {
    var large = _ref.large,
        small = _ref.small,
        style = _ref.style;

    var sizes = getSizes(large, small);

    return _react2.default.createElement(_CircularProgress2.default, {
        mode: 'indeterminate',
        size: sizes.size,
        style: (0, _assign2.default)({ margin: sizes.margin }, style)
    });
}

CircularProgress.propTypes = {
    large: _propTypes2.default.bool,
    small: _propTypes2.default.bool,
    style: _propTypes2.default.object
};

CircularProgress.defaultProps = {
    large: false,
    small: false,
    style: {}
};
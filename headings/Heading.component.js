'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Heading(props) {
    var level = props.level,
        text = props.text,
        style = props.style,
        children = props.children,
        other = (0, _objectWithoutProperties3.default)(props, ['level', 'text', 'style', 'children']);


    var tag = { type: level <= 6 ? 'h' + level : 'span' };
    var headingStyle = (0, _extends3.default)({
        fontSize: 24,
        fontWeight: 300,
        color: 'rgba(0, 0, 0, 0.87)',
        padding: '16px 0 5px 0',
        margin: 0
    }, style);

    return _react2.default.createElement(
        tag.type,
        (0, _extends3.default)({}, other, { style: headingStyle }),
        children || text
    );
}

Heading.propTypes = {
    level: _propTypes2.default.oneOf([1, 2, 3, 4, 5, 6]),
    text: _propTypes2.default.string
};

Heading.defaultProps = {
    level: 1
};

exports.default = Heading;
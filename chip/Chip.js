'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.disabledStyle = exports.avatarIcons = exports.avatarProps = exports.colors = exports.clickableStyle = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Avatar = require('material-ui/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _star = require('material-ui/svg-icons/toggle/star');

var _star2 = _interopRequireDefault(_star);

var _Chip = require('material-ui/Chip');

var _Chip2 = _interopRequireDefault(_Chip);

var _utils = require('../component-helpers/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var chipSize = '30px';
var chipColor = '#333333';

var chipStyle = {
    margin: 3,
    height: chipSize,
    pointer: 'auto'
};

var clickableStyle = exports.clickableStyle = {
    cursor: 'pointer'
};

var labelStyle = {
    fontSize: '13px',
    fontWeight: 500,
    lineHeight: '30px'
};

var colors = exports.colors = {
    default: {
        color: chipColor,
        backgroundColor: '#e0e0e0'
    },
    primary: {
        color: chipColor,
        backgroundColor: '#b1deda'
    }
};

var avatarProps = exports.avatarProps = {
    color: chipColor,
    backgroundColor: 'rgba(0,0,0,0.08)',
    style: {
        height: chipSize,
        width: chipSize
    }
};

var avatarIcons = exports.avatarIcons = {
    star: _react2.default.createElement(_star2.default, null)
};

var disabledStyle = exports.disabledStyle = {
    cursor: 'auto',
    opacity: 0.5
};

var Chip = function Chip(_ref) {
    var avatar = _ref.avatar,
        _ref$color = _ref.color,
        color = _ref$color === undefined ? 'default' : _ref$color,
        disabled = _ref.disabled,
        label = _ref.label,
        onClick = _ref.onClick,
        onRequestDelete = _ref.onRequestDelete,
        selector = _ref.selector;

    var style = (0, _extends3.default)({}, chipStyle, typeof onClick === 'function' ? clickableStyle : {}, disabled ? disabledStyle : {});

    var props = (0, _extends3.default)({
        style: style,
        labelStyle: labelStyle,
        className: (0, _utils.createClassName)('d2-ui-chip', selector),
        onClick: disabled ? undefined : onClick,
        onRequestDelete: disabled ? undefined : onRequestDelete,
        deleteIconStyle: { height: '22px' }
    }, colors[color]);

    var avatarCmp = avatarIcons[avatar] && _react2.default.createElement(_Avatar2.default, (0, _extends3.default)({
        icon: avatarIcons[avatar]
    }, avatarProps));

    var wrapperClassName = (0, _utils.createClassName)('d2-ui-chip-wrapper', selector);
    var wrapperStyle = { display: 'inline-block', verticalAlign: 'top' };
    return _react2.default.createElement(
        'div',
        { className: wrapperClassName, style: wrapperStyle },
        _react2.default.createElement(
            _Chip2.default,
            props,
            avatarCmp,
            label
        )
    );
};

Chip.propTypes = {
    /**
     * If set, adds an avatar to the chip
     */
    avatar: _propTypes2.default.oneOf(['star']),

    /**
     * The color theme of the chip
     */
    color: _propTypes2.default.oneOf(['default', 'primary']),

    /**
     *  If true, the button will be disabled
     */
    disabled: _propTypes2.default.bool,

    /**
     *  If set, adds text content to the chip
     */
    label: _propTypes2.default.string,

    /**
     * onClick callback function, triggered when the button is clicked
     */
    onClick: _propTypes2.default.func,

    /**
     * onRequestDelete callback function, adds a close button to the chip and executes this function when the button is clicked
     */
    onRequestDelete: _propTypes2.default.func,

    /**
     * If set, adds a class to the element on the format d2-ui-chip-selector
     */
    selector: _propTypes2.default.string
};

Chip.defaultProps = {
    avatar: null,
    disabled: false,
    label: null,
    onClick: undefined,
    onRequestDelete: undefined,
    selector: null
};

exports.default = Chip;
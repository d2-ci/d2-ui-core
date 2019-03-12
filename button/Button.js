'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _FloatingActionButton = require('material-ui/FloatingActionButton');

var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

var _utils = require('../component-helpers/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
    var raised = _ref.raised,
        fab = _ref.fab,
        color = _ref.color,
        disabled = _ref.disabled,
        onClick = _ref.onClick,
        children = _ref.children,
        style = _ref.style,
        selector = _ref.selector;

    var className = (0, _utils.createClassName)('d2-ui-button', selector);
    var MuiButton = void 0;

    if (fab) {
        // Always raised
        MuiButton = _FloatingActionButton2.default;
    } else if (raised) {
        MuiButton = _RaisedButton2.default;
    } else {
        MuiButton = _FlatButton2.default;
    }

    var props = {
        label: typeof children === 'string' ? children : null,
        primary: color === 'primary' || null,
        secondary: color === 'accent' || null,
        disabled: disabled,
        onClick: onClick,
        className: className,
        style: style
    };

    // Property gives error on FAB buttons in Material UI 0.19
    if (fab) {
        delete props.primary;
    }
    return _react2.default.createElement(
        MuiButton,
        props,
        typeof children !== 'string' ? children : null
    );
};

Button.propTypes = {
    /**
     * If true, the button will use raised styling
     */
    raised: _propTypes2.default.bool,

    /**
     * If true, the button will use floating action styling
     */
    fab: _propTypes2.default.bool,

    /**
     *  If true, the button will be disabled
     */
    disabled: _propTypes2.default.bool,

    /**
     * The theme color of the button
     */
    color: _propTypes2.default.oneOf(['default', 'primary', 'accent']),

    /**
     * onClick callback, which is triggered when the button is clicked
     *
     * The onClick callback will receive one arguments: TouchTap event targeting the button
     *
     */
    onClick: _propTypes2.default.func.isRequired,

    /**
     * Override the inline-styles of the root element
     */
    style: _propTypes2.default.object,

    /**
     * If set, adds a class to the element in the format d2-ui-button-selector
     */
    selector: _propTypes2.default.string
};

exports.default = Button;
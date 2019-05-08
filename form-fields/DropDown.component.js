'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SelectField = require('material-ui/SelectField');

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderMenuItem(id, displayName) {
    return _react2.default.createElement(_MenuItem2.default, { key: id, value: id, primaryText: displayName });
}

function renderMenuItems(_ref) {
    var menuItems = _ref.menuItems,
        includeEmpty = _ref.includeEmpty,
        emptyLabel = _ref.emptyLabel;

    var renderedMenuItems = menuItems.map(function (_ref2) {
        var id = _ref2.id,
            displayName = _ref2.displayName;
        return renderMenuItem(id, displayName);
    });

    if (includeEmpty) {
        var emptyMenuItem = _react2.default.createElement(_MenuItem2.default, { primaryText: emptyLabel, key: 'no_value', value: null, label: ' ' });
        renderedMenuItems.unshift(emptyMenuItem);
    }
    return renderedMenuItems;
}

function createCallbackWithFakeEventFromMaterialSelectField(callback) {
    return function (event, index, value) {
        return callback({ target: { value: value } });
    };
}

function DropDown(_ref3) {
    var fullWidth = _ref3.fullWidth,
        onFocus = _ref3.onFocus,
        onBlur = _ref3.onBlur,
        onChange = _ref3.onChange,
        value = _ref3.value,
        disabled = _ref3.disabled,
        menuItems = _ref3.menuItems,
        hintText = _ref3.hintText,
        includeEmpty = _ref3.includeEmpty,
        emptyLabel = _ref3.emptyLabel,
        noOptionsLabel = _ref3.noOptionsLabel,
        other = (0, _objectWithoutProperties3.default)(_ref3, ['fullWidth', 'onFocus', 'onBlur', 'onChange', 'value', 'disabled', 'menuItems', 'hintText', 'includeEmpty', 'emptyLabel', 'noOptionsLabel']);

    var menuItemArray = Array.isArray(menuItems) ? menuItems : menuItems.toArray();
    var hasOptions = menuItemArray.length > 0;
    return _react2.default.createElement(
        _SelectField2.default,
        (0, _extends3.default)({
            value: hasOptions ? value : 1,
            fullWidth: fullWidth,
            hintText: hintText,
            onChange: createCallbackWithFakeEventFromMaterialSelectField(onChange),
            disabled: !hasOptions || disabled
        }, other),
        hasOptions ? renderMenuItems({ menuItems: menuItemArray, includeEmpty: includeEmpty, emptyLabel: emptyLabel }) : _react2.default.createElement(_MenuItem2.default, { value: 1, primaryText: noOptionsLabel })
    );
}

DropDown.propTypes = {
    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.bool]),
    menuItems: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]),
    onFocus: _propTypes2.default.func,
    disabled: _propTypes2.default.bool,
    fullWidth: _propTypes2.default.bool,
    onBlur: _propTypes2.default.func,
    hintText: _propTypes2.default.string,
    onChange: _propTypes2.default.func.isRequired,
    noOptionsLabel: _propTypes2.default.string,
    includeEmpty: _propTypes2.default.bool,
    emptyLabel: _propTypes2.default.string
};

DropDown.defaultProps = {
    value: null,
    menuItems: [],
    disabled: false,
    fullWidth: false,
    hintText: 'Select item',
    onFocus: _propTypes2.default.func,
    onBlur: _propTypes2.default.func,
    noOptionsLabel: '-',
    includeEmpty: false,
    emptyLabel: ''
};

exports.default = DropDown;
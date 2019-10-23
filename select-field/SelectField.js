'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SelectField = require('material-ui/SelectField');

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _CircularProgress = require('material-ui/CircularProgress');

var _CircularProgress2 = _interopRequireDefault(_CircularProgress);

var _isString = require('lodash/fp/isString');

var _isString2 = _interopRequireDefault(_isString);

var _utils = require('../component-helpers/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getLoadingStyle = function getLoadingStyle(loading) {
    var listStyle = void 0;

    if (loading === true) {
        listStyle = {
            textAlign: 'center'
        };
    } else if ((0, _isString2.default)(loading)) {
        listStyle = {
            paddingLeft: 24,
            lineHeight: '32px',
            fontStyle: 'italic'
        };
    }

    return listStyle;
};

var getLoadingIndicator = function getLoadingIndicator(loading) {
    var node = void 0;

    if (loading === true) {
        node = _react2.default.createElement(_CircularProgress2.default, { size: 30 });
    } else if ((0, _isString2.default)(loading)) {
        node = _react2.default.createElement(
            'div',
            null,
            loading
        );
    }

    return node;
};

var getMenuItems = function getMenuItems(items, isLoading, isMultiple, value) {
    if (isLoading || !Array.isArray(items)) {
        return null;
    }

    return items.map(function (item) {
        return _react2.default.createElement(_MenuItem2.default, {
            key: item.id,
            value: item.id,
            primaryText: item.name,
            insetChildren: isMultiple,
            checked: isMultiple && Array.isArray(value) && value.indexOf(item.id) > -1
        });
    });
};

var SelectField = function SelectField(props) {
    var label = props.label,
        items = props.items,
        multiple = props.multiple,
        value = props.value,
        onChange = props.onChange,
        style = props.style,
        selector = props.selector,
        loading = props.loading,
        errorText = props.errorText,
        children = props.children;

    var className = (0, _utils.createClassName)('d2-ui-selectfield', selector);

    return _react2.default.createElement(
        _SelectField2.default,
        {
            floatingLabelText: label,
            value: value,
            multiple: multiple,
            onChange: onChange ? function (event, index, val) {
                return onChange(items[index] || val);
            } : null,
            className: className,
            style: style,
            listStyle: getLoadingStyle(loading),
            errorText: errorText
        },
        getLoadingIndicator(loading),
        getMenuItems(items, loading, multiple, value),
        !loading && children ? children : null
    );
};

SelectField.propTypes = {

    /**
     * The label of the select field
     */
    label: _propTypes2.default.string,

    /**
     * The select field items (rendered as MenuItems)
     */
    items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
        name: _propTypes2.default.string
    })),

    /**
     * If true, the select field will support multiple selection. A check mark will show before selected items.
     */
    multiple: _propTypes2.default.bool,

    /**
     * If true, a spinner will be shown in the select menu. If string, the loading text will be shown.
     */
    loading: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),

    /**
     * onChange callback, that is fired when the select field's value changes
     *
     * The onChange callback will receive one argument: The item selected (if items are provided) or the value selected
     */
    onChange: _propTypes2.default.func,

    /**
     * The value(s) of the select field
     */
    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]))]),

    /**
     * Override the inline-styles of the root element
     */
    style: _propTypes2.default.object,

    /**
     * If set, adds a class to the element in the format d2-ui-selectfield-selector
     */
    selector: _propTypes2.default.string,

    /**
     * If set, shows the error message below the SelectField
     */
    errorText: _propTypes2.default.string,

    /**
     * MenuItems to show in the dropdown
     */
    children: _propTypes2.default.node
};

SelectField.defaultProps = {
    errorText: null,
    items: [],
    loading: false,
    label: null,
    multiple: false,
    onChange: null,
    className: null,
    selector: null,
    style: null,
    value: null,
    children: null
};

exports.default = SelectField;
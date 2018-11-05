import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import PropTypes from 'prop-types';
import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

function renderMenuItem(id, displayName) {
    return React.createElement(MenuItem, { key: id, value: id, primaryText: displayName });
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
        var emptyMenuItem = React.createElement(MenuItem, { primaryText: emptyLabel, key: 'no_value', value: null, label: ' ' });
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
        other = _objectWithoutProperties(_ref3, ['fullWidth', 'onFocus', 'onBlur', 'onChange', 'value', 'disabled', 'menuItems', 'hintText', 'includeEmpty', 'emptyLabel', 'noOptionsLabel']);

    var menuItemArray = Array.isArray(menuItems) ? menuItems : menuItems.toArray();
    var hasOptions = menuItemArray.length > 0;
    return React.createElement(
        SelectField,
        _extends({
            value: hasOptions ? value : 1,
            fullWidth: fullWidth,
            hintText: hintText,
            onChange: createCallbackWithFakeEventFromMaterialSelectField(onChange),
            disabled: !hasOptions || disabled
        }, other),
        hasOptions ? renderMenuItems({ menuItems: menuItemArray, includeEmpty: includeEmpty, emptyLabel: emptyLabel }) : React.createElement(MenuItem, { value: 1, primaryText: noOptionsLabel })
    );
}

DropDown.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
    menuItems: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    onFocus: PropTypes.func,
    disabled: PropTypes.bool,
    fullWidth: PropTypes.bool,
    onBlur: PropTypes.func,
    hintText: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    noOptionsLabel: PropTypes.string,
    includeEmpty: PropTypes.bool,
    emptyLabel: PropTypes.string
};

DropDown.defaultProps = {
    value: null,
    menuItems: [],
    disabled: false,
    fullWidth: false,
    hintText: 'Select item',
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    noOptionsLabel: '-',
    includeEmpty: false,
    emptyLabel: ''
};

export default DropDown;
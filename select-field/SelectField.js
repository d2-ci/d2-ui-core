import React from 'react';
import PropTypes from 'prop-types';
import MuiSelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import CircularProgress from 'material-ui/CircularProgress';
import isString from 'lodash/fp/isString';
import { createClassName } from '../component-helpers/utils';

var getLoadingStyle = function getLoadingStyle(loading) {
    var listStyle = void 0;

    if (loading === true) {
        listStyle = {
            textAlign: 'center'
        };
    } else if (isString(loading)) {
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
        node = React.createElement(CircularProgress, { size: 30 });
    } else if (isString(loading)) {
        node = React.createElement(
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
        return React.createElement(MenuItem, {
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

    var className = createClassName('d2-ui-selectfield', selector);

    return React.createElement(
        MuiSelectField,
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
    label: PropTypes.string,

    /**
     * The select field items (rendered as MenuItems)
     */
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        name: PropTypes.string
    })),

    /**
     * If true, the select field will support multiple selection. A check mark will show before selected items.
     */
    multiple: PropTypes.bool,

    /**
     * If true, a spinner will be shown in the select menu. If string, the loading text will be shown.
     */
    loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

    /**
     * onChange callback, that is fired when the select field's value changes
     *
     * The onChange callback will receive one argument: The item selected (if items are provided) or the value selected
     */
    onChange: PropTypes.func,

    /**
     * The value(s) of the select field
     */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))]),

    /**
     * Override the inline-styles of the root element
     */
    style: PropTypes.object,

    /**
     * If set, adds a class to the element in the format d2-ui-selectfield-selector
     */
    selector: PropTypes.string,

    /**
     * If set, shows the error message below the SelectField
     */
    errorText: PropTypes.string,

    /**
     * MenuItems to show in the dropdown
     */
    children: PropTypes.node
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

export default SelectField;
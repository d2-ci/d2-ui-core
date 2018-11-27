import _extends from 'babel-runtime/helpers/extends';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tabs as MuiTabs, Tab as MuiTab } from 'material-ui/Tabs';
import { createClassName } from '../component-helpers/utils';

export var Tabs = function Tabs(_ref) {
    var style = _ref.style,
        selector = _ref.selector,
        children = _ref.children;

    var className = createClassName('d2-ui-tabs', selector);

    return React.createElement(
        MuiTabs,
        {
            className: className,
            style: style
        },
        children
    );
};

Tabs.propTypes = {
    /**
     * Override the inline-styles of the root element
     */
    style: PropTypes.object,

    /**
     * If set, adds a class to the element in the format d2-ui-tabs-selector
     */
    selector: PropTypes.string
};

export default Tabs;

export var Tab = function (_Component) {
    _inherits(Tab, _Component);

    function Tab() {
        _classCallCheck(this, Tab);

        return _possibleConstructorReturn(this, (Tab.__proto__ || _Object$getPrototypeOf(Tab)).apply(this, arguments));
    }

    _createClass(Tab, [{
        key: 'render',
        value: function render() {
            var className = createClassName('d2-ui-tab', this.props.selector);

            return React.createElement(MuiTab, _extends({
                className: className
            }, this.props));
        }
    }]);

    return Tab;
}(Component);Tab.propTypes = {
    /**
     * If set, adds a class to the element in the format d2-ui-tab-selector
     */
    selector: PropTypes.string
};
Tab.muiName = 'Tab';
;
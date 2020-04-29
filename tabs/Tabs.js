'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Tab = exports.Tabs = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Tabs = require('material-ui/Tabs');

var _utils = require('../component-helpers/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tabs = exports.Tabs = function Tabs(_ref) {
    var style = _ref.style,
        selector = _ref.selector,
        children = _ref.children;

    var className = (0, _utils.createClassName)('d2-ui-tabs', selector);

    return _react2.default.createElement(
        _Tabs.Tabs,
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
    style: _propTypes2.default.object,

    /**
     * If set, adds a class to the element in the format d2-ui-tabs-selector
     */
    selector: _propTypes2.default.string
};

exports.default = Tabs;

var Tab = exports.Tab = function (_Component) {
    (0, _inherits3.default)(Tab, _Component);

    function Tab() {
        (0, _classCallCheck3.default)(this, Tab);
        return (0, _possibleConstructorReturn3.default)(this, (Tab.__proto__ || (0, _getPrototypeOf2.default)(Tab)).apply(this, arguments));
    }

    (0, _createClass3.default)(Tab, [{
        key: 'render',
        value: function render() {
            var className = (0, _utils.createClassName)('d2-ui-tab', this.props.selector);

            return _react2.default.createElement(_Tabs.Tab, (0, _extends3.default)({
                className: className
            }, this.props));
        }
    }]);
    return Tab;
}(_react.Component);

Tab.propTypes = {
    /**
     * If set, adds a class to the element in the format d2-ui-tab-selector
     */
    selector: _propTypes2.default.string
};
Tab.muiName = 'Tab';
;
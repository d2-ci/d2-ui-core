'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.END_FLAP_HEIGHT = undefined;

var _isInteger = require('babel-runtime/core-js/number/is-integer');

var _isInteger2 = _interopRequireDefault(_isInteger);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

var _utils = require('../component-helpers/utils');

var _SvgIcon = require('../svg-icon/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
    root: {
        position: 'fixed',
        top: 48,
        left: 0,
        right: 0,
        background: 'white',
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 6px 3px',
        transition: 'all ease-out 75ms',
        zIndex: 10,
        overflow: 'hidden',
        boxSizing: 'border-box'
    },
    content: {
        position: 'relative',
        height: '100%',
        width: '100%'
    },
    endFlap: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        textAlign: 'center',
        transition: 'all ease-out 75ms'
    },
    dragHandle: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 10,
        cursor: 'ns-resize',
        transition: 'all ease-out 75ms'
        // borderTop: '1px solid rgba(0,0,0,0.3)',
    }
};

var BACKGROUND_RGB = '255,255,255';
var BACKGROUND_RGB_EDIT = '255,248,224';
var END_FLAP_HEIGHT = exports.END_FLAP_HEIGHT = 7;

/**
 * The ControlBar component can be used to put an expandable horizontal bar underneath the DHIS header bar, useful for
 * UI elements that apply to the entire screen.
 */

var ControlBar = function (_React$Component) {
    (0, _inherits3.default)(ControlBar, _React$Component);

    function ControlBar(props) {
        (0, _classCallCheck3.default)(this, ControlBar);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ControlBar.__proto__ || (0, _getPrototypeOf2.default)(ControlBar)).call(this, props));

        _this.onStartDrag = function () {
            _this.setState({ dragging: true });
            window.addEventListener('mousemove', _this.onDrag);
            window.addEventListener('mouseup', _this.onEndDrag);
        };

        _this.onDrag = function (event) {
            event.preventDefault();
            event.stopPropagation();

            var newHeight = event.clientY - 52;

            if (_this.props.onChangeHeight && newHeight !== _this.props.height && newHeight > 0) {
                requestAnimationFrame(function () {
                    _this.props.onChangeHeight(newHeight);
                });
            }
        };

        _this.onEndDrag = function () {
            _this.setState({ dragging: false });
            window.removeEventListener('mousemove', _this.onDrag);
            window.removeEventListener('mouseup', _this.onEndDrag);

            if (_this.props.onEndDrag) {
                _this.props.onEndDrag();
            }
        };

        _this.state = {
            dragging: false
        };
        return _this;
    }

    (0, _createClass3.default)(ControlBar, [{
        key: 'getEndFlapHeight',
        value: function getEndFlapHeight() {
            return this.showDragHandle() ? END_FLAP_HEIGHT : 0;
        }
    }, {
        key: 'showDragHandle',
        value: function showDragHandle() {
            return typeof this.props.onChangeHeight === 'function';
        }
    }, {
        key: 'renderEndFlap',
        value: function renderEndFlap() {
            var backgroundColor = this.props.editMode ? BACKGROUND_RGB_EDIT : BACKGROUND_RGB;

            var endFlapStyle = (0, _extends3.default)({}, styles.endFlap, {
                height: this.getEndFlapHeight(),
                backgroundColor: 'lightblue'
            });

            var dragFlapStyle = (0, _extends3.default)({}, styles.dragHandle, {
                cursor: this.props.expandable ? 'ns-resize' : 'auto',
                height: this.getEndFlapHeight(),
                backgroundColor: 'rgb(' + backgroundColor + ')'
            });

            var props = (0, _assign2.default)({}, this.showDragHandle() && this.props.expandable ? { onMouseDown: this.onStartDrag } : {});

            // Disable jsx-a11y no-role rule, because what's the alternative?
            /* eslint-disable jsx-a11y/no-static-element-interactions */
            return _react2.default.createElement(
                'div',
                { className: 'd2-ui-control-bar-endflap', style: endFlapStyle },
                _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({
                        className: 'd2-ui-control-bar-dragflap',
                        style: dragFlapStyle
                    }, props),
                    _react2.default.createElement(_SvgIcon2.default, { className: 'd2-ui-control-bar-dragflap-icon', icon: 'DragHandle', style: { marginTop: -7, fill: 'rgba(0,0,0,0.3)' } })
                )
            );
            /* eslint-enable jsx-a11y/no-static-element-interactions */
        }
    }, {
        key: 'render',
        value: function render() {
            var className = (0, _utils.createClassName)('d2-ui-control-bar', this.props.selector);
            var contentClassName = (0, _utils.createClassName)('d2-ui-control-bar-contents', this.props.selector);

            var height = Math.max(this.props.height, 0) + this.getEndFlapHeight();

            var rootStyle = (0, _assign2.default)({}, styles.root,
            // Adjust height to make room for extra components
            { height: height },
            // Set background color for edit mode
            { background: this.props.editMode ? 'rgb(' + BACKGROUND_RGB_EDIT + ')' : 'white' },
            // Disable animations while dragging
            this.state.dragging ? { transition: 'none' } : {},
            // Make room for the end flap
            { paddingBottom: this.getEndFlapHeight() });

            return _react2.default.createElement(
                'div',
                { style: rootStyle, className: className },
                _react2.default.createElement(
                    'div',
                    { style: styles.content, className: contentClassName },
                    this.props.children
                ),
                this.renderEndFlap()
            );
        }
    }]);
    return ControlBar;
}(_react2.default.Component);

var positiveIntegerPropValidator = function positiveIntegerPropValidator(props, propName, componentName) {
    var propValue = props[propName];
    if (isNaN(parseFloat(propValue)) || !isFinite(propValue) || !(0, _isInteger2.default)(propValue) || props[propName] < 1) {
        // eslint-disable-next-line max-len
        return new Error('Invalid prop `' + propName + '` with value `' + propValue + '` supplied to component `' + componentName + '`: Must be a positive integer');
    }
    return undefined;
};

ControlBar.propTypes = {
    /**
     * The height of the control bar in number of lines. Must be a positive integer.
     */
    height: positiveIntegerPropValidator,

    /**
     * If true, the background color of the control bar changes to indicate that edit mode is active.
     */
    editMode: _propTypes2.default.bool,

    /**
     * Callback function that is called when the control bar is resized.
     * The callback receives one argument: The new height in pixels.
     *
     * If no callback is specified the control bar will not have a drag handle.
     */
    onChangeHeight: _propTypes2.default.func,

    /**
     * Callback function that is called when the control bar is dropped after being dragged.
     * The callback receives one argument: The new height in pixels.
     *
     * Ignored if no "onChangeHeight" function is provided.
     */
    onEndDrag: _propTypes2.default.func,

    /**
     * The contents of the control bar.
     */
    children: _propTypes2.default.node.isRequired,

    /**
     * If set, adds a class to the element in the format d2-ui-control-bar-selector
     */
    selector: _propTypes2.default.string,

    /**
     * If set, the control bar is vertically expandable by dragging the end flap
     */
    expandable: _propTypes2.default.bool
};

ControlBar.defaultProps = {
    height: 32,
    editMode: false,
    onChangeHeight: null,
    onEndDrag: null,
    selector: '',
    expandable: true
};

exports.default = ControlBar;
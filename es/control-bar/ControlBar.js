import _Number$isInteger from 'babel-runtime/core-js/number/is-integer';
import _Object$assign from 'babel-runtime/core-js/object/assign';
import _extends from 'babel-runtime/helpers/extends';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';

import { createClassName } from '../component-helpers/utils';
import SvgIcon from '../svg-icon/SvgIcon';

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
export var END_FLAP_HEIGHT = 7;

/**
 * The ControlBar component can be used to put an expandable horizontal bar underneath the DHIS header bar, useful for
 * UI elements that apply to the entire screen.
 */

var ControlBar = function (_React$Component) {
    _inherits(ControlBar, _React$Component);

    function ControlBar(props) {
        _classCallCheck(this, ControlBar);

        var _this = _possibleConstructorReturn(this, (ControlBar.__proto__ || _Object$getPrototypeOf(ControlBar)).call(this, props));

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

    _createClass(ControlBar, [{
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

            var endFlapStyle = _extends({}, styles.endFlap, {
                height: this.getEndFlapHeight(),
                backgroundColor: 'lightblue'
            });

            var dragFlapStyle = _extends({}, styles.dragHandle, {
                cursor: this.props.expandable ? 'ns-resize' : 'auto',
                height: this.getEndFlapHeight(),
                backgroundColor: 'rgb(' + backgroundColor + ')'
            });

            var props = _Object$assign({}, this.showDragHandle() && this.props.expandable ? { onMouseDown: this.onStartDrag } : {});

            // Disable jsx-a11y no-role rule, because what's the alternative?
            /* eslint-disable jsx-a11y/no-static-element-interactions */
            return React.createElement(
                'div',
                { className: 'd2-ui-control-bar-endflap', style: endFlapStyle },
                React.createElement(
                    'div',
                    _extends({
                        className: 'd2-ui-control-bar-dragflap',
                        style: dragFlapStyle
                    }, props),
                    React.createElement(SvgIcon, { className: 'd2-ui-control-bar-dragflap-icon', icon: 'DragHandle', style: { marginTop: -7, fill: 'rgba(0,0,0,0.3)' } })
                )
            );
            /* eslint-enable jsx-a11y/no-static-element-interactions */
        }
    }, {
        key: 'render',
        value: function render() {
            var className = createClassName('d2-ui-control-bar', this.props.selector);
            var contentClassName = createClassName('d2-ui-control-bar-contents', this.props.selector);

            var height = Math.max(this.props.height, 0) + this.getEndFlapHeight();

            var rootStyle = _Object$assign({}, styles.root,
            // Adjust height to make room for extra components
            { height: height },
            // Set background color for edit mode
            { background: this.props.editMode ? 'rgb(' + BACKGROUND_RGB_EDIT + ')' : 'white' },
            // Disable animations while dragging
            this.state.dragging ? { transition: 'none' } : {},
            // Make room for the end flap
            { paddingBottom: this.getEndFlapHeight() });

            return React.createElement(
                'div',
                { style: rootStyle, className: className },
                React.createElement(
                    'div',
                    { style: styles.content, className: contentClassName },
                    this.props.children
                ),
                this.renderEndFlap()
            );
        }
    }]);

    return ControlBar;
}(React.Component);

var positiveIntegerPropValidator = function positiveIntegerPropValidator(props, propName, componentName) {
    var propValue = props[propName];
    if (isNaN(parseFloat(propValue)) || !isFinite(propValue) || !_Number$isInteger(propValue) || props[propName] < 1) {
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
    editMode: PropTypes.bool,

    /**
     * Callback function that is called when the control bar is resized.
     * The callback receives one argument: The new height in pixels.
     *
     * If no callback is specified the control bar will not have a drag handle.
     */
    onChangeHeight: PropTypes.func,

    /**
     * Callback function that is called when the control bar is dropped after being dragged.
     * The callback receives one argument: The new height in pixels.
     *
     * Ignored if no "onChangeHeight" function is provided.
     */
    onEndDrag: PropTypes.func,

    /**
     * The contents of the control bar.
     */
    children: PropTypes.node.isRequired,

    /**
     * If set, adds a class to the element in the format d2-ui-control-bar-selector
     */
    selector: PropTypes.string,

    /**
     * If set, the control bar is vertically expandable by dragging the end flap
     */
    expandable: PropTypes.bool
};

ControlBar.defaultProps = {
    height: 32,
    editMode: false,
    onChangeHeight: null,
    onEndDrag: null,
    selector: '',
    expandable: true
};

export default ControlBar;
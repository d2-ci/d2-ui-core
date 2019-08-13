'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TreeView = function (_React$Component) {
    (0, _inherits3.default)(TreeView, _React$Component);

    function TreeView(props) {
        (0, _classCallCheck3.default)(this, TreeView);

        var _this = (0, _possibleConstructorReturn3.default)(this, (TreeView.__proto__ || (0, _getPrototypeOf2.default)(TreeView)).call(this, props));

        _this.state = {
            collapsed: !props.initiallyExpanded,
            hasBeenExpanded: props.initiallyExpanded
        };

        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(TreeView, [{
        key: 'toggleCollapsed',
        value: function toggleCollapsed() {
            var _this2 = this;

            this.setState(function (state) {
                return {
                    collapsed: !state.collapsed,
                    hasBeenExpanded: true
                };
            }, function () {
                if (!_this2.state.collapsed && typeof _this2.props.onExpand === 'function') {
                    _this2.props.onExpand(_this2.props.model);
                }

                if (_this2.state.collapsed && typeof _this2.props.onCollapse === 'function') {
                    _this2.props.onCollapse(_this2.props.model);
                }
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            // When initiallyExpanded status changed and the tree is collapsed we fire a toggleEvent to open it up
            if (newProps.initiallyExpanded && this.state.collapsed) {
                this.toggleCollapsed();
            }
        }
    }, {
        key: 'handleClick',
        value: function handleClick(e) {
            if (this.props.onClick) {
                this.props.onClick(e);
            }
            if (e !== undefined) {
                e.stopPropagation();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var styles = {
                tree: {
                    marginLeft: 16,
                    whiteSpace: 'nowrap'
                },
                itemLabel: {
                    display: 'inline-block',
                    position: 'relative'
                },
                arrow: (0, _extends3.default)({
                    display: 'inline-block',
                    position: 'absolute',
                    left: -16,
                    top: -1,
                    width: 11,
                    height: 16,
                    paddingLeft: 4,
                    textAlign: 'center',
                    cursor: 'pointer'
                }, this.props.style.arrow),
                arrowSymbol: {
                    transition: 'transform 150ms ease-out',
                    transform: this.state.collapsed ? '' : 'rotate(90deg)',
                    position: 'absolute'
                },
                clickTarget: {
                    cursor: this.props.onClick && 'pointer'
                },
                children: (0, _extends3.default)({
                    position: 'relative',
                    marginLeft: 16,
                    height: this.state.collapsed ? 0 : 'inherit'
                }, this.props.style)
            };

            var label = _react2.default.createElement(
                'div',
                { style: styles.itemLabel },
                _react2.default.createElement(
                    'div',
                    {
                        className: 'arrow',
                        style: styles.arrow,
                        onClick: this.toggleCollapsed.bind(this)
                    },
                    _react2.default.createElement(
                        'div',
                        { style: styles.arrowSymbol },
                        this.props.arrowSymbol
                    )
                ),
                _react2.default.createElement(
                    'div',
                    {
                        className: 'label',
                        onClick: this.handleClick,
                        style: styles.clickTarget
                    },
                    this.props.label
                )
            );

            styles.children.display = this.state.collapsed ? 'none' : 'block';

            // Render children if not collapsed, or (persistent and has been expanded)
            var children = (!this.state.collapsed || this.props.persistent && this.state.hasBeenExpanded) && _react2.default.createElement(
                'div',
                { className: 'children', style: styles.children },
                this.props.children
            );

            var className = 'tree-view ' + this.props.className;
            return _react2.default.createElement(
                'div',
                { className: className, style: (0, _extends3.default)({}, styles.tree, this.props.style) },
                label,
                children
            );
        }
    }]);
    return TreeView;
}(_react2.default.Component);

// TODO: Documentation


TreeView.propTypes = {
    label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
    model: _propTypes2.default.object,
    children: _propTypes2.default.node,
    persistent: _propTypes2.default.bool,
    initiallyExpanded: _propTypes2.default.bool,
    arrowSymbol: _propTypes2.default.node,
    style: _propTypes2.default.object,
    className: _propTypes2.default.string,
    onExpand: _propTypes2.default.func,
    onCollapse: _propTypes2.default.func,
    onClick: _propTypes2.default.func
};

TreeView.defaultProps = {
    persistent: false,
    initiallyExpanded: false,
    arrowSymbol: '▸',
    style: {}
};

exports.default = TreeView;
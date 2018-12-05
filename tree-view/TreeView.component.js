import _extends from 'babel-runtime/helpers/extends';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';

var TreeView = function (_React$Component) {
    _inherits(TreeView, _React$Component);

    function TreeView(props) {
        _classCallCheck(this, TreeView);

        var _this = _possibleConstructorReturn(this, (TreeView.__proto__ || _Object$getPrototypeOf(TreeView)).call(this, props));

        _this.state = {
            collapsed: !props.initiallyExpanded,
            hasBeenExpanded: props.initiallyExpanded
        };

        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    _createClass(TreeView, [{
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
                arrow: _extends({
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
                children: _extends({
                    position: 'relative',
                    marginLeft: 16,
                    height: this.state.collapsed ? 0 : 'inherit'
                }, this.props.style)
            };

            var label = React.createElement(
                'div',
                { style: styles.itemLabel },
                React.createElement(
                    'div',
                    {
                        className: 'arrow',
                        style: styles.arrow,
                        onClick: this.toggleCollapsed.bind(this)
                    },
                    React.createElement(
                        'div',
                        { style: styles.arrowSymbol },
                        this.props.arrowSymbol
                    )
                ),
                React.createElement(
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
            var children = (!this.state.collapsed || this.props.persistent && this.state.hasBeenExpanded) && React.createElement(
                'div',
                { className: 'children', style: styles.children },
                this.props.children
            );

            var className = 'tree-view ' + this.props.className;
            return React.createElement(
                'div',
                { className: className, style: _extends({}, styles.tree, this.props.style) },
                label,
                children
            );
        }
    }]);

    return TreeView;
}(React.Component);

// TODO: Documentation


TreeView.propTypes = {
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    model: PropTypes.object,
    children: PropTypes.node,
    persistent: PropTypes.bool,
    initiallyExpanded: PropTypes.bool,
    arrowSymbol: PropTypes.node,
    style: PropTypes.object,
    className: PropTypes.string,
    onExpand: PropTypes.func,
    onCollapse: PropTypes.func,
    onClick: PropTypes.func
};

TreeView.defaultProps = {
    persistent: false,
    initiallyExpanded: false,
    arrowSymbol: '▸',
    style: {}
};

export default TreeView;
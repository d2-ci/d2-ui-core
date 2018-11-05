import _Object$assign from 'babel-runtime/core-js/object/assign';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';

var styles = {
    container: {
        padding: '16px 32px 0 24px',
        position: 'relative',
        flex: 1
    },
    closeButton: {
        position: 'absolute',
        cursor: 'pointer',
        top: '2rem',
        right: '.75rem',
        fontSize: '1rem',
        color: '#AAA'
    },
    list: {
        paddingTop: 0,
        paddingBottom: 0,
        backgroundColor: 'transparent',
        marginTop: 16
    },
    item: {
        fontSize: 14,
        borderRadius: 5,
        margin: '0 8px'
    },
    activeItem: {
        fontSize: 14,
        fontWeight: 700,
        color: '#2196f3',
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        margin: '0 8px'
    },
    sidebar: {
        backgroundColor: '#f3f3f3',
        overflowY: 'auto',
        width: 295
    }
};

var Sidebar = function (_Component) {
    _inherits(Sidebar, _Component);

    function Sidebar() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Sidebar);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Sidebar.__proto__ || _Object$getPrototypeOf(Sidebar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            currentSection: _this.props.currentSection || _this.props.sections[0] && _this.props.sections[0].key,
            searchText: ''
        }, _this.changeSearchText = function () {
            _this.setState({ searchText: _this.searchBox.getValue() }, function () {
                if (_this.props.onChangeSearchText) {
                    _this.props.onChangeSearchText(_this.state.searchText);
                }
            });
        }, _this.onClear = function () {
            _this.setState({ searchText: '' }, function () {
                if (_this.props.onChangeSearchText) {
                    _this.props.onChangeSearchText(_this.state.searchText);
                }
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Sidebar, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            var _this2 = this;

            if (props.currentSection) {
                this.setState({ currentSection: props.currentSection });
            }

            if (props.searchText && props.searchText !== this.state.searchText) {
                this.setState({ searchText: props.searchText }, function () {
                    _this2.changeSearchText();
                });
            }
        }
    }, {
        key: 'setSection',
        value: function setSection(key) {
            // TODO: Refactor as this behavior is sort of silly. The current version of the SideBar with managed state should
            // probably be a HoC and a simpler version of the header bar should be available for more dynamic scenarios.
            this.props.onSectionClick(key);

            if (key !== this.state.currentSection) {
                this.setState({ currentSection: key });
                this.props.onChangeSection(key);
            }
        }
    }, {
        key: 'clearSearchBox',
        value: function clearSearchBox() {
            this.setState({ searchText: '' });
        }
    }, {
        key: 'renderSidebarButtons',
        value: function renderSidebarButtons() {
            if (this.props.sideBarButtons) {
                return React.createElement(
                    'div',
                    { style: { padding: '1rem 0 0' } },
                    this.props.sideBarButtons
                );
            }
            return null;
        }
    }, {
        key: 'renderSearchField',
        value: function renderSearchField() {
            var _this3 = this;

            if (this.props.showSearchField) {
                return React.createElement(
                    'div',
                    { style: styles.container },
                    React.createElement(TextField, {
                        hintText: this.props.searchFieldLabel,
                        style: { width: '100%' },
                        value: this.state.searchText,
                        onChange: this.changeSearchText,
                        ref: function ref(_ref2) {
                            _this3.searchBox = _ref2;
                        }
                    }),
                    this.state.searchText ? React.createElement(
                        FontIcon,
                        { style: styles.closeButton, className: 'material-icons', onClick: this.onClear },
                        'clear'
                    ) : undefined
                );
            }

            return null;
        }
    }, {
        key: 'renderSections',
        value: function renderSections() {
            var _this4 = this;

            return React.createElement(
                List,
                { style: styles.list },
                this.props.sections.map(function (section) {
                    var listItemStyle = section.key === _this4.state.currentSection && !_this4.state.searchText ? styles.activeItem : styles.item;
                    var icon = typeof section.icon === 'string' || section.icon instanceof String ? React.createElement(
                        FontIcon,
                        { className: 'material-icons' },
                        section.icon
                    ) : section.icon;

                    return React.createElement(ListItem, {
                        key: section.key,
                        primaryText: section.label,
                        onClick: _this4.setSection.bind(_this4, section.key),
                        style: listItemStyle,
                        leftIcon: icon,
                        containerElement: section.containerElement
                    });
                })
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { style: _Object$assign(styles.sidebar, this.props.styles.leftBar), className: 'left-bar' },
                this.renderSidebarButtons(),
                this.renderSearchField(),
                this.renderSections()
            );
        }
    }]);

    return Sidebar;
}(Component);

Sidebar.propTypes = {
    sections: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string,
        label: PropTypes.string,
        containerElement: PropTypes.object,
        icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    })).isRequired,
    currentSection: PropTypes.string,
    onChangeSection: PropTypes.func,
    onSectionClick: PropTypes.func,
    showSearchField: PropTypes.bool,
    searchFieldLabel: PropTypes.string,
    onChangeSearchText: PropTypes.func,
    sideBarButtons: PropTypes.element,
    styles: PropTypes.shape({
        leftBar: PropTypes.object
    })
};

Sidebar.contextTypes = {
    muiTheme: PropTypes.object
};

Sidebar.defaultProps = {
    showSearchField: false,
    styles: {
        leftBar: {}
    },
    onSectionClick: function onSectionClick() {}
};

export default Sidebar;
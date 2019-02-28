'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

var _List = require('material-ui/List/List');

var _List2 = _interopRequireDefault(_List);

var _ListItem = require('material-ui/List/ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _FontIcon = require('material-ui/FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    (0, _inherits3.default)(Sidebar, _Component);

    function Sidebar() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Sidebar);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Sidebar.__proto__ || (0, _getPrototypeOf2.default)(Sidebar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
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
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Sidebar, [{
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
                return _react2.default.createElement(
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
                return _react2.default.createElement(
                    'div',
                    { style: styles.container },
                    _react2.default.createElement(_TextField2.default, {
                        hintText: this.props.searchFieldLabel,
                        style: { width: '100%' },
                        value: this.state.searchText,
                        onChange: this.changeSearchText,
                        ref: function ref(_ref2) {
                            _this3.searchBox = _ref2;
                        }
                    }),
                    this.state.searchText ? _react2.default.createElement(
                        _FontIcon2.default,
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

            return _react2.default.createElement(
                _List2.default,
                { style: styles.list },
                this.props.sections.map(function (section) {
                    var listItemStyle = section.key === _this4.state.currentSection && !_this4.state.searchText ? styles.activeItem : styles.item;
                    var icon = typeof section.icon === 'string' || section.icon instanceof String ? _react2.default.createElement(
                        _FontIcon2.default,
                        { className: 'material-icons' },
                        section.icon
                    ) : section.icon;

                    return _react2.default.createElement(_ListItem2.default, {
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
            return _react2.default.createElement(
                'div',
                { style: (0, _assign2.default)(styles.sidebar, this.props.styles.leftBar), className: 'left-bar' },
                this.renderSidebarButtons(),
                this.renderSearchField(),
                this.renderSections()
            );
        }
    }]);
    return Sidebar;
}(_react.Component);

Sidebar.propTypes = {
    sections: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        key: _propTypes2.default.string,
        label: _propTypes2.default.string,
        containerElement: _propTypes2.default.object,
        icon: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element])
    })).isRequired,
    currentSection: _propTypes2.default.string,
    onChangeSection: _propTypes2.default.func,
    onSectionClick: _propTypes2.default.func,
    showSearchField: _propTypes2.default.bool,
    searchFieldLabel: _propTypes2.default.string,
    onChangeSearchText: _propTypes2.default.func,
    sideBarButtons: _propTypes2.default.element,
    styles: _propTypes2.default.shape({
        leftBar: _propTypes2.default.object
    })
};

Sidebar.contextTypes = {
    muiTheme: _propTypes2.default.object
};

Sidebar.defaultProps = {
    showSearchField: false,
    styles: {
        leftBar: {}
    },
    onSectionClick: function onSectionClick() {}
};

exports.default = Sidebar;
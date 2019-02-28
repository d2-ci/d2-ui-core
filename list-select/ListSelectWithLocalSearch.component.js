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

var _TextField = require('material-ui/TextField/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _ListSelect = require('../list-select/ListSelect.component');

var _ListSelect2 = _interopRequireDefault(_ListSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
    list: {
        width: '100%',
        outline: 'none',
        border: 'none',
        padding: '0rem 1rem',
        overflowX: 'auto'
    },
    textField: {
        marginLeft: '1rem',
        marginBottom: '11px'
    }
};

var ListSelectWithLocalSearch = function (_Component) {
    (0, _inherits3.default)(ListSelectWithLocalSearch, _Component);

    function ListSelectWithLocalSearch(props) {
        (0, _classCallCheck3.default)(this, ListSelectWithLocalSearch);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ListSelectWithLocalSearch.__proto__ || (0, _getPrototypeOf2.default)(ListSelectWithLocalSearch)).call(this, props));

        _this.filterList = function (event) {
            _this.setState({
                textSearch: event.target.value
            });
        };

        _this.state = {
            textSearch: ''
        };
        return _this;
    }

    (0, _createClass3.default)(ListSelectWithLocalSearch, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_TextField2.default, {
                    style: styles.textField,
                    hintText: this.props.hintLabel,
                    onChange: this.filterList,
                    value: this.state.textSearch
                }),
                _react2.default.createElement(_ListSelect2.default, (0, _extends3.default)({}, this.props, {
                    listStyle: styles.list,
                    source: this.props.source.filter(function (option) {
                        return option.label.toLowerCase().indexOf(_this2.state.textSearch.toLowerCase()) !== -1;
                    }),
                    size: 12
                }))
            );
        }
    }]);
    return ListSelectWithLocalSearch;
}(_react.Component);

ListSelectWithLocalSearch.propTypes = {
    source: _propTypes2.default.array.isRequired,
    hintLabel: _propTypes2.default.string
};

ListSelectWithLocalSearch.defaultProps = {
    source: [],
    hintLabel: ''
};

exports.default = ListSelectWithLocalSearch;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _materialUi = require('material-ui');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DatePicker = function (_React$Component) {
    (0, _inherits3.default)(DatePicker, _React$Component);

    function DatePicker(props) {
        (0, _classCallCheck3.default)(this, DatePicker);

        var _this = (0, _possibleConstructorReturn3.default)(this, (DatePicker.__proto__ || (0, _getPrototypeOf2.default)(DatePicker)).call(this, props));

        _this.onDateSelect = _this.onDateSelect.bind(_this);
        _this.formatDate = _this.formatDate.bind(_this);
        _this.state = { value: _this.props.value };
        return _this;
    }

    (0, _createClass3.default)(DatePicker, [{
        key: 'onDateSelect',
        value: function onDateSelect(event, date) {
            this.setState({ value: date });
            this.props.onChange({
                target: {
                    value: date
                }
            });
        }
    }, {
        key: 'formatDate',
        value: function formatDate(date) {
            var dd = date.getDate();
            var mm = date.getMonth() + 1;
            var yyyy = date.getFullYear();
            if (dd < 10) {
                dd = '0' + dd;
            }
            if (mm < 10) {
                mm = '0' + mm;
            }

            switch (this.dateFormat) {
                case 'dd-MM-yyyy':
                    return dd + '-' + mm + '-' + yyyy;
                case 'yyyy-MM-dd':
                    return yyyy + '-' + mm + '-' + dd;
                default:
                    return dd + '-' + mm + '-' + yyyy;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                allowFuture = _props.allowFuture,
                dateFormat = _props.dateFormat,
                other = (0, _objectWithoutProperties3.default)(_props, ['allowFuture', 'dateFormat']);

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_materialUi.DatePicker, (0, _extends3.default)({}, other, {
                    value: this.state.value,
                    floatingLabelText: this.props.floatingLabelText,
                    maxDate: allowFuture ? undefined : new Date(),
                    errorText: this.props.errorText,
                    formatDate: this.formatDate,
                    onChange: this.onDateSelect
                }))
            );
        }
    }]);
    return DatePicker;
}(_react2.default.Component);

DatePicker.propTypes = {
    floatingLabelText: _propTypes2.default.string.isRequired,
    onChange: _propTypes2.default.func.isRequired,
    errorText: _propTypes2.default.string,
    dateFormat: _propTypes2.default.oneOf(['dd-MM-yyyy', 'yyyy-MM-dd']),
    allowFuture: _propTypes2.default.bool,
    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object])
};

DatePicker.defaultProps = {
    errorText: '',
    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
    dateFormat: 'dd-MM-yyyy',
    allowFuture: false
};

exports.default = DatePicker;
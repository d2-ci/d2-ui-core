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

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextField = function (_Component) {
    (0, _inherits3.default)(TextField, _Component);

    function TextField(props) {
        (0, _classCallCheck3.default)(this, TextField);

        var _this = (0, _possibleConstructorReturn3.default)(this, (TextField.__proto__ || (0, _getPrototypeOf2.default)(TextField)).call(this, props));

        _this.change = function (e, value) {
            _this.setState({ value: value });
        };

        _this.state = {
            value: _this.props.value
        };
        return _this;
    }

    (0, _createClass3.default)(TextField, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            this.setState({ value: props.value });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                changeEvent = _props.changeEvent,
                other = (0, _objectWithoutProperties3.default)(_props, ['changeEvent']);


            var errorStyle = {
                lineHeight: this.props.multiLine ? '48px' : '12px',
                marginTop: this.props.multiLine ? -16 : 0
            };

            var inputStyle = other.type === 'search' ? { WebkitAppearance: 'textfield' } : {};

            return _react2.default.createElement(_TextField2.default, (0, _extends3.default)({
                errorStyle: errorStyle
            }, other, {
                value: this.state.value,
                onChange: this.change,
                inputStyle: inputStyle
            }));
        }
    }]);
    return TextField;
}(_react.Component);

TextField.propTypes = {
    changeEvent: _propTypes2.default.any,
    value: _propTypes2.default.string,
    multiLine: _propTypes2.default.bool
};

TextField.defaultProps = {
    changeEvent: 'onBlur',
    value: '',
    multiLine: false
};

exports.default = TextField;
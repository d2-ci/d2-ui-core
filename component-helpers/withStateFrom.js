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

exports.default = withStateFrom;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _loglevel = require('loglevel');

var _loglevel2 = _interopRequireDefault(_loglevel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function withStateFrom(stateSource$, BaseComponent) {
    var withStateForm = function (_Component) {
        (0, _inherits3.default)(withStateForm, _Component);

        function withStateForm() {
            (0, _classCallCheck3.default)(this, withStateForm);
            return (0, _possibleConstructorReturn3.default)(this, (withStateForm.__proto__ || (0, _getPrototypeOf2.default)(withStateForm)).apply(this, arguments));
        }

        (0, _createClass3.default)(withStateForm, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                var _this2 = this;

                this.disposable = stateSource$.subscribe(function (state) {
                    return _this2.setState(state);
                }, function (error) {
                    return _loglevel2.default.error(error);
                });
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                this.disposable && this.disposable.unsubscribe && this.disposable.unsubscribe();
            }
        }, {
            key: 'render',
            value: function render() {
                return _react2.default.createElement(BaseComponent, (0, _extends3.default)({}, this.state, this.props));
            }
        }]);
        return withStateForm;
    }(_react.Component);

    withStateForm.displayName = BaseComponent.displayName || BaseComponent.name;

    return withStateForm;
}
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

exports.default = withPropsFromObservable;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _loglevel = require('loglevel');

var _loglevel2 = _interopRequireDefault(_loglevel);

var _getDisplayName = require('recompose/getDisplayName');

var _getDisplayName2 = _interopRequireDefault(_getDisplayName);

var _CircularProgress = require('../circular-progress/CircularProgress');

var _CircularProgress2 = _interopRequireDefault(_CircularProgress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function withPropsFromObservable(observable, BaseComponent) {
    var WithPropsFromComponent = function (_Component) {
        (0, _inherits3.default)(WithPropsFromComponent, _Component);

        function WithPropsFromComponent(props, context) {
            (0, _classCallCheck3.default)(this, WithPropsFromComponent);

            var _this = (0, _possibleConstructorReturn3.default)(this, (WithPropsFromComponent.__proto__ || (0, _getPrototypeOf2.default)(WithPropsFromComponent)).call(this, props, context));

            _this.state = {
                isLoading: true
            };
            return _this;
        }

        (0, _createClass3.default)(WithPropsFromComponent, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                var _this2 = this;

                this.disposable = observable.subscribe(function (props) {
                    return _this2.setState((0, _extends3.default)({ isLoading: false }, props));
                }, function (error) {
                    _loglevel2.default.error('Failed to receive props for ' + BaseComponent.displayName);_loglevel2.default.error(error);
                });
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                if (this.disposable && this.disposable.unsubscribe) {
                    this.disposable.unsubscribe();
                }
            }
        }, {
            key: 'render',
            value: function render() {
                var _state = this.state,
                    isLoading = _state.isLoading,
                    componentProps = (0, _objectWithoutProperties3.default)(_state, ['isLoading']);


                if (this.state.isLoading) {
                    return _react2.default.createElement(_CircularProgress2.default, null);
                }

                return _react2.default.createElement(BaseComponent, (0, _extends3.default)({}, componentProps, this.props));
            }
        }]);
        return WithPropsFromComponent;
    }(_react.Component);

    WithPropsFromComponent.displayName = 'withPropsFrom(' + (0, _getDisplayName2.default)(BaseComponent) + ')';

    return WithPropsFromComponent;
}
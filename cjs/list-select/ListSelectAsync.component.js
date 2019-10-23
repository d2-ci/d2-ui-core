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

var _Observable = require('rxjs/Observable');

var _loglevel = require('loglevel');

var _loglevel2 = _interopRequireDefault(_loglevel);

var _ListSelect = require('./ListSelect.component');

var _ListSelect2 = _interopRequireDefault(_ListSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListSelectAsync = function (_Component) {
    (0, _inherits3.default)(ListSelectAsync, _Component);

    function ListSelectAsync() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, ListSelectAsync);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ListSelectAsync.__proto__ || (0, _getPrototypeOf2.default)(ListSelectAsync)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            listSource: []
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(ListSelectAsync, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            if (!this.props.source) {
                return;
            }

            this.subscription = this.props.source.subscribe(function (listValues) {
                return _this2.setState({ listSource: listValues });
            }, function (error) {
                return _loglevel2.default.error(error);
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.subscription && this.subscription.unsubscribe();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_ListSelect2.default, (0, _extends3.default)({}, this.props, {
                onItemDoubleClick: this.props.onItemDoubleClick,
                source: this.state.listSource,
                listStyle: this.props.listStyle
            }));
        }
    }]);
    return ListSelectAsync;
}(_react.Component);

ListSelectAsync.propTypes = {
    source: _propTypes2.default.instanceOf(_Observable.Observable),
    onItemDoubleClick: _propTypes2.default.func.isRequired,
    listStyle: _propTypes2.default.object
};

exports.default = ListSelectAsync;
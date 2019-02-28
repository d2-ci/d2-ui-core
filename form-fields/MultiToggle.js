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

var _Checkbox = require('material-ui/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MultiToggle = function (_Component) {
    (0, _inherits3.default)(MultiToggle, _Component);

    function MultiToggle() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, MultiToggle);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MultiToggle.__proto__ || (0, _getPrototypeOf2.default)(MultiToggle)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            values: _this.props.items.reduce(function (prev, curr) {
                if (curr.value) {
                    prev.push(curr.name);
                }
                return prev;
            }, [])
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(MultiToggle, [{
        key: 'handleToggle',
        value: function handleToggle(value, event, checked) {
            var _this2 = this;

            this.setState(function (oldState) {
                if (checked) {
                    if (oldState.values.indexOf(value) === -1) {
                        oldState.values.push(value);
                    }
                } else if (oldState.values.indexOf(value) !== -1) {
                    oldState.values.splice(oldState.values.indexOf(value), 1);
                }
                return oldState;
            }, function () {
                _this2.props.onChange({ target: { value: _this2.state.values } });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var style = (0, _assign2.default)({}, this.context.muiTheme.forms, this.props.style);

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { style: { marginTop: 16, marginBottom: 8 } },
                    this.props.label
                ),
                this.props.items.map(function (item) {
                    var togglor = _this3.handleToggle.bind(_this3, item.name);

                    return _react2.default.createElement(_Checkbox2.default, {
                        key: item.name,
                        name: item.name,
                        value: 'true',
                        defaultChecked: item.value === true,
                        label: item.text,
                        onCheck: togglor,
                        style: style,
                        labelPosition: 'right'
                    });
                })
            );
        }
    }]);
    return MultiToggle;
}(_react.Component);

// Material UI


MultiToggle.propTypes = {
    label: _propTypes2.default.string.isRequired,
    onChange: _propTypes2.default.func.isRequired,
    items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        name: _propTypes2.default.string.isRequired,
        value: _propTypes2.default.bool,
        text: _propTypes2.default.string.isRequired
    })),
    style: _propTypes2.default.object
};

MultiToggle.contextTypes = {
    muiTheme: _propTypes2.default.object
};

exports.default = MultiToggle;
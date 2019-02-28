'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _theme = require('../theme/theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var D2UIApp = function (_Component) {
    (0, _inherits3.default)(D2UIApp, _Component);

    function D2UIApp() {
        (0, _classCallCheck3.default)(this, D2UIApp);
        return (0, _possibleConstructorReturn3.default)(this, (D2UIApp.__proto__ || (0, _getPrototypeOf2.default)(D2UIApp)).apply(this, arguments));
    }

    (0, _createClass3.default)(D2UIApp, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _MuiThemeProvider2.default,
                { muiTheme: this.props.muiTheme },
                _react2.default.createElement(
                    'div',
                    null,
                    this.props.children
                )
            );
        }
    }]);
    return D2UIApp;
}(_react.Component);

D2UIApp.propTypes = {
    muiTheme: _propTypes2.default.object,
    children: _propTypes2.default.node
};

D2UIApp.defaultProps = {
    muiTheme: (0, _getMuiTheme2.default)(_theme2.default)
};

exports.default = D2UIApp;
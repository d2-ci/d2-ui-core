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

var _materialUi = require('material-ui');

var _FontIcon = require('material-ui/FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _FeedbackSnackbarTypes = require('../FeedbackSnackbarTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '15px'
    },
    icon: {
        color: '#ffffff',
        marginLeft: '15px'
    }
};

var FeedbackSnackbarBody = function (_PureComponent) {
    (0, _inherits3.default)(FeedbackSnackbarBody, _PureComponent);

    function FeedbackSnackbarBody() {
        (0, _classCallCheck3.default)(this, FeedbackSnackbarBody);
        return (0, _possibleConstructorReturn3.default)(this, (FeedbackSnackbarBody.__proto__ || (0, _getPrototypeOf2.default)(FeedbackSnackbarBody)).apply(this, arguments));
    }

    (0, _createClass3.default)(FeedbackSnackbarBody, [{
        key: 'render',
        value: function render() {
            var icon = void 0;
            switch (this.props.type) {
                case _FeedbackSnackbarTypes.SUCCESS:
                    icon = _react2.default.createElement(
                        _FontIcon2.default,
                        { className: 'material-icons', style: styles.icon },
                        'done'
                    );
                    break;
                case _FeedbackSnackbarTypes.LOADING:
                    icon = _react2.default.createElement(_materialUi.CircularProgress, { style: styles.icon, color: '#ffffff', size: 28, thickness: 2 });
                    break;
                case _FeedbackSnackbarTypes.ERROR:
                    icon = _react2.default.createElement(
                        _FontIcon2.default,
                        { className: 'material-icons', style: styles.icon },
                        'error'
                    );
                    break;
                default:
                    icon = _react2.default.createElement(
                        _FontIcon2.default,
                        { className: 'material-icons', style: styles.icon },
                        'warning'
                    );
                    break;
            }
            var snackBarContent = _react2.default.createElement(
                'div',
                { style: styles.content },
                _react2.default.createElement(
                    'div',
                    null,
                    this.props.message
                ),
                icon
            );
            return snackBarContent;
        }
    }]);
    return FeedbackSnackbarBody;
}(_react.PureComponent);

FeedbackSnackbarBody.propTypes = {
    type: _propTypes2.default.string,
    message: _propTypes2.default.string
};
FeedbackSnackbarBody.defaultProps = {
    type: '',
    message: ''
};
exports.default = FeedbackSnackbarBody;
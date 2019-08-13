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

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _materialUi = require('material-ui');

var _FeedbackSnackbarTypes = require('./FeedbackSnackbarTypes');

var _FeedbackSnackbarBody = require('./feedback-snackbar-body/FeedbackSnackbarBody.component');

var _FeedbackSnackbarBody2 = _interopRequireDefault(_FeedbackSnackbarBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
    success: {
        backgroundColor: '#8ac542'
    },
    warning: {
        backgroundColor: '#ffa726'
    },
    error: {
        backgroundColor: '#f44336'
    },
    loading: {
        backgroundColor: '#757575'
    }
};

var FeedbackSnackbar = function (_PureComponent) {
    (0, _inherits3.default)(FeedbackSnackbar, _PureComponent);
    (0, _createClass3.default)(FeedbackSnackbar, null, [{
        key: 'getStyle',
        value: function getStyle(type) {
            switch (type) {
                case _FeedbackSnackbarTypes.SUCCESS:
                    return styles.success;
                case _FeedbackSnackbarTypes.LOADING:
                    return styles.loading;
                case _FeedbackSnackbarTypes.ERROR:
                    return styles.error;
                case _FeedbackSnackbarTypes.WARNING:
                    return styles.warning;
                default:
                    return null;
            }
        }
    }]);

    function FeedbackSnackbar(props) {
        (0, _classCallCheck3.default)(this, FeedbackSnackbar);

        var _this = (0, _possibleConstructorReturn3.default)(this, (FeedbackSnackbar.__proto__ || (0, _getPrototypeOf2.default)(FeedbackSnackbar)).call(this, props));

        _this.handleRequestClose = function () {
            if (_this.props.conf.type !== _FeedbackSnackbarTypes.LOADING) {
                _this.setState({
                    show: false
                });

                if (_this.props.onClose) {
                    _this.props.onClose();
                }
            }
        };

        _this.state = {
            show: props.show,
            conf: props.conf
        };
        return _this;
    }

    (0, _createClass3.default)(FeedbackSnackbar, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _this2 = this;

            var newProps = (0, _assign2.default)({}, nextProps);

            if (typeof this.state.snackbarTimerId !== 'undefined') {
                clearTimeout(this.state.snackbarTimerId);
            }

            // Hack to hide previous snackbar before changing its style
            if (this.props.show && newProps.show) {
                var newShow = nextProps.show;
                var newConf = nextProps.conf;
                newProps.show = false;
                newProps.conf = this.props.conf;
                this.state.snackbarTimerId = setTimeout(function () {
                    _this2.setState({
                        show: newShow,
                        conf: newConf
                    });
                }, 500);
            }

            this.setState({
                show: newProps.show,
                conf: newProps.conf
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var snackBarContent = this.state.conf.type === _FeedbackSnackbarTypes.ACTION_MESSAGE ? this.state.conf.message : _react2.default.createElement(_FeedbackSnackbarBody2.default, { type: this.state.conf.type, message: this.state.conf.message });

            return _react2.default.createElement(_materialUi.Snackbar, {
                action: this.state.conf.action,
                onActionClick: this.state.conf.onActionClick,
                open: this.state.show,
                message: snackBarContent,
                onRequestClose: this.handleRequestClose,
                bodyStyle: FeedbackSnackbar.getStyle(this.state.conf.type)
            });
        }
    }]);
    return FeedbackSnackbar;
}(_react.PureComponent);

FeedbackSnackbar.propTypes = {
    show: _propTypes2.default.bool.isRequired,
    conf: _propTypes2.default.shape({
        type: _propTypes2.default.string,
        message: _propTypes2.default.string,
        action: _propTypes2.default.string,
        onActionClick: _propTypes2.default.func
    }),
    onClose: _propTypes2.default.func
};
FeedbackSnackbar.defaultProps = {
    conf: {
        type: '',
        message: '',
        action: '',
        onActionClick: null
    },
    onClose: null
};
exports.default = FeedbackSnackbar;
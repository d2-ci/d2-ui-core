import _Object$assign from 'babel-runtime/core-js/object/assign';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _createClass from 'babel-runtime/helpers/createClass';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Snackbar } from 'material-ui';

import { ACTION_MESSAGE, ERROR, LOADING, SUCCESS, WARNING } from './FeedbackSnackbarTypes';
import FeedbackSnackbarBody from './feedback-snackbar-body/FeedbackSnackbarBody.component';

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
    _inherits(FeedbackSnackbar, _PureComponent);

    _createClass(FeedbackSnackbar, null, [{
        key: 'getStyle',
        value: function getStyle(type) {
            switch (type) {
                case SUCCESS:
                    return styles.success;
                case LOADING:
                    return styles.loading;
                case ERROR:
                    return styles.error;
                case WARNING:
                    return styles.warning;
                default:
                    return null;
            }
        }
    }]);

    function FeedbackSnackbar(props) {
        _classCallCheck(this, FeedbackSnackbar);

        var _this = _possibleConstructorReturn(this, (FeedbackSnackbar.__proto__ || _Object$getPrototypeOf(FeedbackSnackbar)).call(this, props));

        _this.handleRequestClose = function () {
            if (_this.props.conf.type !== LOADING) {
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

    _createClass(FeedbackSnackbar, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _this2 = this;

            var newProps = _Object$assign({}, nextProps);

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
            var snackBarContent = this.state.conf.type === ACTION_MESSAGE ? this.state.conf.message : React.createElement(FeedbackSnackbarBody, { type: this.state.conf.type, message: this.state.conf.message });

            return React.createElement(Snackbar, {
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
}(PureComponent);

FeedbackSnackbar.propTypes = {
    show: PropTypes.bool.isRequired,
    conf: PropTypes.shape({
        type: PropTypes.string,
        message: PropTypes.string,
        action: PropTypes.string,
        onActionClick: PropTypes.func
    }),
    onClose: PropTypes.func
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


export default FeedbackSnackbar;
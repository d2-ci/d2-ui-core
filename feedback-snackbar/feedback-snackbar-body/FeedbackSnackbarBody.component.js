import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from 'material-ui';
import FontIcon from 'material-ui/FontIcon';

import { ERROR, LOADING, SUCCESS } from '../FeedbackSnackbarTypes';

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
    _inherits(FeedbackSnackbarBody, _PureComponent);

    function FeedbackSnackbarBody() {
        _classCallCheck(this, FeedbackSnackbarBody);

        return _possibleConstructorReturn(this, (FeedbackSnackbarBody.__proto__ || _Object$getPrototypeOf(FeedbackSnackbarBody)).apply(this, arguments));
    }

    _createClass(FeedbackSnackbarBody, [{
        key: 'render',
        value: function render() {
            var icon = void 0;
            switch (this.props.type) {
                case SUCCESS:
                    icon = React.createElement(
                        FontIcon,
                        { className: 'material-icons', style: styles.icon },
                        'done'
                    );
                    break;
                case LOADING:
                    icon = React.createElement(CircularProgress, { style: styles.icon, color: '#ffffff', size: 28, thickness: 2 });
                    break;
                case ERROR:
                    icon = React.createElement(
                        FontIcon,
                        { className: 'material-icons', style: styles.icon },
                        'error'
                    );
                    break;
                default:
                    icon = React.createElement(
                        FontIcon,
                        { className: 'material-icons', style: styles.icon },
                        'warning'
                    );
                    break;
            }
            var snackBarContent = React.createElement(
                'div',
                { style: styles.content },
                React.createElement(
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
}(PureComponent);

FeedbackSnackbarBody.propTypes = {
    type: PropTypes.string,
    message: PropTypes.string
};
FeedbackSnackbarBody.defaultProps = {
    type: '',
    message: ''
};


export default FeedbackSnackbarBody;
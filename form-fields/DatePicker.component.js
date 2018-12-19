import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';

import { DatePicker as MuiDatePicker } from 'material-ui';

var DatePicker = function (_React$Component) {
    _inherits(DatePicker, _React$Component);

    function DatePicker(props) {
        _classCallCheck(this, DatePicker);

        var _this = _possibleConstructorReturn(this, (DatePicker.__proto__ || _Object$getPrototypeOf(DatePicker)).call(this, props));

        _this.onDateSelect = _this.onDateSelect.bind(_this);
        _this.formatDate = _this.formatDate.bind(_this);
        _this.state = { value: _this.props.value };
        return _this;
    }

    _createClass(DatePicker, [{
        key: 'onDateSelect',
        value: function onDateSelect(event, date) {
            this.setState({ value: date });
            this.props.onChange({
                target: {
                    value: date
                }
            });
        }
    }, {
        key: 'formatDate',
        value: function formatDate(date) {
            var dd = date.getDate();
            var mm = date.getMonth() + 1;
            var yyyy = date.getFullYear();
            if (dd < 10) {
                dd = '0' + dd;
            }
            if (mm < 10) {
                mm = '0' + mm;
            }

            switch (this.dateFormat) {
                case 'dd-MM-yyyy':
                    return dd + '-' + mm + '-' + yyyy;
                case 'yyyy-MM-dd':
                    return yyyy + '-' + mm + '-' + dd;
                default:
                    return dd + '-' + mm + '-' + yyyy;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                allowFuture = _props.allowFuture,
                dateFormat = _props.dateFormat,
                other = _objectWithoutProperties(_props, ['allowFuture', 'dateFormat']);

            return React.createElement(
                'div',
                null,
                React.createElement(MuiDatePicker, _extends({}, other, {
                    value: this.state.value,
                    floatingLabelText: this.props.floatingLabelText,
                    maxDate: allowFuture ? undefined : new Date(),
                    errorText: this.props.errorText,
                    formatDate: this.formatDate,
                    onChange: this.onDateSelect
                }))
            );
        }
    }]);

    return DatePicker;
}(React.Component);

DatePicker.propTypes = {
    floatingLabelText: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    errorText: PropTypes.string,
    dateFormat: PropTypes.oneOf(['dd-MM-yyyy', 'yyyy-MM-dd']),
    allowFuture: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

DatePicker.defaultProps = {
    errorText: '',
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    dateFormat: 'dd-MM-yyyy',
    allowFuture: false
};

export default DatePicker;
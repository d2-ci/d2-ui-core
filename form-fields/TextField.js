import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiTextField from 'material-ui/TextField';

var TextField = function (_Component) {
    _inherits(TextField, _Component);

    function TextField(props) {
        _classCallCheck(this, TextField);

        var _this = _possibleConstructorReturn(this, (TextField.__proto__ || _Object$getPrototypeOf(TextField)).call(this, props));

        _this.change = function (e, value) {
            _this.setState({ value: value });
        };

        _this.state = {
            value: _this.props.value
        };
        return _this;
    }

    _createClass(TextField, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            this.setState({ value: props.value });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                changeEvent = _props.changeEvent,
                other = _objectWithoutProperties(_props, ['changeEvent']);

            var errorStyle = {
                lineHeight: this.props.multiLine ? '48px' : '12px',
                marginTop: this.props.multiLine ? -16 : 0
            };

            var inputStyle = other.type === 'search' ? { WebkitAppearance: 'textfield' } : {};

            return React.createElement(MuiTextField, _extends({
                errorStyle: errorStyle
            }, other, {
                value: this.state.value,
                onChange: this.change,
                inputStyle: inputStyle
            }));
        }
    }]);

    return TextField;
}(Component);

TextField.propTypes = {
    changeEvent: PropTypes.any,
    value: PropTypes.string,
    multiLine: PropTypes.bool
};

TextField.defaultProps = {
    changeEvent: 'onBlur',
    value: '',
    multiLine: false
};

export default TextField;
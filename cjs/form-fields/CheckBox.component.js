'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Checkbox = require('material-ui/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckBox = function CheckBox(_ref) {
    var onChange = _ref.onChange,
        wrapperStyle = _ref.wrapperStyle,
        errorStyle = _ref.errorStyle,
        errorText = _ref.errorText,
        other = (0, _objectWithoutProperties3.default)(_ref, ['onChange', 'wrapperStyle', 'errorStyle', 'errorText']);

    var baseWrapperStyle = { marginTop: 12, marginBottom: 12 };
    var mergedWrapperStyle = (0, _extends3.default)({}, baseWrapperStyle, wrapperStyle);
    return _react2.default.createElement(
        'div',
        { style: mergedWrapperStyle },
        _react2.default.createElement(_Checkbox2.default, (0, _extends3.default)({ onCheck: onChange }, other))
    );
};

CheckBox.propTypes = {
    wrapperStyle: _propTypes2.default.object,
    errorStyle: _propTypes2.default.object,
    errorText: _propTypes2.default.string,
    onChange: _propTypes2.default.func.isRequired
};

CheckBox.defaultProps = {
    wrapperStyle: {},
    errorStyle: {},
    errorText: ''
};

exports.default = CheckBox;
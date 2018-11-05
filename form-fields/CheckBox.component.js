import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'material-ui/Checkbox';

var CheckBox = function CheckBox(_ref) {
    var onChange = _ref.onChange,
        wrapperStyle = _ref.wrapperStyle,
        errorStyle = _ref.errorStyle,
        errorText = _ref.errorText,
        other = _objectWithoutProperties(_ref, ['onChange', 'wrapperStyle', 'errorStyle', 'errorText']);

    var baseWrapperStyle = { marginTop: 12, marginBottom: 12 };
    var mergedWrapperStyle = _extends({}, baseWrapperStyle, wrapperStyle);
    return React.createElement(
        'div',
        { style: mergedWrapperStyle },
        React.createElement(Checkbox, _extends({ onCheck: onChange }, other))
    );
};

CheckBox.propTypes = {
    wrapperStyle: PropTypes.object,
    errorStyle: PropTypes.object,
    errorText: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

CheckBox.defaultProps = {
    wrapperStyle: {},
    errorStyle: {},
    errorText: ''
};

export default CheckBox;
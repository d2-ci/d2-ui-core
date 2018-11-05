import _Object$assign from 'babel-runtime/core-js/object/assign';
import PropTypes from 'prop-types';
import React from 'react';

var defaultStyle = {
    padding: '0.5rem 0'
};

export default function Message(_ref) {
    var propsStyle = _ref.style,
        message = _ref.message;

    var style = _Object$assign({}, defaultStyle, propsStyle);

    return React.createElement(
        'div',
        { style: style },
        message
    );
}
Message.propTypes = {
    style: PropTypes.object,
    message: PropTypes.string
};
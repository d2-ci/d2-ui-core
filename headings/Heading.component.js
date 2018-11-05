import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React from 'react';
import PropTypes from 'prop-types';

function Heading(props) {
    var level = props.level,
        text = props.text,
        style = props.style,
        children = props.children,
        other = _objectWithoutProperties(props, ['level', 'text', 'style', 'children']);

    var tag = { type: level <= 6 ? 'h' + level : 'span' };
    var headingStyle = _extends({
        fontSize: 24,
        fontWeight: 300,
        color: 'rgba(0, 0, 0, 0.87)',
        padding: '16px 0 5px 0',
        margin: 0
    }, style);

    return React.createElement(
        tag.type,
        _extends({}, other, { style: headingStyle }),
        children || text
    );
}

Heading.propTypes = {
    level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
    text: PropTypes.string
};

Heading.defaultProps = {
    level: 1
};

export default Heading;
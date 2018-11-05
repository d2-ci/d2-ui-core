import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React from 'react';
import PropTypes from 'prop-types';
import { isArray } from 'lodash/fp';
import log from 'loglevel';

function SinglePanel(props) {
    var children = props.children,
        mainStyle = props.mainStyle,
        otherProps = _objectWithoutProperties(props, ['children', 'mainStyle']);

    var mergedMainStyle = _extends({
        flex: 1,
        display: 'flex',
        flexOrientation: 'row',
        marginTop: '8rem',
        marginLeft: '2rem',
        marginRight: '2rem'
    }, mainStyle);

    var childToRender = void 0;
    if (isArray(children) && children.length) {
        childToRender = children[0];
        log.warn('You passed multiple children to the <SinglePanel /> component, this is not supported');
    } else {
        childToRender = children;
    }

    return React.createElement(
        'main',
        _extends({ style: mergedMainStyle }, otherProps),
        childToRender
    );
}

SinglePanel.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    mainStyle: PropTypes.object
};

SinglePanel.defaultProps = {
    mainStyle: {},
    children: null
};

export default SinglePanel;
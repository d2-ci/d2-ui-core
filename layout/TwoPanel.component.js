import _Object$assign from 'babel-runtime/core-js/object/assign';
import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React from 'react';
import PropTypes from 'prop-types';
import { isArray } from 'lodash/fp';
import log from 'loglevel';

function TwoPanelSelector(props) {
    var children = props.children,
        childWrapStyle = props.childWrapStyle,
        mainStyle = props.mainStyle,
        sizeRatio = props.sizeRatio,
        otherProps = _objectWithoutProperties(props, ['children', 'childWrapStyle', 'mainStyle', 'sizeRatio']);

    var mergedMainStyle = _extends({
        flex: 1,
        display: 'flex',
        flexOrientation: 'row',
        marginTop: '8rem'
    }, mainStyle);

    var childrenToRender = void 0;

    if (isArray(children)) {
        // More than two children defeats the purpose of a two panel layout and was probably not what the
        // user of the component intended to do.
        if (children.length > 2) {
            log.warn('You passed more than two children to the <TwoPanel /> component, it requires exactly two');
        }

        // We will always only render two children even when more are passed.
        childrenToRender = children.slice(0, 2);
    } else {
        // Just a single child was passed, log a warning because this will only fill the left bar with content.
        // And it was probably not what the user intended to do.
        log.warn('You passed just one child to the <TwoPanel /> component, it requires exactly two');
        childrenToRender = [children];
    }

    var flexedChilden = childrenToRender.map(function (childComponent, index) {
        var childStyle = _Object$assign({}, childWrapStyle, {
            flex: sizeRatio[index],
            paddingRight: index === children.length - 1 ? '2rem' : undefined
        });

        return React.createElement(
            'div',
            { key: index, style: childStyle },
            childComponent
        );
    });

    return React.createElement(
        'main',
        _extends({}, otherProps, { style: mergedMainStyle }),
        flexedChilden
    );
}
TwoPanelSelector.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    childWrapStyle: PropTypes.object,
    mainStyle: PropTypes.object,
    sizeRatio: PropTypes.array
};

TwoPanelSelector.defaultProps = {
    sizeRatio: ['0 0 320px', 1],
    children: [],
    childWrapStyle: {},
    mainStyle: {}
};

export default TwoPanelSelector;
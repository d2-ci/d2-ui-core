'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isArray = require('lodash/fp/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _loglevel = require('loglevel');

var _loglevel2 = _interopRequireDefault(_loglevel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TwoPanelSelector(props) {
    var children = props.children,
        childWrapStyle = props.childWrapStyle,
        mainStyle = props.mainStyle,
        sizeRatio = props.sizeRatio,
        otherProps = (0, _objectWithoutProperties3.default)(props, ['children', 'childWrapStyle', 'mainStyle', 'sizeRatio']);

    var mergedMainStyle = (0, _extends3.default)({
        flex: 1,
        display: 'flex',
        flexOrientation: 'row',
        marginTop: '8rem'
    }, mainStyle);

    var childrenToRender = void 0;

    if ((0, _isArray2.default)(children)) {
        // More than two children defeats the purpose of a two panel layout and was probably not what the
        // user of the component intended to do.
        if (children.length > 2) {
            _loglevel2.default.warn('You passed more than two children to the <TwoPanel /> component, it requires exactly two');
        }

        // We will always only render two children even when more are passed.
        childrenToRender = children.slice(0, 2);
    } else {
        // Just a single child was passed, log a warning because this will only fill the left bar with content.
        // And it was probably not what the user intended to do.
        _loglevel2.default.warn('You passed just one child to the <TwoPanel /> component, it requires exactly two');
        childrenToRender = [children];
    }

    var flexedChilden = childrenToRender.map(function (childComponent, index) {
        var childStyle = (0, _assign2.default)({}, childWrapStyle, {
            flex: sizeRatio[index],
            paddingRight: index === children.length - 1 ? '2rem' : undefined
        });

        return _react2.default.createElement(
            'div',
            { key: index, style: childStyle },
            childComponent
        );
    });

    return _react2.default.createElement(
        'main',
        (0, _extends3.default)({}, otherProps, { style: mergedMainStyle }),
        flexedChilden
    );
}
TwoPanelSelector.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]),
    childWrapStyle: _propTypes2.default.object,
    mainStyle: _propTypes2.default.object,
    sizeRatio: _propTypes2.default.array
};

TwoPanelSelector.defaultProps = {
    sizeRatio: ['0 0 320px', 1],
    children: [],
    childWrapStyle: {},
    mainStyle: {}
};

exports.default = TwoPanelSelector;
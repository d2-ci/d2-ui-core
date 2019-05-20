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

var _isArray = require('lodash/fp/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _loglevel = require('loglevel');

var _loglevel2 = _interopRequireDefault(_loglevel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SinglePanel(props) {
    var children = props.children,
        mainStyle = props.mainStyle,
        otherProps = (0, _objectWithoutProperties3.default)(props, ['children', 'mainStyle']);

    var mergedMainStyle = (0, _extends3.default)({
        flex: 1,
        display: 'flex',
        flexOrientation: 'row',
        marginTop: '8rem',
        marginLeft: '2rem',
        marginRight: '2rem'
    }, mainStyle);

    var childToRender = void 0;

    if ((0, _isArray2.default)(children) && children.length) {
        childToRender = children[0];
        _loglevel2.default.warn('You passed multiple children to the <SinglePanel /> component, this is not supported');
    } else {
        childToRender = children;
    }

    return _react2.default.createElement(
        'main',
        (0, _extends3.default)({ style: mergedMainStyle }, otherProps),
        childToRender
    );
}

SinglePanel.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]),
    mainStyle: _propTypes2.default.object
};

SinglePanel.defaultProps = {
    mainStyle: {},
    children: null
};

exports.default = SinglePanel;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

exports.default = createFlexContainer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _loglevel = require('loglevel');

var _loglevel2 = _interopRequireDefault(_loglevel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createFlexContainer(defaultFlexStyle) {
    var displayName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'FlexContainer';

    function FlexContainer(_ref) {
        var style = _ref.style,
            _ref$flexValue = _ref.flexValue,
            flexValue = _ref$flexValue === undefined ? '1 0 auto' : _ref$flexValue,
            children = _ref.children;

        var flexContainerStyle = (0, _assign2.default)({ display: 'flex' }, defaultFlexStyle, style);
        var flexedChildren = _react.Children.map(children, function (child) {
            if (child === null) {
                _loglevel2.default.error('createFlexContainer: Flex child can not be \'null\'');
            }

            return (0, _react.cloneElement)(child, { style: (0, _assign2.default)({}, { flex: flexValue }, child.props.style) });
        });

        return _react2.default.createElement(
            'div',
            { style: flexContainerStyle },
            flexedChildren
        );
    }
    FlexContainer.displayName = displayName;

    return FlexContainer;
}
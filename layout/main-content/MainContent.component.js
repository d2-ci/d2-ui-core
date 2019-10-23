'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MainContent(props) {
    var mainContentStyle = {
        marginBottom: '4rem',
        width: '100%'
    };

    return _react2.default.createElement(
        'div',
        { style: mainContentStyle },
        props.children
    );
}
MainContent.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.array.isRequired, _propTypes2.default.object.isRequired])
};

exports.default = MainContent;
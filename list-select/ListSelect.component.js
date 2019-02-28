'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

exports.default = ListSelect;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ListSelect(props) {
    function listItemDoubleClicked(event) {
        var clickedItemValue = event.target.value;

        if (props.onItemDoubleClick) {
            props.onItemDoubleClick(clickedItemValue);
        }
    }

    var options = props.source.map(function (item) {
        return _react2.default.createElement(
            'option',
            {
                key: item.value,
                style: { padding: '.25rem' },
                onDoubleClick: listItemDoubleClicked,
                value: item.value
            },
            item.label
        );
    });

    return _react2.default.createElement(
        'div',
        { className: 'list-select' },
        _react2.default.createElement(
            'select',
            { size: props.size || 15, style: (0, _assign2.default)({ overflowX: 'auto' }, props.listStyle) },
            options
        )
    );
}
ListSelect.propTypes = {
    source: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        label: _propTypes2.default.string,
        value: _propTypes2.default.string
    })).isRequired,
    onItemDoubleClick: _propTypes2.default.func.isRequired,
    listStyle: _propTypes2.default.object,
    size: _propTypes2.default.number
};
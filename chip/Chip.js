import _extends from 'babel-runtime/helpers/extends';
import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import IconStar from 'material-ui/svg-icons/toggle/star';
import MuiChip from 'material-ui/Chip';
import { createClassName } from '../component-helpers/utils';

var chipSize = '30px';
var chipColor = '#333333';

var chipStyle = {
    margin: 3,
    height: chipSize,
    pointer: 'auto'
};

export var clickableStyle = {
    cursor: 'pointer'
};

var labelStyle = {
    fontSize: '13px',
    fontWeight: 500,
    lineHeight: '30px'
};

export var colors = {
    default: {
        color: chipColor,
        backgroundColor: '#e0e0e0'
    },
    primary: {
        color: chipColor,
        backgroundColor: '#b1deda'
    }
};

export var avatarProps = {
    color: chipColor,
    backgroundColor: 'rgba(0,0,0,0.08)',
    style: {
        height: chipSize,
        width: chipSize
    }
};

export var avatarIcons = {
    star: React.createElement(IconStar, null)
};

export var disabledStyle = {
    cursor: 'auto',
    opacity: 0.5
};

var Chip = function Chip(_ref) {
    var avatar = _ref.avatar,
        _ref$color = _ref.color,
        color = _ref$color === undefined ? 'default' : _ref$color,
        disabled = _ref.disabled,
        label = _ref.label,
        onClick = _ref.onClick,
        onRequestDelete = _ref.onRequestDelete,
        selector = _ref.selector;

    var style = _extends({}, chipStyle, typeof onClick === 'function' ? clickableStyle : {}, disabled ? disabledStyle : {});

    var props = _extends({
        style: style,
        labelStyle: labelStyle,
        className: createClassName('d2-ui-chip', selector),
        onClick: disabled ? undefined : onClick,
        onRequestDelete: disabled ? undefined : onRequestDelete,
        deleteIconStyle: { height: '22px' }
    }, colors[color]);

    var avatarCmp = avatarIcons[avatar] && React.createElement(Avatar, _extends({
        icon: avatarIcons[avatar]
    }, avatarProps));

    var wrapperClassName = createClassName('d2-ui-chip-wrapper', selector);
    var wrapperStyle = { display: 'inline-block', verticalAlign: 'top' };
    return React.createElement(
        'div',
        { className: wrapperClassName, style: wrapperStyle },
        React.createElement(
            MuiChip,
            props,
            avatarCmp,
            label
        )
    );
};

Chip.propTypes = {
    /**
     * If set, adds an avatar to the chip
     */
    avatar: PropTypes.oneOf(['star']),

    /**
     * The color theme of the chip
     */
    color: PropTypes.oneOf(['default', 'primary']),

    /**
     *  If true, the button will be disabled
     */
    disabled: PropTypes.bool,

    /**
     *  If set, adds text content to the chip
     */
    label: PropTypes.string,

    /**
     * onClick callback function, triggered when the button is clicked
     */
    onClick: PropTypes.func,

    /**
     * onRequestDelete callback function, adds a close button to the chip and executes this function when the button is clicked
     */
    onRequestDelete: PropTypes.func,

    /**
     * If set, adds a class to the element on the format d2-ui-chip-selector
     */
    selector: PropTypes.string
};

Chip.defaultProps = {
    avatar: null,
    disabled: false,
    label: null,
    onClick: undefined,
    onRequestDelete: undefined,
    selector: null
};

export default Chip;
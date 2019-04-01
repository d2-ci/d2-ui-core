'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _utils = require('../component-helpers/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextField = function TextField(_ref) {
  var type = _ref.type,
      fullWidth = _ref.fullWidth,
      label = _ref.label,
      multiline = _ref.multiline,
      _onChange = _ref.onChange,
      placeholder = _ref.placeholder,
      rows = _ref.rows,
      rowsMax = _ref.rowsMax,
      selector = _ref.selector,
      style = _ref.style,
      value = _ref.value,
      onClick = _ref.onClick;

  var className = (0, _utils.createClassName)('d2-ui-textfield', selector);

  return _react2.default.createElement(_TextField2.default, {
    className: className,
    floatingLabelText: label,
    fullWidth: fullWidth,
    hintText: placeholder,
    multiLine: multiline,
    onChange: function onChange(event, val) {
      return _onChange(val);
    },
    rows: rows,
    rowsMax: rowsMax,
    style: style,
    type: type,
    value: value,
    onClick: onClick,
    floatingLabelStyle: { whiteSpace: 'nowrap' } // Avoids overlapping the input field
  });
};

TextField.propTypes = {
  /**
   * If set, expands the TextField to the full width of its parent
   */
  fullWidth: _propTypes2.default.bool,

  /**
   * The textfield label
   */
  label: _propTypes2.default.string,

  /**
   * If set, allows textfield to expand to more than one line
   */
  multiline: _propTypes2.default.bool,

  /**
   * onChange callback, that is fired when the textfield's value changes
   *
   * The onChange callback will receive one argument: The new value of the text field
   */
  onChange: _propTypes2.default.func.isRequired,

  /**
  * onClick callback, that is fired when the textfield is clicked
  *
  */
  onClick: _propTypes2.default.func,

  /**
   * If set, sets the Hint text (v0.19)
   */
  placeholder: _propTypes2.default.string,

  /**
   * If set, and multiline is true, sets the initial number of lines
   */
  rows: _propTypes2.default.number,

  /**
   * If set, and multiline is true, sets the maximum number of lines
   */
  rowsMax: _propTypes2.default.number,

  /**
   * If set, adds a class to the element in the format d2-ui-textfield-selector
   */
  selector: _propTypes2.default.string,

  /**
   * Override the inline-styles of the root element
   */
  style: _propTypes2.default.object,

  /**
   * The input type of the textfield
   */
  type: _propTypes2.default.oneOf(['text', 'number']),

  /**
   * The value of the textfield
   */
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

exports.default = TextField;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _spacing = require('material-ui/styles/spacing');

var _spacing2 = _interopRequireDefault(_spacing);

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _colors = require('material-ui/styles/colors');

var _colorManipulator = require('material-ui/utils/colorManipulator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var theme = {
    spacing: _spacing2.default,
    fontFamily: 'Roboto, sans-serif',
    palette: {
        primary1Color: '#004ba0',
        primary2Color: _colors.blue700,
        primary3Color: _colors.blue100,
        accent1Color: _colors.orange500,
        accent2Color: _colors.grey100,
        accent3Color: _colors.orangeA200,
        textColor: _colors.darkBlack,
        alternateTextColor: _colors.white,
        canvasColor: _colors.white,
        borderColor: _colors.grey400,
        disabledColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.3)
    }
};

var muiTheme = (0, _getMuiTheme2.default)(theme);

exports.default = muiTheme;
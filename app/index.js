import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import theme from '../theme/theme';

var D2UIApp = function (_Component) {
    _inherits(D2UIApp, _Component);

    function D2UIApp() {
        _classCallCheck(this, D2UIApp);

        return _possibleConstructorReturn(this, (D2UIApp.__proto__ || _Object$getPrototypeOf(D2UIApp)).apply(this, arguments));
    }

    _createClass(D2UIApp, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                MuiThemeProvider,
                { muiTheme: this.props.muiTheme },
                React.createElement(
                    'div',
                    null,
                    this.props.children
                )
            );
        }
    }]);

    return D2UIApp;
}(Component);

D2UIApp.propTypes = {
    muiTheme: PropTypes.object,
    children: PropTypes.node
};

D2UIApp.defaultProps = {
    muiTheme: getMuiTheme(theme)
};

export default D2UIApp;
import _Object$assign from 'babel-runtime/core-js/object/assign';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Material UI
import Checkbox from 'material-ui/Checkbox';

var MultiToggle = function (_Component) {
    _inherits(MultiToggle, _Component);

    function MultiToggle() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, MultiToggle);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MultiToggle.__proto__ || _Object$getPrototypeOf(MultiToggle)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            values: _this.props.items.reduce(function (prev, curr) {
                if (curr.value) {
                    prev.push(curr.name);
                }
                return prev;
            }, [])
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(MultiToggle, [{
        key: 'handleToggle',
        value: function handleToggle(value, event, checked) {
            var _this2 = this;

            this.setState(function (oldState) {
                if (checked) {
                    if (oldState.values.indexOf(value) === -1) {
                        oldState.values.push(value);
                    }
                } else if (oldState.values.indexOf(value) !== -1) {
                    oldState.values.splice(oldState.values.indexOf(value), 1);
                }
                return oldState;
            }, function () {
                _this2.props.onChange({ target: { value: _this2.state.values } });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var style = _Object$assign({}, this.context.muiTheme.forms, this.props.style);

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { style: { marginTop: 16, marginBottom: 8 } },
                    this.props.label
                ),
                this.props.items.map(function (item) {
                    var togglor = _this3.handleToggle.bind(_this3, item.name);

                    return React.createElement(Checkbox, {
                        key: item.name,
                        name: item.name,
                        value: 'true',
                        defaultChecked: item.value === true,
                        label: item.text,
                        onCheck: togglor,
                        style: style,
                        labelPosition: 'right'
                    });
                })
            );
        }
    }]);

    return MultiToggle;
}(Component);

MultiToggle.propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.bool,
        text: PropTypes.string.isRequired
    })),
    style: PropTypes.object
};

MultiToggle.contextTypes = {
    muiTheme: PropTypes.object
};

export default MultiToggle;
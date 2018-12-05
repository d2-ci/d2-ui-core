import _extends from 'babel-runtime/helpers/extends';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';
import log from 'loglevel';

export default function withStateFrom(stateSource$, BaseComponent) {
    var withStateForm = function (_Component) {
        _inherits(withStateForm, _Component);

        function withStateForm() {
            _classCallCheck(this, withStateForm);

            return _possibleConstructorReturn(this, (withStateForm.__proto__ || _Object$getPrototypeOf(withStateForm)).apply(this, arguments));
        }

        _createClass(withStateForm, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                var _this2 = this;

                this.disposable = stateSource$.subscribe(function (state) {
                    return _this2.setState(state);
                }, function (error) {
                    return log.error(error);
                });
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                this.disposable && this.disposable.unsubscribe && this.disposable.unsubscribe();
            }
        }, {
            key: 'render',
            value: function render() {
                return React.createElement(BaseComponent, _extends({}, this.state, this.props));
            }
        }]);

        return withStateForm;
    }(Component);

    withStateForm.displayName = BaseComponent.displayName || BaseComponent.name;

    return withStateForm;
}
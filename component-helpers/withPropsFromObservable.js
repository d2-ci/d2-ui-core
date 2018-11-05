import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _extends from 'babel-runtime/helpers/extends';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';
import log from 'loglevel';
import getDisplayName from 'recompose/getDisplayName';
import CircularProgress from '../circular-progress/CircularProgress';

export default function withPropsFromObservable(observable, BaseComponent) {
    var WithPropsFromComponent = function (_Component) {
        _inherits(WithPropsFromComponent, _Component);

        function WithPropsFromComponent(props, context) {
            _classCallCheck(this, WithPropsFromComponent);

            var _this = _possibleConstructorReturn(this, (WithPropsFromComponent.__proto__ || _Object$getPrototypeOf(WithPropsFromComponent)).call(this, props, context));

            _this.state = {
                isLoading: true
            };
            return _this;
        }

        _createClass(WithPropsFromComponent, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                var _this2 = this;

                this.disposable = observable.subscribe(function (props) {
                    return _this2.setState(_extends({ isLoading: false }, props));
                }, function (error) {
                    log.error('Failed to receive props for ' + BaseComponent.displayName);log.error(error);
                });
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                if (this.disposable && this.disposable.unsubscribe) {
                    this.disposable.unsubscribe();
                }
            }
        }, {
            key: 'render',
            value: function render() {
                var _state = this.state,
                    isLoading = _state.isLoading,
                    componentProps = _objectWithoutProperties(_state, ['isLoading']);

                if (this.state.isLoading) {
                    return React.createElement(CircularProgress, null);
                }

                return React.createElement(BaseComponent, _extends({}, componentProps, this.props));
            }
        }]);

        return WithPropsFromComponent;
    }(Component);

    WithPropsFromComponent.displayName = 'withPropsFrom(' + getDisplayName(BaseComponent) + ')';

    return WithPropsFromComponent;
}
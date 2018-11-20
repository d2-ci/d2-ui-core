import _extends from 'babel-runtime/helpers/extends';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Observable } from 'rxjs';
import log from 'loglevel';
import ListSelect from './ListSelect.component';

var ListSelectAsync = function (_Component) {
    _inherits(ListSelectAsync, _Component);

    function ListSelectAsync() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ListSelectAsync);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ListSelectAsync.__proto__ || _Object$getPrototypeOf(ListSelectAsync)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            listSource: []
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ListSelectAsync, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            if (!this.props.source) {
                return;
            }

            this.subscription = this.props.source.subscribe(function (listValues) {
                return _this2.setState({ listSource: listValues });
            }, function (error) {
                return log.error(error);
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.subscription && this.subscription.unsubscribe();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(ListSelect, _extends({}, this.props, {
                onItemDoubleClick: this.props.onItemDoubleClick,
                source: this.state.listSource,
                listStyle: this.props.listStyle
            }));
        }
    }]);

    return ListSelectAsync;
}(Component);

ListSelectAsync.propTypes = {
    source: PropTypes.instanceOf(Observable),
    onItemDoubleClick: PropTypes.func.isRequired,
    listStyle: PropTypes.object
};

export default ListSelectAsync;
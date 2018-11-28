import _extends from 'babel-runtime/helpers/extends';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextField from 'material-ui/TextField/TextField';

import ListSelect from '../list-select/ListSelect.component';

var styles = {
    list: {
        width: '100%',
        outline: 'none',
        border: 'none',
        padding: '0rem 1rem',
        overflowX: 'auto'
    },
    textField: {
        marginLeft: '1rem',
        marginBottom: '11px'
    }
};

var ListSelectWithLocalSearch = function (_Component) {
    _inherits(ListSelectWithLocalSearch, _Component);

    function ListSelectWithLocalSearch(props) {
        _classCallCheck(this, ListSelectWithLocalSearch);

        var _this = _possibleConstructorReturn(this, (ListSelectWithLocalSearch.__proto__ || _Object$getPrototypeOf(ListSelectWithLocalSearch)).call(this, props));

        _this.filterList = function (event) {
            _this.setState({
                textSearch: event.target.value
            });
        };

        _this.state = {
            textSearch: ''
        };
        return _this;
    }

    _createClass(ListSelectWithLocalSearch, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                'div',
                null,
                React.createElement(TextField, {
                    style: styles.textField,
                    hintText: this.props.hintLabel,
                    onChange: this.filterList,
                    value: this.state.textSearch
                }),
                React.createElement(ListSelect, _extends({}, this.props, {
                    listStyle: styles.list,
                    source: this.props.source.filter(function (option) {
                        return option.label.toLowerCase().indexOf(_this2.state.textSearch.toLowerCase()) !== -1;
                    }),
                    size: 12
                }))
            );
        }
    }]);

    return ListSelectWithLocalSearch;
}(Component);

ListSelectWithLocalSearch.propTypes = {
    source: PropTypes.array.isRequired,
    hintLabel: PropTypes.string
};

ListSelectWithLocalSearch.defaultProps = {
    source: [],
    hintLabel: ''
};

export default ListSelectWithLocalSearch;
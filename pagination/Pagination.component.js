import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from 'classnames';

var noop = function noop() {};

var Pagination = function (_Component) {
    _inherits(Pagination, _Component);

    function Pagination() {
        _classCallCheck(this, Pagination);

        return _possibleConstructorReturn(this, (Pagination.__proto__ || _Object$getPrototypeOf(Pagination)).apply(this, arguments));
    }

    _createClass(Pagination, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                hasPreviousPage = _props.hasPreviousPage,
                hasNextPage = _props.hasNextPage,
                onPreviousPageClick = _props.onPreviousPageClick,
                onNextPageClick = _props.onNextPageClick,
                currentlyShown = _props.currentlyShown,
                total = _props.total;

            var pagerButtonClasses = ['material-icons', 'waves-effect'];

            var previousPageClasses = classes(pagerButtonClasses, { 'data-table-pager--previous-page__disabled': !hasPreviousPage() });
            var nextPageClasses = classes(pagerButtonClasses, { 'data-table-pager--next-page__disabled': !hasNextPage() });

            return React.createElement(
                'div',
                { className: 'data-table-pager' },
                React.createElement(
                    'ul',
                    { className: 'data-table-pager--buttons' },
                    total ? React.createElement(
                        'li',
                        { className: 'data-table-pager--page-info' },
                        React.createElement(
                            'span',
                            null,
                            currentlyShown,
                            ' / ',
                            total
                        )
                    ) : '',
                    React.createElement(
                        'li',
                        { className: 'data-table-pager--previous-page' },
                        React.createElement(
                            'i',
                            {
                                className: previousPageClasses,
                                onClick: hasPreviousPage() ? onPreviousPageClick : noop
                            },
                            'navigate_before'
                        )
                    ),
                    React.createElement(
                        'li',
                        { className: 'data-table-pager--next-page' },
                        React.createElement(
                            'i',
                            {
                                className: nextPageClasses,
                                onClick: hasNextPage() ? onNextPageClick : noop
                            },
                            'navigate_next'
                        )
                    )
                )
            );
        }
    }]);

    return Pagination;
}(Component);

Pagination.propTypes = {
    hasPreviousPage: PropTypes.func,
    hasNextPage: PropTypes.func,
    onPreviousPageClick: PropTypes.func,
    onNextPageClick: PropTypes.func,
    total: PropTypes.number,
    currentlyShown: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Pagination.defaultProps = {
    hasPreviousPage: noop,
    hasNextPage: noop,
    onPreviousPageClick: noop,
    onNextPageClick: noop,
    total: 0,
    currentlyShown: 0
};

export default Pagination;
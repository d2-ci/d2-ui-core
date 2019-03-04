'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _loglevel = require('loglevel');

var _loglevel2 = _interopRequireDefault(_loglevel);

var _SelectField = require('material-ui/SelectField');

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _DatePicker = require('material-ui/DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _helpers = require('d2/period/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
    datePicker: { width: '100%' },
    year: { width: 95, marginRight: 16 },
    month: { width: 125 },
    week: { width: 105 },
    biWeek: { width: 200 },
    biMonth: { width: 200 },
    quarter: { width: 200 },
    sixMonth: { width: 200 },
    line: { marginTop: 0 }
};

var getYear = function getYear(date) {
    return new Date(date).getFullYear();
};
var getTwoDigitMonth = function getTwoDigitMonth(date) {
    var month = new Date(date).getMonth() + 1; // Month is 0 indexed

    return ('0' + month).slice(-2);
};
var getTwoDigitDay = function getTwoDigitDay(date) {
    var day = new Date(date).getDate();

    return ('0' + day).slice(-2);
};
var formattedDate = function formattedDate(date) {
    return '' + getYear(date) + getTwoDigitMonth(date) + getTwoDigitDay(date);
};
var getWeekYear = function getWeekYear(date) {
    // Create a new date object for the thursday of this week
    var target = new Date(date);
    target.setDate(target.getDate() - (date.getDay() + 6) % 7 + 3);

    return target.getFullYear();
};
var isWeekValid = function isWeekValid(date, week) {
    return (
        // It's not possible to have a week 53 in a 52 week year
        !(0, _helpers.is53WeekISOYear)(date) && Number(week) !== 53
    );
};

var biWeekToWeek = function biWeekToWeek(biWeekStr) {
    return parseInt(biWeekStr) * 2 - 1;
};

var PeriodPicker = function (_React$Component) {
    (0, _inherits3.default)(PeriodPicker, _React$Component);

    function PeriodPicker(props, context) {
        (0, _classCallCheck3.default)(this, PeriodPicker);

        var _this = (0, _possibleConstructorReturn3.default)(this, (PeriodPicker.__proto__ || (0, _getPrototypeOf2.default)(PeriodPicker)).call(this, props, context));

        _this.state = {};

        var i18n = context.d2.i18n;
        _this.getTranslation = i18n.getTranslation.bind(i18n);
        return _this;
    }

    (0, _createClass3.default)(PeriodPicker, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (this.props.periodType !== prevProps.periodType) {
                this.handleChange();
            }
        }
    }, {
        key: 'getPeriod',
        value: function getPeriod() {
            var week = this.props.periodType === 'BiWeekly' && this.state.biWeek ? biWeekToWeek(this.state.biWeek) : this.state.week;
            var date = this.state.year && week && (0, _helpers.getFirstDateOfWeek)(this.state.year, week);

            switch (this.props.periodType) {
                case 'Daily':
                    return this.state.date && formattedDate(this.state.date);
                case 'Weekly':
                    if (date) {
                        this.setState({ invalidWeek: !isWeekValid(date, this.state.week) });
                    }
                    return date && isWeekValid(date, this.state.week) && getWeekYear(date) + 'W' + this.state.week;
                case 'WeeklyWednesday':
                    if (date) {
                        this.setState({ invalidWeek: !isWeekValid(date, this.state.week) });
                    }
                    return date && isWeekValid(date, this.state.week) && getWeekYear(date) + 'WedW' + this.state.week;
                case 'WeeklyThursday':
                    if (date) {
                        this.setState({ invalidWeek: !isWeekValid(date, this.state.week) });
                    }
                    return date && isWeekValid(date, this.state.week) && getWeekYear(date) + 'ThuW' + this.state.week;
                case 'WeeklySaturday':
                    if (date) {
                        this.setState({ invalidWeek: !isWeekValid(date, this.state.week) });
                    }
                    return date && isWeekValid(date, this.state.week) && getWeekYear(date) + 'SatW' + this.state.week;
                case 'WeeklySunday':
                    if (date) {
                        this.setState({ invalidWeek: !isWeekValid(date, this.state.week) });
                    }
                    return date && isWeekValid(date, this.state.week) && getWeekYear(date) + 'SunW' + this.state.week;
                case 'BiWeekly':
                    if (date) {
                        this.setState({ invalidBiWeek: !isWeekValid(date, biWeekToWeek(this.state.biWeek)) });
                    }
                    return this.state.year && this.state.biWeek && this.state.year + 'BiW' + this.state.biWeek;
                case 'Monthly':
                    return this.state.year && this.state.month && '' + this.state.year + this.state.month;
                case 'BiMonthly':
                    return this.state.year && this.state.biMonth && this.state.year + '0' + this.state.biMonth + 'B';
                case 'Quarterly':
                    return this.state.year && this.state.quarter && this.state.year + 'Q' + this.state.quarter;
                case 'SixMonthly':
                    return this.state.year && this.state.sixMonth && this.state.year + 'S' + this.state.sixMonth;
                case 'SixMonthlyApril':
                    return this.state.year && this.state.sixMonth && this.state.year + 'AprilS' + this.state.sixMonth;
                case 'Yearly':
                    return this.state.year;
                case 'FinancialApril':
                    return this.state.year && this.state.year + 'April';
                case 'FinancialJuly':
                    return this.state.year && this.state.year + 'July';
                case 'FinancialOct':
                    return this.state.year && this.state.year + 'Oct';

                default:
                    _loglevel2.default.error('Unknown period type: ' + this.props.periodType);
                    return false;
            }
        }
    }, {
        key: 'handleChange',
        value: function handleChange() {
            if (this.getPeriod()) {
                this.props.onPickPeriod(this.getPeriod());
            }
        }
    }, {
        key: 'renderOptionPicker',
        value: function renderOptionPicker(name, options) {
            var _this2 = this;

            var changeState = function changeState(e, i, value) {
                return _this2.setState((0, _defineProperty3.default)({}, name, value), _this2.handleChange);
            };
            var isInvalid = name === 'week' && this.state.invalidWeek || name === 'biWeek' && this.state.invalidBiWeek;

            return _react2.default.createElement(
                _SelectField2.default,
                {
                    value: this.state[name],
                    onChange: changeState,
                    style: styles[name],
                    floatingLabelText: this.getTranslation(name),
                    floatingLabelStyle: isInvalid ? { color: 'red' } : {}
                },
                (0, _keys2.default)(options).sort().map(function (value) {
                    return _react2.default.createElement(_MenuItem2.default, {
                        key: value,
                        value: value,
                        primaryText: /[^0-9]/.test(options[value]) && name !== 'biWeek' ? _this2.getTranslation(options[value]) : options[value]
                    });
                })
            );
        }
    }, {
        key: 'renderYearPicker',
        value: function renderYearPicker() {
            var years = {};
            var currentYear = new Date().getFullYear();
            for (var year = 2014; year < currentYear + 5; year++) {
                years[year] = year;
            }

            return this.renderOptionPicker('year', years);
        }
    }, {
        key: 'renderMonthPicker',
        value: function renderMonthPicker() {
            var months = {
                '01': 'jan',
                '02': 'feb',
                '03': 'mar',
                '04': 'apr',
                '05': 'may',
                '06': 'jun',
                '07': 'jul',
                '08': 'aug',
                '09': 'sep',
                10: 'oct',
                11: 'nov',
                12: 'dec'
            };
            return this.renderOptionPicker('month', months);
        }
    }, {
        key: 'renderWeekPicker',
        value: function renderWeekPicker() {
            var weeks = {};
            var weekLimit = 53;
            for (var week = 1; week <= weekLimit; week++) {
                weeks[('0' + week).substr(-2)] = week;
            }

            return this.renderOptionPicker('week', weeks);
        }
    }, {
        key: 'renderBiWeekPicker',
        value: function renderBiWeekPicker() {
            var biWeeks = {};
            var biWeekLimit = 27;
            var prefix = this.getTranslation('bi_week');
            for (var biWeek = 1; biWeek <= biWeekLimit; biWeek++) {
                biWeeks[('0' + biWeek).substr(-2)] = prefix + ' ' + biWeek;
            }

            return this.renderOptionPicker('biWeek', biWeeks);
        }
    }, {
        key: 'renderBiMonthPicker',
        value: function renderBiMonthPicker() {
            var biMonths = { 1: 'jan-feb', 2: 'mar-apr', 3: 'may-jun', 4: 'jul-aug', 5: 'sep-oct', 6: 'nov-dec' };
            return this.renderOptionPicker('biMonth', biMonths);
        }
    }, {
        key: 'renderQuarterPicker',
        value: function renderQuarterPicker() {
            var quarters = { 1: 'Q1', 2: 'Q2', 3: 'Q3', 4: 'Q4' };
            return this.renderOptionPicker('quarter', quarters);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var setDateState = function setDateState(nothing, date) {
                var year = getYear(date);
                var month = getTwoDigitMonth(date);
                _this3.setState({ date: date, year: year, month: month }, _this3.handleChange);
            };

            switch (this.props.periodType) {
                case 'Daily':
                    return _react2.default.createElement(_DatePicker2.default, {
                        floatingLabelText: this.getTranslation('day'),
                        onChange: setDateState,
                        autoOk: true,
                        container: 'inline',
                        style: styles.datePicker
                    });
                case 'Weekly':
                case 'WeeklyWednesday':
                case 'WeeklyThursday':
                case 'WeeklySaturday':
                case 'WeeklySunday':
                    return _react2.default.createElement(
                        'div',
                        { style: styles.line },
                        this.renderYearPicker(),
                        this.renderWeekPicker()
                    );
                case 'BiWeekly':
                    return _react2.default.createElement(
                        'div',
                        { style: styles.line },
                        this.renderYearPicker(),
                        this.renderBiWeekPicker()
                    );
                case 'Monthly':
                    return _react2.default.createElement(
                        'div',
                        { style: styles.line },
                        this.renderYearPicker(),
                        this.renderMonthPicker()
                    );
                case 'BiMonthly':
                    return _react2.default.createElement(
                        'div',
                        { style: styles.line },
                        this.renderYearPicker(),
                        this.renderBiMonthPicker()
                    );
                case 'Quarterly':
                    return _react2.default.createElement(
                        'div',
                        { style: styles.line },
                        this.renderYearPicker(),
                        this.renderQuarterPicker()
                    );
                case 'SixMonthly':
                    return _react2.default.createElement(
                        'div',
                        { style: styles.line },
                        this.renderYearPicker(),
                        this.renderOptionPicker('sixMonth', { 1: 'jan-jun', 2: 'jul-dec' })
                    );
                case 'SixMonthlyApril':
                    return _react2.default.createElement(
                        'div',
                        { style: styles.line },
                        this.renderYearPicker(),
                        this.renderOptionPicker('sixMonth', { 1: 'apr-sep', 2: 'oct-mar' })
                    );
                case 'Yearly':
                case 'FinancialApril':
                case 'FinancialJuly':
                case 'FinancialOct':
                    return _react2.default.createElement(
                        'div',
                        { style: styles.line },
                        this.renderYearPicker()
                    );

                default:
                    return null;
            }
        }
    }]);
    return PeriodPicker;
}(_react2.default.Component);

PeriodPicker.propTypes = {
    periodType: _propTypes2.default.oneOf(['Daily', 'Weekly', 'WeeklyWednesday', 'WeeklyThursday', 'WeeklySaturday', 'WeeklySunday', 'BiWeekly', 'Monthly', 'BiMonthly', 'Quarterly', 'SixMonthly', 'SixMonthlyApril', 'Yearly', 'FinancialApril', 'FinancialJuly', 'FinancialOct']).isRequired,

    onPickPeriod: _propTypes2.default.func.isRequired
};
PeriodPicker.contextTypes = { d2: _propTypes2.default.object.isRequired };

exports.default = PeriodPicker;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _symbol = require('babel-runtime/core-js/symbol');

var _symbol2 = _interopRequireDefault(_symbol);

var _rxjs = require('rxjs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var publishState = (0, _symbol2.default)('publishState');
var publishError = (0, _symbol2.default)('publishError');

var observableSymbol = (0, _symbol2.default)('observable');

var Store = function (_Observable) {
    (0, _inherits3.default)(Store, _Observable);

    function Store(initialValue) {
        (0, _classCallCheck3.default)(this, Store);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Store.__proto__ || (0, _getPrototypeOf2.default)(Store)).call(this));

        _this[observableSymbol] = new _rxjs.ReplaySubject(1);

        if (initialValue) {
            _promise2.default.resolve(initialValue).then(function (value) {
                _this.setState(value);
            }).catch(function (error) {
                _this[publishError](error);
            });
        }
        return _this;
    }

    (0, _createClass3.default)(Store, [{
        key: 'setState',
        value: function setState(newState) {
            this.state = newState;
            this[publishState]();
        }
    }, {
        key: 'getState',
        value: function getState() {
            return this.state;
        }
    }, {
        key: 'setSource',
        value: function setSource(observableSource) {
            var _this2 = this;

            observableSource.subscribe(function (value) {
                return _this2.setState(value);
            }, function (error) {
                return _this2[publishError]('Rethrown error from source: ' + error);
            });
        }
    }, {
        key: '_subscribe',
        value: function _subscribe(observer) {
            return this[observableSymbol].subscribe(observer);
        }

        /** ***************************************************************************************************************
         * Private methods
         **************************************************************************************************************** */

    }, {
        key: publishState,
        value: function value() {
            return this[observableSymbol].next(this.state);
        }
    }, {
        key: publishError,
        value: function value(error) {
            return this[observableSymbol].error(error);
        }

        /** ***************************************************************************************************************
         * Static methods
         **************************************************************************************************************** */

    }], [{
        key: 'create',
        value: function create(storeConfig) {
            var initialState = void 0;
            var mergeObject = {};

            if (storeConfig) {
                if (storeConfig.getInitialState) {
                    initialState = storeConfig && storeConfig.getInitialState();
                }

                (0, _keys2.default)(storeConfig).filter(function (keyName) {
                    return keyName !== 'getInitialState';
                }).forEach(function (keyName) {
                    mergeObject[keyName] = storeConfig[keyName];
                    return mergeObject;
                });
            }

            return (0, _assign2.default)(new Store(initialState), mergeObject);
        }
    }]);
    return Store;
}(_rxjs.Observable);

exports.default = Store;
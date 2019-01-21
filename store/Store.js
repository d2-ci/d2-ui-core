import _Object$assign from 'babel-runtime/core-js/object/assign';
import _Object$keys from 'babel-runtime/core-js/object/keys';
import _Promise from 'babel-runtime/core-js/promise';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import _Symbol from 'babel-runtime/core-js/symbol';
import { Observable, ReplaySubject } from 'rxjs';

var publishState = _Symbol('publishState');
var publishError = _Symbol('publishError');

var observableSymbol = _Symbol('observable');

var Store = function (_Observable) {
    _inherits(Store, _Observable);

    function Store(initialValue) {
        _classCallCheck(this, Store);

        var _this = _possibleConstructorReturn(this, (Store.__proto__ || _Object$getPrototypeOf(Store)).call(this));

        _this[observableSymbol] = new ReplaySubject(1);

        if (initialValue) {
            _Promise.resolve(initialValue).then(function (value) {
                _this.setState(value);
            }).catch(function (error) {
                _this[publishError](error);
            });
        }
        return _this;
    }

    _createClass(Store, [{
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

                _Object$keys(storeConfig).filter(function (keyName) {
                    return keyName !== 'getInitialState';
                }).forEach(function (keyName) {
                    mergeObject[keyName] = storeConfig[keyName];
                    return mergeObject;
                });
            }

            return _Object$assign(new Store(initialState), mergeObject);
        }
    }]);

    return Store;
}(Observable);

export default Store;
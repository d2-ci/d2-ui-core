'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @module lib/utils
 */

/**
 * Function to create CSS class names
 *
 * @param {String} name The base name
 * @param {String} selector string to append to the base name
 * @returns String
 */
var createClassName = exports.createClassName = function createClassName() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return selector ? name + ' ' + name + '-' + selector : name;
};
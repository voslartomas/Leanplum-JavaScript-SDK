(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Leanplum"] = factory();
	else
		root["Leanplum"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.Constants = mod.exports;
  }
})(this, function (module) {
  'use strict';

  /*
   *
   *  Copyright 2017 Leanplum Inc. All rights reserved.
   *
   *  Licensed under the Apache License, Version 2.0 (the "License");
   *  you may not use this file except in compliance with the License.
   *  You may obtain a copy of the License at
   *
   *      https://www.apache.org/licenses/LICENSE-2.0
   *
   *  Unless required by applicable law or agreed to in writing, software
   *  distributed under the License is distributed on an "AS IS" BASIS,
   *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   *  See the License for the specific language governing permissions and
   *  limitations under the License
   *
   */
  module.exports = {
    METHODS: {
      START: 'start',
      STOP: 'stop',
      ADVANCE: 'advance',
      TRACK: 'track',
      PAUSE_SESSION: 'pauseSession',
      RESUME_SESSION: 'resumeSession',
      PAUSE_STATE: 'pauseState',
      RESUME_STATE: 'resumeState',
      DOWNLOAD_FILE: 'downloadFile',
      MULTI: 'multi',
      SET_VARS: 'setVars',
      GET_VARS: 'getVars',
      SET_USER_ATTRIBUTES: 'setUserAttributes',
      SET_DEVICE_ATTRIBUTES: 'setDeviceAttributes',
      UPLOAD_FILE: 'uploadFile',
      REGISTER_DEVICE: 'registerDevice'
    },

    SDK_VERSION: '1.2.2',

    CLIENT: 'js',

    PARAMS: {
      ACTION: 'action',
      APP_ID: 'appId',
      CLIENT: 'client',
      CLIENT_KEY: 'clientKey',
      DEVICE_ID: 'deviceId',
      SDK_VERSION: 'sdkVersion',
      USER_ID: 'userId',
      NEW_USER_ID: 'newUserId',
      DEV_MODE: 'devMode',
      VERSION_NAME: 'versionName',
      SYSTEM_NAME: 'systemName',
      SYSTEM_VERSION: 'systemVersion',
      BROWSER_NAME: 'browserName',
      BROWSER_VERSION: 'browserVersion',
      DEVICE_NAME: 'deviceName',
      DEVICE_MODEL: 'deviceModel',
      USER_ATTRIBUTES: 'userAttributes',
      LOCALE: 'locale',
      COUNTRY: 'country',
      REGION: 'region',
      CITY: 'city',
      LOCATION: 'location',
      STATE: 'state',
      INFO: 'info',
      EVENT: 'event',
      VALUE: 'value',
      FILENAME: 'filename',
      TIME: 'time',
      DATA: 'data',
      VARS: 'vars',
      FILE: 'file',
      SIZE: 'size',
      VARIATION: 'variation',
      HASH: 'hash',
      EMAIL: 'email',
      VARIABLES: 'vars',
      PARAMS: 'params',
      INCLUDE_DEFAULTS: 'includeDefaults',
      WEB_PUSH_SUBSCRIPTION: 'webPushSubscription'
    },

    KEYS: {
      IS_REGISTERED: 'isRegistered',
      LATEST_VERSION: 'latestVersion',
      VARS: 'vars',
      VARIANTS: 'variants',
      ACTION_METADATA: 'actionMetadata',
      TOKEN: 'token'
    },

    DEFAULT_KEYS: {
      COUNT: '__leanplum_unsynced',
      ITEM: '__leanplum_unsynced_',
      VARIABLES: '__leanplum_variables',
      VARIANTS: '__leanplum_variants',
      ACTION_METADATA: '__leanplum_action_metadata',
      TOKEN: '__leanplum_token',
      DEVICE_ID: '__leanplum_device_id',
      USER_ID: '__leanplum_user_id',
      PUSH_SUBSCRIPTION: '__leanplum_push_subscription'
    },

    VALUES: {
      DETECT: '(detect)'
    }
  };
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.Request = mod.exports;
  }
})(this, function (module) {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _requestQueue = [];
  var _networkTimeoutSeconds = 10;

  /**
   * Ajax functions from:
   *
   * Parse JavaScript SDK
   * Version: 1.1.5
   * Built: Mon Oct 01 2012 17:57:13
   * http://parse.com
   *
   * Copyright 2012 Parse, Inc.
   * The Parse JavaScript SDK is freely distributable under the MIT license.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
   * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
   * DEALINGS IN THE SOFTWARE.
   */

  var Request = function () {
    function Request() {
      _classCallCheck(this, Request);
    }

    _createClass(Request, null, [{
      key: 'setNetworkTimeout',
      value: function setNetworkTimeout(seconds) {
        _networkTimeoutSeconds = seconds;
      }
    }, {
      key: 'ajax',
      value: function ajax(method, url, data, success, error, queued, plainText) {
        if (queued) {
          if (Request._runningRequest) {
            // eslint-disable-next-line prefer-rest-params
            return Request._enqueueRequest(arguments);
          }
          Request._runningRequest = true;
        }

        if (typeof XDomainRequest !== 'undefined') {
          if (location.protocol === 'http:' && url.indexOf('https:') == 0) {
            url = 'http:' + url.substring(6);
          }
          // eslint-disable-next-line prefer-rest-params
          return Request._ajaxIE8.apply(null, arguments);
        }

        var handled = false;

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (handled) {
              return;
            }
            handled = true;

            var response = void 0;
            var ranCallback = false;
            if (plainText) {
              response = xhr.responseText;
            } else {
              try {
                response = JSON.parse(xhr.responseText);
              } catch (e) {
                setTimeout(function () {
                  if (error) {
                    error(null, xhr);
                  }
                }, 0);
                ranCallback = true;
              }
            }

            if (!ranCallback) {
              if (xhr.status >= 200 && xhr.status < 300) {
                setTimeout(function () {
                  if (success) {
                    success(response, xhr);
                  }
                }, 0);
              } else {
                setTimeout(function () {
                  if (error) {
                    error(response, xhr);
                  }
                }, 0);
              }
            }

            if (queued) {
              Request._runningRequest = false;
              Request._dequeueRequest();
            }
          }
        };
        xhr.open(method, url, true);
        xhr.setRequestHeader('Content-Type', 'text/plain'); // Avoid pre-flight.
        xhr.send(data);
        setTimeout(function () {
          if (!handled) {
            xhr.abort();
          }
        }, _networkTimeoutSeconds * 1000);
      }
    }, {
      key: '_ajaxIE8',
      value: function _ajaxIE8(method, url, data, success, error, queued, plainText) {
        var xdr = new XDomainRequest();
        xdr.onload = function () {
          var response = void 0;
          var ranCallback = false;
          if (plainText) {
            response = xdr.responseText;
          } else {
            try {
              response = JSON.parse(xdr.responseText);
            } catch (e) {
              setTimeout(function () {
                if (error) {
                  error(null, xdr);
                }
              }, 0);
              ranCallback = true;
            }
          }
          if (!ranCallback) {
            setTimeout(function () {
              if (success) {
                success(response, xdr);
              }
            }, 0);
          }
          if (queued) {
            Request._runningRequest = false;
            Request._dequeueRequest();
          }
        };
        xdr.onerror = xdr.ontimeout = function () {
          setTimeout(function () {
            if (error) {
              error(null, xdr);
            }
          }, 0);
          if (queued) {
            Request._runningRequest = false;
            Request._dequeueRequest();
          }
        };
        xdr.onprogress = function () {};
        xdr.open(method, url);
        xdr.timeout = _networkTimeoutSeconds * 1000;
        xdr.send(data);
      }
    }, {
      key: '_enqueueRequest',
      value: function _enqueueRequest(args) {
        _requestQueue.push(args);
      }
    }, {
      key: '_dequeueRequest',
      value: function _dequeueRequest() {
        var args = _requestQueue.shift();
        if (args) {
          Request.ajax.apply(null, args);
        }
      }
    }]);

    return Request;
  }();

  module.exports = Request;
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.underscore = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  //     Underscore.js 1.4.2
  //     http://underscorejs.org
  //     (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
  //     Underscore may be freely distributed under the MIT license.
  //       
  // Internal recursive comparison function for `isEqual`.
  function eq(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the Harmony `egal` proposal:
    // http://wiki.ecmascript.org/doku.php?id=harmony:egal.
    if (a === b) return a !== 0 || 1 / a == 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = Object.prototype.toString.call(a);
    if (className != Object.prototype.toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, dates, and booleans are compared by value.
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent;
        // thus, `"5"` is equivalent to `new String("5")`.
        return a == String(b);
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is
        // performed for other numeric values.
        return a != +a ? b != +b : a == 0 ? 1 / a == 1 / b : a == +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are
        // compared by their millisecond representations. Note that invalid
        // dates with millisecond representations of `NaN` are not equivalent.
        return +a == +b;
      // RegExps are compared by their source patterns and flags.
      case '[object RegExp]':
        return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase;
    }
    if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) != 'object' || (typeof b === 'undefined' ? 'undefined' : _typeof(b)) != 'object') return false;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation
    // `JO`.
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] == a) return bStack[length] == b;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    var size = 0;
    var result = true;
    // Recursively compare objects and arrays.
    if (className == '[object Array]') {
      // Compare array lengths to determine if a deep comparison is necessary.
      size = a.length;
      result = size == b.length;
      if (result) {
        // Deep compare the contents, ignoring non-numeric properties.
        while (size--) {
          if (!(result = eq(a[size], b[size], aStack, bStack))) break;
        }
      }
    } else {
      // Objects with different constructors are not equivalent, but `Object`s
      // from different frames are.
      var aCtor = a.constructor;
      var bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor && _.isFunction(bCtor) && bCtor instanceof bCtor)) {
        return false;
      }
      // Deep compare objects.
      for (var _key in a) {
        if (_.has(a, _key)) {
          // Count the expected number of properties.
          size++;
          // Deep compare each member.
          if (!(result = _.has(b, _key) && eq(a[_key], b[_key], aStack, bStack))) {
            break;
          }
        }
      }
      // Ensure that both objects contain the same number of properties.
      if (result) {
        for (key in b) {
          if (_.has(b, key) && !size--) break;
        }
        result = !size;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return result;
  };

  var _ = function () {
    function _() {
      _classCallCheck(this, _);
    }

    _createClass(_, null, [{
      key: 'iextend',
      value: function iextend(obj) {
        // eslint-disable-next-line prefer-rest-params
        each(slice.call(arguments, 1), function (source) {
          for (var prop in source) {
            if ({}.hasOwnProperty.call(source, prop)) {
              obj[prop] = source[prop];
            }
          }
        });
        return obj;
      }
    }, {
      key: 'isFunction',
      value: function isFunction(obj) {
        return typeof obj === 'function';
      }
    }, {
      key: 'has',
      value: function has(obj, key) {
        return hasOwnProperty.call(obj, key);
      }
    }, {
      key: 'isEqual',
      value: function isEqual(a, b) {
        return eq(a, b, [], []);
      }
    }]);

    return _;
  }();

  exports.default = _;
  module.exports = exports['default'];
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, require('./Constants'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.Constants);
    global.ArgsBuilder = mod.exports;
  }
})(this, function (module, _Constants) {
  'use strict';

  var _Constants2 = _interopRequireDefault(_Constants);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var ArgsBuilder = function () {
    /**
     * Create a new empty request argument.
     */
    function ArgsBuilder() {
      _classCallCheck(this, ArgsBuilder);

      this.argString = '';
      this.argValues = {};
    }

    /**
     * Add given key, value to the payload.
     * @param {string} key The key for the value.
     * @param {string} value The value for given key.
     * @return {ArgsBuilder} Returns an object of ArgsBuilder.
     */


    _createClass(ArgsBuilder, [{
      key: 'add',
      value: function add(key, value) {
        if (typeof value === 'undefined') {
          return this;
        }
        if (this.argString) {
          this.argString += '&';
        }
        this.argString += key + '=' + encodeURIComponent(value);
        this.argValues[key] = value;
        return this;
      }
    }, {
      key: 'body',
      value: function body(_body) {
        if (_body) {
          this._body = _body;
          return this;
        }
        return this._body;
      }
    }, {
      key: 'attachApiKeys',
      value: function attachApiKeys(appId, clientKey) {
        return this.add(_Constants2.default.PARAMS.APP_ID, appId).add(_Constants2.default.PARAMS.CLIENT, _Constants2.default.CLIENT).add(_Constants2.default.PARAMS.CLIENT_KEY, clientKey);
      }
    }, {
      key: 'build',
      value: function build() {
        return this.argString;
      }
    }, {
      key: 'buildDict',
      value: function buildDict() {
        return this.argValues;
      }
    }]);

    return ArgsBuilder;
  }();

  ;

  module.exports = ArgsBuilder;
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod);
    global.BrowserDetector = mod.exports;
  }
})(this, function (module) {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  /*
   *
   *  Copyright 2017 Leanplum Inc. All rights reserved.
   *
   *  Licensed under the Apache License, Version 2.0 (the "License");
   *  you may not use this file except in compliance with the License.
   *  You may obtain a copy of the License at
   *
   *      https://www.apache.org/licenses/LICENSE-2.0
   *
   *  Unless required by applicable law or agreed to in writing, software
   *  distributed under the License is distributed on an "AS IS" BASIS,
   *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   *  See the License for the specific language governing permissions and
   *  limitations under the License
   *
   */
  var dataBrowser = [{
    string: navigator.userAgent,
    subString: 'Chrome',
    identity: 'Chrome'
  }, {
    string: navigator.userAgent,
    subString: 'OmniWeb',
    versionSearch: 'OmniWeb/',
    identity: 'OmniWeb'
  }, {
    string: navigator.vendor,
    subString: 'Apple',
    identity: 'Safari',
    versionSearch: 'Version'
  }, {
    prop: window.opera,
    identity: 'Opera',
    versionSearch: 'Version'
  }, {
    string: navigator.vendor,
    subString: 'iCab',
    identity: 'iCab'
  }, {
    string: navigator.vendor,
    subString: 'KDE',
    identity: 'Konqueror'
  }, {
    string: navigator.userAgent,
    subString: 'Firefox',
    identity: 'Firefox'
  }, {
    string: navigator.vendor,
    subString: 'Camino',
    identity: 'Camino'
  }, { // for newer Netscapes (6+)
    string: navigator.userAgent,
    subString: 'Netscape',
    identity: 'Netscape'
  }, {
    string: navigator.userAgent,
    subString: 'MSIE',
    identity: 'Explorer',
    versionSearch: 'MSIE'
  }, {
    string: navigator.userAgent,
    subString: 'Gecko',
    identity: 'Mozilla',
    versionSearch: 'rv'
  }, { // for older Netscapes (4-)
    string: navigator.userAgent,
    subString: 'Mozilla',
    identity: 'Netscape',
    versionSearch: 'Mozilla'
  }];

  var dataOS = [{
    string: navigator.platform,
    subString: 'Win',
    identity: 'Windows'
  }, {
    string: navigator.platform,
    subString: 'Mac',
    identity: 'Mac OS'
  }, {
    string: navigator.userAgent,
    subString: 'iPhone',
    identity: 'iOS'
  }, {
    string: navigator.platform,
    subString: 'Linux',
    identity: 'Linux'
  }];

  // Browser detection. Source: http://www.quirksmode.org/js/detect.html

  var BrowserDetector = function () {
    function BrowserDetector() {
      _classCallCheck(this, BrowserDetector);

      this.browser = this.searchString(dataBrowser) || 'An unknown browser';
      this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || 'an unknown version';
      this.OS = this.searchString(dataOS) || 'an unknown OS';
    }

    _createClass(BrowserDetector, [{
      key: 'searchString',
      value: function searchString(data) {
        for (var i = 0; i < data.length; i++) {
          var dataString = data[i].string;
          var dataProp = data[i].prop;
          this.versionSearchString = data[i].versionSearch || data[i].identity;
          if (dataString) {
            if (dataString.indexOf(data[i].subString) != -1) return data[i].identity;
          } else if (dataProp) return data[i].identity;
        }
      }
    }, {
      key: 'searchVersion',
      value: function searchVersion(dataString) {
        if (!dataString) {
          return;
        }
        var index = dataString.indexOf(this.versionSearchString);
        if (index == -1) {
          return;
        }
        return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
      }
    }]);

    return BrowserDetector;
  }();

  module.exports = BrowserDetector;
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(2), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require("./underscore"), require("./Constants"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.underscore, global.Constants);
    global.PushManager = mod.exports;
  }
})(this, function (module, exports, _underscore, _Constants) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _underscore2 = _interopRequireDefault(_underscore);

  var _Constants2 = _interopRequireDefault(_Constants);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var APPLICATION_SERVER_PUBLIC_KEY = 'BInWPpWntfR39rgXSP04pqdmEdDGa50z6zqbMvxyxJCwzXIuSpSh8C888-CfJ82WELl7Xe8cjA' + 'nfCt-3vK0Ci68';

  var self = void 0;
  var _leanplum = void 0;
  var isSupported = false;
  var isSubscribed = false;
  var serviceWorkerRegistration = null;

  /**
   * Push Manager handles the registration and subscription for web push.
   */

  var PushManager = function () {
    /**
     * Creates a new PushManager object.
     * @param  {[type]} leanplum Reference to the main class to
     *                           avoid circle import.
     */
    function PushManager(leanplum) {
      _classCallCheck(this, PushManager);

      _leanplum = leanplum;
      self = this;
      if (navigator && navigator.serviceWorker && 'serviceWorker' in navigator && 'PushManager' in window) {
        isSupported = true;
        self.register();
      }
    }

    /**
     * Whether or not web push is supported in the browser.
     * @return {Boolean} True if supported, else false.
     */


    _createClass(PushManager, [{
      key: "isWebPushSupported",
      value: function isWebPushSupported() {
        return isSupported;
      }
    }, {
      key: "isWebPushSubscribed",
      value: function isWebPushSubscribed() {
        if (!isSupported) {
          return new Promise(function (resolve, reject) {
            reject('Leanplum: Push messaging is not supported.');
          });
        }
        return this._getServiceWorkerRegistration().then(function (registration) {
          return new Promise(function (resolve) {
            if (!registration) {
              resolve(false);
            } else {
              registration.pushManager.getSubscription().then(function (subscription) {
                isSubscribed = subscription !== null;
                if (isSubscribed) {
                  self._updateNewSubscriptionOnServer(subscription);
                }
                resolve(isSubscribed);
              });
            }
          });
        });
      }
    }, {
      key: "register",
      value: function register(serviceWorkerUrl, callback) {
        if (!isSupported) {
          console.log('Leanplum: Push messaging is not supported.');
          callback(false);
        }
        navigator.serviceWorker.register(serviceWorkerUrl ? serviceWorkerUrl : '/sw.min.js').then(function (registration) {
          serviceWorkerRegistration = registration;

          // Set the initial subscription value
          serviceWorkerRegistration.pushManager.getSubscription().then(function (subscription) {
            isSubscribed = !(subscription === null);
            if (isSubscribed) {
              self._updateNewSubscriptionOnServer(subscription);
            }
            if (callback) {
              callback(isSubscribed);
            }
          });
        }).catch(function (error) {
          console.log('Leanplum: Service Worker Error: ', error);
        });
      }
    }, {
      key: "subscribeUser",
      value: function subscribeUser() {
        var applicationServerKey = this._urlB64ToUint8Array(APPLICATION_SERVER_PUBLIC_KEY);
        return new Promise(function (resolve, reject) {
          return serviceWorkerRegistration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: applicationServerKey
          }).then(function (subscription) {
            if (subscription) {
              self._updateNewSubscriptionOnServer(subscription);
              isSubscribed = true;
              return resolve(isSubscribed);
            }
            isSubscribed = false;
            return reject();
          }).catch(function (err) {
            return reject('Leanplum: Failed to subscribe the user: ' + err);
          });
        });
      }
    }, {
      key: "unsubscribeUser",
      value: function unsubscribeUser() {
        return new Promise(function (resolve, reject) {
          serviceWorkerRegistration.pushManager.getSubscription().then(function (subscription) {
            if (subscription) {
              return subscription.unsubscribe();
            }
            return reject();
          }).catch(function (error) {
            reject('Leanplum: Error unsubscribing: ' + error);
          }).then(function (success) {
            if (success) {
              isSubscribed = false;
              return resolve();
            }
            return reject();
          });
        });
      }
    }, {
      key: "_getServiceWorkerRegistration",
      value: function _getServiceWorkerRegistration() {
        return new Promise(function (resolve) {
          if (serviceWorkerRegistration) {
            resolve(serviceWorkerRegistration);
          } else {
            navigator.serviceWorker.getRegistration().then(function (registration) {
              resolve(registration);
            });
          }
        });
      }
    }, {
      key: "_urlB64ToUint8Array",
      value: function _urlB64ToUint8Array(base64String) {
        var padding = '='.repeat((4 - base64String.length % 4) % 4);
        var base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');

        var rawData = window.atob(base64);
        var outputArray = new Uint8Array(rawData.length);

        for (var i = 0; i < rawData.length; ++i) {
          outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
      }
    }, {
      key: "_prepareSubscription",
      value: function _prepareSubscription(subscription) {
        var key = subscription.getKey ? subscription.getKey('p256dh') : '';
        var auth = subscription.getKey ? subscription.getKey('auth') : '';
        var keyAscii = btoa(String.fromCharCode.apply(null, new Uint8Array(key)));
        var authAscii = btoa(String.fromCharCode.apply(null, new Uint8Array(auth)));
        return {
          endpoint: subscription.endpoint,
          key: keyAscii,
          auth: authAscii
        };
      }
    }, {
      key: "_updateNewSubscriptionOnServer",
      value: function _updateNewSubscriptionOnServer(subscription) {
        if (subscription) {
          var preparedSubscription = this._prepareSubscription(subscription);
          var preparedSubscriptionString = JSON.stringify(preparedSubscription);
          var existingSubscriptionString = _leanplum._getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.PUSH_SUBSCRIPTION);
          if (!_underscore2.default.isEqual(existingSubscriptionString, preparedSubscriptionString)) {
            _leanplum._saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.PUSH_SUBSCRIPTION, preparedSubscriptionString);
            _leanplum._setSubscription(preparedSubscriptionString);
          }
        }
      }
    }]);

    return PushManager;
  }();

  exports.default = PushManager;
  module.exports = exports["default"];
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, require('./Request'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.Request);
    global.SocketIoClient = mod.exports;
  }
})(this, function (module, _Request) {
  'use strict';

  var _Request2 = _interopRequireDefault(_Request);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var SocketIoClient = function () {
    /**
     * Initializes a new SocketIoClient, not connected by default.
     */
    function SocketIoClient() {
      _classCallCheck(this, SocketIoClient);

      this.connected = false;
      this.connecting = false;
    }

    /**
     * Connects to the given socketHost.
     * @param  {string} socketHost The host to connect to.
     */


    _createClass(SocketIoClient, [{
      key: 'connect',
      value: function connect(socketHost) {
        var self = this;
        self.connecting = true;
        _Request2.default.ajax('POST', 'https://' + socketHost + '/socket.io/1', '', function (line) {
          var parts = line.split(':');
          var session = parts[0];
          var heartbeat = parseInt(parts[1]) / 2 * 1000;
          self.socket = new WebSocket('wss://' + socketHost + '/socket.io/1/websocket/' + session);
          var heartbeatInterval = null;
          self.socket.onopen = function () {
            self.connected = true;
            self.connecting = false;
            if (self.onopen) {
              self.onopen();
            }
            heartbeatInterval = setInterval(function () {
              self.socket.send('2:::');
            }, heartbeat);
          };
          self.socket.onclose = function () {
            self.connected = false;
            clearInterval(heartbeatInterval);
            if (self.onclose) {
              self.onclose();
            }
          };
          self.socket.onmessage = function (event) {
            var parts = event.data.split(':');
            var code = parseInt(parts[0]);
            if (code == 2) {
              self.socket.send('2::');
            } else if (code == 5) {
              var messageId = parts[1];
              var data = JSON.parse(parts.slice(3).join(':'));
              var _event = data['name'];
              var args = data['args'];
              if (messageId) {
                self.socket.send('6:::' + messageId);
              }
              if (self.onmessage) {
                self.onmessage(_event, args);
              }
            } else if (code == 7) {
              console.log('Socket error: ' + event.data);
            }
          };
          self.socket.onerror = function (event) {
            self.socket.close();
            if (self.onerror) {
              self.onerror(event);
            }
          };
        }, null, false, true // nullm, queued, plainText
        );
      }
    }, {
      key: 'send',
      value: function send(name, args) {
        if (!this.connected) {
          console.log('Leanplum: Socket is not connected.');
          return;
        }
        this.socket.send('5:::' + JSON.stringify({
          'name': name,
          'args': args
        }));
      }
    }]);

    return SocketIoClient;
  }();

  module.exports = SocketIoClient;
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(0), __webpack_require__(3), __webpack_require__(4), __webpack_require__(6), __webpack_require__(1), __webpack_require__(5), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, require("./Constants"), require("./ArgsBuilder"), require("./BrowserDetector"), require("./SocketIoClient"), require("./Request"), require("./PushManager"), require("./underscore.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.Constants, global.ArgsBuilder, global.BrowserDetector, global.SocketIoClient, global.Request, global.PushManager, global.underscore);
    global.Leanplum = mod.exports;
  }
})(this, function (module, _Constants, _ArgsBuilder, _BrowserDetector, _SocketIoClient, _Request, _PushManager, _underscore) {
  "use strict";

  var _Constants2 = _interopRequireDefault(_Constants);

  var _ArgsBuilder2 = _interopRequireDefault(_ArgsBuilder);

  var _BrowserDetector2 = _interopRequireDefault(_BrowserDetector);

  var _SocketIoClient2 = _interopRequireDefault(_SocketIoClient);

  var _Request2 = _interopRequireDefault(_Request);

  var _PushManager2 = _interopRequireDefault(_PushManager);

  var _underscore2 = _interopRequireDefault(_underscore);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _variablesChangedHandlers = [];
  var _variants = [];
  var _startHandlers = [];
  var _actionMetadata = {};
  var _token = '';
  var _batchEnabled = true;
  var _batchCooldown = 5;
  var _apiPath = 'https://www.leanplum.com/api';
  var _socketHost = 'dev.leanplum.com';
  var _localStorageEnabled = undefined;
  var _alternateLocalStorage = {};
  var _browserDetector = new _BrowserDetector2.default();

  /**
   * @preserve Leanplum Javascript SDK.
   * Copyright 2016, Leanplum, Inc. All rights reserved.
   *
   * You may not distribute this source code without prior written permission
   * from Leanplum.
   */

  var Leanplum = function () {
    function Leanplum() {
      _classCallCheck(this, Leanplum);
    }

    _createClass(Leanplum, null, [{
      key: "setApiPath",
      value: function setApiPath(apiPath) {
        if (!apiPath) {
          return;
        }
        _apiPath = apiPath;
      }
    }, {
      key: "setEmail",
      value: function setEmail(email) {
        Leanplum._email = email;
      }
    }, {
      key: "setNetworkTimeout",
      value: function setNetworkTimeout(seconds) {
        _Request2.default.setNetworkTimeout(seconds);
      }
    }, {
      key: "setAppIdForDevelopmentMode",
      value: function setAppIdForDevelopmentMode(appId, accessKey) {
        Leanplum._appId = appId;
        Leanplum._clientKey = accessKey;
        Leanplum._devMode = true;
      }
    }, {
      key: "setAppIdForProductionMode",
      value: function setAppIdForProductionMode(appId, accessKey) {
        Leanplum._appId = appId;
        Leanplum._clientKey = accessKey;
        Leanplum._devMode = false;
      }
    }, {
      key: "setSocketHost",
      value: function setSocketHost(host) {
        _socketHost = host;
      }
    }, {
      key: "setDeviceId",
      value: function setDeviceId(deviceId) {
        Leanplum._deviceId = deviceId;
      }
    }, {
      key: "setAppVersion",
      value: function setAppVersion(versionName) {
        Leanplum._versionName = versionName;
      }
    }, {
      key: "setDeviceName",
      value: function setDeviceName(deviceName) {
        Leanplum._deviceName = deviceName;
      }
    }, {
      key: "setDeviceModel",
      value: function setDeviceModel(deviceModel) {
        Leanplum._deviceModel = deviceModel;
      }
    }, {
      key: "setSystemName",
      value: function setSystemName(systemName) {
        Leanplum._systemName = systemName;
      }
    }, {
      key: "setSystemVersion",
      value: function setSystemVersion(systemVersion) {
        Leanplum._systemVersion = systemVersion;
      }
    }, {
      key: "setVariables",
      value: function setVariables(variables) {
        Leanplum._variables = variables;
      }
    }, {
      key: "setRequestBatching",
      value: function setRequestBatching(batchEnabled, cooldownSeconds) {
        _batchEnabled = batchEnabled;
        _batchCooldown = cooldownSeconds;
      }
    }, {
      key: "getVariables",
      value: function getVariables(variables) {
        return Leanplum._merged !== undefined ? Leanplum._merged : Leanplum._variables;
      }
    }, {
      key: "getVariable",
      value: function getVariable(args) {
        var current = Leanplum.getVariables();
        for (var i = 0; i < arguments.length; i++) {
          current = current[arguments.i];
        }
        return current;
      }
    }, {
      key: "getVariants",
      value: function getVariants() {
        return _variants || [];
      }
    }, {
      key: "addStartResponseHandler",
      value: function addStartResponseHandler(handler) {
        _startHandlers.push(handler);
        if (Leanplum._hasStarted) {
          handler(Leanplum._startSuccessful);
        }
      }
    }, {
      key: "addVariablesChangedHandler",
      value: function addVariablesChangedHandler(handler) {
        _variablesChangedHandlers.push(handler);
        if (Leanplum._hasReceivedDiffs) {
          handler();
        }
      }
    }, {
      key: "removeStartResponseHandler",
      value: function removeStartResponseHandler(handler) {
        var idx = _startHandlers.indexOf(handler);
        if (idx >= 0) {
          _startHandlers.splice(idx, 1);
        }
      }
    }, {
      key: "removeVariablesChangedHandler",
      value: function removeVariablesChangedHandler(handler) {
        var idx = _variablesChangedHandlers.indexOf(handler);
        if (idx >= 0) {
          _variablesChangedHandlers.splice(idx, 1);
        }
      }
    }, {
      key: "start",
      value: function start(userId, userAttributes, callback) {
        // Overloads.
        if (typeof userId == 'function') {
          callback = userId;
          userAttributes = {};
          userId = null;
        } else if ((typeof userId === "undefined" ? "undefined" : _typeof(userId)) == 'object' && userId !== null && userId !== undefined) {
          callback = userAttributes;
          userAttributes = userId;
          userId = null;
        } else if (typeof userAttributes == 'function') {
          callback = userAttributes;
          userAttributes = {};
        }
        Leanplum._userId = userId;
        if (callback) {
          Leanplum.addStartResponseHandler(callback);
        }

        // TODO: Add referer.
        var args = new _ArgsBuilder2.default().add(_Constants2.default.PARAMS.USER_ATTRIBUTES, JSON.stringify(userAttributes)).add(_Constants2.default.PARAMS.COUNTRY, _Constants2.default.VALUES.DETECT).add(_Constants2.default.PARAMS.REGION, _Constants2.default.VALUES.DETECT).add(_Constants2.default.PARAMS.CITY, _Constants2.default.VALUES.DETECT).add(_Constants2.default.PARAMS.LOCATION, _Constants2.default.VALUES.DETECT).add(_Constants2.default.PARAMS.SYSTEM_NAME, Leanplum._systemName || _browserDetector.OS).add(_Constants2.default.PARAMS.SYSTEM_VERSION, '' + (Leanplum._systemVersion || '')).add(_Constants2.default.PARAMS.BROWSER_NAME, _browserDetector.browser).add(_Constants2.default.PARAMS.BROWSER_VERSION, '' + _browserDetector.version).add(_Constants2.default.PARAMS.LOCALE, _Constants2.default.VALUES.DETECT).add(_Constants2.default.PARAMS.DEVICE_NAME, Leanplum._deviceName || _browserDetector.browser + ' ' + _browserDetector.version).add(_Constants2.default.PARAMS.DEVICE_MODEL, Leanplum._deviceModel || 'Web Browser').add(_Constants2.default.PARAMS.INCLUDE_DEFAULTS, false);

        // Issue request.
        Leanplum._request(_Constants2.default.METHODS.START, args, {
          queued: true,
          sendNow: true,
          response: function response(_response) {
            Leanplum._hasStarted = true;
            var startResponse = Leanplum._getLastResponse(_response);
            if (Leanplum._isResponseSuccess(startResponse)) {
              Leanplum._startSuccessful = true;

              if (Leanplum._devMode) {
                var latestVersion = startResponse[_Constants2.default.KEYS.LATEST_VERSION];
                if (latestVersion) {
                  console.log('A newer version of Leanplum, ' + latestVersion + ', is available. ' + 'Go to leanplum.com to download it.');
                }
                if (WebSocket) {
                  Leanplum._socketIOConnect();
                } else {
                  console.log('Your browser doesn\'t support WebSockets.');
                }
              }

              Leanplum._setContent(startResponse[_Constants2.default.KEYS.VARS], startResponse[_Constants2.default.KEYS.VARIANTS], startResponse[_Constants2.default.KEYS.ACTION_METADATA]);
              _token = startResponse[_Constants2.default.KEYS.TOKEN];
            } else {
              Leanplum._startSuccessful = false;
              Leanplum._loadDiffs();
            }
            for (var i = 0; i < _startHandlers.length; i++) {
              _startHandlers[i](Leanplum._startSuccessful);
            }
          }
        });
      }
    }, {
      key: "startFromCache",
      value: function startFromCache(userId, userAttributes, callback) {
        // Overloads.
        if (typeof userId == 'function') {
          callback = userId;
          userAttributes = {};
          userId = null;
        } else if ((typeof userId === "undefined" ? "undefined" : _typeof(userId)) == 'object' && userId !== null && userId !== undefined) {
          callback = userAttributes;
          userAttributes = userId;
          userId = null;
        } else if (typeof userAttributes == 'function') {
          callback = userAttributes;
          userAttributes = {};
        }
        Leanplum._userId = userId;
        if (callback) {
          Leanplum.addStartResponseHandler(callback);
        }

        Leanplum._hasStarted = true;
        Leanplum._startSuccessful = true;
        if (Leanplum._devMode) {
          if (WebSocket) {
            Leanplum._socketIOConnect();
          } else {
            console.log('Your browser doesn\'t support WebSockets.');
          }
        }
        Leanplum._loadDiffs();
        for (var i = 0; i < _startHandlers.length; i++) {
          _startHandlers[i](Leanplum._startSuccessful);
        }
      }
    }, {
      key: "stop",
      value: function stop() {
        Leanplum._request(_Constants2.default.METHODS.STOP, undefined, {
          sendNow: true,
          queued: true
        });
      }
    }, {
      key: "pauseSession",
      value: function pauseSession() {
        Leanplum._request(_Constants2.default.METHODS.PAUSE_SESSION, undefined, {
          sendNow: true,
          queued: true
        });
      }
    }, {
      key: "resumeSession",
      value: function resumeSession() {
        Leanplum._request(_Constants2.default.METHODS.RESUME_SESSION, undefined, {
          sendNow: true,
          queued: true
        });
      }
    }, {
      key: "pauseState",
      value: function pauseState() {
        Leanplum._request(_Constants2.default.METHODS.PAUSE_STATE, undefined, {
          queued: true
        });
      }
    }, {
      key: "resumeState",
      value: function resumeState() {
        Leanplum._request(_Constants2.default.METHODS.RESUME_STATE, undefined, {
          queued: true
        });
      }
    }, {
      key: "setUserId",
      value: function setUserId(userId) {
        Leanplum.setUserAttributes(userId);
      }
    }, {
      key: "setUserAttributes",
      value: function setUserAttributes(userId, userAttributes) {
        if (userAttributes === undefined) {
          if ((typeof userId === "undefined" ? "undefined" : _typeof(userId)) == 'object') {
            userAttributes = userId;
            userId = undefined;
          } else if (typeof userId != 'string') {
            console.log('Leanplum: setUserAttributes expects a string or an ' + 'object');
            return;
          }
        }
        Leanplum._request(_Constants2.default.METHODS.SET_USER_ATTRIBUTES, new _ArgsBuilder2.default().add(_Constants2.default.PARAMS.USER_ATTRIBUTES, userAttributes ? JSON.stringify(userAttributes) : undefined).add(_Constants2.default.PARAMS.NEW_USER_ID, userId), {
          queued: true
        });
        if (userId) {
          Leanplum._userId = userId;
          Leanplum._saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.USER_ID, Leanplum._userId);
        }
      }
    }, {
      key: "track",
      value: function track(event, value, info, params) {
        // Overloads.
        // object && !null && !undefined -> params
        // string -> info, params
        // *, object && !null && !undefined -> value, params
        if ((typeof value === "undefined" ? "undefined" : _typeof(value)) == 'object' && value !== null && value !== undefined) {
          params = value;
          info = undefined;
          value = undefined;
        } else if (typeof value == 'string') {
          params = info;
          info = value;
          value = undefined;
        } else if ((typeof info === "undefined" ? "undefined" : _typeof(info)) == 'object' && info !== null && info !== undefined) {
          params = info;
          info = undefined;
        }
        Leanplum._request(_Constants2.default.METHODS.TRACK, new _ArgsBuilder2.default().add(_Constants2.default.PARAMS.EVENT, event).add(_Constants2.default.PARAMS.VALUE, value || 0.0).add(_Constants2.default.PARAMS.INFO, info).add(_Constants2.default.PARAMS.PARAMS, JSON.stringify(params)), {
          queued: true
        });
      }
    }, {
      key: "advanceTo",
      value: function advanceTo(state, info, params) {
        // Overloads.
        // string|null|undefined, * -> info, params
        // object && !null && !undefined -> params
        if ((typeof info === "undefined" ? "undefined" : _typeof(info)) == 'object' && info !== null && info !== undefined) {
          params = info;
          info = undefined;
        }

        Leanplum._request(_Constants2.default.METHODS.ADVANCE, new _ArgsBuilder2.default().add(_Constants2.default.PARAMS.STATE, state).add(_Constants2.default.PARAMS.INFO, info).add(_Constants2.default.PARAMS.PARAMS, JSON.stringify(params)), {
          queued: true
        });
      }
    }, {
      key: "isWebPushSupported",
      value: function isWebPushSupported() {
        if (_pushManager) {
          return _pushManager.isWebPushSupported();
        }
        return false;
      }
    }, {
      key: "isWebPushSubscribed",
      value: function isWebPushSubscribed() {
        return _pushManager.isWebPushSubscribed();
      }
    }, {
      key: "registerForWebPush",
      value: function registerForWebPush(serviceWorkerUrl) {
        return new Promise(function (resolve, reject) {
          if (_pushManager && _pushManager.isWebPushSupported()) {
            return _pushManager.register(serviceWorkerUrl, function (isSubscribed) {
              if (isSubscribed) {
                return resolve(true);
              }
              return _pushManager.subscribeUser();
            });
          } else {
            return reject('Leanplum: WebPush is not supported.');
          }
        });
      }
    }, {
      key: "unregisterFromWebPush",
      value: function unregisterFromWebPush() {
        return _pushManager.unsubscribeUser();
      }
    }, {
      key: "_setSubscription",
      value: function _setSubscription(subscription) {
        if (!subscription) {
          return;
        }
        Leanplum._request(_Constants2.default.METHODS.SET_DEVICE_ATTRIBUTES, new _ArgsBuilder2.default().add(_Constants2.default.PARAMS.WEB_PUSH_SUBSCRIPTION, subscription), {
          queued: false,
          sendNow: true
        });
      }
    }, {
      key: "_socketIOConnect",
      value: function _socketIOConnect() {
        var client = new _SocketIoClient2.default();
        var authSent = false;
        client.onopen = function () {
          if (!authSent) {
            console.log('Leanplum: Connected to development server.');
            var args = {};
            args[_Constants2.default.PARAMS.APP_ID] = Leanplum._appId;
            args[_Constants2.default.PARAMS.DEVICE_ID] = Leanplum._deviceId;
            client.send('auth', args);
            authSent = true;
          }
        };
        client.onerror = function (event) {
          console.log('Leanplum: Socket error', event);
        };
        client.onmessage = function (event, args) {
          if (event == 'updateVars') {
            Leanplum._request(_Constants2.default.METHODS.GET_VARS, new _ArgsBuilder2.default().add(_Constants2.default.PARAMS.INCLUDE_DEFAULTS, false), {
              queued: false,
              sendNow: true,
              response: function response(_response2) {
                var getVarsResponse = Leanplum._getLastResponse(_response2);
                var values = getVarsResponse[_Constants2.default.KEYS.VARS];
                var variants = getVarsResponse[_Constants2.default.KEYS.VARIANTS];
                var actionMetadata = getVarsResponse[_Constants2.default.KEYS.ACTION_METADATA];
                if (!_underscore2.default.isEqual(values, Leanplum._diffs)) {
                  Leanplum._setContent(values, variants, actionMetadata);
                }
              }
            });
          } else if (event == 'getVariables') {
            Leanplum.sendVariables();
            client.send('getContentResponse', {
              'updated': true
            });
          } else if (event == 'getActions') {
            // Unsupported in JavaScript SDK.
            client.send('getContentResponse', {
              'updated': false
            });
          } else if (event == 'registerDevice') {
            alert('Your device has been registered to ' + args[0]['email'] + '.');
          }
        };
        client.onclose = function () {
          console.log('Leanplum: Disconnected to development server.');
          authSent = false;
        };
        client.connect(_socketHost);
        setInterval(function () {
          if (!client.connected && !client.connecting) {
            client.connect(_socketHost);
          }
        }, 5000);
      }
    }, {
      key: "_setContent",
      value: function _setContent(diffs, variants, actionMetadata) {
        Leanplum._diffs = diffs;
        _variants = variants;
        _actionMetadata = actionMetadata;
        Leanplum._hasReceivedDiffs = true;
        Leanplum._merged = Leanplum._mergeHelper(Leanplum._variables, diffs);
        Leanplum._saveDiffs();
        for (var i = 0; i < _variablesChangedHandlers.length; i++) {
          _variablesChangedHandlers[i]();
        }
      }
    }, {
      key: "_mergeHelper",
      value: function _mergeHelper(vars, diff) {
        if (typeof diff == 'number' || typeof diff == 'boolean' || typeof diff == 'string') {
          return diff;
        }
        if (diff === null || diff === undefined) {
          return vars;
        }

        var objIterator = function objIterator(obj) {
          return function (f) {
            if (obj instanceof Array) {
              for (var i = 0; i < obj.length; i++) {
                f(obj[i]);
              }
            } else {
              for (var attr in obj) {
                if ({}.hasOwnProperty.call(obj, attr)) {
                  f(attr);
                }
              }
            }
          };
        };
        var varsIterator = objIterator(vars);
        var diffIterator = objIterator(diff);

        // Infer that the diffs is an array if the vars value doesn't exist to tell
        // us the type.
        var isArray = false;
        if (vars == null) {
          if (!(diff instanceof Array)) {
            isArray = null;
            for (var attr in diff) {
              if (isArray === null) {
                isArray = true;
              }
              if (!(typeof attr == 'string')) {
                isArray = false;
                break;
              }
              if (attr.length < 3 || attr.charAt(0) != '[' || attr.charAt(attr.length - 1) != ']') {
                isArray = false;
                break;
              }
              var varSubscript = attr.substring(1, attr.length - 1);
              if (!('' + parseInt(varSubscript)) == varSubscript) {
                isArray = false;
                break;
              }
            }
          }
        }

        // Merge arrays.
        if (vars instanceof Array || isArray) {
          var _merged = [];
          varsIterator(function (attr) {
            _merged.push(attr);
          });
          diffIterator(function (varSubscript) {
            var subscript = parseInt(varSubscript.substring(1, varSubscript.length - 1));
            var diffValue = diff[varSubscript];
            while (subscript >= _merged.length) {
              _merged.push(null);
            }
            _merged[subscript] = Leanplum._mergeHelper(_merged[subscript], diffValue);
          });
          return _merged;
        }

        // Merge dictionaries.
        var merged = {};
        varsIterator(function (attr) {
          if (diff[attr] === null || diff[attr] === undefined) {
            merged[attr] = vars[attr];
          }
        });
        diffIterator(function (attr) {
          merged[attr] = Leanplum._mergeHelper(vars != null ? vars[attr] : null, diff[attr]);
        });
        return merged;
      }
    }, {
      key: "_sendVariables",
      value: function _sendVariables() {
        var body = {};
        body[_Constants2.default.PARAMS.VARIABLES] = Leanplum._variables;
        Leanplum._request(_Constants2.default.METHODS.SET_VARS, new _ArgsBuilder2.default().body(JSON.stringify(body)), {
          sendNow: true
        });
      }
    }, {
      key: "_loadDiffs",
      value: function _loadDiffs() {
        try {
          Leanplum._setContent(JSON.parse(Leanplum._getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.VARIABLES) || null), JSON.parse(Leanplum._getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.VARIANTS) || null), JSON.parse(Leanplum._getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.ACTION_METADATA) || null));
          _token = Leanplum._getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.TOKEN);
        } catch (e) {
          console.log('Leanplum: Invalid diffs: ' + e);
        }
      }
    }, {
      key: "_saveDiffs",
      value: function _saveDiffs() {
        Leanplum._saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.VARIABLES, JSON.stringify(Leanplum._diffs || {}));
        Leanplum._saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.VARIANTS, JSON.stringify(_variants || []));
        Leanplum._saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.ACTION_METADATA, JSON.stringify(_actionMetadata || {}));
        Leanplum._saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.TOKEN, _token);
      }
    }, {
      key: "_saveRequestForLater",
      value: function _saveRequestForLater(args) {
        var count = Leanplum._getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.COUNT) || 0;
        var itemKey = _Constants2.default.DEFAULT_KEYS.ITEM + count;
        Leanplum._saveToLocalStorage(itemKey, JSON.stringify(args));
        count++;
        Leanplum._saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.COUNT, count);
      }
    }, {
      key: "_popUnsentRequests",
      value: function _popUnsentRequests() {
        var requestData = [];
        var count = Leanplum._getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.COUNT) || 0;
        Leanplum._removeFromLocalStorage(_Constants2.default.DEFAULT_KEYS.COUNT);
        for (var i = 0; i < count; i++) {
          var itemKey = _Constants2.default.DEFAULT_KEYS.ITEM + i;
          try {
            var requestArgs = JSON.parse(Leanplum._getFromLocalStorage(itemKey));
            requestData.push(requestArgs);
          } catch (e) {}
          Leanplum._removeFromLocalStorage(itemKey);
        }
        return requestData;
      }
    }, {
      key: "_request",
      value: function _request(action, params, options) {
        options = options || {};
        params = params || new _ArgsBuilder2.default();

        // Get or create device ID and user ID.
        if (!Leanplum._deviceId) {
          Leanplum._deviceId = Leanplum._getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.DEVICE_ID);
        }
        if (!Leanplum._deviceId) {
          var id = '';
          var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' + '0123456789';
          for (var i = 0; i < 16; i++) {
            id += possible.charAt(Math.floor(Math.random() * possible.length));
          }
          Leanplum._deviceId = id;
          Leanplum._saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.DEVICE_ID, id);
        }
        if (!Leanplum._userId) {
          Leanplum._userId = Leanplum._getFromLocalStorage(_Constants2.default.DEFAULT_KEYS.USER_ID);
          if (!Leanplum._userId) {
            Leanplum._userId = Leanplum._deviceId;
          }
        }
        Leanplum._saveToLocalStorage(_Constants2.default.DEFAULT_KEYS.USER_ID, Leanplum._userId);

        var argsBuilder = params.attachApiKeys(Leanplum._appId, Leanplum._clientKey).add(_Constants2.default.PARAMS.SDK_VERSION, _Constants2.default.SDK_VERSION).add(_Constants2.default.PARAMS.DEVICE_ID, Leanplum._deviceId).add(_Constants2.default.PARAMS.USER_ID, Leanplum._userId).add(_Constants2.default.PARAMS.ACTION, action).add(_Constants2.default.PARAMS.VERSION_NAME, Leanplum._versionName).add(_Constants2.default.PARAMS.DEV_MODE, Leanplum._devMode).add(_Constants2.default.PARAMS.TIME, '' + new Date().getTime() / 1000);
        var success = options.success || options.response;
        var error = options.error || options.response;

        if (!Leanplum._appId || !Leanplum._clientKey) {
          var err = 'Leanplum App ID and client key are not set. Make sure you ' + 'are calling setAppIdForDevelopmentMode or setAppIdForProductionMode ' + 'before issuing API calls.';
          console.error(err);
          if (error) error(err);
          return;
        }

        if (params.body()) {
          _Request2.default.ajax('POST', _apiPath + '?' + argsBuilder.build(), params.body(), success, error, options.queued);
          return;
        }

        var sendNow = Leanplum._devMode || options.sendNow || !_batchEnabled;

        var sendUnsentRequests = function sendUnsentRequests() {
          var requestsToSend = Leanplum._popUnsentRequests();
          if (requestsToSend.length > 0) {
            var requestData = JSON.stringify({
              'data': requestsToSend
            });
            var multiRequestArgs = new _ArgsBuilder2.default().attachApiKeys(Leanplum._appId, Leanplum._clientKey).add(_Constants2.default.PARAMS.SDK_VERSION, _Constants2.default.SDK_VERSION).add(_Constants2.default.PARAMS.ACTION, _Constants2.default.METHODS.MULTI).add(_Constants2.default.PARAMS.TIME, '' + new Date().getTime() / 1000).build();
            _Request2.default.ajax('POST', _apiPath + '?' + multiRequestArgs, requestData, success, error, options.queued);
          }
        };

        // Deal with cooldown.
        if (!sendNow && _batchCooldown) {
          var now = new Date().getTime() / 1000;
          if (!Leanplum._lastRequestTime || now - Leanplum._lastRequestTime >= _batchCooldown) {
            sendNow = true;
            Leanplum._lastRequestTime = now;
          } else {
            if (!Leanplum._cooldownTimeout) {
              Leanplum._cooldownTimeout = setTimeout(function () {
                Leanplum._cooldownTimeout = null;
                Leanplum._lastRequestTime = new Date().getTime() / 1000;
                sendUnsentRequests();
              }, (_batchCooldown - (now - Leanplum._lastRequestTime)) * 1000);
            }
          }
        }

        Leanplum._saveRequestForLater(argsBuilder.buildDict());
        if (sendNow) {
          sendUnsentRequests();
        }
      }
    }, {
      key: "_numResponses",
      value: function _numResponses(response) {
        if (!response || !response['response']) {
          return 0;
        }
        return response['response'].length;
      }
    }, {
      key: "_getResponseAt",
      value: function _getResponseAt(response, index) {
        if (!response || !response['response']) {
          return null;
        }
        return response['response'][index];
      }
    }, {
      key: "_getLastResponse",
      value: function _getLastResponse(response) {
        var count = Leanplum._numResponses(response);
        if (count > 0) {
          return Leanplum._getResponseAt(response, count - 1);
        } else {
          return null;
        }
      }
    }, {
      key: "_isResponseSuccess",
      value: function _isResponseSuccess(response) {
        if (!response) {
          return false;
        }
        return response['success'] ? true : false;
      }
    }, {
      key: "_getResponseError",
      value: function _getResponseError(response) {
        if (!response) {
          return null;
        }
        var error = response['error'];
        if (!error) {
          return null;
        }
        return error['message'];
      }
    }, {
      key: "_getFromLocalStorage",
      value: function _getFromLocalStorage(key) {
        if (_localStorageEnabled === false) {
          return _alternateLocalStorage[key];
        }
        return localStorage[key];
      }
    }, {
      key: "_saveToLocalStorage",
      value: function _saveToLocalStorage(key, value) {
        if (_localStorageEnabled === false) {
          _alternateLocalStorage[key] = value;
          return;
        }
        try {
          localStorage[key] = value;
        } catch (e) {
          _localStorageEnabled = false;
          Leanplum._saveToLocalStorage(key, value);
        }
      }
    }, {
      key: "_removeFromLocalStorage",
      value: function _removeFromLocalStorage(key) {
        if (_localStorageEnabled === false) {
          delete _alternateLocalStorage[key];
          return;
        }
        try {
          localStorage.removeItem(key);
        } catch (e) {
          _localStorageEnabled = false;
          Leanplum._removeFromLocalStorage(key);
        }
      }
    }]);

    return Leanplum;
  }();

  var _pushManager = new _PushManager2.default(Leanplum);

  module.exports = Leanplum;
});

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxOWQyYTc0YjI0NWEzNmZkODhiZSIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9SZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy91bmRlcnNjb3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9BcmdzQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQnJvd3NlckRldGVjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9QdXNoTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU29ja2V0SW9DbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xlYW5wbHVtLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJNRVRIT0RTIiwiU1RBUlQiLCJTVE9QIiwiQURWQU5DRSIsIlRSQUNLIiwiUEFVU0VfU0VTU0lPTiIsIlJFU1VNRV9TRVNTSU9OIiwiUEFVU0VfU1RBVEUiLCJSRVNVTUVfU1RBVEUiLCJET1dOTE9BRF9GSUxFIiwiTVVMVEkiLCJTRVRfVkFSUyIsIkdFVF9WQVJTIiwiU0VUX1VTRVJfQVRUUklCVVRFUyIsIlNFVF9ERVZJQ0VfQVRUUklCVVRFUyIsIlVQTE9BRF9GSUxFIiwiUkVHSVNURVJfREVWSUNFIiwiU0RLX1ZFUlNJT04iLCJDTElFTlQiLCJQQVJBTVMiLCJBQ1RJT04iLCJBUFBfSUQiLCJDTElFTlRfS0VZIiwiREVWSUNFX0lEIiwiVVNFUl9JRCIsIk5FV19VU0VSX0lEIiwiREVWX01PREUiLCJWRVJTSU9OX05BTUUiLCJTWVNURU1fTkFNRSIsIlNZU1RFTV9WRVJTSU9OIiwiQlJPV1NFUl9OQU1FIiwiQlJPV1NFUl9WRVJTSU9OIiwiREVWSUNFX05BTUUiLCJERVZJQ0VfTU9ERUwiLCJVU0VSX0FUVFJJQlVURVMiLCJMT0NBTEUiLCJDT1VOVFJZIiwiUkVHSU9OIiwiQ0lUWSIsIkxPQ0FUSU9OIiwiU1RBVEUiLCJJTkZPIiwiRVZFTlQiLCJWQUxVRSIsIkZJTEVOQU1FIiwiVElNRSIsIkRBVEEiLCJWQVJTIiwiRklMRSIsIlNJWkUiLCJWQVJJQVRJT04iLCJIQVNIIiwiRU1BSUwiLCJWQVJJQUJMRVMiLCJJTkNMVURFX0RFRkFVTFRTIiwiV0VCX1BVU0hfU1VCU0NSSVBUSU9OIiwiS0VZUyIsIklTX1JFR0lTVEVSRUQiLCJMQVRFU1RfVkVSU0lPTiIsIlZBUklBTlRTIiwiQUNUSU9OX01FVEFEQVRBIiwiVE9LRU4iLCJERUZBVUxUX0tFWVMiLCJDT1VOVCIsIklURU0iLCJQVVNIX1NVQlNDUklQVElPTiIsIlZBTFVFUyIsIkRFVEVDVCIsIl9yZXF1ZXN0UXVldWUiLCJfbmV0d29ya1RpbWVvdXRTZWNvbmRzIiwiUmVxdWVzdCIsInNlY29uZHMiLCJtZXRob2QiLCJ1cmwiLCJkYXRhIiwic3VjY2VzcyIsImVycm9yIiwicXVldWVkIiwicGxhaW5UZXh0IiwiX3J1bm5pbmdSZXF1ZXN0IiwiX2VucXVldWVSZXF1ZXN0IiwiYXJndW1lbnRzIiwiWERvbWFpblJlcXVlc3QiLCJsb2NhdGlvbiIsInByb3RvY29sIiwiaW5kZXhPZiIsInN1YnN0cmluZyIsIl9hamF4SUU4IiwiYXBwbHkiLCJoYW5kbGVkIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwicmVzcG9uc2UiLCJyYW5DYWxsYmFjayIsInJlc3BvbnNlVGV4dCIsIkpTT04iLCJwYXJzZSIsImUiLCJzZXRUaW1lb3V0Iiwic3RhdHVzIiwiX2RlcXVldWVSZXF1ZXN0Iiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJzZW5kIiwiYWJvcnQiLCJ4ZHIiLCJvbmxvYWQiLCJvbmVycm9yIiwib250aW1lb3V0Iiwib25wcm9ncmVzcyIsInRpbWVvdXQiLCJhcmdzIiwicHVzaCIsInNoaWZ0IiwiYWpheCIsImVxIiwiYSIsImIiLCJhU3RhY2siLCJiU3RhY2siLCJfIiwiX3dyYXBwZWQiLCJjbGFzc05hbWUiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJTdHJpbmciLCJzb3VyY2UiLCJnbG9iYWwiLCJtdWx0aWxpbmUiLCJpZ25vcmVDYXNlIiwibGVuZ3RoIiwic2l6ZSIsInJlc3VsdCIsImFDdG9yIiwiY29uc3RydWN0b3IiLCJiQ3RvciIsImlzRnVuY3Rpb24iLCJrZXkiLCJoYXMiLCJwb3AiLCJvYmoiLCJlYWNoIiwic2xpY2UiLCJwcm9wIiwiaGFzT3duUHJvcGVydHkiLCJBcmdzQnVpbGRlciIsImFyZ1N0cmluZyIsImFyZ1ZhbHVlcyIsInZhbHVlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiYm9keSIsIl9ib2R5IiwiYXBwSWQiLCJjbGllbnRLZXkiLCJhZGQiLCJkYXRhQnJvd3NlciIsInN0cmluZyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInN1YlN0cmluZyIsImlkZW50aXR5IiwidmVyc2lvblNlYXJjaCIsInZlbmRvciIsIndpbmRvdyIsIm9wZXJhIiwiZGF0YU9TIiwicGxhdGZvcm0iLCJCcm93c2VyRGV0ZWN0b3IiLCJicm93c2VyIiwic2VhcmNoU3RyaW5nIiwidmVyc2lvbiIsInNlYXJjaFZlcnNpb24iLCJhcHBWZXJzaW9uIiwiT1MiLCJpIiwiZGF0YVN0cmluZyIsImRhdGFQcm9wIiwidmVyc2lvblNlYXJjaFN0cmluZyIsImluZGV4IiwicGFyc2VGbG9hdCIsIkFQUExJQ0FUSU9OX1NFUlZFUl9QVUJMSUNfS0VZIiwic2VsZiIsIl9sZWFucGx1bSIsImlzU3VwcG9ydGVkIiwiaXNTdWJzY3JpYmVkIiwic2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbiIsIlB1c2hNYW5hZ2VyIiwibGVhbnBsdW0iLCJzZXJ2aWNlV29ya2VyIiwicmVnaXN0ZXIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIl9nZXRTZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uIiwidGhlbiIsInJlZ2lzdHJhdGlvbiIsInB1c2hNYW5hZ2VyIiwiZ2V0U3Vic2NyaXB0aW9uIiwic3Vic2NyaXB0aW9uIiwiX3VwZGF0ZU5ld1N1YnNjcmlwdGlvbk9uU2VydmVyIiwic2VydmljZVdvcmtlclVybCIsImNhbGxiYWNrIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiYXBwbGljYXRpb25TZXJ2ZXJLZXkiLCJfdXJsQjY0VG9VaW50OEFycmF5Iiwic3Vic2NyaWJlIiwidXNlclZpc2libGVPbmx5IiwiZXJyIiwidW5zdWJzY3JpYmUiLCJnZXRSZWdpc3RyYXRpb24iLCJiYXNlNjRTdHJpbmciLCJwYWRkaW5nIiwicmVwZWF0IiwiYmFzZTY0IiwicmVwbGFjZSIsInJhd0RhdGEiLCJhdG9iIiwib3V0cHV0QXJyYXkiLCJVaW50OEFycmF5IiwiY2hhckNvZGVBdCIsImdldEtleSIsImF1dGgiLCJrZXlBc2NpaSIsImJ0b2EiLCJmcm9tQ2hhckNvZGUiLCJhdXRoQXNjaWkiLCJlbmRwb2ludCIsInByZXBhcmVkU3Vic2NyaXB0aW9uIiwiX3ByZXBhcmVTdWJzY3JpcHRpb24iLCJwcmVwYXJlZFN1YnNjcmlwdGlvblN0cmluZyIsInN0cmluZ2lmeSIsImV4aXN0aW5nU3Vic2NyaXB0aW9uU3RyaW5nIiwiX2dldEZyb21Mb2NhbFN0b3JhZ2UiLCJpc0VxdWFsIiwiX3NhdmVUb0xvY2FsU3RvcmFnZSIsIl9zZXRTdWJzY3JpcHRpb24iLCJTb2NrZXRJb0NsaWVudCIsImNvbm5lY3RlZCIsImNvbm5lY3RpbmciLCJzb2NrZXRIb3N0IiwibGluZSIsInBhcnRzIiwic3BsaXQiLCJzZXNzaW9uIiwiaGVhcnRiZWF0IiwicGFyc2VJbnQiLCJzb2NrZXQiLCJXZWJTb2NrZXQiLCJoZWFydGJlYXRJbnRlcnZhbCIsIm9ub3BlbiIsInNldEludGVydmFsIiwib25jbG9zZSIsImNsZWFySW50ZXJ2YWwiLCJvbm1lc3NhZ2UiLCJldmVudCIsImNvZGUiLCJtZXNzYWdlSWQiLCJqb2luIiwiY2xvc2UiLCJuYW1lIiwiX3ZhcmlhYmxlc0NoYW5nZWRIYW5kbGVycyIsIl92YXJpYW50cyIsIl9zdGFydEhhbmRsZXJzIiwiX2FjdGlvbk1ldGFkYXRhIiwiX3Rva2VuIiwiX2JhdGNoRW5hYmxlZCIsIl9iYXRjaENvb2xkb3duIiwiX2FwaVBhdGgiLCJfc29ja2V0SG9zdCIsIl9sb2NhbFN0b3JhZ2VFbmFibGVkIiwidW5kZWZpbmVkIiwiX2FsdGVybmF0ZUxvY2FsU3RvcmFnZSIsIl9icm93c2VyRGV0ZWN0b3IiLCJMZWFucGx1bSIsImFwaVBhdGgiLCJlbWFpbCIsIl9lbWFpbCIsInNldE5ldHdvcmtUaW1lb3V0IiwiYWNjZXNzS2V5IiwiX2FwcElkIiwiX2NsaWVudEtleSIsIl9kZXZNb2RlIiwiaG9zdCIsImRldmljZUlkIiwiX2RldmljZUlkIiwidmVyc2lvbk5hbWUiLCJfdmVyc2lvbk5hbWUiLCJkZXZpY2VOYW1lIiwiX2RldmljZU5hbWUiLCJkZXZpY2VNb2RlbCIsIl9kZXZpY2VNb2RlbCIsInN5c3RlbU5hbWUiLCJfc3lzdGVtTmFtZSIsInN5c3RlbVZlcnNpb24iLCJfc3lzdGVtVmVyc2lvbiIsInZhcmlhYmxlcyIsIl92YXJpYWJsZXMiLCJiYXRjaEVuYWJsZWQiLCJjb29sZG93blNlY29uZHMiLCJfbWVyZ2VkIiwiY3VycmVudCIsImdldFZhcmlhYmxlcyIsImhhbmRsZXIiLCJfaGFzU3RhcnRlZCIsIl9zdGFydFN1Y2Nlc3NmdWwiLCJfaGFzUmVjZWl2ZWREaWZmcyIsImlkeCIsInNwbGljZSIsInVzZXJJZCIsInVzZXJBdHRyaWJ1dGVzIiwiX3VzZXJJZCIsImFkZFN0YXJ0UmVzcG9uc2VIYW5kbGVyIiwiX3JlcXVlc3QiLCJzZW5kTm93Iiwic3RhcnRSZXNwb25zZSIsIl9nZXRMYXN0UmVzcG9uc2UiLCJfaXNSZXNwb25zZVN1Y2Nlc3MiLCJsYXRlc3RWZXJzaW9uIiwiX3NvY2tldElPQ29ubmVjdCIsIl9zZXRDb250ZW50IiwiX2xvYWREaWZmcyIsInNldFVzZXJBdHRyaWJ1dGVzIiwiaW5mbyIsInBhcmFtcyIsInN0YXRlIiwiX3B1c2hNYW5hZ2VyIiwiaXNXZWJQdXNoU3VwcG9ydGVkIiwiaXNXZWJQdXNoU3Vic2NyaWJlZCIsInN1YnNjcmliZVVzZXIiLCJ1bnN1YnNjcmliZVVzZXIiLCJjbGllbnQiLCJhdXRoU2VudCIsImdldFZhcnNSZXNwb25zZSIsInZhbHVlcyIsInZhcmlhbnRzIiwiYWN0aW9uTWV0YWRhdGEiLCJfZGlmZnMiLCJzZW5kVmFyaWFibGVzIiwiYWxlcnQiLCJjb25uZWN0IiwiZGlmZnMiLCJfbWVyZ2VIZWxwZXIiLCJfc2F2ZURpZmZzIiwidmFycyIsImRpZmYiLCJvYmpJdGVyYXRvciIsImYiLCJBcnJheSIsImF0dHIiLCJ2YXJzSXRlcmF0b3IiLCJkaWZmSXRlcmF0b3IiLCJpc0FycmF5IiwiY2hhckF0IiwidmFyU3Vic2NyaXB0IiwibWVyZ2VkIiwic3Vic2NyaXB0IiwiZGlmZlZhbHVlIiwiY291bnQiLCJpdGVtS2V5IiwicmVxdWVzdERhdGEiLCJfcmVtb3ZlRnJvbUxvY2FsU3RvcmFnZSIsInJlcXVlc3RBcmdzIiwiYWN0aW9uIiwib3B0aW9ucyIsImlkIiwicG9zc2libGUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJhcmdzQnVpbGRlciIsImF0dGFjaEFwaUtleXMiLCJEYXRlIiwiZ2V0VGltZSIsImJ1aWxkIiwic2VuZFVuc2VudFJlcXVlc3RzIiwicmVxdWVzdHNUb1NlbmQiLCJfcG9wVW5zZW50UmVxdWVzdHMiLCJtdWx0aVJlcXVlc3RBcmdzIiwibm93IiwiX2xhc3RSZXF1ZXN0VGltZSIsIl9jb29sZG93blRpbWVvdXQiLCJfc2F2ZVJlcXVlc3RGb3JMYXRlciIsImJ1aWxkRGljdCIsIl9udW1SZXNwb25zZXMiLCJfZ2V0UmVzcG9uc2VBdCIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7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Ozs7O0FBR0gsTUFBSThMLGVBQWUsMEJBQWdCcEQsUUFBaEIsQ0FBbkI7O0FBRUF6UixTQUFPQyxPQUFQLEdBQWlCd1IsUUFBakIiLCJmaWxlIjoibGVhbnBsdW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJMZWFucGx1bVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJMZWFucGx1bVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxOWQyYTc0YjI0NWEzNmZkODhiZSIsIi8qXG4gKlxuICogIENvcHlyaWdodCAyMDE3IExlYW5wbHVtIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlXG4gKlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgTUVUSE9EUzoge1xuICAgIFNUQVJUOiAnc3RhcnQnLFxuICAgIFNUT1A6ICdzdG9wJyxcbiAgICBBRFZBTkNFOiAnYWR2YW5jZScsXG4gICAgVFJBQ0s6ICd0cmFjaycsXG4gICAgUEFVU0VfU0VTU0lPTjogJ3BhdXNlU2Vzc2lvbicsXG4gICAgUkVTVU1FX1NFU1NJT046ICdyZXN1bWVTZXNzaW9uJyxcbiAgICBQQVVTRV9TVEFURTogJ3BhdXNlU3RhdGUnLFxuICAgIFJFU1VNRV9TVEFURTogJ3Jlc3VtZVN0YXRlJyxcbiAgICBET1dOTE9BRF9GSUxFOiAnZG93bmxvYWRGaWxlJyxcbiAgICBNVUxUSTogJ211bHRpJyxcbiAgICBTRVRfVkFSUzogJ3NldFZhcnMnLFxuICAgIEdFVF9WQVJTOiAnZ2V0VmFycycsXG4gICAgU0VUX1VTRVJfQVRUUklCVVRFUzogJ3NldFVzZXJBdHRyaWJ1dGVzJyxcbiAgICBTRVRfREVWSUNFX0FUVFJJQlVURVM6ICdzZXREZXZpY2VBdHRyaWJ1dGVzJyxcbiAgICBVUExPQURfRklMRTogJ3VwbG9hZEZpbGUnLFxuICAgIFJFR0lTVEVSX0RFVklDRTogJ3JlZ2lzdGVyRGV2aWNlJyxcbiAgfSxcblxuICBTREtfVkVSU0lPTjogJzEuMi4yJyxcblxuICBDTElFTlQ6ICdqcycsXG5cbiAgUEFSQU1TOiB7XG4gICAgQUNUSU9OOiAnYWN0aW9uJyxcbiAgICBBUFBfSUQ6ICdhcHBJZCcsXG4gICAgQ0xJRU5UOiAnY2xpZW50JyxcbiAgICBDTElFTlRfS0VZOiAnY2xpZW50S2V5JyxcbiAgICBERVZJQ0VfSUQ6ICdkZXZpY2VJZCcsXG4gICAgU0RLX1ZFUlNJT046ICdzZGtWZXJzaW9uJyxcbiAgICBVU0VSX0lEOiAndXNlcklkJyxcbiAgICBORVdfVVNFUl9JRDogJ25ld1VzZXJJZCcsXG4gICAgREVWX01PREU6ICdkZXZNb2RlJyxcbiAgICBWRVJTSU9OX05BTUU6ICd2ZXJzaW9uTmFtZScsXG4gICAgU1lTVEVNX05BTUU6ICdzeXN0ZW1OYW1lJyxcbiAgICBTWVNURU1fVkVSU0lPTjogJ3N5c3RlbVZlcnNpb24nLFxuICAgIEJST1dTRVJfTkFNRTogJ2Jyb3dzZXJOYW1lJyxcbiAgICBCUk9XU0VSX1ZFUlNJT046ICdicm93c2VyVmVyc2lvbicsXG4gICAgREVWSUNFX05BTUU6ICdkZXZpY2VOYW1lJyxcbiAgICBERVZJQ0VfTU9ERUw6ICdkZXZpY2VNb2RlbCcsXG4gICAgVVNFUl9BVFRSSUJVVEVTOiAndXNlckF0dHJpYnV0ZXMnLFxuICAgIExPQ0FMRTogJ2xvY2FsZScsXG4gICAgQ09VTlRSWTogJ2NvdW50cnknLFxuICAgIFJFR0lPTjogJ3JlZ2lvbicsXG4gICAgQ0lUWTogJ2NpdHknLFxuICAgIExPQ0FUSU9OOiAnbG9jYXRpb24nLFxuICAgIFNUQVRFOiAnc3RhdGUnLFxuICAgIElORk86ICdpbmZvJyxcbiAgICBFVkVOVDogJ2V2ZW50JyxcbiAgICBWQUxVRTogJ3ZhbHVlJyxcbiAgICBGSUxFTkFNRTogJ2ZpbGVuYW1lJyxcbiAgICBUSU1FOiAndGltZScsXG4gICAgREFUQTogJ2RhdGEnLFxuICAgIFZBUlM6ICd2YXJzJyxcbiAgICBGSUxFOiAnZmlsZScsXG4gICAgU0laRTogJ3NpemUnLFxuICAgIFZBUklBVElPTjogJ3ZhcmlhdGlvbicsXG4gICAgSEFTSDogJ2hhc2gnLFxuICAgIEVNQUlMOiAnZW1haWwnLFxuICAgIFZBUklBQkxFUzogJ3ZhcnMnLFxuICAgIFBBUkFNUzogJ3BhcmFtcycsXG4gICAgSU5DTFVERV9ERUZBVUxUUzogJ2luY2x1ZGVEZWZhdWx0cycsXG4gICAgV0VCX1BVU0hfU1VCU0NSSVBUSU9OOiAnd2ViUHVzaFN1YnNjcmlwdGlvbicsXG4gIH0sXG5cbiAgS0VZUzoge1xuICAgIElTX1JFR0lTVEVSRUQ6ICdpc1JlZ2lzdGVyZWQnLFxuICAgIExBVEVTVF9WRVJTSU9OOiAnbGF0ZXN0VmVyc2lvbicsXG4gICAgVkFSUzogJ3ZhcnMnLFxuICAgIFZBUklBTlRTOiAndmFyaWFudHMnLFxuICAgIEFDVElPTl9NRVRBREFUQTogJ2FjdGlvbk1ldGFkYXRhJyxcbiAgICBUT0tFTjogJ3Rva2VuJyxcbiAgfSxcblxuICBERUZBVUxUX0tFWVM6IHtcbiAgICBDT1VOVDogJ19fbGVhbnBsdW1fdW5zeW5jZWQnLFxuICAgIElURU06ICdfX2xlYW5wbHVtX3Vuc3luY2VkXycsXG4gICAgVkFSSUFCTEVTOiAnX19sZWFucGx1bV92YXJpYWJsZXMnLFxuICAgIFZBUklBTlRTOiAnX19sZWFucGx1bV92YXJpYW50cycsXG4gICAgQUNUSU9OX01FVEFEQVRBOiAnX19sZWFucGx1bV9hY3Rpb25fbWV0YWRhdGEnLFxuICAgIFRPS0VOOiAnX19sZWFucGx1bV90b2tlbicsXG4gICAgREVWSUNFX0lEOiAnX19sZWFucGx1bV9kZXZpY2VfaWQnLFxuICAgIFVTRVJfSUQ6ICdfX2xlYW5wbHVtX3VzZXJfaWQnLFxuICAgIFBVU0hfU1VCU0NSSVBUSU9OOiAnX19sZWFucGx1bV9wdXNoX3N1YnNjcmlwdGlvbicsXG4gIH0sXG5cbiAgVkFMVUVTOiB7XG4gICAgREVURUNUOiAnKGRldGVjdCknLFxuICB9LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db25zdGFudHMuanMiLCJsZXQgX3JlcXVlc3RRdWV1ZSA9IFtdO1xubGV0IF9uZXR3b3JrVGltZW91dFNlY29uZHMgPSAxMDtcblxuLyoqXG4gKiBBamF4IGZ1bmN0aW9ucyBmcm9tOlxuICpcbiAqIFBhcnNlIEphdmFTY3JpcHQgU0RLXG4gKiBWZXJzaW9uOiAxLjEuNVxuICogQnVpbHQ6IE1vbiBPY3QgMDEgMjAxMiAxNzo1NzoxM1xuICogaHR0cDovL3BhcnNlLmNvbVxuICpcbiAqIENvcHlyaWdodCAyMDEyIFBhcnNlLCBJbmMuXG4gKiBUaGUgUGFyc2UgSmF2YVNjcmlwdCBTREsgaXMgZnJlZWx5IGRpc3RyaWJ1dGFibGUgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICogRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUlxuICogREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICovXG5jbGFzcyBSZXF1ZXN0IHtcbiAgLyoqXG4gICAqIFNldHMgdGhlIG5ldHdvcmsgdGltZW91dC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHNlY29uZHMgVGhlIHRpbWVvdXQgaW4gc2Vjb25kcy5cbiAgICovXG4gIHN0YXRpYyBzZXROZXR3b3JrVGltZW91dChzZWNvbmRzKSB7XG4gICAgX25ldHdvcmtUaW1lb3V0U2Vjb25kcyA9IHNlY29uZHM7XG4gIH07XG5cbiAgc3RhdGljIGFqYXgobWV0aG9kLCB1cmwsIGRhdGEsIHN1Y2Nlc3MsIGVycm9yLCBxdWV1ZWQsIHBsYWluVGV4dCkge1xuICAgIGlmIChxdWV1ZWQpIHtcbiAgICAgIGlmIChSZXF1ZXN0Ll9ydW5uaW5nUmVxdWVzdCkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXJlc3QtcGFyYW1zXG4gICAgICAgIHJldHVybiBSZXF1ZXN0Ll9lbnF1ZXVlUmVxdWVzdChhcmd1bWVudHMpO1xuICAgICAgfVxuICAgICAgUmVxdWVzdC5fcnVubmluZ1JlcXVlc3QgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YoWERvbWFpblJlcXVlc3QpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKGxvY2F0aW9uLnByb3RvY29sID09PSAnaHR0cDonICYmIHVybC5pbmRleE9mKCdodHRwczonKSA9PSAwKSB7XG4gICAgICAgIHVybCA9ICdodHRwOicgKyB1cmwuc3Vic3RyaW5nKDYpO1xuICAgICAgfVxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuICAgICAgcmV0dXJuIFJlcXVlc3QuX2FqYXhJRTguYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBsZXQgaGFuZGxlZCA9IGZhbHNlO1xuXG4gICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgaWYgKGhhbmRsZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaGFuZGxlZCA9IHRydWU7XG5cbiAgICAgICAgbGV0IHJlc3BvbnNlO1xuICAgICAgICBsZXQgcmFuQ2FsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgaWYgKHBsYWluVGV4dCkge1xuICAgICAgICAgIHJlc3BvbnNlID0geGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBlcnJvcihudWxsLCB4aHIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgIHJhbkNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJhbkNhbGxiYWNrKSB7XG4gICAgICAgICAgaWYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCAzMDApIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzcG9uc2UsIHhocik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IocmVzcG9uc2UsIHhocik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChxdWV1ZWQpIHtcbiAgICAgICAgICBSZXF1ZXN0Ll9ydW5uaW5nUmVxdWVzdCA9IGZhbHNlO1xuICAgICAgICAgIFJlcXVlc3QuX2RlcXVldWVSZXF1ZXN0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIHhoci5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ3RleHQvcGxhaW4nKTsgLy8gQXZvaWQgcHJlLWZsaWdodC5cbiAgICB4aHIuc2VuZChkYXRhKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghaGFuZGxlZCkge1xuICAgICAgICB4aHIuYWJvcnQoKTtcbiAgICAgIH1cbiAgICB9LCBfbmV0d29ya1RpbWVvdXRTZWNvbmRzICogMTAwMCk7XG4gIH07XG5cbiAgc3RhdGljIF9hamF4SUU4KG1ldGhvZCwgdXJsLCBkYXRhLCBzdWNjZXNzLCBlcnJvciwgcXVldWVkLCBwbGFpblRleHQpIHtcbiAgICBsZXQgeGRyID0gbmV3IFhEb21haW5SZXF1ZXN0KCk7XG4gICAgeGRyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCByZXNwb25zZTtcbiAgICAgIGxldCByYW5DYWxsYmFjayA9IGZhbHNlO1xuICAgICAgaWYgKHBsYWluVGV4dCkge1xuICAgICAgICByZXNwb25zZSA9IHhkci5yZXNwb25zZVRleHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJlc3BvbnNlID0gSlNPTi5wYXJzZSh4ZHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIGVycm9yKG51bGwsIHhkcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgcmFuQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIXJhbkNhbGxiYWNrKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICBzdWNjZXNzKHJlc3BvbnNlLCB4ZHIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgMCk7XG4gICAgICB9XG4gICAgICBpZiAocXVldWVkKSB7XG4gICAgICAgIFJlcXVlc3QuX3J1bm5pbmdSZXF1ZXN0ID0gZmFsc2U7XG4gICAgICAgIFJlcXVlc3QuX2RlcXVldWVSZXF1ZXN0KCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB4ZHIub25lcnJvciA9IHhkci5vbnRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgZXJyb3IobnVsbCwgeGRyKTtcbiAgICAgICAgfVxuICAgICAgfSwgMCk7XG4gICAgICBpZiAocXVldWVkKSB7XG4gICAgICAgIFJlcXVlc3QuX3J1bm5pbmdSZXF1ZXN0ID0gZmFsc2U7XG4gICAgICAgIFJlcXVlc3QuX2RlcXVldWVSZXF1ZXN0KCk7XG4gICAgICB9XG4gICAgfTtcbiAgICB4ZHIub25wcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB9O1xuICAgIHhkci5vcGVuKG1ldGhvZCwgdXJsKTtcbiAgICB4ZHIudGltZW91dCA9IF9uZXR3b3JrVGltZW91dFNlY29uZHMgKiAxMDAwO1xuICAgIHhkci5zZW5kKGRhdGEpO1xuICB9O1xuXG4gIHN0YXRpYyBfZW5xdWV1ZVJlcXVlc3QoYXJncykge1xuICAgIF9yZXF1ZXN0UXVldWUucHVzaChhcmdzKTtcbiAgfTtcblxuICBzdGF0aWMgX2RlcXVldWVSZXF1ZXN0KCkge1xuICAgIGxldCBhcmdzID0gX3JlcXVlc3RRdWV1ZS5zaGlmdCgpO1xuICAgIGlmIChhcmdzKSB7XG4gICAgICBSZXF1ZXN0LmFqYXguYXBwbHkobnVsbCwgYXJncyk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlcXVlc3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVxdWVzdC5qcyIsIi8vICAgICBVbmRlcnNjb3JlLmpzIDEuNC4yXG4vLyAgICAgaHR0cDovL3VuZGVyc2NvcmVqcy5vcmdcbi8vICAgICAoYykgMjAwOS0yMDEyIEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBJbmMuXG4vLyAgICAgVW5kZXJzY29yZSBtYXkgYmUgZnJlZWx5IGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbi8vICAgICAgIFxuLy8gSW50ZXJuYWwgcmVjdXJzaXZlIGNvbXBhcmlzb24gZnVuY3Rpb24gZm9yIGBpc0VxdWFsYC5cbmZ1bmN0aW9uIGVxKGEsIGIsIGFTdGFjaywgYlN0YWNrKSB7XG4gIC8vIElkZW50aWNhbCBvYmplY3RzIGFyZSBlcXVhbC4gYDAgPT09IC0wYCwgYnV0IHRoZXkgYXJlbid0IGlkZW50aWNhbC5cbiAgLy8gU2VlIHRoZSBIYXJtb255IGBlZ2FsYCBwcm9wb3NhbDpcbiAgLy8gaHR0cDovL3dpa2kuZWNtYXNjcmlwdC5vcmcvZG9rdS5waHA/aWQ9aGFybW9ueTplZ2FsLlxuICBpZiAoYSA9PT0gYikgcmV0dXJuIGEgIT09IDAgfHwgMSAvIGEgPT0gMSAvIGI7XG4gIC8vIEEgc3RyaWN0IGNvbXBhcmlzb24gaXMgbmVjZXNzYXJ5IGJlY2F1c2UgYG51bGwgPT0gdW5kZWZpbmVkYC5cbiAgaWYgKGEgPT0gbnVsbCB8fCBiID09IG51bGwpIHJldHVybiBhID09PSBiO1xuICAvLyBVbndyYXAgYW55IHdyYXBwZWQgb2JqZWN0cy5cbiAgaWYgKGEgaW5zdGFuY2VvZiBfKSBhID0gYS5fd3JhcHBlZDtcbiAgaWYgKGIgaW5zdGFuY2VvZiBfKSBiID0gYi5fd3JhcHBlZDtcbiAgLy8gQ29tcGFyZSBgW1tDbGFzc11dYCBuYW1lcy5cbiAgbGV0IGNsYXNzTmFtZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKTtcbiAgaWYgKGNsYXNzTmFtZSAhPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYikpIHJldHVybiBmYWxzZTtcbiAgc3dpdGNoIChjbGFzc05hbWUpIHtcbiAgICAgIC8vIFN0cmluZ3MsIG51bWJlcnMsIGRhdGVzLCBhbmQgYm9vbGVhbnMgYXJlIGNvbXBhcmVkIGJ5IHZhbHVlLlxuICAgIGNhc2UgJ1tvYmplY3QgU3RyaW5nXSc6XG4gICAgICAvLyBQcmltaXRpdmVzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIG9iamVjdCB3cmFwcGVycyBhcmUgZXF1aXZhbGVudDtcbiAgICAgIC8vIHRodXMsIGBcIjVcImAgaXMgZXF1aXZhbGVudCB0byBgbmV3IFN0cmluZyhcIjVcIilgLlxuICAgICAgcmV0dXJuIGEgPT0gU3RyaW5nKGIpO1xuICAgIGNhc2UgJ1tvYmplY3QgTnVtYmVyXSc6XG4gICAgICAvLyBgTmFOYHMgYXJlIGVxdWl2YWxlbnQsIGJ1dCBub24tcmVmbGV4aXZlLiBBbiBgZWdhbGAgY29tcGFyaXNvbiBpc1xuICAgICAgLy8gcGVyZm9ybWVkIGZvciBvdGhlciBudW1lcmljIHZhbHVlcy5cbiAgICAgIHJldHVybiBhICE9ICthID8gYiAhPSArYiA6IChhID09IDAgPyAxIC8gYSA9PSAxIC8gYiA6IGEgPT0gK2IpO1xuICAgIGNhc2UgJ1tvYmplY3QgRGF0ZV0nOlxuICAgIGNhc2UgJ1tvYmplY3QgQm9vbGVhbl0nOlxuICAgICAgLy8gQ29lcmNlIGRhdGVzIGFuZCBib29sZWFucyB0byBudW1lcmljIHByaW1pdGl2ZSB2YWx1ZXMuIERhdGVzIGFyZVxuICAgICAgLy8gY29tcGFyZWQgYnkgdGhlaXIgbWlsbGlzZWNvbmQgcmVwcmVzZW50YXRpb25zLiBOb3RlIHRoYXQgaW52YWxpZFxuICAgICAgLy8gZGF0ZXMgd2l0aCBtaWxsaXNlY29uZCByZXByZXNlbnRhdGlvbnMgb2YgYE5hTmAgYXJlIG5vdCBlcXVpdmFsZW50LlxuICAgICAgcmV0dXJuICthID09ICtiO1xuICAgICAgLy8gUmVnRXhwcyBhcmUgY29tcGFyZWQgYnkgdGhlaXIgc291cmNlIHBhdHRlcm5zIGFuZCBmbGFncy5cbiAgICBjYXNlICdbb2JqZWN0IFJlZ0V4cF0nOlxuICAgICAgcmV0dXJuIGEuc291cmNlID09IGIuc291cmNlICYmXG4gICAgICAgICAgYS5nbG9iYWwgPT0gYi5nbG9iYWwgJiZcbiAgICAgICAgICBhLm11bHRpbGluZSA9PSBiLm11bHRpbGluZSAmJlxuICAgICAgICAgIGEuaWdub3JlQ2FzZSA9PSBiLmlnbm9yZUNhc2U7XG4gIH1cbiAgaWYgKHR5cGVvZiBhICE9ICdvYmplY3QnIHx8IHR5cGVvZiBiICE9ICdvYmplY3QnKSByZXR1cm4gZmFsc2U7XG4gIC8vIEFzc3VtZSBlcXVhbGl0eSBmb3IgY3ljbGljIHN0cnVjdHVyZXMuIFRoZSBhbGdvcml0aG0gZm9yIGRldGVjdGluZyBjeWNsaWNcbiAgLy8gc3RydWN0dXJlcyBpcyBhZGFwdGVkIGZyb20gRVMgNS4xIHNlY3Rpb24gMTUuMTIuMywgYWJzdHJhY3Qgb3BlcmF0aW9uXG4gIC8vIGBKT2AuXG4gIGxldCBsZW5ndGggPSBhU3RhY2subGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAvLyBMaW5lYXIgc2VhcmNoLiBQZXJmb3JtYW5jZSBpcyBpbnZlcnNlbHkgcHJvcG9ydGlvbmFsIHRvIHRoZSBudW1iZXIgb2ZcbiAgICAvLyB1bmlxdWUgbmVzdGVkIHN0cnVjdHVyZXMuXG4gICAgaWYgKGFTdGFja1tsZW5ndGhdID09IGEpIHJldHVybiBiU3RhY2tbbGVuZ3RoXSA9PSBiO1xuICB9XG4gIC8vIEFkZCB0aGUgZmlyc3Qgb2JqZWN0IHRvIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgYVN0YWNrLnB1c2goYSk7XG4gIGJTdGFjay5wdXNoKGIpO1xuICBsZXQgc2l6ZSA9IDA7XG4gIGxldCByZXN1bHQgPSB0cnVlO1xuICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgYW5kIGFycmF5cy5cbiAgaWYgKGNsYXNzTmFtZSA9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgLy8gQ29tcGFyZSBhcnJheSBsZW5ndGhzIHRvIGRldGVybWluZSBpZiBhIGRlZXAgY29tcGFyaXNvbiBpcyBuZWNlc3NhcnkuXG4gICAgc2l6ZSA9IGEubGVuZ3RoO1xuICAgIHJlc3VsdCA9IHNpemUgPT0gYi5sZW5ndGg7XG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgLy8gRGVlcCBjb21wYXJlIHRoZSBjb250ZW50cywgaWdub3Jpbmcgbm9uLW51bWVyaWMgcHJvcGVydGllcy5cbiAgICAgIHdoaWxlIChzaXplLS0pIHtcbiAgICAgICAgaWYgKCEocmVzdWx0ID0gZXEoYVtzaXplXSwgYltzaXplXSwgYVN0YWNrLCBiU3RhY2spKSkgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIE9iamVjdHMgd2l0aCBkaWZmZXJlbnQgY29uc3RydWN0b3JzIGFyZSBub3QgZXF1aXZhbGVudCwgYnV0IGBPYmplY3Rgc1xuICAgIC8vIGZyb20gZGlmZmVyZW50IGZyYW1lcyBhcmUuXG4gICAgbGV0IGFDdG9yID0gYS5jb25zdHJ1Y3RvcjtcbiAgICBsZXQgYkN0b3IgPSBiLmNvbnN0cnVjdG9yO1xuICAgIGlmIChhQ3RvciAhPT0gYkN0b3IgJiYgIShfLmlzRnVuY3Rpb24oYUN0b3IpICYmXG4gICAgICAgIChhQ3RvciBpbnN0YW5jZW9mIGFDdG9yKSAmJiBfLmlzRnVuY3Rpb24oYkN0b3IpICYmXG4gICAgICAgIChiQ3RvciBpbnN0YW5jZW9mIGJDdG9yKSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gRGVlcCBjb21wYXJlIG9iamVjdHMuXG4gICAgZm9yIChsZXQga2V5IGluIGEpIHtcbiAgICAgIGlmIChfLmhhcyhhLCBrZXkpKSB7XG4gICAgICAgIC8vIENvdW50IHRoZSBleHBlY3RlZCBudW1iZXIgb2YgcHJvcGVydGllcy5cbiAgICAgICAgc2l6ZSsrO1xuICAgICAgICAvLyBEZWVwIGNvbXBhcmUgZWFjaCBtZW1iZXIuXG4gICAgICAgIGlmICghKHJlc3VsdCA9IF8uaGFzKGIsIGtleSkgJiYgZXEoYVtrZXldLCBiW2tleV0sIGFTdGFjaywgYlN0YWNrKSkpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBFbnN1cmUgdGhhdCBib3RoIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBudW1iZXIgb2YgcHJvcGVydGllcy5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBmb3IgKGtleSBpbiBiKSB7XG4gICAgICAgIGlmIChfLmhhcyhiLCBrZXkpICYmICEoc2l6ZS0tKSkgYnJlYWs7XG4gICAgICB9XG4gICAgICByZXN1bHQgPSAhc2l6ZTtcbiAgICB9XG4gIH1cbiAgLy8gUmVtb3ZlIHRoZSBmaXJzdCBvYmplY3QgZnJvbSB0aGUgc3RhY2sgb2YgdHJhdmVyc2VkIG9iamVjdHMuXG4gIGFTdGFjay5wb3AoKTtcbiAgYlN0YWNrLnBvcCgpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuY2xhc3MgXyB7XG4gIC8vIEV4dGVuZCBhIGdpdmVuIG9iamVjdCB3aXRoIGFsbCB0aGUgcHJvcGVydGllcyBpbiBwYXNzZWQtaW4gb2JqZWN0KHMpLlxuICBzdGF0aWMgaWV4dGVuZChvYmopIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXJlc3QtcGFyYW1zXG4gICAgZWFjaChzbGljZS5jYWxsKGFyZ3VtZW50cywgMSksIGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIGZvciAobGV0IHByb3AgaW4gc291cmNlKSB7XG4gICAgICAgIGlmICh7fS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwgcHJvcCkpIHtcbiAgICAgICAgICBvYmpbcHJvcF0gPSBzb3VyY2VbcHJvcF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIHN0YXRpYyBpc0Z1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nO1xuICB9O1xuXG4gIHN0YXRpYyBoYXMob2JqLCBrZXkpIHtcbiAgICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSk7XG4gIH07XG5cbiAgLy8gUGVyZm9ybSBhIGRlZXAgY29tcGFyaXNvbiB0byBjaGVjayBpZiB0d28gb2JqZWN0cyBhcmUgZXF1YWwuXG4gIHN0YXRpYyBpc0VxdWFsKGEsIGIpIHtcbiAgICByZXR1cm4gZXEoYSwgYiwgW10sIFtdKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgXztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91bmRlcnNjb3JlLmpzIiwiLypcbiAqXG4gKiAgQ29weXJpZ2h0IDIwMTcgTGVhbnBsdW0gSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2VcbiAqXG4gKi9cbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5cbi8qKlxuICogTGVhbnBsdW0gQXJnc0J1aWxkZXIsIHVzZSB0byBjb25zdHJ1Y3QgcmVxdWVzdCBwYXlsb2FkLlxuICovXG5jbGFzcyBBcmdzQnVpbGRlciB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgZW1wdHkgcmVxdWVzdCBhcmd1bWVudC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYXJnU3RyaW5nID0gJyc7XG4gICAgdGhpcy5hcmdWYWx1ZXMgPSB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgZ2l2ZW4ga2V5LCB2YWx1ZSB0byB0aGUgcGF5bG9hZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IGZvciB0aGUgdmFsdWUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBUaGUgdmFsdWUgZm9yIGdpdmVuIGtleS5cbiAgICogQHJldHVybiB7QXJnc0J1aWxkZXJ9IFJldHVybnMgYW4gb2JqZWN0IG9mIEFyZ3NCdWlsZGVyLlxuICAgKi9cbiAgYWRkKGtleSwgdmFsdWUpIHtcbiAgICBpZiAodHlwZW9mKHZhbHVlKSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBpZiAodGhpcy5hcmdTdHJpbmcpIHtcbiAgICAgIHRoaXMuYXJnU3RyaW5nICs9ICcmJztcbiAgICB9XG4gICAgdGhpcy5hcmdTdHJpbmcgKz0ga2V5ICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbiAgICB0aGlzLmFyZ1ZhbHVlc1trZXldID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIENhY2hlIHRoZSBnaXZlbiBib2R5LlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGJvZHkgQSBnaXZlbiBib2R5LlxuICAgKiBAcmV0dXJuIHtBcmdzQnVpbGRlci9TdHJpbmd9IFJldHVybnMgQXJnc2J1aWxkZXIgaWYgYm9keSBnaXZlbiwgZWxzZSB0aGVcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5LlxuICAgKi9cbiAgYm9keShib2R5KSB7XG4gICAgaWYgKGJvZHkpIHtcbiAgICAgIHRoaXMuX2JvZHkgPSBib2R5O1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9ib2R5O1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdG8gYXR0YWNoIGdpdmVuIGFwcElkIGFuZCBhcHBLZXkgdG8gcmVxdWVzdC5cbiAgICogQHBhcmFtICB7U3RyaW5nfSBhcHBJZCBUaGUgYXBwSWQgdG8gYXR0YWNoLlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGNsaWVudEtleSBUaGUgYXBwS2V5IHRvIGF0dGFjaC5cbiAgICogQHJldHVybiB7QXJnc0J1aWxkZXJ9IFJldHVybnMgYW4gb2JqZWN0IG9mIEFyZ3NCdWlsZGVyLlxuICAgKi9cbiAgYXR0YWNoQXBpS2V5cyhhcHBJZCwgY2xpZW50S2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuYWRkKENvbnN0YW50cy5QQVJBTVMuQVBQX0lELCBhcHBJZClcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkNMSUVOVCwgQ29uc3RhbnRzLkNMSUVOVClcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkNMSUVOVF9LRVksIGNsaWVudEtleSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgYXJndW1lbnRzLlxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IEFyZ3VtZW50cyBzdHJpbmcuXG4gICAqL1xuICBidWlsZCgpIHtcbiAgICByZXR1cm4gdGhpcy5hcmdTdHJpbmc7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgYXJndW1lbnQgdmFsdWVzLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBhcmd1bWVudCB2YWx1ZXMuXG4gICAqL1xuICBidWlsZERpY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJnVmFsdWVzO1xuICB9O1xufVxuO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFyZ3NCdWlsZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0FyZ3NCdWlsZGVyLmpzIiwiLypcbiAqXG4gKiAgQ29weXJpZ2h0IDIwMTcgTGVhbnBsdW0gSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2VcbiAqXG4gKi9cbmNvbnN0IGRhdGFCcm93c2VyID0gW3tcbiAgc3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LFxuICBzdWJTdHJpbmc6ICdDaHJvbWUnLFxuICBpZGVudGl0eTogJ0Nocm9tZScsXG59LCB7XG4gIHN0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgc3ViU3RyaW5nOiAnT21uaVdlYicsXG4gIHZlcnNpb25TZWFyY2g6ICdPbW5pV2ViLycsXG4gIGlkZW50aXR5OiAnT21uaVdlYicsXG59LCB7XG4gIHN0cmluZzogbmF2aWdhdG9yLnZlbmRvcixcbiAgc3ViU3RyaW5nOiAnQXBwbGUnLFxuICBpZGVudGl0eTogJ1NhZmFyaScsXG4gIHZlcnNpb25TZWFyY2g6ICdWZXJzaW9uJyxcbn0sIHtcbiAgcHJvcDogd2luZG93Lm9wZXJhLFxuICBpZGVudGl0eTogJ09wZXJhJyxcbiAgdmVyc2lvblNlYXJjaDogJ1ZlcnNpb24nLFxufSwge1xuICBzdHJpbmc6IG5hdmlnYXRvci52ZW5kb3IsXG4gIHN1YlN0cmluZzogJ2lDYWInLFxuICBpZGVudGl0eTogJ2lDYWInLFxufSwge1xuICBzdHJpbmc6IG5hdmlnYXRvci52ZW5kb3IsXG4gIHN1YlN0cmluZzogJ0tERScsXG4gIGlkZW50aXR5OiAnS29ucXVlcm9yJyxcbn0sIHtcbiAgc3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LFxuICBzdWJTdHJpbmc6ICdGaXJlZm94JyxcbiAgaWRlbnRpdHk6ICdGaXJlZm94Jyxcbn0sIHtcbiAgc3RyaW5nOiBuYXZpZ2F0b3IudmVuZG9yLFxuICBzdWJTdHJpbmc6ICdDYW1pbm8nLFxuICBpZGVudGl0eTogJ0NhbWlubycsXG59LCB7IC8vIGZvciBuZXdlciBOZXRzY2FwZXMgKDYrKVxuICBzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsXG4gIHN1YlN0cmluZzogJ05ldHNjYXBlJyxcbiAgaWRlbnRpdHk6ICdOZXRzY2FwZScsXG59LCB7XG4gIHN0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgc3ViU3RyaW5nOiAnTVNJRScsXG4gIGlkZW50aXR5OiAnRXhwbG9yZXInLFxuICB2ZXJzaW9uU2VhcmNoOiAnTVNJRScsXG59LCB7XG4gIHN0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgc3ViU3RyaW5nOiAnR2Vja28nLFxuICBpZGVudGl0eTogJ01vemlsbGEnLFxuICB2ZXJzaW9uU2VhcmNoOiAncnYnLFxufSwgeyAvLyBmb3Igb2xkZXIgTmV0c2NhcGVzICg0LSlcbiAgc3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LFxuICBzdWJTdHJpbmc6ICdNb3ppbGxhJyxcbiAgaWRlbnRpdHk6ICdOZXRzY2FwZScsXG4gIHZlcnNpb25TZWFyY2g6ICdNb3ppbGxhJyxcbn1dO1xuXG5jb25zdCBkYXRhT1MgPSBbe1xuICBzdHJpbmc6IG5hdmlnYXRvci5wbGF0Zm9ybSxcbiAgc3ViU3RyaW5nOiAnV2luJyxcbiAgaWRlbnRpdHk6ICdXaW5kb3dzJyxcbn0sIHtcbiAgc3RyaW5nOiBuYXZpZ2F0b3IucGxhdGZvcm0sXG4gIHN1YlN0cmluZzogJ01hYycsXG4gIGlkZW50aXR5OiAnTWFjIE9TJyxcbn0sIHtcbiAgc3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LFxuICBzdWJTdHJpbmc6ICdpUGhvbmUnLFxuICBpZGVudGl0eTogJ2lPUycsXG59LCB7XG4gIHN0cmluZzogbmF2aWdhdG9yLnBsYXRmb3JtLFxuICBzdWJTdHJpbmc6ICdMaW51eCcsXG4gIGlkZW50aXR5OiAnTGludXgnLFxufV07XG5cbi8vIEJyb3dzZXIgZGV0ZWN0aW9uLiBTb3VyY2U6IGh0dHA6Ly93d3cucXVpcmtzbW9kZS5vcmcvanMvZGV0ZWN0Lmh0bWxcbmNsYXNzIEJyb3dzZXJEZXRlY3RvciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYnJvd3NlciA9IHRoaXMuc2VhcmNoU3RyaW5nKGRhdGFCcm93c2VyKSB8fFxuICAgICAgICAnQW4gdW5rbm93biBicm93c2VyJztcbiAgICB0aGlzLnZlcnNpb24gPSB0aGlzLnNlYXJjaFZlcnNpb24obmF2aWdhdG9yLnVzZXJBZ2VudCkgfHxcbiAgICAgICAgdGhpcy5zZWFyY2hWZXJzaW9uKG5hdmlnYXRvci5hcHBWZXJzaW9uKSB8fCAnYW4gdW5rbm93biB2ZXJzaW9uJztcbiAgICB0aGlzLk9TID0gdGhpcy5zZWFyY2hTdHJpbmcoZGF0YU9TKSB8fCAnYW4gdW5rbm93biBPUyc7XG4gIH07XG5cbiAgc2VhcmNoU3RyaW5nKGRhdGEpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBkYXRhU3RyaW5nID0gZGF0YVtpXS5zdHJpbmc7XG4gICAgICBsZXQgZGF0YVByb3AgPSBkYXRhW2ldLnByb3A7XG4gICAgICB0aGlzLnZlcnNpb25TZWFyY2hTdHJpbmcgPSBkYXRhW2ldLnZlcnNpb25TZWFyY2ggfHwgZGF0YVtpXS5pZGVudGl0eTtcbiAgICAgIGlmIChkYXRhU3RyaW5nKSB7XG4gICAgICAgIGlmIChkYXRhU3RyaW5nLmluZGV4T2YoZGF0YVtpXS5zdWJTdHJpbmcpICE9IC0xKVxuICAgICAgICAgIHJldHVybiBkYXRhW2ldLmlkZW50aXR5O1xuICAgICAgfSBlbHNlIGlmIChkYXRhUHJvcClcbiAgICAgICAgcmV0dXJuIGRhdGFbaV0uaWRlbnRpdHk7XG4gICAgfVxuICB9O1xuXG4gIHNlYXJjaFZlcnNpb24oZGF0YVN0cmluZykge1xuICAgIGlmICghZGF0YVN0cmluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgaW5kZXggPSBkYXRhU3RyaW5nLmluZGV4T2YodGhpcy52ZXJzaW9uU2VhcmNoU3RyaW5nKTtcbiAgICBpZiAoaW5kZXggPT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoZGF0YVN0cmluZy5zdWJzdHJpbmcoaW5kZXggK1xuICAgICAgICB0aGlzLnZlcnNpb25TZWFyY2hTdHJpbmcubGVuZ3RoICsgMSkpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQnJvd3NlckRldGVjdG9yO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0Jyb3dzZXJEZXRlY3Rvci5qcyIsIi8qXG4gKlxuICogIENvcHlyaWdodCAyMDE3IExlYW5wbHVtIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlXG4gKlxuICovXG5pbXBvcnQgXyBmcm9tIFwiLi91bmRlcnNjb3JlXCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuXG5jb25zdCBBUFBMSUNBVElPTl9TRVJWRVJfUFVCTElDX0tFWSA9XG4gICAgJ0JJbldQcFdudGZSMzlyZ1hTUDA0cHFkbUVkREdhNTB6NnpxYk12eHl4SkN3elhJdVNwU2g4Qzg4OC1DZko4MldFTGw3WGU4Y2pBJyArXG4gICAgJ25mQ3QtM3ZLMENpNjgnO1xuXG5sZXQgc2VsZjtcbmxldCBfbGVhbnBsdW07XG5sZXQgaXNTdXBwb3J0ZWQgPSBmYWxzZTtcbmxldCBpc1N1YnNjcmliZWQgPSBmYWxzZTtcbmxldCBzZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uID0gbnVsbDtcblxuLyoqXG4gKiBQdXNoIE1hbmFnZXIgaGFuZGxlcyB0aGUgcmVnaXN0cmF0aW9uIGFuZCBzdWJzY3JpcHRpb24gZm9yIHdlYiBwdXNoLlxuICovXG5jbGFzcyBQdXNoTWFuYWdlciB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IFB1c2hNYW5hZ2VyIG9iamVjdC5cbiAgICogQHBhcmFtICB7W3R5cGVdfSBsZWFucGx1bSBSZWZlcmVuY2UgdG8gdGhlIG1haW4gY2xhc3MgdG9cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICBhdm9pZCBjaXJjbGUgaW1wb3J0LlxuICAgKi9cbiAgY29uc3RydWN0b3IobGVhbnBsdW0pIHtcbiAgICBfbGVhbnBsdW0gPSBsZWFucGx1bTtcbiAgICBzZWxmID0gdGhpcztcbiAgICBpZiAobmF2aWdhdG9yICYmIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyICYmXG4gICAgICAgICdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IgJiYgJ1B1c2hNYW5hZ2VyJyBpbiB3aW5kb3cpIHtcbiAgICAgIGlzU3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgIHNlbGYucmVnaXN0ZXIoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogV2hldGhlciBvciBub3Qgd2ViIHB1c2ggaXMgc3VwcG9ydGVkIGluIHRoZSBicm93c2VyLlxuICAgKiBAcmV0dXJuIHtCb29sZWFufSBUcnVlIGlmIHN1cHBvcnRlZCwgZWxzZSBmYWxzZS5cbiAgICovXG4gIGlzV2ViUHVzaFN1cHBvcnRlZCgpIHtcbiAgICByZXR1cm4gaXNTdXBwb3J0ZWQ7XG4gIH1cblxuICAvKipcbiAgICogV2hldGhlciBvciBub3QgdGhlIGJyb3dzZXIgaXMgc3Vic2NyaWJlZCB0byB3ZWIgcHVzaCBub3RpZmljYXRpb25zLlxuICAgKiBAcmV0dXJuIHtCb29sZWFufSBUcnVlIGlmIHN1YnNjcmliZWQsIGVsc2UgZmFsc2UuXG4gICAqL1xuICBpc1dlYlB1c2hTdWJzY3JpYmVkKCkge1xuICAgIGlmICghaXNTdXBwb3J0ZWQpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHJlamVjdCgnTGVhbnBsdW06IFB1c2ggbWVzc2FnaW5nIGlzIG5vdCBzdXBwb3J0ZWQuJyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2dldFNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24oKVxuICAgICAgICAudGhlbigocmVnaXN0cmF0aW9uKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlZ2lzdHJhdGlvbikge1xuICAgICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlZ2lzdHJhdGlvbi5wdXNoTWFuYWdlci5nZXRTdWJzY3JpcHRpb24oKVxuICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpc1N1YnNjcmliZWQgPSBzdWJzY3JpcHRpb24gIT09IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1N1YnNjcmliZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBzZWxmLl91cGRhdGVOZXdTdWJzY3JpcHRpb25PblNlcnZlcihzdWJzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoaXNTdWJzY3JpYmVkKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBmb3Igd2VicHVzaC5cbiAgICogQHBhcmFtICB7U3RyaW5nfSAgIHNlcnZpY2VXb3JrZXJVcmwgVGhlIHVybCB0aGF0IHNlcnZlcyB0aGUgc2VydmljZXdvcmtlclxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbiB5b3VyIGRvbWFpbi5cbiAgICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrICAgICAgICAgVGhlIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCB3aXRoIHJlc3VsdC5cbiAgICovXG4gIHJlZ2lzdGVyKHNlcnZpY2VXb3JrZXJVcmwsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCFpc1N1cHBvcnRlZCkge1xuICAgICAgY29uc29sZS5sb2coJ0xlYW5wbHVtOiBQdXNoIG1lc3NhZ2luZyBpcyBub3Qgc3VwcG9ydGVkLicpO1xuICAgICAgY2FsbGJhY2soZmFsc2UpO1xuICAgIH1cbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcihcbiAgICAgICAgc2VydmljZVdvcmtlclVybCA/IHNlcnZpY2VXb3JrZXJVcmwgOiAnL3N3Lm1pbi5qcycpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZWdpc3RyYXRpb24pIHtcbiAgICAgICAgICBzZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uID0gcmVnaXN0cmF0aW9uO1xuXG4gICAgICAgICAgLy8gU2V0IHRoZSBpbml0aWFsIHN1YnNjcmlwdGlvbiB2YWx1ZVxuICAgICAgICAgIHNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24ucHVzaE1hbmFnZXIuZ2V0U3Vic2NyaXB0aW9uKClcbiAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgIGlzU3Vic2NyaWJlZCA9ICEoc3Vic2NyaXB0aW9uID09PSBudWxsKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNTdWJzY3JpYmVkKSB7XG4gICAgICAgICAgICAgICAgICBzZWxmLl91cGRhdGVOZXdTdWJzY3JpcHRpb25PblNlcnZlcihzdWJzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGlzU3Vic2NyaWJlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdMZWFucGx1bTogU2VydmljZSBXb3JrZXIgRXJyb3I6ICcsIGVycm9yKTtcbiAgICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU3Vic2NyaWJlIHRoZSB1c2VyKGJyb3dzZXIpIHRvIHB1c2guXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IFJlc29sdmVzIGlmIHN1YnNjcmlwdGlvbiBzdWNjZXNzZnVsLCBvdGhlcndpc2UgcmVqZWN0cy5cbiAgICovXG4gIHN1YnNjcmliZVVzZXIoKSB7XG4gICAgY29uc3QgYXBwbGljYXRpb25TZXJ2ZXJLZXkgPVxuICAgICAgICB0aGlzLl91cmxCNjRUb1VpbnQ4QXJyYXkoQVBQTElDQVRJT05fU0VSVkVSX1BVQkxJQ19LRVkpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICByZXR1cm4gc2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbi5wdXNoTWFuYWdlci5zdWJzY3JpYmUoe1xuICAgICAgICB1c2VyVmlzaWJsZU9ubHk6IHRydWUsXG4gICAgICAgIGFwcGxpY2F0aW9uU2VydmVyS2V5OiBhcHBsaWNhdGlvblNlcnZlcktleSxcbiAgICAgIH0pXG4gICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgaWYgKHN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgICBzZWxmLl91cGRhdGVOZXdTdWJzY3JpcHRpb25PblNlcnZlcihzdWJzY3JpcHRpb24pO1xuICAgICAgICAgICAgICBpc1N1YnNjcmliZWQgPSB0cnVlO1xuICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShpc1N1YnNjcmliZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXNTdWJzY3JpYmVkID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgcmV0dXJuIHJlamVjdCgnTGVhbnBsdW06IEZhaWxlZCB0byBzdWJzY3JpYmUgdGhlIHVzZXI6ICcgKyBlcnIpO1xuICAgICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVuc3Vic2NyaWJlIHRoZSB1c2VyKGJyb3dzZXIpIGZyb20gcHVzaC5cbiAgICogQHJldHVybiB7UHJvbWlzZX0gUmVzb2x2ZXMgaWYgdW5zdWJzY3JpYmVkLCBvdGhlcndpc2UgcmVqZWN0cy5cbiAgICovXG4gIHVuc3Vic2NyaWJlVXNlcigpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc2VydmljZVdvcmtlclJlZ2lzdHJhdGlvbi5wdXNoTWFuYWdlci5nZXRTdWJzY3JpcHRpb24oKVxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlamVjdCgpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgcmVqZWN0KCdMZWFucGx1bTogRXJyb3IgdW5zdWJzY3JpYmluZzogJyArIGVycm9yKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChzdWNjZXNzKSB7XG4gICAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgICBpc1N1YnNjcmliZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZWplY3QoKTtcbiAgICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIHNlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiBvYmplY3QgZnJvbSBicm93c2VyLlxuICAgKiBAcmV0dXJuIHtTZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9ufSBSZXR1cm5zIHRoZSByZWdpc3RyYXRpb24gb3IgbnVsbC5cbiAgICovXG4gIF9nZXRTZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgaWYgKHNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24pIHtcbiAgICAgICAgcmVzb2x2ZShzZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmdldFJlZ2lzdHJhdGlvbigpLnRoZW4oKHJlZ2lzdHJhdGlvbikgPT4ge1xuICAgICAgICAgIHJlc29sdmUocmVnaXN0cmF0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRW5jb2RlcyBhIGJhc2U2NCB1cmwgc3RyaW5nIHRvIGFuIHVpbnQ4YXJyYXJ5LlxuICAgKiBAcGFyYW0gIHtbdHlwZV19IGJhc2U2NFN0cmluZyBbZGVzY3JpcHRpb25dXG4gICAqIEByZXR1cm4ge1t0eXBlXX0gICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIF91cmxCNjRUb1VpbnQ4QXJyYXkoYmFzZTY0U3RyaW5nKSB7XG4gICAgY29uc3QgcGFkZGluZyA9ICc9Jy5yZXBlYXQoKDQgLSBiYXNlNjRTdHJpbmcubGVuZ3RoICUgNCkgJSA0KTtcbiAgICBjb25zdCBiYXNlNjQgPSAoYmFzZTY0U3RyaW5nICsgcGFkZGluZylcbiAgICAgICAgLnJlcGxhY2UoL1xcLS9nLCAnKycpXG4gICAgICAgIC5yZXBsYWNlKC9fL2csICcvJyk7XG5cbiAgICBjb25zdCByYXdEYXRhID0gd2luZG93LmF0b2IoYmFzZTY0KTtcbiAgICBjb25zdCBvdXRwdXRBcnJheSA9IG5ldyBVaW50OEFycmF5KHJhd0RhdGEubGVuZ3RoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmF3RGF0YS5sZW5ndGg7ICsraSkge1xuICAgICAgb3V0cHV0QXJyYXlbaV0gPSByYXdEYXRhLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXRBcnJheTtcbiAgfVxuXG4gIC8qKlxuICAgKiBbX3ByZXBhcmVTdWJzY3JpcHRpb24gZGVzY3JpcHRpb25dXG4gICAqIEBwYXJhbSAge1t0eXBlXX0gc3Vic2NyaXB0aW9uIFtkZXNjcmlwdGlvbl1cbiAgICogQHJldHVybiB7W3R5cGVdfSAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICAgKi9cbiAgX3ByZXBhcmVTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKSB7XG4gICAgbGV0IGtleSA9IHN1YnNjcmlwdGlvbi5nZXRLZXkgPyBzdWJzY3JpcHRpb24uZ2V0S2V5KCdwMjU2ZGgnKSA6ICcnO1xuICAgIGxldCBhdXRoID0gc3Vic2NyaXB0aW9uLmdldEtleSA/IHN1YnNjcmlwdGlvbi5nZXRLZXkoJ2F1dGgnKSA6ICcnO1xuICAgIGxldCBrZXlBc2NpaSA9IGJ0b2EoU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBuZXcgVWludDhBcnJheShrZXkpKSk7XG4gICAgbGV0IGF1dGhBc2NpaSA9IGJ0b2EoU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBuZXcgVWludDhBcnJheShhdXRoKSkpO1xuICAgIHJldHVybiB7XG4gICAgICBlbmRwb2ludDogc3Vic2NyaXB0aW9uLmVuZHBvaW50LFxuICAgICAga2V5OiBrZXlBc2NpaSxcbiAgICAgIGF1dGg6IGF1dGhBc2NpaSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgYSBuZXcgc3Vic2NyaXB0aW9uIG9iamVjdCB0byB0aGUgTGVhbnBsdW0gc2VydmVyLlxuICAgKiBAcGFyYW0gIHtbdHlwZV19IHN1YnNjcmlwdGlvbiBUaGUgc3Vic2NyaXB0aW9uLlxuICAgKi9cbiAgX3VwZGF0ZU5ld1N1YnNjcmlwdGlvbk9uU2VydmVyKHN1YnNjcmlwdGlvbikge1xuICAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgICAgIGxldCBwcmVwYXJlZFN1YnNjcmlwdGlvbiA9IHRoaXMuX3ByZXBhcmVTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKTtcbiAgICAgIGxldCBwcmVwYXJlZFN1YnNjcmlwdGlvblN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHByZXBhcmVkU3Vic2NyaXB0aW9uKTtcbiAgICAgIGxldCBleGlzdGluZ1N1YnNjcmlwdGlvblN0cmluZyA9IF9sZWFucGx1bS5fZ2V0RnJvbUxvY2FsU3RvcmFnZShcbiAgICAgICAgICBDb25zdGFudHMuREVGQVVMVF9LRVlTLlBVU0hfU1VCU0NSSVBUSU9OKTtcbiAgICAgIGlmICghXy5pc0VxdWFsKGV4aXN0aW5nU3Vic2NyaXB0aW9uU3RyaW5nLCBwcmVwYXJlZFN1YnNjcmlwdGlvblN0cmluZykpIHtcbiAgICAgICAgX2xlYW5wbHVtLl9zYXZlVG9Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5QVVNIX1NVQlNDUklQVElPTixcbiAgICAgICAgICAgIHByZXBhcmVkU3Vic2NyaXB0aW9uU3RyaW5nKTtcbiAgICAgICAgX2xlYW5wbHVtLl9zZXRTdWJzY3JpcHRpb24ocHJlcGFyZWRTdWJzY3JpcHRpb25TdHJpbmcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQdXNoTWFuYWdlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9QdXNoTWFuYWdlci5qcyIsIi8qXG4gKlxuICogIENvcHlyaWdodCAyMDE3IExlYW5wbHVtIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlXG4gKlxuICovXG5pbXBvcnQgUmVxdWVzdCBmcm9tIFwiLi9SZXF1ZXN0XCI7XG5cbi8qKlxuICogU29ja2V0LmlvIDEuMCBjbGllbnQgY2xhc3MuXG4gKi9cbmNsYXNzIFNvY2tldElvQ2xpZW50IHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGEgbmV3IFNvY2tldElvQ2xpZW50LCBub3QgY29ubmVjdGVkIGJ5IGRlZmF1bHQuXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNvbm5lY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuY29ubmVjdGluZyA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbm5lY3RzIHRvIHRoZSBnaXZlbiBzb2NrZXRIb3N0LlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHNvY2tldEhvc3QgVGhlIGhvc3QgdG8gY29ubmVjdCB0by5cbiAgICovXG4gIGNvbm5lY3Qoc29ja2V0SG9zdCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBzZWxmLmNvbm5lY3RpbmcgPSB0cnVlO1xuICAgIFJlcXVlc3QuYWpheCgnUE9TVCcsICdodHRwczovLycgKyBzb2NrZXRIb3N0ICsgJy9zb2NrZXQuaW8vMScsICcnLFxuICAgICAgICBmdW5jdGlvbiAobGluZSkge1xuICAgICAgICAgIGxldCBwYXJ0cyA9IGxpbmUuc3BsaXQoJzonKTtcbiAgICAgICAgICBsZXQgc2Vzc2lvbiA9IHBhcnRzWzBdO1xuICAgICAgICAgIGxldCBoZWFydGJlYXQgPSBwYXJzZUludChwYXJ0c1sxXSkgLyAyICogMTAwMDtcbiAgICAgICAgICBzZWxmLnNvY2tldCA9IG5ldyBXZWJTb2NrZXQoJ3dzczovLycgKyBzb2NrZXRIb3N0ICtcbiAgICAgICAgICAgICAgJy9zb2NrZXQuaW8vMS93ZWJzb2NrZXQvJyArIHNlc3Npb24pO1xuICAgICAgICAgIGxldCBoZWFydGJlYXRJbnRlcnZhbCA9IG51bGw7XG4gICAgICAgICAgc2VsZi5zb2NrZXQub25vcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5jb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgc2VsZi5jb25uZWN0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoc2VsZi5vbm9wZW4pIHtcbiAgICAgICAgICAgICAgc2VsZi5vbm9wZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhlYXJ0YmVhdEludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBzZWxmLnNvY2tldC5zZW5kKCcyOjo6Jyk7XG4gICAgICAgICAgICB9LCBoZWFydGJlYXQpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgc2VsZi5zb2NrZXQub25jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYuY29ubmVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGhlYXJ0YmVhdEludGVydmFsKTtcbiAgICAgICAgICAgIGlmIChzZWxmLm9uY2xvc2UpIHtcbiAgICAgICAgICAgICAgc2VsZi5vbmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgICBzZWxmLnNvY2tldC5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGxldCBwYXJ0cyA9IGV2ZW50LmRhdGEuc3BsaXQoJzonKTtcbiAgICAgICAgICAgIGxldCBjb2RlID0gcGFyc2VJbnQocGFydHNbMF0pO1xuICAgICAgICAgICAgaWYgKGNvZGUgPT0gMikge1xuICAgICAgICAgICAgICBzZWxmLnNvY2tldC5zZW5kKCcyOjonKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29kZSA9PSA1KSB7XG4gICAgICAgICAgICAgIGxldCBtZXNzYWdlSWQgPSBwYXJ0c1sxXTtcbiAgICAgICAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHBhcnRzLnNsaWNlKDMpLmpvaW4oJzonKSk7XG4gICAgICAgICAgICAgIGxldCBldmVudCA9IGRhdGFbJ25hbWUnXTtcbiAgICAgICAgICAgICAgbGV0IGFyZ3MgPSBkYXRhWydhcmdzJ107XG4gICAgICAgICAgICAgIGlmIChtZXNzYWdlSWQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnNvY2tldC5zZW5kKCc2Ojo6JyArIG1lc3NhZ2VJZCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHNlbGYub25tZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5vbm1lc3NhZ2UoZXZlbnQsIGFyZ3MpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvZGUgPT0gNykge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU29ja2V0IGVycm9yOiAnICsgZXZlbnQuZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgICBzZWxmLnNvY2tldC5vbmVycm9yID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBzZWxmLnNvY2tldC5jbG9zZSgpO1xuICAgICAgICAgICAgaWYgKHNlbGYub25lcnJvcikge1xuICAgICAgICAgICAgICBzZWxmLm9uZXJyb3IoZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH0sIG51bGwsIGZhbHNlLCB0cnVlIC8vIG51bGxtLCBxdWV1ZWQsIHBsYWluVGV4dFxuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNlbmRzIGdpdmVuIGV2ZW50IHdpdGggYXJndW1lbnRzIHRvIHRoZSBzZXJ2ZXIuXG4gICAqIEBwYXJhbSAge3N0cmluZ30gbmFtZSBOYW1lIG9mIHRoZSBldmVudC5cbiAgICogQHBhcmFtICB7YW55fSBhcmdzIEFyZ3VtZW50cyB0byBzZW5kLlxuICAgKi9cbiAgc2VuZChuYW1lLCBhcmdzKSB7XG4gICAgaWYgKCF0aGlzLmNvbm5lY3RlZCkge1xuICAgICAgY29uc29sZS5sb2coJ0xlYW5wbHVtOiBTb2NrZXQgaXMgbm90IGNvbm5lY3RlZC4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zb2NrZXQuc2VuZCgnNTo6OicgKyBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgJ25hbWUnOiBuYW1lLFxuICAgICAgICAgICdhcmdzJzogYXJncyxcbiAgICAgICAgfSkpO1xuICB9O1xuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gU29ja2V0SW9DbGllbnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU29ja2V0SW9DbGllbnQuanMiLCIvKlxuICpcbiAqICBDb3B5cmlnaHQgMjAxNyBMZWFucGx1bSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZVxuICpcbiAqL1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcbmltcG9ydCBBcmdzQnVpbGRlciBmcm9tIFwiLi9BcmdzQnVpbGRlclwiO1xuaW1wb3J0IEJyb3dzZXJEZXRlY3RvciBmcm9tIFwiLi9Ccm93c2VyRGV0ZWN0b3JcIjtcbmltcG9ydCBTb2NrZXRJb0NsaWVudCBmcm9tIFwiLi9Tb2NrZXRJb0NsaWVudFwiO1xuaW1wb3J0IFJlcXVlc3QgZnJvbSBcIi4vUmVxdWVzdFwiO1xuaW1wb3J0IFB1c2hNYW5hZ2VyIGZyb20gXCIuL1B1c2hNYW5hZ2VyXCI7XG5pbXBvcnQgXyBmcm9tIFwiLi91bmRlcnNjb3JlLmpzXCI7XG5cbmxldCBfdmFyaWFibGVzQ2hhbmdlZEhhbmRsZXJzID0gW107XG5sZXQgX3ZhcmlhbnRzID0gW107XG5sZXQgX3N0YXJ0SGFuZGxlcnMgPSBbXTtcbmxldCBfYWN0aW9uTWV0YWRhdGEgPSB7fTtcbmxldCBfdG9rZW4gPSAnJztcbmxldCBfYmF0Y2hFbmFibGVkID0gdHJ1ZTtcbmxldCBfYmF0Y2hDb29sZG93biA9IDU7XG5sZXQgX2FwaVBhdGggPSAnaHR0cHM6Ly93d3cubGVhbnBsdW0uY29tL2FwaSc7XG5sZXQgX3NvY2tldEhvc3QgPSAnZGV2LmxlYW5wbHVtLmNvbSc7XG5sZXQgX2xvY2FsU3RvcmFnZUVuYWJsZWQgPSB1bmRlZmluZWQ7XG5sZXQgX2FsdGVybmF0ZUxvY2FsU3RvcmFnZSA9IHt9O1xubGV0IF9icm93c2VyRGV0ZWN0b3IgPSBuZXcgQnJvd3NlckRldGVjdG9yKCk7XG5cbi8qKlxuICogQHByZXNlcnZlIExlYW5wbHVtIEphdmFzY3JpcHQgU0RLLlxuICogQ29weXJpZ2h0IDIwMTYsIExlYW5wbHVtLCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogWW91IG1heSBub3QgZGlzdHJpYnV0ZSB0aGlzIHNvdXJjZSBjb2RlIHdpdGhvdXQgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uXG4gKiBmcm9tIExlYW5wbHVtLlxuICovXG5jbGFzcyBMZWFucGx1bSB7XG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAvLyBQdWJsaWMgTWV0aG9kc1xuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgc3RhdGljIHNldEFwaVBhdGgoYXBpUGF0aCkge1xuICAgIGlmICghYXBpUGF0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBfYXBpUGF0aCA9IGFwaVBhdGg7XG4gIH07XG5cbiAgc3RhdGljIHNldEVtYWlsKGVtYWlsKSB7XG4gICAgTGVhbnBsdW0uX2VtYWlsID0gZW1haWw7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIG5ldHdvcmsgdGltZW91dC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHNlY29uZHMgVGhlIHRpbWVvdXQgaW4gc2Vjb25kcy5cbiAgICovXG4gIHN0YXRpYyBzZXROZXR3b3JrVGltZW91dChzZWNvbmRzKSB7XG4gICAgUmVxdWVzdC5zZXROZXR3b3JrVGltZW91dChzZWNvbmRzKTtcbiAgfTtcblxuICBzdGF0aWMgc2V0QXBwSWRGb3JEZXZlbG9wbWVudE1vZGUoYXBwSWQsIGFjY2Vzc0tleSkge1xuICAgIExlYW5wbHVtLl9hcHBJZCA9IGFwcElkO1xuICAgIExlYW5wbHVtLl9jbGllbnRLZXkgPSBhY2Nlc3NLZXk7XG4gICAgTGVhbnBsdW0uX2Rldk1vZGUgPSB0cnVlO1xuICB9O1xuXG4gIHN0YXRpYyBzZXRBcHBJZEZvclByb2R1Y3Rpb25Nb2RlKGFwcElkLCBhY2Nlc3NLZXkpIHtcbiAgICBMZWFucGx1bS5fYXBwSWQgPSBhcHBJZDtcbiAgICBMZWFucGx1bS5fY2xpZW50S2V5ID0gYWNjZXNzS2V5O1xuICAgIExlYW5wbHVtLl9kZXZNb2RlID0gZmFsc2U7XG4gIH07XG5cbiAgc3RhdGljIHNldFNvY2tldEhvc3QoaG9zdCkge1xuICAgIF9zb2NrZXRIb3N0ID0gaG9zdDtcbiAgfTtcblxuICBzdGF0aWMgc2V0RGV2aWNlSWQoZGV2aWNlSWQpIHtcbiAgICBMZWFucGx1bS5fZGV2aWNlSWQgPSBkZXZpY2VJZDtcbiAgfTtcblxuICBzdGF0aWMgc2V0QXBwVmVyc2lvbih2ZXJzaW9uTmFtZSkge1xuICAgIExlYW5wbHVtLl92ZXJzaW9uTmFtZSA9IHZlcnNpb25OYW1lO1xuICB9O1xuXG4gIHN0YXRpYyBzZXREZXZpY2VOYW1lKGRldmljZU5hbWUpIHtcbiAgICBMZWFucGx1bS5fZGV2aWNlTmFtZSA9IGRldmljZU5hbWU7XG4gIH07XG5cbiAgc3RhdGljIHNldERldmljZU1vZGVsKGRldmljZU1vZGVsKSB7XG4gICAgTGVhbnBsdW0uX2RldmljZU1vZGVsID0gZGV2aWNlTW9kZWw7XG4gIH07XG5cbiAgc3RhdGljIHNldFN5c3RlbU5hbWUoc3lzdGVtTmFtZSkge1xuICAgIExlYW5wbHVtLl9zeXN0ZW1OYW1lID0gc3lzdGVtTmFtZTtcbiAgfTtcblxuICBzdGF0aWMgc2V0U3lzdGVtVmVyc2lvbihzeXN0ZW1WZXJzaW9uKSB7XG4gICAgTGVhbnBsdW0uX3N5c3RlbVZlcnNpb24gPSBzeXN0ZW1WZXJzaW9uO1xuICB9O1xuXG4gIHN0YXRpYyBzZXRWYXJpYWJsZXModmFyaWFibGVzKSB7XG4gICAgTGVhbnBsdW0uX3ZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgfTtcblxuICBzdGF0aWMgc2V0UmVxdWVzdEJhdGNoaW5nKGJhdGNoRW5hYmxlZCwgY29vbGRvd25TZWNvbmRzKSB7XG4gICAgX2JhdGNoRW5hYmxlZCA9IGJhdGNoRW5hYmxlZDtcbiAgICBfYmF0Y2hDb29sZG93biA9IGNvb2xkb3duU2Vjb25kcztcbiAgfTtcblxuICBzdGF0aWMgZ2V0VmFyaWFibGVzKHZhcmlhYmxlcykge1xuICAgIHJldHVybiBMZWFucGx1bS5fbWVyZ2VkICE9PSB1bmRlZmluZWQgPyBMZWFucGx1bS5fbWVyZ2VkIDpcbiAgICAgICAgTGVhbnBsdW0uX3ZhcmlhYmxlcztcbiAgfTtcblxuICBzdGF0aWMgZ2V0VmFyaWFibGUoYXJncykge1xuICAgIGxldCBjdXJyZW50ID0gTGVhbnBsdW0uZ2V0VmFyaWFibGVzKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50W2FyZ3VtZW50cy5pXTtcbiAgICB9XG4gICAgcmV0dXJuIGN1cnJlbnQ7XG4gIH07XG5cbiAgc3RhdGljIGdldFZhcmlhbnRzKCkge1xuICAgIHJldHVybiBfdmFyaWFudHMgfHwgW107XG4gIH07XG5cbiAgc3RhdGljIGFkZFN0YXJ0UmVzcG9uc2VIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICBfc3RhcnRIYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICAgIGlmIChMZWFucGx1bS5faGFzU3RhcnRlZCkge1xuICAgICAgaGFuZGxlcihMZWFucGx1bS5fc3RhcnRTdWNjZXNzZnVsKTtcbiAgICB9XG4gIH07XG5cbiAgc3RhdGljIGFkZFZhcmlhYmxlc0NoYW5nZWRIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICBfdmFyaWFibGVzQ2hhbmdlZEhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gICAgaWYgKExlYW5wbHVtLl9oYXNSZWNlaXZlZERpZmZzKSB7XG4gICAgICBoYW5kbGVyKCk7XG4gICAgfVxuICB9O1xuXG4gIHN0YXRpYyByZW1vdmVTdGFydFJlc3BvbnNlSGFuZGxlcihoYW5kbGVyKSB7XG4gICAgbGV0IGlkeCA9IF9zdGFydEhhbmRsZXJzLmluZGV4T2YoaGFuZGxlcik7XG4gICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICBfc3RhcnRIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiAgICB9XG4gIH07XG5cbiAgc3RhdGljIHJlbW92ZVZhcmlhYmxlc0NoYW5nZWRIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICBsZXQgaWR4ID0gX3ZhcmlhYmxlc0NoYW5nZWRIYW5kbGVycy5pbmRleE9mKGhhbmRsZXIpO1xuICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgX3ZhcmlhYmxlc0NoYW5nZWRIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiAgICB9XG4gIH07XG5cbiAgc3RhdGljIHN0YXJ0KHVzZXJJZCwgdXNlckF0dHJpYnV0ZXMsIGNhbGxiYWNrKSB7XG4gICAgLy8gT3ZlcmxvYWRzLlxuICAgIGlmICh0eXBlb2YodXNlcklkKSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYWxsYmFjayA9IHVzZXJJZDtcbiAgICAgIHVzZXJBdHRyaWJ1dGVzID0ge307XG4gICAgICB1c2VySWQgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mKHVzZXJJZCkgPT0gJ29iamVjdCcgJiYgdXNlcklkICE9PSBudWxsICYmXG4gICAgICAgIHVzZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjYWxsYmFjayA9IHVzZXJBdHRyaWJ1dGVzO1xuICAgICAgdXNlckF0dHJpYnV0ZXMgPSB1c2VySWQ7XG4gICAgICB1c2VySWQgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mKHVzZXJBdHRyaWJ1dGVzKSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYWxsYmFjayA9IHVzZXJBdHRyaWJ1dGVzO1xuICAgICAgdXNlckF0dHJpYnV0ZXMgPSB7fTtcbiAgICB9XG4gICAgTGVhbnBsdW0uX3VzZXJJZCA9IHVzZXJJZDtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIExlYW5wbHVtLmFkZFN0YXJ0UmVzcG9uc2VIYW5kbGVyKGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBBZGQgcmVmZXJlci5cbiAgICBsZXQgYXJncyA9IG5ldyBBcmdzQnVpbGRlcigpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5VU0VSX0FUVFJJQlVURVMsIEpTT04uc3RyaW5naWZ5KHVzZXJBdHRyaWJ1dGVzKSlcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkNPVU5UUlksIENvbnN0YW50cy5WQUxVRVMuREVURUNUKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuUkVHSU9OLCBDb25zdGFudHMuVkFMVUVTLkRFVEVDVClcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkNJVFksIENvbnN0YW50cy5WQUxVRVMuREVURUNUKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuTE9DQVRJT04sIENvbnN0YW50cy5WQUxVRVMuREVURUNUKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuU1lTVEVNX05BTUUsIExlYW5wbHVtLl9zeXN0ZW1OYW1lIHx8IF9icm93c2VyRGV0ZWN0b3IuT1MpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5TWVNURU1fVkVSU0lPTiwgJycgKyAoTGVhbnBsdW0uX3N5c3RlbVZlcnNpb24gfHwgJycpKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuQlJPV1NFUl9OQU1FLCBfYnJvd3NlckRldGVjdG9yLmJyb3dzZXIpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5CUk9XU0VSX1ZFUlNJT04sICcnICsgX2Jyb3dzZXJEZXRlY3Rvci52ZXJzaW9uKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuTE9DQUxFLCBDb25zdGFudHMuVkFMVUVTLkRFVEVDVClcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkRFVklDRV9OQU1FLCBMZWFucGx1bS5fZGV2aWNlTmFtZSB8fCAoX2Jyb3dzZXJEZXRlY3Rvci5icm93c2VyICtcbiAgICAgICAgICAgICcgJyArIF9icm93c2VyRGV0ZWN0b3IudmVyc2lvbikpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5ERVZJQ0VfTU9ERUwsIExlYW5wbHVtLl9kZXZpY2VNb2RlbCB8fCAnV2ViIEJyb3dzZXInKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuSU5DTFVERV9ERUZBVUxUUywgZmFsc2UpO1xuXG4gICAgLy8gSXNzdWUgcmVxdWVzdC5cbiAgICBMZWFucGx1bS5fcmVxdWVzdChDb25zdGFudHMuTUVUSE9EUy5TVEFSVCwgYXJncywge1xuICAgICAgcXVldWVkOiB0cnVlLFxuICAgICAgc2VuZE5vdzogdHJ1ZSxcbiAgICAgIHJlc3BvbnNlOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgTGVhbnBsdW0uX2hhc1N0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICBsZXQgc3RhcnRSZXNwb25zZSA9IExlYW5wbHVtLl9nZXRMYXN0UmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgICBpZiAoTGVhbnBsdW0uX2lzUmVzcG9uc2VTdWNjZXNzKHN0YXJ0UmVzcG9uc2UpKSB7XG4gICAgICAgICAgTGVhbnBsdW0uX3N0YXJ0U3VjY2Vzc2Z1bCA9IHRydWU7XG5cbiAgICAgICAgICBpZiAoTGVhbnBsdW0uX2Rldk1vZGUpIHtcbiAgICAgICAgICAgIGxldCBsYXRlc3RWZXJzaW9uID0gc3RhcnRSZXNwb25zZVtDb25zdGFudHMuS0VZUy5MQVRFU1RfVkVSU0lPTl07XG4gICAgICAgICAgICBpZiAobGF0ZXN0VmVyc2lvbikge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQSBuZXdlciB2ZXJzaW9uIG9mIExlYW5wbHVtLCAnICsgbGF0ZXN0VmVyc2lvbiArXG4gICAgICAgICAgICAgICAgICAnLCBpcyBhdmFpbGFibGUuICcgKyAnR28gdG8gbGVhbnBsdW0uY29tIHRvIGRvd25sb2FkIGl0LicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFdlYlNvY2tldCkge1xuICAgICAgICAgICAgICBMZWFucGx1bS5fc29ja2V0SU9Db25uZWN0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnWW91ciBicm93c2VyIGRvZXNuXFwndCBzdXBwb3J0IFdlYlNvY2tldHMuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgTGVhbnBsdW0uX3NldENvbnRlbnQoXG4gICAgICAgICAgICAgIHN0YXJ0UmVzcG9uc2VbQ29uc3RhbnRzLktFWVMuVkFSU10sXG4gICAgICAgICAgICAgIHN0YXJ0UmVzcG9uc2VbQ29uc3RhbnRzLktFWVMuVkFSSUFOVFNdLFxuICAgICAgICAgICAgICBzdGFydFJlc3BvbnNlW0NvbnN0YW50cy5LRVlTLkFDVElPTl9NRVRBREFUQV0pO1xuICAgICAgICAgIF90b2tlbiA9IHN0YXJ0UmVzcG9uc2VbQ29uc3RhbnRzLktFWVMuVE9LRU5dO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIExlYW5wbHVtLl9zdGFydFN1Y2Nlc3NmdWwgPSBmYWxzZTtcbiAgICAgICAgICBMZWFucGx1bS5fbG9hZERpZmZzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfc3RhcnRIYW5kbGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIF9zdGFydEhhbmRsZXJzW2ldKExlYW5wbHVtLl9zdGFydFN1Y2Nlc3NmdWwpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHN0YXJ0RnJvbUNhY2hlKHVzZXJJZCwgdXNlckF0dHJpYnV0ZXMsIGNhbGxiYWNrKSB7XG4gICAgLy8gT3ZlcmxvYWRzLlxuICAgIGlmICh0eXBlb2YodXNlcklkKSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYWxsYmFjayA9IHVzZXJJZDtcbiAgICAgIHVzZXJBdHRyaWJ1dGVzID0ge307XG4gICAgICB1c2VySWQgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mKHVzZXJJZCkgPT0gJ29iamVjdCcgJiYgdXNlcklkICE9PSBudWxsICYmXG4gICAgICAgIHVzZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjYWxsYmFjayA9IHVzZXJBdHRyaWJ1dGVzO1xuICAgICAgdXNlckF0dHJpYnV0ZXMgPSB1c2VySWQ7XG4gICAgICB1c2VySWQgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mKHVzZXJBdHRyaWJ1dGVzKSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYWxsYmFjayA9IHVzZXJBdHRyaWJ1dGVzO1xuICAgICAgdXNlckF0dHJpYnV0ZXMgPSB7fTtcbiAgICB9XG4gICAgTGVhbnBsdW0uX3VzZXJJZCA9IHVzZXJJZDtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIExlYW5wbHVtLmFkZFN0YXJ0UmVzcG9uc2VIYW5kbGVyKGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBMZWFucGx1bS5faGFzU3RhcnRlZCA9IHRydWU7XG4gICAgTGVhbnBsdW0uX3N0YXJ0U3VjY2Vzc2Z1bCA9IHRydWU7XG4gICAgaWYgKExlYW5wbHVtLl9kZXZNb2RlKSB7XG4gICAgICBpZiAoV2ViU29ja2V0KSB7XG4gICAgICAgIExlYW5wbHVtLl9zb2NrZXRJT0Nvbm5lY3QoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdZb3VyIGJyb3dzZXIgZG9lc25cXCd0IHN1cHBvcnQgV2ViU29ja2V0cy4nKTtcbiAgICAgIH1cbiAgICB9XG4gICAgTGVhbnBsdW0uX2xvYWREaWZmcygpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX3N0YXJ0SGFuZGxlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIF9zdGFydEhhbmRsZXJzW2ldKExlYW5wbHVtLl9zdGFydFN1Y2Nlc3NmdWwpO1xuICAgIH1cbiAgfTtcblxuICBzdGF0aWMgc3RvcCgpIHtcbiAgICBMZWFucGx1bS5fcmVxdWVzdChDb25zdGFudHMuTUVUSE9EUy5TVE9QLCB1bmRlZmluZWQsIHtcbiAgICAgIHNlbmROb3c6IHRydWUsXG4gICAgICBxdWV1ZWQ6IHRydWUsXG4gICAgfSk7XG4gIH07XG5cbiAgc3RhdGljIHBhdXNlU2Vzc2lvbigpIHtcbiAgICBMZWFucGx1bS5fcmVxdWVzdChDb25zdGFudHMuTUVUSE9EUy5QQVVTRV9TRVNTSU9OLCB1bmRlZmluZWQsIHtcbiAgICAgIHNlbmROb3c6IHRydWUsXG4gICAgICBxdWV1ZWQ6IHRydWUsXG4gICAgfSk7XG4gIH07XG5cbiAgc3RhdGljIHJlc3VtZVNlc3Npb24oKSB7XG4gICAgTGVhbnBsdW0uX3JlcXVlc3QoQ29uc3RhbnRzLk1FVEhPRFMuUkVTVU1FX1NFU1NJT04sIHVuZGVmaW5lZCwge1xuICAgICAgc2VuZE5vdzogdHJ1ZSxcbiAgICAgIHF1ZXVlZDogdHJ1ZSxcbiAgICB9KTtcbiAgfTtcblxuICBzdGF0aWMgcGF1c2VTdGF0ZSgpIHtcbiAgICBMZWFucGx1bS5fcmVxdWVzdChDb25zdGFudHMuTUVUSE9EUy5QQVVTRV9TVEFURSwgdW5kZWZpbmVkLCB7XG4gICAgICBxdWV1ZWQ6IHRydWUsXG4gICAgfSk7XG4gIH07XG5cbiAgc3RhdGljIHJlc3VtZVN0YXRlKCkge1xuICAgIExlYW5wbHVtLl9yZXF1ZXN0KENvbnN0YW50cy5NRVRIT0RTLlJFU1VNRV9TVEFURSwgdW5kZWZpbmVkLCB7XG4gICAgICBxdWV1ZWQ6IHRydWUsXG4gICAgfSk7XG4gIH07XG5cbiAgc3RhdGljIHNldFVzZXJJZCh1c2VySWQpIHtcbiAgICBMZWFucGx1bS5zZXRVc2VyQXR0cmlidXRlcyh1c2VySWQpO1xuICB9XG5cbiAgc3RhdGljIHNldFVzZXJBdHRyaWJ1dGVzKHVzZXJJZCwgdXNlckF0dHJpYnV0ZXMpIHtcbiAgICBpZiAodXNlckF0dHJpYnV0ZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGVvZiB1c2VySWQgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdXNlckF0dHJpYnV0ZXMgPSB1c2VySWQ7XG4gICAgICAgIHVzZXJJZCA9IHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHVzZXJJZCAhPSAnc3RyaW5nJykge1xuICAgICAgICBjb25zb2xlLmxvZygnTGVhbnBsdW06IHNldFVzZXJBdHRyaWJ1dGVzIGV4cGVjdHMgYSBzdHJpbmcgb3IgYW4gJyArXG4gICAgICAgICAgICAnb2JqZWN0Jyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgTGVhbnBsdW0uX3JlcXVlc3QoQ29uc3RhbnRzLk1FVEhPRFMuU0VUX1VTRVJfQVRUUklCVVRFUyxcbiAgICAgICAgbmV3IEFyZ3NCdWlsZGVyKClcbiAgICAgICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5VU0VSX0FUVFJJQlVURVMsXG4gICAgICAgICAgICAgICAgdXNlckF0dHJpYnV0ZXMgPyBKU09OLnN0cmluZ2lmeSh1c2VyQXR0cmlidXRlcykgOiB1bmRlZmluZWQpXG4gICAgICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuTkVXX1VTRVJfSUQsIHVzZXJJZCksIHtcbiAgICAgICAgICBxdWV1ZWQ6IHRydWUsXG4gICAgICAgIH0pO1xuICAgIGlmICh1c2VySWQpIHtcbiAgICAgIExlYW5wbHVtLl91c2VySWQgPSB1c2VySWQ7XG4gICAgICBMZWFucGx1bS5fc2F2ZVRvTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuVVNFUl9JRCwgTGVhbnBsdW0uX3VzZXJJZCk7XG4gICAgfVxuICB9O1xuXG4gIHN0YXRpYyB0cmFjayhldmVudCwgdmFsdWUsIGluZm8sIHBhcmFtcykge1xuICAgIC8vIE92ZXJsb2Fkcy5cbiAgICAvLyBvYmplY3QgJiYgIW51bGwgJiYgIXVuZGVmaW5lZCAtPiBwYXJhbXNcbiAgICAvLyBzdHJpbmcgLT4gaW5mbywgcGFyYW1zXG4gICAgLy8gKiwgb2JqZWN0ICYmICFudWxsICYmICF1bmRlZmluZWQgLT4gdmFsdWUsIHBhcmFtc1xuICAgIGlmICh0eXBlb2YodmFsdWUpID09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHBhcmFtcyA9IHZhbHVlO1xuICAgICAgaW5mbyA9IHVuZGVmaW5lZDtcbiAgICAgIHZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mKHZhbHVlKSA9PSAnc3RyaW5nJykge1xuICAgICAgcGFyYW1zID0gaW5mbztcbiAgICAgIGluZm8gPSB2YWx1ZTtcbiAgICAgIHZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mKGluZm8pID09ICdvYmplY3QnICYmIGluZm8gIT09IG51bGwgJiZcbiAgICAgICAgaW5mbyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXJhbXMgPSBpbmZvO1xuICAgICAgaW5mbyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgTGVhbnBsdW0uX3JlcXVlc3QoQ29uc3RhbnRzLk1FVEhPRFMuVFJBQ0ssXG4gICAgICAgIG5ldyBBcmdzQnVpbGRlcigpXG4gICAgICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuRVZFTlQsIGV2ZW50KVxuICAgICAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlZBTFVFLCB2YWx1ZSB8fCAwLjApXG4gICAgICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuSU5GTywgaW5mbylcbiAgICAgICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5QQVJBTVMsIEpTT04uc3RyaW5naWZ5KHBhcmFtcykpLCB7XG4gICAgICAgICAgcXVldWVkOiB0cnVlLFxuICAgICAgICB9KTtcbiAgfTtcblxuICBzdGF0aWMgYWR2YW5jZVRvKHN0YXRlLCBpbmZvLCBwYXJhbXMpIHtcbiAgICAvLyBPdmVybG9hZHMuXG4gICAgLy8gc3RyaW5nfG51bGx8dW5kZWZpbmVkLCAqIC0+IGluZm8sIHBhcmFtc1xuICAgIC8vIG9iamVjdCAmJiAhbnVsbCAmJiAhdW5kZWZpbmVkIC0+IHBhcmFtc1xuICAgIGlmICh0eXBlb2YoaW5mbykgPT0gJ29iamVjdCcgJiYgaW5mbyAhPT0gbnVsbCAmJiBpbmZvICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHBhcmFtcyA9IGluZm87XG4gICAgICBpbmZvID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIExlYW5wbHVtLl9yZXF1ZXN0KENvbnN0YW50cy5NRVRIT0RTLkFEVkFOQ0UsXG4gICAgICAgIG5ldyBBcmdzQnVpbGRlcigpXG4gICAgICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuU1RBVEUsIHN0YXRlKVxuICAgICAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLklORk8sIGluZm8pXG4gICAgICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuUEFSQU1TLCBKU09OLnN0cmluZ2lmeShwYXJhbXMpKSwge1xuICAgICAgICAgIHF1ZXVlZDogdHJ1ZSxcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgd2ViIHB1c2ggaXMgc3VwcG9ydGVkIGluIHRoZSBicm93c2VyLlxuICAgKiBAcmV0dXJuIHtCb29sZWFufSBUcnVlIGlmIHN1cHBvcnRlZCwgZWxzZSBmYWxzZS5cbiAgICovXG4gIHN0YXRpYyBpc1dlYlB1c2hTdXBwb3J0ZWQoKSB7XG4gICAgaWYgKF9wdXNoTWFuYWdlcikge1xuICAgICAgcmV0dXJuIF9wdXNoTWFuYWdlci5pc1dlYlB1c2hTdXBwb3J0ZWQoKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgd2ViIHB1c2ggaXMgc3Vic2NyaWJlZC5cbiAgICogQHJldHVybiB7UHJvbWlzZX0gUmVzb2x2ZXMgaWYgdHJ1ZSwgcmVqZWN0cyBpZiBmYWxzZS5cbiAgICovXG4gIHN0YXRpYyBpc1dlYlB1c2hTdWJzY3JpYmVkKCkge1xuICAgIHJldHVybiBfcHVzaE1hbmFnZXIuaXNXZWJQdXNoU3Vic2NyaWJlZCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIHRoZSBicm93c2VyIGZvciB3ZWJwdXNoLlxuICAgKiBAcGFyYW0gIHtbdHlwZV19ICAgc2VydmljZVdvcmtlclVybCBUaGUgdXJsIG9uIHlvdXIgc2VydmVyIHRoYXQgaG9zdHMgdGhlXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC9zdy5taW4uanMgc2VydmljZSB3b3JrZXIganMgZmlsZS5cbiAgICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrICAgICAgICAgQSBjYWxsYmFjayB3aXRoIHRoZSByZWdpc3RyYXRpb25cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LlxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSAgICAgICAgICAgICAgICAgICBSZXNvbHZlcyBpZiByZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCxcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJ3aXNlIGZhaWxzLlxuICAgKi9cbiAgc3RhdGljIHJlZ2lzdGVyRm9yV2ViUHVzaChzZXJ2aWNlV29ya2VyVXJsKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmIChfcHVzaE1hbmFnZXIgJiYgX3B1c2hNYW5hZ2VyLmlzV2ViUHVzaFN1cHBvcnRlZCgpKSB7XG4gICAgICAgIHJldHVybiBfcHVzaE1hbmFnZXIucmVnaXN0ZXIoc2VydmljZVdvcmtlclVybCwgKGlzU3Vic2NyaWJlZCkgPT4ge1xuICAgICAgICAgIGlmIChpc1N1YnNjcmliZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gX3B1c2hNYW5hZ2VyLnN1YnNjcmliZVVzZXIoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVqZWN0KCdMZWFucGx1bTogV2ViUHVzaCBpcyBub3Qgc3VwcG9ydGVkLicpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVucmVnaXN0ZXJzIHRoZSBicm93c2VyIGZvcm0gd2VicHVzaC5cbiAgICogQHJldHVybiB7UHJvbWlzZX0gICAgICAgICAgICBSZXNvbHZlcyBvbiBzdWNjZXNzLCBvdGhlcndpc2UgcmVqZWN0cy5cbiAgICovXG4gIHN0YXRpYyB1bnJlZ2lzdGVyRnJvbVdlYlB1c2goKSB7XG4gICAgcmV0dXJuIF9wdXNoTWFuYWdlci51bnN1YnNjcmliZVVzZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIHRoZSBzdWJzY3JpcHRpb24gdG8gdGhlIExlYW5wbHVtIHNlcnZlci5cbiAgICogQHBhcmFtIHtTdHJpbmcvT2JqZWN0fSBzdWJzY3JpcHRpb24gVGhlIHN1YnNjcmlwdGlvbiBzdHJpbmcuXG4gICAqL1xuICBzdGF0aWMgX3NldFN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pIHtcbiAgICBpZiAoIXN1YnNjcmlwdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBMZWFucGx1bS5fcmVxdWVzdChDb25zdGFudHMuTUVUSE9EUy5TRVRfREVWSUNFX0FUVFJJQlVURVMsXG4gICAgICAgIG5ldyBBcmdzQnVpbGRlcigpLmFkZChDb25zdGFudHMuUEFSQU1TLldFQl9QVVNIX1NVQlNDUklQVElPTixcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbiksIHtcbiAgICAgICAgICBxdWV1ZWQ6IGZhbHNlLFxuICAgICAgICAgIHNlbmROb3c6IHRydWUsXG4gICAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gIC8vIFByaXZhdGUgTWV0aG9kc1xuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuICBzdGF0aWMgX3NvY2tldElPQ29ubmVjdCgpIHtcbiAgICBsZXQgY2xpZW50ID0gbmV3IFNvY2tldElvQ2xpZW50KCk7XG4gICAgbGV0IGF1dGhTZW50ID0gZmFsc2U7XG4gICAgY2xpZW50Lm9ub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghYXV0aFNlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0xlYW5wbHVtOiBDb25uZWN0ZWQgdG8gZGV2ZWxvcG1lbnQgc2VydmVyLicpO1xuICAgICAgICBsZXQgYXJncyA9IHt9O1xuICAgICAgICBhcmdzW0NvbnN0YW50cy5QQVJBTVMuQVBQX0lEXSA9IExlYW5wbHVtLl9hcHBJZDtcbiAgICAgICAgYXJnc1tDb25zdGFudHMuUEFSQU1TLkRFVklDRV9JRF0gPSBMZWFucGx1bS5fZGV2aWNlSWQ7XG4gICAgICAgIGNsaWVudC5zZW5kKCdhdXRoJywgYXJncyk7XG4gICAgICAgIGF1dGhTZW50ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNsaWVudC5vbmVycm9yID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBjb25zb2xlLmxvZygnTGVhbnBsdW06IFNvY2tldCBlcnJvcicsIGV2ZW50KTtcbiAgICB9O1xuICAgIGNsaWVudC5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnQsIGFyZ3MpIHtcbiAgICAgIGlmIChldmVudCA9PSAndXBkYXRlVmFycycpIHtcbiAgICAgICAgTGVhbnBsdW0uX3JlcXVlc3QoQ29uc3RhbnRzLk1FVEhPRFMuR0VUX1ZBUlMsXG4gICAgICAgICAgICBuZXcgQXJnc0J1aWxkZXIoKVxuICAgICAgICAgICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5JTkNMVURFX0RFRkFVTFRTLCBmYWxzZSksIHtcbiAgICAgICAgICAgICAgcXVldWVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgc2VuZE5vdzogdHJ1ZSxcbiAgICAgICAgICAgICAgcmVzcG9uc2U6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGxldCBnZXRWYXJzUmVzcG9uc2UgPSBMZWFucGx1bS5fZ2V0TGFzdFJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWVzID0gZ2V0VmFyc1Jlc3BvbnNlW0NvbnN0YW50cy5LRVlTLlZBUlNdO1xuICAgICAgICAgICAgICAgIGxldCB2YXJpYW50cyA9IGdldFZhcnNSZXNwb25zZVtDb25zdGFudHMuS0VZUy5WQVJJQU5UU107XG4gICAgICAgICAgICAgICAgbGV0IGFjdGlvbk1ldGFkYXRhID0gZ2V0VmFyc1Jlc3BvbnNlW0NvbnN0YW50cy5LRVlTLkFDVElPTl9NRVRBREFUQV07XG4gICAgICAgICAgICAgICAgaWYgKCFfLmlzRXF1YWwodmFsdWVzLCBMZWFucGx1bS5fZGlmZnMpKSB7XG4gICAgICAgICAgICAgICAgICBMZWFucGx1bS5fc2V0Q29udGVudCh2YWx1ZXMsIHZhcmlhbnRzLCBhY3Rpb25NZXRhZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChldmVudCA9PSAnZ2V0VmFyaWFibGVzJykge1xuICAgICAgICBMZWFucGx1bS5zZW5kVmFyaWFibGVzKCk7XG4gICAgICAgIGNsaWVudC5zZW5kKCdnZXRDb250ZW50UmVzcG9uc2UnLCB7XG4gICAgICAgICAgJ3VwZGF0ZWQnOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQgPT0gJ2dldEFjdGlvbnMnKSB7XG4gICAgICAgIC8vIFVuc3VwcG9ydGVkIGluIEphdmFTY3JpcHQgU0RLLlxuICAgICAgICBjbGllbnQuc2VuZCgnZ2V0Q29udGVudFJlc3BvbnNlJywge1xuICAgICAgICAgICd1cGRhdGVkJzogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChldmVudCA9PSAncmVnaXN0ZXJEZXZpY2UnKSB7XG4gICAgICAgIGFsZXJ0KCdZb3VyIGRldmljZSBoYXMgYmVlbiByZWdpc3RlcmVkIHRvICcgKyBhcmdzWzBdWydlbWFpbCddICsgJy4nKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNsaWVudC5vbmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS5sb2coJ0xlYW5wbHVtOiBEaXNjb25uZWN0ZWQgdG8gZGV2ZWxvcG1lbnQgc2VydmVyLicpO1xuICAgICAgYXV0aFNlbnQgPSBmYWxzZTtcbiAgICB9O1xuICAgIGNsaWVudC5jb25uZWN0KF9zb2NrZXRIb3N0KTtcbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIWNsaWVudC5jb25uZWN0ZWQgJiYgIWNsaWVudC5jb25uZWN0aW5nKSB7XG4gICAgICAgIGNsaWVudC5jb25uZWN0KF9zb2NrZXRIb3N0KTtcbiAgICAgIH1cbiAgICB9LCA1MDAwKTtcbiAgfTtcblxuICAvLyBMZWFucGx1bSB1dGlsaXR5IG1ldGhvZHMuXG5cbiAgc3RhdGljIF9zZXRDb250ZW50KGRpZmZzLCB2YXJpYW50cywgYWN0aW9uTWV0YWRhdGEpIHtcbiAgICBMZWFucGx1bS5fZGlmZnMgPSBkaWZmcztcbiAgICBfdmFyaWFudHMgPSB2YXJpYW50cztcbiAgICBfYWN0aW9uTWV0YWRhdGEgPSBhY3Rpb25NZXRhZGF0YTtcbiAgICBMZWFucGx1bS5faGFzUmVjZWl2ZWREaWZmcyA9IHRydWU7XG4gICAgTGVhbnBsdW0uX21lcmdlZCA9IExlYW5wbHVtLl9tZXJnZUhlbHBlcihMZWFucGx1bS5fdmFyaWFibGVzLCBkaWZmcyk7XG4gICAgTGVhbnBsdW0uX3NhdmVEaWZmcygpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX3ZhcmlhYmxlc0NoYW5nZWRIYW5kbGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgX3ZhcmlhYmxlc0NoYW5nZWRIYW5kbGVyc1tpXSgpO1xuICAgIH1cbiAgfTtcblxuICBzdGF0aWMgX21lcmdlSGVscGVyKHZhcnMsIGRpZmYpIHtcbiAgICBpZiAodHlwZW9mIGRpZmYgPT0gJ251bWJlcicgfHwgdHlwZW9mIGRpZmYgPT0gJ2Jvb2xlYW4nIHx8XG4gICAgICAgIHR5cGVvZiBkaWZmID09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gZGlmZjtcbiAgICB9XG4gICAgaWYgKGRpZmYgPT09IG51bGwgfHwgZGlmZiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdmFycztcbiAgICB9XG5cbiAgICBsZXQgb2JqSXRlcmF0b3IgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGYpIHtcbiAgICAgICAgaWYgKG9iaiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmoubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGYob2JqW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9yIChsZXQgYXR0ciBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmICh7fS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgYXR0cikpIHtcbiAgICAgICAgICAgICAgZihhdHRyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcbiAgICBsZXQgdmFyc0l0ZXJhdG9yID0gb2JqSXRlcmF0b3IodmFycyk7XG4gICAgbGV0IGRpZmZJdGVyYXRvciA9IG9iakl0ZXJhdG9yKGRpZmYpO1xuXG4gICAgLy8gSW5mZXIgdGhhdCB0aGUgZGlmZnMgaXMgYW4gYXJyYXkgaWYgdGhlIHZhcnMgdmFsdWUgZG9lc24ndCBleGlzdCB0byB0ZWxsXG4gICAgLy8gdXMgdGhlIHR5cGUuXG4gICAgbGV0IGlzQXJyYXkgPSBmYWxzZTtcbiAgICBpZiAodmFycyA9PSBudWxsKSB7XG4gICAgICBpZiAoIShkaWZmIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICAgIGlzQXJyYXkgPSBudWxsO1xuICAgICAgICBmb3IgKGxldCBhdHRyIGluIGRpZmYpIHtcbiAgICAgICAgICBpZiAoaXNBcnJheSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgaXNBcnJheSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghKHR5cGVvZiBhdHRyID09ICdzdHJpbmcnKSkge1xuICAgICAgICAgICAgaXNBcnJheSA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChhdHRyLmxlbmd0aCA8IDMgfHwgYXR0ci5jaGFyQXQoMCkgIT0gJ1snIHx8XG4gICAgICAgICAgICAgIGF0dHIuY2hhckF0KGF0dHIubGVuZ3RoIC0gMSkgIT0gJ10nKSB7XG4gICAgICAgICAgICBpc0FycmF5ID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IHZhclN1YnNjcmlwdCA9IGF0dHIuc3Vic3RyaW5nKDEsIGF0dHIubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgaWYgKCEoJycgKyBwYXJzZUludCh2YXJTdWJzY3JpcHQpKSA9PSB2YXJTdWJzY3JpcHQpIHtcbiAgICAgICAgICAgIGlzQXJyYXkgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1lcmdlIGFycmF5cy5cbiAgICBpZiAodmFycyBpbnN0YW5jZW9mIEFycmF5IHx8IGlzQXJyYXkpIHtcbiAgICAgIGxldCBtZXJnZWQgPSBbXTtcbiAgICAgIHZhcnNJdGVyYXRvcihmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICBtZXJnZWQucHVzaChhdHRyKTtcbiAgICAgIH0pO1xuICAgICAgZGlmZkl0ZXJhdG9yKGZ1bmN0aW9uICh2YXJTdWJzY3JpcHQpIHtcbiAgICAgICAgbGV0IHN1YnNjcmlwdCA9XG4gICAgICAgICAgICBwYXJzZUludCh2YXJTdWJzY3JpcHQuc3Vic3RyaW5nKDEsIHZhclN1YnNjcmlwdC5sZW5ndGggLSAxKSk7XG4gICAgICAgIGxldCBkaWZmVmFsdWUgPSBkaWZmW3ZhclN1YnNjcmlwdF07XG4gICAgICAgIHdoaWxlIChzdWJzY3JpcHQgPj0gbWVyZ2VkLmxlbmd0aCkge1xuICAgICAgICAgIG1lcmdlZC5wdXNoKG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIG1lcmdlZFtzdWJzY3JpcHRdID0gTGVhbnBsdW0uX21lcmdlSGVscGVyKG1lcmdlZFtzdWJzY3JpcHRdLCBkaWZmVmFsdWUpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbWVyZ2VkO1xuICAgIH1cblxuICAgIC8vIE1lcmdlIGRpY3Rpb25hcmllcy5cbiAgICBsZXQgbWVyZ2VkID0ge307XG4gICAgdmFyc0l0ZXJhdG9yKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICBpZiAoZGlmZlthdHRyXSA9PT0gbnVsbCB8fCBkaWZmW2F0dHJdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbWVyZ2VkW2F0dHJdID0gdmFyc1thdHRyXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBkaWZmSXRlcmF0b3IoZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgIG1lcmdlZFthdHRyXSA9IExlYW5wbHVtLl9tZXJnZUhlbHBlcih2YXJzICE9IG51bGwgPyB2YXJzW2F0dHJdIDogbnVsbCxcbiAgICAgICAgICBkaWZmW2F0dHJdKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbWVyZ2VkO1xuICB9O1xuXG4gIHN0YXRpYyBfc2VuZFZhcmlhYmxlcygpIHtcbiAgICBsZXQgYm9keSA9IHt9O1xuICAgIGJvZHlbQ29uc3RhbnRzLlBBUkFNUy5WQVJJQUJMRVNdID0gTGVhbnBsdW0uX3ZhcmlhYmxlcztcbiAgICBMZWFucGx1bS5fcmVxdWVzdChDb25zdGFudHMuTUVUSE9EUy5TRVRfVkFSUyxcbiAgICAgICAgbmV3IEFyZ3NCdWlsZGVyKCkuYm9keShKU09OLnN0cmluZ2lmeShib2R5KSksIHtcbiAgICAgICAgICBzZW5kTm93OiB0cnVlLFxuICAgICAgICB9KTtcbiAgfTtcblxuICBzdGF0aWMgX2xvYWREaWZmcygpIHtcbiAgICB0cnkge1xuICAgICAgTGVhbnBsdW0uX3NldENvbnRlbnQoXG4gICAgICAgICAgSlNPTi5wYXJzZShMZWFucGx1bS5fZ2V0RnJvbUxvY2FsU3RvcmFnZShcbiAgICAgICAgICAgICAgICAgIENvbnN0YW50cy5ERUZBVUxUX0tFWVMuVkFSSUFCTEVTKSB8fCBudWxsKSxcbiAgICAgICAgICBKU09OLnBhcnNlKExlYW5wbHVtLl9nZXRGcm9tTG9jYWxTdG9yYWdlKFxuICAgICAgICAgICAgICAgICAgQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5WQVJJQU5UUykgfHwgbnVsbCksXG4gICAgICAgICAgSlNPTi5wYXJzZShMZWFucGx1bS5fZ2V0RnJvbUxvY2FsU3RvcmFnZShcbiAgICAgICAgICAgICAgICAgIENvbnN0YW50cy5ERUZBVUxUX0tFWVMuQUNUSU9OX01FVEFEQVRBKSB8fCBudWxsKSk7XG4gICAgICBfdG9rZW4gPSBMZWFucGx1bS5fZ2V0RnJvbUxvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLlRPS0VOKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZygnTGVhbnBsdW06IEludmFsaWQgZGlmZnM6ICcgKyBlKTtcbiAgICB9XG4gIH07XG5cbiAgc3RhdGljIF9zYXZlRGlmZnMoKSB7XG4gICAgTGVhbnBsdW0uX3NhdmVUb0xvY2FsU3RvcmFnZShcbiAgICAgICAgQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5WQVJJQUJMRVMsIEpTT04uc3RyaW5naWZ5KExlYW5wbHVtLl9kaWZmcyB8fCB7fSkpO1xuICAgIExlYW5wbHVtLl9zYXZlVG9Mb2NhbFN0b3JhZ2UoXG4gICAgICAgIENvbnN0YW50cy5ERUZBVUxUX0tFWVMuVkFSSUFOVFMsIEpTT04uc3RyaW5naWZ5KF92YXJpYW50cyB8fCBbXSlcbiAgICApO1xuICAgIExlYW5wbHVtLl9zYXZlVG9Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5BQ1RJT05fTUVUQURBVEEsXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KF9hY3Rpb25NZXRhZGF0YSB8fCB7fSkpO1xuICAgIExlYW5wbHVtLl9zYXZlVG9Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5UT0tFTiwgX3Rva2VuKTtcbiAgfTtcblxuICBzdGF0aWMgX3NhdmVSZXF1ZXN0Rm9yTGF0ZXIoYXJncykge1xuICAgIGxldCBjb3VudCA9IExlYW5wbHVtLl9nZXRGcm9tTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuQ09VTlQpIHx8IDA7XG4gICAgbGV0IGl0ZW1LZXkgPSBDb25zdGFudHMuREVGQVVMVF9LRVlTLklURU0gKyBjb3VudDtcbiAgICBMZWFucGx1bS5fc2F2ZVRvTG9jYWxTdG9yYWdlKGl0ZW1LZXksIEpTT04uc3RyaW5naWZ5KGFyZ3MpKTtcbiAgICBjb3VudCsrO1xuICAgIExlYW5wbHVtLl9zYXZlVG9Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5DT1VOVCwgY291bnQpO1xuICB9O1xuXG4gIHN0YXRpYyBfcG9wVW5zZW50UmVxdWVzdHMoKSB7XG4gICAgbGV0IHJlcXVlc3REYXRhID0gW107XG4gICAgbGV0IGNvdW50ID0gTGVhbnBsdW0uX2dldEZyb21Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5DT1VOVCkgfHwgMDtcbiAgICBMZWFucGx1bS5fcmVtb3ZlRnJvbUxvY2FsU3RvcmFnZShDb25zdGFudHMuREVGQVVMVF9LRVlTLkNPVU5UKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgIGxldCBpdGVtS2V5ID0gQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5JVEVNICsgaTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCByZXF1ZXN0QXJncyA9IEpTT04ucGFyc2UoTGVhbnBsdW0uX2dldEZyb21Mb2NhbFN0b3JhZ2UoaXRlbUtleSkpO1xuICAgICAgICByZXF1ZXN0RGF0YS5wdXNoKHJlcXVlc3RBcmdzKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIH1cbiAgICAgIExlYW5wbHVtLl9yZW1vdmVGcm9tTG9jYWxTdG9yYWdlKGl0ZW1LZXkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdERhdGE7XG4gIH07XG5cbiAgc3RhdGljIF9yZXF1ZXN0KGFjdGlvbiwgcGFyYW1zLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgcGFyYW1zID0gcGFyYW1zIHx8IG5ldyBBcmdzQnVpbGRlcigpO1xuXG4gICAgLy8gR2V0IG9yIGNyZWF0ZSBkZXZpY2UgSUQgYW5kIHVzZXIgSUQuXG4gICAgaWYgKCFMZWFucGx1bS5fZGV2aWNlSWQpIHtcbiAgICAgIExlYW5wbHVtLl9kZXZpY2VJZCA9XG4gICAgICAgICAgTGVhbnBsdW0uX2dldEZyb21Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5ERVZJQ0VfSUQpO1xuICAgIH1cbiAgICBpZiAoIUxlYW5wbHVtLl9kZXZpY2VJZCkge1xuICAgICAgbGV0IGlkID0gJyc7XG4gICAgICBsZXQgcG9zc2libGUgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eicgK1xuICAgICAgICAgICcwMTIzNDU2Nzg5JztcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkrKykge1xuICAgICAgICBpZCArPSBwb3NzaWJsZS5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGUubGVuZ3RoKSk7XG4gICAgICB9XG4gICAgICBMZWFucGx1bS5fZGV2aWNlSWQgPSBpZDtcbiAgICAgIExlYW5wbHVtLl9zYXZlVG9Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5ERVZJQ0VfSUQsIGlkKTtcbiAgICB9XG4gICAgaWYgKCFMZWFucGx1bS5fdXNlcklkKSB7XG4gICAgICBMZWFucGx1bS5fdXNlcklkID0gTGVhbnBsdW0uX2dldEZyb21Mb2NhbFN0b3JhZ2UoQ29uc3RhbnRzLkRFRkFVTFRfS0VZUy5VU0VSX0lEKTtcbiAgICAgIGlmICghTGVhbnBsdW0uX3VzZXJJZCkge1xuICAgICAgICBMZWFucGx1bS5fdXNlcklkID0gTGVhbnBsdW0uX2RldmljZUlkO1xuICAgICAgfVxuICAgIH1cbiAgICBMZWFucGx1bS5fc2F2ZVRvTG9jYWxTdG9yYWdlKENvbnN0YW50cy5ERUZBVUxUX0tFWVMuVVNFUl9JRCwgTGVhbnBsdW0uX3VzZXJJZCk7XG5cbiAgICBsZXQgYXJnc0J1aWxkZXIgPSBwYXJhbXNcbiAgICAgICAgLmF0dGFjaEFwaUtleXMoTGVhbnBsdW0uX2FwcElkLCBMZWFucGx1bS5fY2xpZW50S2V5KVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuU0RLX1ZFUlNJT04sIENvbnN0YW50cy5TREtfVkVSU0lPTilcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkRFVklDRV9JRCwgTGVhbnBsdW0uX2RldmljZUlkKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuVVNFUl9JRCwgTGVhbnBsdW0uX3VzZXJJZClcbiAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLkFDVElPTiwgYWN0aW9uKVxuICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuVkVSU0lPTl9OQU1FLCBMZWFucGx1bS5fdmVyc2lvbk5hbWUpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5ERVZfTU9ERSwgTGVhbnBsdW0uX2Rldk1vZGUpXG4gICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5USU1FLCAnJyArIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApKTtcbiAgICBsZXQgc3VjY2VzcyA9IG9wdGlvbnMuc3VjY2VzcyB8fCBvcHRpb25zLnJlc3BvbnNlO1xuICAgIGxldCBlcnJvciA9IG9wdGlvbnMuZXJyb3IgfHwgb3B0aW9ucy5yZXNwb25zZTtcblxuICAgIGlmICghTGVhbnBsdW0uX2FwcElkIHx8ICFMZWFucGx1bS5fY2xpZW50S2V5KSB7XG4gICAgICBsZXQgZXJyID0gJ0xlYW5wbHVtIEFwcCBJRCBhbmQgY2xpZW50IGtleSBhcmUgbm90IHNldC4gTWFrZSBzdXJlIHlvdSAnICtcbiAgICAgICAgICAnYXJlIGNhbGxpbmcgc2V0QXBwSWRGb3JEZXZlbG9wbWVudE1vZGUgb3Igc2V0QXBwSWRGb3JQcm9kdWN0aW9uTW9kZSAnICtcbiAgICAgICAgICAnYmVmb3JlIGlzc3VpbmcgQVBJIGNhbGxzLic7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICBpZiAoZXJyb3IpIGVycm9yKGVycik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5ib2R5KCkpIHtcbiAgICAgIFJlcXVlc3QuYWpheCgnUE9TVCcsIF9hcGlQYXRoICsgJz8nICsgYXJnc0J1aWxkZXIuYnVpbGQoKSxcbiAgICAgICAgICBwYXJhbXMuYm9keSgpLCBzdWNjZXNzLCBlcnJvciwgb3B0aW9ucy5xdWV1ZWQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBzZW5kTm93ID0gKExlYW5wbHVtLl9kZXZNb2RlIHx8IG9wdGlvbnMuc2VuZE5vdyB8fFxuICAgICFfYmF0Y2hFbmFibGVkKTtcblxuICAgIGxldCBzZW5kVW5zZW50UmVxdWVzdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgcmVxdWVzdHNUb1NlbmQgPSBMZWFucGx1bS5fcG9wVW5zZW50UmVxdWVzdHMoKTtcbiAgICAgIGlmIChyZXF1ZXN0c1RvU2VuZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCByZXF1ZXN0RGF0YSA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAnZGF0YSc6IHJlcXVlc3RzVG9TZW5kLFxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IG11bHRpUmVxdWVzdEFyZ3MgPSBuZXcgQXJnc0J1aWxkZXIoKVxuICAgICAgICAgICAgLmF0dGFjaEFwaUtleXMoTGVhbnBsdW0uX2FwcElkLCBMZWFucGx1bS5fY2xpZW50S2V5KVxuICAgICAgICAgICAgLmFkZChDb25zdGFudHMuUEFSQU1TLlNES19WRVJTSU9OLCBDb25zdGFudHMuU0RLX1ZFUlNJT04pXG4gICAgICAgICAgICAuYWRkKENvbnN0YW50cy5QQVJBTVMuQUNUSU9OLCBDb25zdGFudHMuTUVUSE9EUy5NVUxUSSlcbiAgICAgICAgICAgIC5hZGQoQ29uc3RhbnRzLlBBUkFNUy5USU1FLCAnJyArIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApKVxuICAgICAgICAgICAgLmJ1aWxkKCk7XG4gICAgICAgIFJlcXVlc3QuYWpheCgnUE9TVCcsIF9hcGlQYXRoICsgJz8nICsgbXVsdGlSZXF1ZXN0QXJncywgcmVxdWVzdERhdGEsXG4gICAgICAgICAgICBzdWNjZXNzLCBlcnJvciwgb3B0aW9ucy5xdWV1ZWQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBEZWFsIHdpdGggY29vbGRvd24uXG4gICAgaWYgKCFzZW5kTm93ICYmIF9iYXRjaENvb2xkb3duKSB7XG4gICAgICBsZXQgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwO1xuICAgICAgaWYgKCFMZWFucGx1bS5fbGFzdFJlcXVlc3RUaW1lIHx8XG4gICAgICAgICAgbm93IC0gTGVhbnBsdW0uX2xhc3RSZXF1ZXN0VGltZSA+PSBfYmF0Y2hDb29sZG93bikge1xuICAgICAgICBzZW5kTm93ID0gdHJ1ZTtcbiAgICAgICAgTGVhbnBsdW0uX2xhc3RSZXF1ZXN0VGltZSA9IG5vdztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghTGVhbnBsdW0uX2Nvb2xkb3duVGltZW91dCkge1xuICAgICAgICAgIExlYW5wbHVtLl9jb29sZG93blRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIExlYW5wbHVtLl9jb29sZG93blRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgTGVhbnBsdW0uX2xhc3RSZXF1ZXN0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMDtcbiAgICAgICAgICAgIHNlbmRVbnNlbnRSZXF1ZXN0cygpO1xuICAgICAgICAgIH0sIChfYmF0Y2hDb29sZG93biAtXG4gICAgICAgICAgICAgIChub3cgLSBMZWFucGx1bS5fbGFzdFJlcXVlc3RUaW1lKSkgKiAxMDAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIExlYW5wbHVtLl9zYXZlUmVxdWVzdEZvckxhdGVyKGFyZ3NCdWlsZGVyLmJ1aWxkRGljdCgpKTtcbiAgICBpZiAoc2VuZE5vdykge1xuICAgICAgc2VuZFVuc2VudFJlcXVlc3RzKCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8gUmVzcG9uc2UgcGFyc2luZyAvLy8vLy8vLy8vLy8vLy8vLy9cblxuICBzdGF0aWMgX251bVJlc3BvbnNlcyhyZXNwb25zZSkge1xuICAgIGlmICghcmVzcG9uc2UgfHwgIXJlc3BvbnNlWydyZXNwb25zZSddKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlWydyZXNwb25zZSddLmxlbmd0aDtcbiAgfTtcblxuICBzdGF0aWMgX2dldFJlc3BvbnNlQXQocmVzcG9uc2UsIGluZGV4KSB7XG4gICAgaWYgKCFyZXNwb25zZSB8fCAhcmVzcG9uc2VbJ3Jlc3BvbnNlJ10pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gcmVzcG9uc2VbJ3Jlc3BvbnNlJ11baW5kZXhdO1xuICB9O1xuXG4gIHN0YXRpYyBfZ2V0TGFzdFJlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgbGV0IGNvdW50ID0gTGVhbnBsdW0uX251bVJlc3BvbnNlcyhyZXNwb25zZSk7XG4gICAgaWYgKGNvdW50ID4gMCkge1xuICAgICAgcmV0dXJuIExlYW5wbHVtLl9nZXRSZXNwb25zZUF0KHJlc3BvbnNlLCBjb3VudCAtIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgc3RhdGljIF9pc1Jlc3BvbnNlU3VjY2VzcyhyZXNwb25zZSkge1xuICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlWydzdWNjZXNzJ10gPyB0cnVlIDogZmFsc2U7XG4gIH07XG5cbiAgc3RhdGljIF9nZXRSZXNwb25zZUVycm9yKHJlc3BvbnNlKSB7XG4gICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGxldCBlcnJvciA9IHJlc3BvbnNlWydlcnJvciddO1xuICAgIGlmICghZXJyb3IpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gZXJyb3JbJ21lc3NhZ2UnXTtcbiAgfTtcblxuICBzdGF0aWMgX2dldEZyb21Mb2NhbFN0b3JhZ2Uoa2V5KSB7XG4gICAgaWYgKF9sb2NhbFN0b3JhZ2VFbmFibGVkID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIF9hbHRlcm5hdGVMb2NhbFN0b3JhZ2Vba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZVtrZXldO1xuICB9O1xuXG4gIHN0YXRpYyBfc2F2ZVRvTG9jYWxTdG9yYWdlKGtleSwgdmFsdWUpIHtcbiAgICBpZiAoX2xvY2FsU3RvcmFnZUVuYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICBfYWx0ZXJuYXRlTG9jYWxTdG9yYWdlW2tleV0gPSB2YWx1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGxvY2FsU3RvcmFnZVtrZXldID0gdmFsdWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgX2xvY2FsU3RvcmFnZUVuYWJsZWQgPSBmYWxzZTtcbiAgICAgIExlYW5wbHVtLl9zYXZlVG9Mb2NhbFN0b3JhZ2Uoa2V5LCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHN0YXRpYyBfcmVtb3ZlRnJvbUxvY2FsU3RvcmFnZShrZXkpIHtcbiAgICBpZiAoX2xvY2FsU3RvcmFnZUVuYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICBkZWxldGUgX2FsdGVybmF0ZUxvY2FsU3RvcmFnZVtrZXldO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBfbG9jYWxTdG9yYWdlRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgTGVhbnBsdW0uX3JlbW92ZUZyb21Mb2NhbFN0b3JhZ2Uoa2V5KTtcbiAgICB9XG4gIH1cbn1cblxubGV0IF9wdXNoTWFuYWdlciA9IG5ldyBQdXNoTWFuYWdlcihMZWFucGx1bSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTGVhbnBsdW07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTGVhbnBsdW0uanMiXSwic291cmNlUm9vdCI6IiJ9
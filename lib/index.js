'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var env = process.env.NODE_ENV || 'test';
var DISABLE_AXMEN = process.env.DISABLE_AXMEN || false;

var Logger = function () {
  function Logger() {
    (0, _classCallCheck3.default)(this, Logger);

    this.namespace = '';
    this.enable = !DISABLE_AXMEN;
  }

  (0, _createClass3.default)(Logger, [{
    key: 'configure',
    value: function configure() {
      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var namespace = _ref.namespace;
      var _ref$showEnv = _ref.showEnv;
      var showEnv = _ref$showEnv === undefined ? true : _ref$showEnv;

      this.namespace = namespace;
      this.showEnv = showEnv;
    }
  }, {
    key: 'log',
    value: function log() {
      var _console;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (!this.enable) return;

      var prepend = [this.namespace && _chalk2.default.blue('[' + this.namespace + ']'), this.showEnv && env && _chalk2.default.blue('[env=' + env + ']')].filter(function (a) {
        return a;
      });

      args = prepend.concat(args);
      (_console = console).log.apply(_console, (0, _toConsumableArray3.default)(args));
    }
  }]);
  return Logger;
}();

exports.default = new Logger();
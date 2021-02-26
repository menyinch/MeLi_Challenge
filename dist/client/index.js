"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactRouterDom = require("react-router-dom");

var _Routes = _interopRequireDefault(require("./routes/Routes.jsx"));

require("./index.scss");

// Import Node Modules
// Import React Components
// Import Style Component
_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react["default"].createElement(_Routes["default"], null)), document.getElementById('app'));
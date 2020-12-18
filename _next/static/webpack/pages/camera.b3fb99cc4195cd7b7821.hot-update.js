webpackHotUpdate_N_E("pages/camera",{

/***/ "./src/Domain/Wildlife/Wildlife.ts":
/*!*****************************************!*\
  !*** ./src/Domain/Wildlife/Wildlife.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Wildlife; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _verifiedAnimals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./verifiedAnimals */ "./src/Domain/Wildlife/verifiedAnimals.ts");




var Wildlife = /*#__PURE__*/function () {
  function Wildlife() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Wildlife);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Wildlife, null, [{
    key: "isVerifiedAnimal",
    value: function isVerifiedAnimal(thing) {
      return _verifiedAnimals__WEBPACK_IMPORTED_MODULE_2__["verifiedAnimals"].find(function (value) {
        return thing.includes(value);
      });
    }
  }]);

  return Wildlife;
}();



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0RvbWFpbi9XaWxkbGlmZS9XaWxkbGlmZS50cyJdLCJuYW1lcyI6WyJXaWxkbGlmZSIsInRoaW5nIiwidmVyaWZpZWRBbmltYWxzIiwiZmluZCIsInZhbHVlIiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRXFCQSxROzs7Ozs7O3FDQUNZQyxLLEVBQWU7QUFDNUMsYUFBT0MsZ0VBQWUsQ0FBQ0MsSUFBaEIsQ0FBcUIsVUFBQ0MsS0FBRDtBQUFBLGVBQW1CSCxLQUFLLENBQUNJLFFBQU4sQ0FBZUQsS0FBZixDQUFuQjtBQUFBLE9BQXJCLENBQVA7QUFDRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYW1lcmEuYjNmYjk5Y2M0MTk1Y2Q3Yjc4MjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHZlcmlmaWVkQW5pbWFscyB9IGZyb20gJy4vdmVyaWZpZWRBbmltYWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaWxkbGlmZSB7XG4gIHB1YmxpYyBzdGF0aWMgaXNWZXJpZmllZEFuaW1hbCh0aGluZzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHZlcmlmaWVkQW5pbWFscy5maW5kKCh2YWx1ZTogc3RyaW5nKSA9PiB0aGluZy5pbmNsdWRlcyh2YWx1ZSkpXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
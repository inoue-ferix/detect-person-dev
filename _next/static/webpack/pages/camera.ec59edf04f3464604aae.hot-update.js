webpackHotUpdate_N_E("pages/camera",{

/***/ "./src/hooks/useCapture.ts":
/*!*********************************!*\
  !*** ./src/hooks/useCapture.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useCapture; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Domain_Wildlife_Wildlife__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Domain/Wildlife/Wildlife */ "./src/Domain/Wildlife/Wildlife.ts");



var _s = $RefreshSig$();



/**
 * 画像を取得後、物体検出し、データに動物が入っていれば、classNameとしてデータを入力する
 * 整形済みフレームデータを返す
 */

function useCapture(predictor) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      label = _useState[0],
      setLabel = _useState[1];

  var createValidFrame = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_canvas) {
      var predictions, isVerifiedClass, className, newFrame;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(_canvas.width === 0)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", {
                time: Math.floor(new Date().getTime() / 1000),
                className: null
              });

            case 2:
              _context.next = 4;
              return predictor.predict(_canvas);

            case 4:
              predictions = _context.sent;
              isVerifiedClass = predictions.find(function (value) {
                return !!_Domain_Wildlife_Wildlife__WEBPACK_IMPORTED_MODULE_3__["default"].isVerifiedAnimal(value["class"]);
              }); // for Coco SSD
              // const isVerifiedClass = predictions.find((value: any) => !!Wildlife.isVerifiedAnimal(value.className))// for MobileNet

              className = predictions.length === 0 ? null : isVerifiedClass["class"]; // for Coco SSD
              // const className = !isVerifiedClass ? null : isVerifiedClass.className // for MobileNet

              newFrame = {
                time: Math.floor(new Date().getTime() / 1000),
                className: className
              };
              setLabel(className);
              return _context.abrupt("return", newFrame);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function createValidFrame(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return {
    createValidFrame: createValidFrame,
    label: label
  };
}

_s(useCapture, "7xSaIUVv5KxyNr4foup6xzouQ/Y=");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZUNhcHR1cmUudHMiXSwibmFtZXMiOlsidXNlQ2FwdHVyZSIsInByZWRpY3RvciIsInVzZVN0YXRlIiwibGFiZWwiLCJzZXRMYWJlbCIsImNyZWF0ZVZhbGlkRnJhbWUiLCJfY2FudmFzIiwid2lkdGgiLCJ0aW1lIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsImdldFRpbWUiLCJjbGFzc05hbWUiLCJwcmVkaWN0IiwicHJlZGljdGlvbnMiLCJpc1ZlcmlmaWVkQ2xhc3MiLCJmaW5kIiwidmFsdWUiLCJXaWxkbGlmZSIsImlzVmVyaWZpZWRBbmltYWwiLCJsZW5ndGgiLCJuZXdGcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ2UsU0FBU0EsVUFBVCxDQUFvQkMsU0FBcEIsRUFBNkM7QUFBQTs7QUFBQSxrQkFDaENDLHNEQUFRLENBQU0sSUFBTixDQUR3QjtBQUFBLE1BQ25EQyxLQURtRDtBQUFBLE1BQzVDQyxRQUQ0Qzs7QUFFMUQsTUFBTUMsZ0JBQWdCO0FBQUEsZ01BQUcsaUJBQU9DLE9BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQ25CQSxPQUFPLENBQUNDLEtBQVIsS0FBa0IsQ0FEQztBQUFBO0FBQUE7QUFBQTs7QUFBQSwrQ0FDUztBQUFFQyxvQkFBSSxFQUFFQyxJQUFJLENBQUNDLEtBQUwsQ0FBVyxJQUFJQyxJQUFKLEdBQVdDLE9BQVgsS0FBdUIsSUFBbEMsQ0FBUjtBQUFpREMseUJBQVMsRUFBRTtBQUE1RCxlQURUOztBQUFBO0FBQUE7QUFBQSxxQkFFR1osU0FBUyxDQUFDYSxPQUFWLENBQWtCUixPQUFsQixDQUZIOztBQUFBO0FBRWpCUyx5QkFGaUI7QUFJakJDLDZCQUppQixHQUlDRCxXQUFXLENBQUNFLElBQVosQ0FBaUIsVUFBQ0MsS0FBRDtBQUFBLHVCQUFnQixDQUFDLENBQUNDLGlFQUFRLENBQUNDLGdCQUFULENBQTBCRixLQUFLLFNBQS9CLENBQWxCO0FBQUEsZUFBakIsQ0FKRCxFQUk0RTtBQUNuRzs7QUFDTUwsdUJBTmlCLEdBTUxFLFdBQVcsQ0FBQ00sTUFBWixLQUF1QixDQUF2QixHQUEyQixJQUEzQixHQUFrQ0wsZUFBZSxTQU41QyxFQU1tRDtBQUMxRTs7QUFFTU0sc0JBVGlCLEdBU0M7QUFBRWQsb0JBQUksRUFBRUMsSUFBSSxDQUFDQyxLQUFMLENBQVcsSUFBSUMsSUFBSixHQUFXQyxPQUFYLEtBQXVCLElBQWxDLENBQVI7QUFBaURDLHlCQUFTLEVBQVRBO0FBQWpELGVBVEQ7QUFXdkJULHNCQUFRLENBQUNTLFNBQUQsQ0FBUjtBQVh1QiwrQ0FZaEJTLFFBWmdCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQWhCakIsZ0JBQWdCO0FBQUE7QUFBQTtBQUFBLEtBQXRCOztBQWNBLFNBQU87QUFBRUEsb0JBQWdCLEVBQWhCQSxnQkFBRjtBQUFvQkYsU0FBSyxFQUFMQTtBQUFwQixHQUFQO0FBQ0Q7O0dBakJ1QkgsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYW1lcmEuZWM1OWVkZjA0ZjM0NjQ2MDRhYWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgV2lsZGxpZmUgZnJvbSAnLi4vRG9tYWluL1dpbGRsaWZlL1dpbGRsaWZlJ1xuXG4vKipcbiAqIOeUu+WDj+OCkuWPluW+l+W+jOOAgeeJqeS9k+aknOWHuuOBl+OAgeODh+ODvOOCv+OBq+WLleeJqeOBjOWFpeOBo+OBpuOBhOOCjOOBsOOAgWNsYXNzTmFtZeOBqOOBl+OBpuODh+ODvOOCv+OCkuWFpeWKm+OBmeOCi1xuICog5pW05b2i5riI44G/44OV44Os44O844Og44OH44O844K/44KS6L+U44GZXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUNhcHR1cmUocHJlZGljdG9yOiBJTUxQcmVkaWN0b3IpIHtcbiAgY29uc3QgW2xhYmVsLCBzZXRMYWJlbF0gPSB1c2VTdGF0ZTxhbnk+KG51bGwpXG4gIGNvbnN0IGNyZWF0ZVZhbGlkRnJhbWUgPSBhc3luYyAoX2NhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpID0+IHtcbiAgICBpZiAoX2NhbnZhcy53aWR0aCA9PT0gMCkgcmV0dXJuIHsgdGltZTogTWF0aC5mbG9vcihuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApLCBjbGFzc05hbWU6IG51bGwgfVxuICAgIGNvbnN0IHByZWRpY3Rpb25zID0gYXdhaXQgcHJlZGljdG9yLnByZWRpY3QoX2NhbnZhcylcblxuICAgIGNvbnN0IGlzVmVyaWZpZWRDbGFzcyA9IHByZWRpY3Rpb25zLmZpbmQoKHZhbHVlOiBhbnkpID0+ICEhV2lsZGxpZmUuaXNWZXJpZmllZEFuaW1hbCh2YWx1ZS5jbGFzcykpIC8vIGZvciBDb2NvIFNTRFxuICAgIC8vIGNvbnN0IGlzVmVyaWZpZWRDbGFzcyA9IHByZWRpY3Rpb25zLmZpbmQoKHZhbHVlOiBhbnkpID0+ICEhV2lsZGxpZmUuaXNWZXJpZmllZEFuaW1hbCh2YWx1ZS5jbGFzc05hbWUpKS8vIGZvciBNb2JpbGVOZXRcbiAgICBjb25zdCBjbGFzc05hbWUgPSBwcmVkaWN0aW9ucy5sZW5ndGggPT09IDAgPyBudWxsIDogaXNWZXJpZmllZENsYXNzLmNsYXNzIC8vIGZvciBDb2NvIFNTRFxuICAgIC8vIGNvbnN0IGNsYXNzTmFtZSA9ICFpc1ZlcmlmaWVkQ2xhc3MgPyBudWxsIDogaXNWZXJpZmllZENsYXNzLmNsYXNzTmFtZSAvLyBmb3IgTW9iaWxlTmV0XG5cbiAgICBjb25zdCBuZXdGcmFtZTogRnJhbWUgPSB7IHRpbWU6IE1hdGguZmxvb3IobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKSwgY2xhc3NOYW1lIH1cblxuICAgIHNldExhYmVsKGNsYXNzTmFtZSlcbiAgICByZXR1cm4gbmV3RnJhbWVcbiAgfVxuICByZXR1cm4geyBjcmVhdGVWYWxpZEZyYW1lLCBsYWJlbCB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9
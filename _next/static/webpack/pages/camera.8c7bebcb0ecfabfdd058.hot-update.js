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
                return !!_Domain_Wildlife_Wildlife__WEBPACK_IMPORTED_MODULE_3__["default"].isVerifiedAnimal(value.className);
              });
              className = predictions.length === 0 ? null : predictions[0].className;
              console.log(className); // const className = !isVerifiedClass ? null : isVerifiedClass.className

              newFrame = {
                time: Math.floor(new Date().getTime() / 1000),
                className: className
              };
              setLabel(className);
              return _context.abrupt("return", newFrame);

            case 11:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZUNhcHR1cmUudHMiXSwibmFtZXMiOlsidXNlQ2FwdHVyZSIsInByZWRpY3RvciIsInVzZVN0YXRlIiwibGFiZWwiLCJzZXRMYWJlbCIsImNyZWF0ZVZhbGlkRnJhbWUiLCJfY2FudmFzIiwid2lkdGgiLCJ0aW1lIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsImdldFRpbWUiLCJjbGFzc05hbWUiLCJwcmVkaWN0IiwicHJlZGljdGlvbnMiLCJpc1ZlcmlmaWVkQ2xhc3MiLCJmaW5kIiwidmFsdWUiLCJXaWxkbGlmZSIsImlzVmVyaWZpZWRBbmltYWwiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwibmV3RnJhbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNlLFNBQVNBLFVBQVQsQ0FBb0JDLFNBQXBCLEVBQTZDO0FBQUE7O0FBQUEsa0JBQ2hDQyxzREFBUSxDQUFNLElBQU4sQ0FEd0I7QUFBQSxNQUNuREMsS0FEbUQ7QUFBQSxNQUM1Q0MsUUFENEM7O0FBRTFELE1BQU1DLGdCQUFnQjtBQUFBLGdNQUFHLGlCQUFPQyxPQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUNuQkEsT0FBTyxDQUFDQyxLQUFSLEtBQWtCLENBREM7QUFBQTtBQUFBO0FBQUE7O0FBQUEsK0NBQ1M7QUFBRUMsb0JBQUksRUFBRUMsSUFBSSxDQUFDQyxLQUFMLENBQVcsSUFBSUMsSUFBSixHQUFXQyxPQUFYLEtBQXVCLElBQWxDLENBQVI7QUFBaURDLHlCQUFTLEVBQUU7QUFBNUQsZUFEVDs7QUFBQTtBQUFBO0FBQUEscUJBRUdaLFNBQVMsQ0FBQ2EsT0FBVixDQUFrQlIsT0FBbEIsQ0FGSDs7QUFBQTtBQUVqQlMseUJBRmlCO0FBSWpCQyw2QkFKaUIsR0FJQ0QsV0FBVyxDQUFDRSxJQUFaLENBQWlCLFVBQUNDLEtBQUQ7QUFBQSx1QkFBZ0IsQ0FBQyxDQUFDQyxpRUFBUSxDQUFDQyxnQkFBVCxDQUEwQkYsS0FBSyxDQUFDTCxTQUFoQyxDQUFsQjtBQUFBLGVBQWpCLENBSkQ7QUFLakJBLHVCQUxpQixHQUtMRSxXQUFXLENBQUNNLE1BQVosS0FBdUIsQ0FBdkIsR0FBMkIsSUFBM0IsR0FBa0NOLFdBQVcsQ0FBQyxDQUFELENBQVgsQ0FBZUYsU0FMNUM7QUFNdkJTLHFCQUFPLENBQUNDLEdBQVIsQ0FBWVYsU0FBWixFQU51QixDQU92Qjs7QUFFTVcsc0JBVGlCLEdBU0M7QUFBRWhCLG9CQUFJLEVBQUVDLElBQUksQ0FBQ0MsS0FBTCxDQUFXLElBQUlDLElBQUosR0FBV0MsT0FBWCxLQUF1QixJQUFsQyxDQUFSO0FBQWlEQyx5QkFBUyxFQUFUQTtBQUFqRCxlQVREO0FBV3ZCVCxzQkFBUSxDQUFDUyxTQUFELENBQVI7QUFYdUIsK0NBWWhCVyxRQVpnQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFoQm5CLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxLQUF0Qjs7QUFjQSxTQUFPO0FBQUVBLG9CQUFnQixFQUFoQkEsZ0JBQUY7QUFBb0JGLFNBQUssRUFBTEE7QUFBcEIsR0FBUDtBQUNEOztHQWpCdUJILFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FtZXJhLjhjN2JlYmNiMGVjZmFiZmRkMDU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFdpbGRsaWZlIGZyb20gJy4uL0RvbWFpbi9XaWxkbGlmZS9XaWxkbGlmZSdcblxuLyoqXG4gKiDnlLvlg4/jgpLlj5blvpflvozjgIHniankvZPmpJzlh7rjgZfjgIHjg4fjg7zjgr/jgavli5XnianjgYzlhaXjgaPjgabjgYTjgozjgbDjgIFjbGFzc05hbWXjgajjgZfjgabjg4fjg7zjgr/jgpLlhaXlipvjgZnjgotcbiAqIOaVtOW9oua4iOOBv+ODleODrOODvOODoOODh+ODvOOCv+OCkui/lOOBmVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VDYXB0dXJlKHByZWRpY3RvcjogSU1MUHJlZGljdG9yKSB7XG4gIGNvbnN0IFtsYWJlbCwgc2V0TGFiZWxdID0gdXNlU3RhdGU8YW55PihudWxsKVxuICBjb25zdCBjcmVhdGVWYWxpZEZyYW1lID0gYXN5bmMgKF9jYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSA9PiB7XG4gICAgaWYgKF9jYW52YXMud2lkdGggPT09IDApIHJldHVybiB7IHRpbWU6IE1hdGguZmxvb3IobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKSwgY2xhc3NOYW1lOiBudWxsIH1cbiAgICBjb25zdCBwcmVkaWN0aW9ucyA9IGF3YWl0IHByZWRpY3Rvci5wcmVkaWN0KF9jYW52YXMpXG5cbiAgICBjb25zdCBpc1ZlcmlmaWVkQ2xhc3MgPSBwcmVkaWN0aW9ucy5maW5kKCh2YWx1ZTogYW55KSA9PiAhIVdpbGRsaWZlLmlzVmVyaWZpZWRBbmltYWwodmFsdWUuY2xhc3NOYW1lKSlcbiAgICBjb25zdCBjbGFzc05hbWUgPSBwcmVkaWN0aW9ucy5sZW5ndGggPT09IDAgPyBudWxsIDogcHJlZGljdGlvbnNbMF0uY2xhc3NOYW1lXG4gICAgY29uc29sZS5sb2coY2xhc3NOYW1lKVxuICAgIC8vIGNvbnN0IGNsYXNzTmFtZSA9ICFpc1ZlcmlmaWVkQ2xhc3MgPyBudWxsIDogaXNWZXJpZmllZENsYXNzLmNsYXNzTmFtZVxuXG4gICAgY29uc3QgbmV3RnJhbWU6IEZyYW1lID0geyB0aW1lOiBNYXRoLmZsb29yKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCksIGNsYXNzTmFtZSB9XG5cbiAgICBzZXRMYWJlbChjbGFzc05hbWUpXG4gICAgcmV0dXJuIG5ld0ZyYW1lXG4gIH1cbiAgcmV0dXJuIHsgY3JlYXRlVmFsaWRGcmFtZSwgbGFiZWwgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
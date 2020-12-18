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
      var predictions, personNumber, numLabel, isVerifiedClass, className, newFrame;
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
              personNumber = predictions.filter(function (val) {
                return val["class"].includes('person');
              }).length;
              numLabel = personNumber !== 0 ? "".concat(personNumber, "\u4EBA") : "";
              isVerifiedClass = predictions.find(function (value) {
                return !!_Domain_Wildlife_Wildlife__WEBPACK_IMPORTED_MODULE_3__["default"].isVerifiedAnimal(value["class"]);
              }); // for Coco SSD
              // const isVerifiedClass = predictions.find((value: any) => !!Wildlife.isVerifiedAnimal(value.className))// for MobileNet

              className = !isVerifiedClass ? null : isVerifiedClass["class"]; // for Coco SSD
              // const className = !isVerifiedClass ? null : isVerifiedClass.className // for MobileNet

              newFrame = {
                time: Math.floor(new Date().getTime() / 1000),
                className: className
              };
              setLabel("".concat(className, " ").concat(numLabel));
              return _context.abrupt("return", newFrame);

            case 12:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZUNhcHR1cmUudHMiXSwibmFtZXMiOlsidXNlQ2FwdHVyZSIsInByZWRpY3RvciIsInVzZVN0YXRlIiwibGFiZWwiLCJzZXRMYWJlbCIsImNyZWF0ZVZhbGlkRnJhbWUiLCJfY2FudmFzIiwid2lkdGgiLCJ0aW1lIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsImdldFRpbWUiLCJjbGFzc05hbWUiLCJwcmVkaWN0IiwicHJlZGljdGlvbnMiLCJwZXJzb25OdW1iZXIiLCJmaWx0ZXIiLCJ2YWwiLCJpbmNsdWRlcyIsImxlbmd0aCIsIm51bUxhYmVsIiwiaXNWZXJpZmllZENsYXNzIiwiZmluZCIsInZhbHVlIiwiV2lsZGxpZmUiLCJpc1ZlcmlmaWVkQW5pbWFsIiwibmV3RnJhbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNlLFNBQVNBLFVBQVQsQ0FBb0JDLFNBQXBCLEVBQTZDO0FBQUE7O0FBQUEsa0JBQ2hDQyxzREFBUSxDQUFNLElBQU4sQ0FEd0I7QUFBQSxNQUNuREMsS0FEbUQ7QUFBQSxNQUM1Q0MsUUFENEM7O0FBRTFELE1BQU1DLGdCQUFnQjtBQUFBLGdNQUFHLGlCQUFPQyxPQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUNuQkEsT0FBTyxDQUFDQyxLQUFSLEtBQWtCLENBREM7QUFBQTtBQUFBO0FBQUE7O0FBQUEsK0NBQ1M7QUFBRUMsb0JBQUksRUFBRUMsSUFBSSxDQUFDQyxLQUFMLENBQVcsSUFBSUMsSUFBSixHQUFXQyxPQUFYLEtBQXVCLElBQWxDLENBQVI7QUFBaURDLHlCQUFTLEVBQUU7QUFBNUQsZUFEVDs7QUFBQTtBQUFBO0FBQUEscUJBRUdaLFNBQVMsQ0FBQ2EsT0FBVixDQUFrQlIsT0FBbEIsQ0FGSDs7QUFBQTtBQUVqQlMseUJBRmlCO0FBR2pCQywwQkFIaUIsR0FHRkQsV0FBVyxDQUFDRSxNQUFaLENBQW1CLFVBQUNDLEdBQUQ7QUFBQSx1QkFBY0EsR0FBRyxTQUFILENBQVVDLFFBQVYsQ0FBbUIsUUFBbkIsQ0FBZDtBQUFBLGVBQW5CLEVBQStEQyxNQUg3RDtBQUlqQkMsc0JBSmlCLEdBSU5MLFlBQVksS0FBSyxDQUFqQixhQUF3QkEsWUFBeEIsZ0JBSk07QUFLakJNLDZCQUxpQixHQUtDUCxXQUFXLENBQUNRLElBQVosQ0FBaUIsVUFBQ0MsS0FBRDtBQUFBLHVCQUFnQixDQUFDLENBQUNDLGlFQUFRLENBQUNDLGdCQUFULENBQTBCRixLQUFLLFNBQS9CLENBQWxCO0FBQUEsZUFBakIsQ0FMRCxFQUs0RTtBQUNuRzs7QUFDTVgsdUJBUGlCLEdBT0wsQ0FBQ1MsZUFBRCxHQUFtQixJQUFuQixHQUEwQkEsZUFBZSxTQVBwQyxFQU8yQztBQUNsRTs7QUFFTUssc0JBVmlCLEdBVUM7QUFBRW5CLG9CQUFJLEVBQUVDLElBQUksQ0FBQ0MsS0FBTCxDQUFXLElBQUlDLElBQUosR0FBV0MsT0FBWCxLQUF1QixJQUFsQyxDQUFSO0FBQWlEQyx5QkFBUyxFQUFUQTtBQUFqRCxlQVZEO0FBWXZCVCxzQkFBUSxXQUFJUyxTQUFKLGNBQWlCUSxRQUFqQixFQUFSO0FBWnVCLCtDQWFoQk0sUUFiZ0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBaEJ0QixnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsS0FBdEI7O0FBZUEsU0FBTztBQUFFQSxvQkFBZ0IsRUFBaEJBLGdCQUFGO0FBQW9CRixTQUFLLEVBQUxBO0FBQXBCLEdBQVA7QUFDRDs7R0FsQnVCSCxVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhbWVyYS4wOTY0NzNjMmY4ODU0ZjI4Mzc4Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBXaWxkbGlmZSBmcm9tICcuLi9Eb21haW4vV2lsZGxpZmUvV2lsZGxpZmUnXG5cbi8qKlxuICog55S75YOP44KS5Y+W5b6X5b6M44CB54mp5L2T5qSc5Ye644GX44CB44OH44O844K/44Gr5YuV54mp44GM5YWl44Gj44Gm44GE44KM44Gw44CBY2xhc3NOYW1l44Go44GX44Gm44OH44O844K/44KS5YWl5Yqb44GZ44KLXG4gKiDmlbTlvaLmuIjjgb/jg5Xjg6zjg7zjg6Djg4fjg7zjgr/jgpLov5TjgZlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQ2FwdHVyZShwcmVkaWN0b3I6IElNTFByZWRpY3Rvcikge1xuICBjb25zdCBbbGFiZWwsIHNldExhYmVsXSA9IHVzZVN0YXRlPGFueT4obnVsbClcbiAgY29uc3QgY3JlYXRlVmFsaWRGcmFtZSA9IGFzeW5jIChfY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCkgPT4ge1xuICAgIGlmIChfY2FudmFzLndpZHRoID09PSAwKSByZXR1cm4geyB0aW1lOiBNYXRoLmZsb29yKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCksIGNsYXNzTmFtZTogbnVsbCB9XG4gICAgY29uc3QgcHJlZGljdGlvbnMgPSBhd2FpdCBwcmVkaWN0b3IucHJlZGljdChfY2FudmFzKVxuICAgIGNvbnN0IHBlcnNvbk51bWJlciA9IHByZWRpY3Rpb25zLmZpbHRlcigodmFsOiBhbnkpID0+IHZhbC5jbGFzcy5pbmNsdWRlcygncGVyc29uJykpLmxlbmd0aFxuICAgIGNvbnN0IG51bUxhYmVsID0gcGVyc29uTnVtYmVyICE9PSAwID8gYCR7cGVyc29uTnVtYmVyfeS6umAgOiBgYFxuICAgIGNvbnN0IGlzVmVyaWZpZWRDbGFzcyA9IHByZWRpY3Rpb25zLmZpbmQoKHZhbHVlOiBhbnkpID0+ICEhV2lsZGxpZmUuaXNWZXJpZmllZEFuaW1hbCh2YWx1ZS5jbGFzcykpIC8vIGZvciBDb2NvIFNTRFxuICAgIC8vIGNvbnN0IGlzVmVyaWZpZWRDbGFzcyA9IHByZWRpY3Rpb25zLmZpbmQoKHZhbHVlOiBhbnkpID0+ICEhV2lsZGxpZmUuaXNWZXJpZmllZEFuaW1hbCh2YWx1ZS5jbGFzc05hbWUpKS8vIGZvciBNb2JpbGVOZXRcbiAgICBjb25zdCBjbGFzc05hbWUgPSAhaXNWZXJpZmllZENsYXNzID8gbnVsbCA6IGlzVmVyaWZpZWRDbGFzcy5jbGFzcyAvLyBmb3IgQ29jbyBTU0RcbiAgICAvLyBjb25zdCBjbGFzc05hbWUgPSAhaXNWZXJpZmllZENsYXNzID8gbnVsbCA6IGlzVmVyaWZpZWRDbGFzcy5jbGFzc05hbWUgLy8gZm9yIE1vYmlsZU5ldFxuXG4gICAgY29uc3QgbmV3RnJhbWU6IEZyYW1lID0geyB0aW1lOiBNYXRoLmZsb29yKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCksIGNsYXNzTmFtZSB9XG5cbiAgICBzZXRMYWJlbChgJHtjbGFzc05hbWV9ICR7bnVtTGFiZWx9YClcbiAgICByZXR1cm4gbmV3RnJhbWVcbiAgfVxuICByZXR1cm4geyBjcmVhdGVWYWxpZEZyYW1lLCBsYWJlbCB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9
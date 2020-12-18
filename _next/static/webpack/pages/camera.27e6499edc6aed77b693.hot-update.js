webpackHotUpdate_N_E("pages/camera",{

/***/ "./src/Repository/sendFullData.ts":
/*!****************************************!*\
  !*** ./src/Repository/sendFullData.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sendFullData; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _sendImageToS3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sendImageToS3 */ "./src/Repository/sendImageToS3.ts");
/* harmony import */ var _sendToLineApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sendToLineApi */ "./src/Repository/sendToLineApi.ts");
/* harmony import */ var _sendWildlifeRecord__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sendWildlifeRecord */ "./src/Repository/sendWildlifeRecord.ts");
/* harmony import */ var _src_aws_exports__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/src/aws-exports */ "./src/aws-exports.js");
/* harmony import */ var _src_utils_getTimestamp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/src/utils/getTimestamp */ "./src/utils/getTimestamp.ts");







function sendFullData(_x, _x2, _x3) {
  return _sendFullData.apply(this, arguments);
}

function _sendFullData() {
  _sendFullData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(newFrame, settings, canvas) {
    var keyName, imageUrl, newWildlifeRecord, newLineMessage, newLineMessageProd;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return");

          case 8:
            canvas.toBlob( /*#__PURE__*/function () {
              var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(blob) {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return Object(_sendImageToS3__WEBPACK_IMPORTED_MODULE_2__["default"])(keyName, blob);

                      case 2:
                        return _context.abrupt("return", _context.sent);

                      case 3:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x4) {
                return _ref.apply(this, arguments);
              };
            }(), 'image/jpeg');

            if (!Object(_src_utils_getTimestamp__WEBPACK_IMPORTED_MODULE_6__["isValidLineTime"])(new Date())) {
              _context2.next = 14;
              break;
            }

            _context2.next = 12;
            return Object(_sendToLineApi__WEBPACK_IMPORTED_MODULE_3__["default"])(JSON.stringify(newLineMessage));

          case 12:
            _context2.next = 14;
            return Object(_sendToLineApi__WEBPACK_IMPORTED_MODULE_3__["default"])(JSON.stringify(newLineMessageProd));

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _sendFullData.apply(this, arguments);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1JlcG9zaXRvcnkvc2VuZEZ1bGxEYXRhLnRzIl0sIm5hbWVzIjpbInNlbmRGdWxsRGF0YSIsIm5ld0ZyYW1lIiwic2V0dGluZ3MiLCJjYW52YXMiLCJ0b0Jsb2IiLCJibG9iIiwic2VuZEltYWdlVG9TMyIsImtleU5hbWUiLCJpc1ZhbGlkTGluZVRpbWUiLCJEYXRlIiwic2VuZFRvTGluZUFwaSIsIkpTT04iLCJzdHJpbmdpZnkiLCJuZXdMaW5lTWVzc2FnZSIsIm5ld0xpbmVNZXNzYWdlUHJvZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFlQSxZQUE5QjtBQUFBO0FBQUE7OzttTUFBZSxrQkFBNEJDLFFBQTVCLEVBQTZDQyxRQUE3QyxFQUF1REMsTUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUE2Q2JBLGtCQUFNLENBQUNDLE1BQVA7QUFBQSwwTUFBYyxpQkFBT0MsSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFBc0JDLDhEQUFhLENBQUNDLE9BQUQsRUFBVUYsSUFBVixDQUFuQzs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQWQ7O0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWtFLFlBQWxFOztBQTdDYSxpQkErQ1RHLCtFQUFlLENBQUMsSUFBSUMsSUFBSixFQUFELENBL0NOO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBZ0RMQyw4REFBYSxDQUFDQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUMsY0FBZixDQUFELENBaERSOztBQUFBO0FBQUE7QUFBQSxtQkFpRExILDhEQUFhLENBQUNDLElBQUksQ0FBQ0MsU0FBTCxDQUFlRSxrQkFBZixDQUFELENBakRSOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FtZXJhLjI3ZTY0OTllZGM2YWVkNzdiNjkzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2VuZEltYWdlVG9TMyBmcm9tICcuL3NlbmRJbWFnZVRvUzMnXG5pbXBvcnQgc2VuZFRvTGluZUFwaSBmcm9tICcuL3NlbmRUb0xpbmVBcGknXG5pbXBvcnQgc2VuZFdpbGRsaWZlUmVjb3JkIGZyb20gJy4vc2VuZFdpbGRsaWZlUmVjb3JkJ1xuaW1wb3J0IGF3c21vYmlsZSBmcm9tICd+L3NyYy9hd3MtZXhwb3J0cydcbmltcG9ydCB7IGlzVmFsaWRMaW5lVGltZSB9IGZyb20gJ34vc3JjL3V0aWxzL2dldFRpbWVzdGFtcCdcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gc2VuZEZ1bGxEYXRhKG5ld0ZyYW1lOiBGcmFtZSwgc2V0dGluZ3MsIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgcmV0dXJuXG4gIGNvbnN0IGtleU5hbWUgPSBgJHtuZXdGcmFtZS50aW1lfS5qcGdgXG4gIGNvbnN0IGltYWdlVXJsID0gYGh0dHBzOi8vczMtYXAtbm9ydGhlYXN0LTEuYW1hem9uYXdzLmNvbS8ke2F3c21vYmlsZS5hd3NfdXNlcl9maWxlc19zM19idWNrZXR9L3B1YmxpYy8ke2tleU5hbWV9YFxuXG4gIGNvbnN0IG5ld1dpbGRsaWZlUmVjb3JkOiBXaWxkbGlmZVJlY29yZEJhc2UgPSB7XG4gICAgdHlwZTogJ3Bvc3QnLFxuICAgIHRpbWU6IG5ld0ZyYW1lLnRpbWUsXG4gICAgY2xhc3NOYW1lOiBuZXdGcmFtZS5jbGFzc05hbWUsXG4gICAgbG9jYXRpb246IHNldHRpbmdzLmxvY2F0aW9uLFxuICAgIGltYWdlVXJsLFxuICB9XG5cbiAgY29uc3QgbmV3TGluZU1lc3NhZ2U6IExpbmVNZXNzYWdlID0ge1xuICAgIHRvOiBwcm9jZXNzLmVudi5MSU5FX0dST1VQX0lELFxuICAgIG1lc3NhZ2VzOiBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgIG9yaWdpbmFsQ29udGVudFVybDogaW1hZ2VVcmwsXG4gICAgICAgIHByZXZpZXdJbWFnZVVybDogaW1hZ2VVcmwsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIHRleHQ6IGAke3NldHRpbmdzLmxvY2F0aW9ufeS7mOi/keOBq+WLleeJqeOBjOimi+OBpOOBi+OCiuOBvuOBl+OBn++8gWAsXG4gICAgICB9LFxuICAgIF0sXG4gIH1cblxuICBjb25zdCBuZXdMaW5lTWVzc2FnZVByb2Q6IExpbmVNZXNzYWdlID0ge1xuICAgIHRvOiAnUjJlZjhlMzU3OGU2NTU3YTA0NWJlZGM3M2UwMmZhNjk0JyxcbiAgICBtZXNzYWdlczogW1xuICAgICAge1xuICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICBvcmlnaW5hbENvbnRlbnRVcmw6IGltYWdlVXJsLFxuICAgICAgICBwcmV2aWV3SW1hZ2VVcmw6IGltYWdlVXJsLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICB0ZXh0OiBgJHtzZXR0aW5ncy5sb2NhdGlvbn3ku5jov5Hjgavli5XnianjgYzopovjgaTjgYvjgorjgb7jgZfjgZ/vvIFgLFxuICAgICAgfSxcbiAgICBdLFxuICB9XG5cbiAgYXdhaXQgc2VuZFdpbGRsaWZlUmVjb3JkKG5ld1dpbGRsaWZlUmVjb3JkKVxuXG4gIGNhbnZhcy50b0Jsb2IoYXN5bmMgKGJsb2IpID0+IGF3YWl0IHNlbmRJbWFnZVRvUzMoa2V5TmFtZSwgYmxvYiksICdpbWFnZS9qcGVnJylcblxuICBpZiAoaXNWYWxpZExpbmVUaW1lKG5ldyBEYXRlKCkpKSB7XG4gICAgYXdhaXQgc2VuZFRvTGluZUFwaShKU09OLnN0cmluZ2lmeShuZXdMaW5lTWVzc2FnZSkpXG4gICAgYXdhaXQgc2VuZFRvTGluZUFwaShKU09OLnN0cmluZ2lmeShuZXdMaW5lTWVzc2FnZVByb2QpKVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9
webpackHotUpdate_N_E("pages/camera",{

/***/ "./src/components/WildlifeDetector.tsx":
/*!*********************************************!*\
  !*** ./src/components/WildlifeDetector.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WildLifeDetector; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useCanvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useCanvas */ "./src/hooks/useCanvas.tsx");
/* harmony import */ var _hooks_useCapture__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useCapture */ "./src/hooks/useCapture.ts");
/* harmony import */ var _hooks_useObserver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useObserver */ "./src/hooks/useObserver.tsx");
/* harmony import */ var _hooks_useVideo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useVideo */ "./src/hooks/useVideo.ts");
/* harmony import */ var _utils_MLPredictor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/MLPredictor */ "./src/utils/MLPredictor.ts");
/* harmony import */ var _Camera_CameraUploda__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Camera/CameraUploda */ "./src/components/Camera/CameraUploda.tsx");
/* harmony import */ var _src_Repository_sendImageToS3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/src/Repository/sendImageToS3 */ "./src/Repository/sendImageToS3.ts");
/* harmony import */ var _src_components_assets_common_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/src/components/assets/common.module.css */ "./src/components/assets/common.module.css");
/* harmony import */ var _src_components_assets_common_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_src_components_assets_common_module_css__WEBPACK_IMPORTED_MODULE_11__);



var _jsxFileName = "C:\\Users\\inoue\\Desktop\\detect-wildlife-src\\src\\components\\WildlifeDetector.tsx",
    _s3 = $RefreshSig$();



var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;
 // import { useCookies } from 'react-cookie'









function WildLifeDetector(_ref) {
  _s3();

  var checkFrameRate = _ref.checkFrameRate;
  var predictor = new _utils_MLPredictor__WEBPACK_IMPORTED_MODULE_8__["default"]('coco');
  var videoElem = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var canvasElem = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null); // const locElem = useRef<HTMLInputElement>()
  // const [cookies, setCookie] = useCookies(['location'])

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      isVisible = _useState[0],
      setIsVisible = _useState[1]; // モニタリングアップロード用


  var intervalElem = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      restSec = _useState2[0],
      setRestSec = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isUploading = _useState3[0],
      setIsUploading = _useState3[1];

  var intervalRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var video = Object(_hooks_useVideo__WEBPACK_IMPORTED_MODULE_7__["default"])(videoElem); // カメラ用
  // const video = videoElem // ビデオ用

  var _useObserver = Object(_hooks_useObserver__WEBPACK_IMPORTED_MODULE_6__["useObserver"])(),
      checkRecentFrames = _useObserver.checkRecentFrames;

  var _useCapture = Object(_hooks_useCapture__WEBPACK_IMPORTED_MODULE_5__["default"])(predictor),
      label = _useCapture.label,
      createValidFrame = _useCapture.createValidFrame;

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    function fetchModel() {
      return _fetchModel.apply(this, arguments);
    }

    function _fetchModel() {
      _fetchModel = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _s = $RefreshSig$();

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return predictor.fetchModel();

              case 2:
                setInterval( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(_s( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
                  var _canvas, newFrame, result, settings;

                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _s();

                          if (!(!video || !canvasElem.current || canvasElem.current.height === undefined)) {
                            _context.next = 3;
                            break;
                          }

                          return _context.abrupt("return");

                        case 3:
                          // eslint-disable-next-line react-hooks/rules-of-hooks
                          _canvas = Object(_hooks_useCanvas__WEBPACK_IMPORTED_MODULE_4__["default"])(canvasElem, video);
                          _context.next = 6;
                          return createValidFrame(_canvas);

                        case 6:
                          newFrame = _context.sent;
                          result = checkRecentFrames(newFrame);

                          if (result && result.success) {
                            // const settings = { location: locElem.current.value }
                            settings = {
                              location: ''
                            }; // setCookie('location', locElem.current.value)
                            // sendFullData(result.success, settings, _canvas)
                          }

                        case 9:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }), "cOx3lsPk64qbg93yVBTzRHsZNLU=", false, function () {
                  return [_hooks_useCanvas__WEBPACK_IMPORTED_MODULE_4__["default"]];
                })), checkFrameRate);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      return _fetchModel.apply(this, arguments);
    }

    fetchModel();
  }, []);

  var onVisibleCheckChanged = function onVisibleCheckChanged(event) {
    setIsVisible(event.target.checked);
  };

  var onUploadButtonPushed = function onUploadButtonPushed() {
    var _s2 = $RefreshSig$();

    var intervalSec = Number(intervalElem.current.value);
    var _restSec = intervalSec;
    setRestSec(_restSec);
    setIsUploading(true);
    var now = new Date().getTime() / 1000;
    var end = now + intervalSec;
    var keyName = "current_image.jpg";
    intervalRef.current = setInterval(_s2(function () {
      _s2();

      if (new Date().getTime() / 1000 > end || !intervalRef.current) {
        setIsUploading(false);
        clearInterval(intervalRef.current);
      } // eslint-disable-next-line react-hooks/rules-of-hooks


      var canvas = Object(_hooks_useCanvas__WEBPACK_IMPORTED_MODULE_4__["default"])(canvasElem, video);
      _restSec--;
      setRestSec(_restSec);
      if (_restSec % 5 !== 0) return;
      canvas.toBlob( /*#__PURE__*/function () {
        var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(blob) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return Object(_src_Repository_sendImageToS3__WEBPACK_IMPORTED_MODULE_10__["default"])(keyName, blob);

                case 2:
                  return _context3.abrupt("return", _context3.sent);

                case 3:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function (_x) {
          return _ref3.apply(this, arguments);
        };
      }(), 'image/jpeg');
    }, "2rjbzMnJKm1EcgIcITlCSIUqG0g=", false, function () {
      return [_hooks_useCanvas__WEBPACK_IMPORTED_MODULE_4__["default"]];
    }), 1000);
  };

  var onStopButtonPushed = function onStopButtonPushed() {
    setIsUploading(false);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return __jsx("div", {
    className: "jsx-1880160421" + " " + "p-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: "jsx-1880160421" + " " + "flex items-center mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }, __jsx("label", {
    className: "jsx-1880160421" + " " + "block uppercase tracking-wide text-grey-700 font-bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, "\u691C\u51FA\u3055\u308C\u305F\u3082\u306E: "), ' ', label ? JSON.stringify(label) : 'なし'), __jsx("video", {
    id: "video",
    ref: videoElem,
    width: "100%",
    height: "500",
    role: "video",
    className: "jsx-1880160421" + " " + (!isVisible && 'opacity-0' || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }), __jsx("p", {
    className: "jsx-1880160421" + " " + "mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }
  }, __jsx("label", {
    className: "jsx-1880160421" + " " + "flex items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "checkbox",
    defaultChecked: true,
    onChange: onVisibleCheckChanged,
    className: "jsx-1880160421" + " " + "".concat(_src_components_assets_common_module_css__WEBPACK_IMPORTED_MODULE_11___default.a['form-checkbox']),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  }), __jsx("span", {
    className: "jsx-1880160421" + " " + "text-grey-darker text-sm font-bold pl-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 11
    }
  }, " \u30D3\u30C7\u30AA\u306E\u8868\u793A "))), __jsx("div", {
    className: "jsx-1880160421" + " " + "mt-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }
  }, __jsx(_Camera_CameraUploda__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onUploadButtonPushed: onUploadButtonPushed,
    intervalElem: intervalElem,
    isUploading: isUploading,
    onStopButtonPushed: onStopButtonPushed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }
  }), __jsx("span", {
    className: "jsx-1880160421" + " " + "text-grey-darker text-sm font-bold pl-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }, isUploading && "\u6B8B\u308A: ".concat(restSec, " \u79D2"))), __jsx("canvas", {
    id: "canvas",
    ref: canvasElem,
    width: "200px",
    height: "100%",
    role: "canvas",
    className: "jsx-1880160421" + " " + "hide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1880160421",
    __self: this
  }, ".hide.jsx-1880160421{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcaW5vdWVcXERlc2t0b3BcXGRldGVjdC13aWxkbGlmZS1zcmNcXHNyY1xcY29tcG9uZW50c1xcV2lsZGxpZmVEZXRlY3Rvci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMklrQixBQUd3QixhQUNmIiwiZmlsZSI6IkM6XFxVc2Vyc1xcaW5vdWVcXERlc2t0b3BcXGRldGVjdC13aWxkbGlmZS1zcmNcXHNyY1xcY29tcG9uZW50c1xcV2lsZGxpZmVEZXRlY3Rvci50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tICdyZWFjdC1jb29raWUnXG5pbXBvcnQgc2VuZEZ1bGxEYXRhIGZyb20gJy4uL1JlcG9zaXRvcnkvc2VuZEZ1bGxEYXRhJ1xuaW1wb3J0IHVzZUNhbnZhcyBmcm9tICcuLi9ob29rcy91c2VDYW52YXMnXG5pbXBvcnQgdXNlQ2FwdHVyZSBmcm9tICcuLi9ob29rcy91c2VDYXB0dXJlJ1xuaW1wb3J0IHsgdXNlT2JzZXJ2ZXIgfSBmcm9tICcuLi9ob29rcy91c2VPYnNlcnZlcidcbmltcG9ydCB1c2VWaWRlbyBmcm9tICcuLi9ob29rcy91c2VWaWRlbydcbmltcG9ydCBNTFByZWRpY3RvciBmcm9tICcuLi91dGlscy9NTFByZWRpY3RvcidcbmltcG9ydCBDYW1lcmFVcGxvZGEgZnJvbSAnLi9DYW1lcmEvQ2FtZXJhVXBsb2RhJ1xuaW1wb3J0IHNlbmRJbWFnZVRvUzMgZnJvbSAnfi9zcmMvUmVwb3NpdG9yeS9zZW5kSW1hZ2VUb1MzJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICd+L3NyYy9jb21wb25lbnRzL2Fzc2V0cy9jb21tb24ubW9kdWxlLmNzcydcbnR5cGUgUHJvcHMgPSB7XG4gIGNoZWNrRnJhbWVSYXRlOiBudW1iZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2lsZExpZmVEZXRlY3Rvcih7IGNoZWNrRnJhbWVSYXRlIH06IFByb3BzKSB7XG4gIGNvbnN0IHByZWRpY3RvciA9IG5ldyBNTFByZWRpY3RvcignY29jbycpXG4gIGNvbnN0IHZpZGVvRWxlbSA9IHVzZVJlZjxIVE1MVmlkZW9FbGVtZW50PihudWxsKVxuICBjb25zdCBjYW52YXNFbGVtID0gdXNlUmVmPEhUTUxDYW52YXNFbGVtZW50PihudWxsKVxuICAvLyBjb25zdCBsb2NFbGVtID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KClcbiAgLy8gY29uc3QgW2Nvb2tpZXMsIHNldENvb2tpZV0gPSB1c2VDb29raWVzKFsnbG9jYXRpb24nXSlcbiAgY29uc3QgW2lzVmlzaWJsZSwgc2V0SXNWaXNpYmxlXSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgLy8g44Oi44OL44K/44Oq44Oz44Kw44Ki44OD44OX44Ot44O844OJ55SoXG4gIGNvbnN0IGludGVydmFsRWxlbSA9IHVzZVJlZjxIVE1MU2VsZWN0RWxlbWVudD4oKVxuICBjb25zdCBbcmVzdFNlYywgc2V0UmVzdFNlY10gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbaXNVcGxvYWRpbmcsIHNldElzVXBsb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBpbnRlcnZhbFJlZiA9IHVzZVJlZihudWxsKVxuXG4gIGNvbnN0IHZpZGVvID0gdXNlVmlkZW8odmlkZW9FbGVtKSAvLyDjgqvjg6Hjg6nnlKhcbiAgLy8gY29uc3QgdmlkZW8gPSB2aWRlb0VsZW0gLy8g44OT44OH44Kq55SoXG5cbiAgY29uc3QgeyBjaGVja1JlY2VudEZyYW1lcyB9ID0gdXNlT2JzZXJ2ZXIoKVxuICBjb25zdCB7IGxhYmVsLCBjcmVhdGVWYWxpZEZyYW1lIH0gPSB1c2VDYXB0dXJlKHByZWRpY3RvcilcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoTW9kZWwoKSB7XG4gICAgICBhd2FpdCBwcmVkaWN0b3IuZmV0Y2hNb2RlbCgpXG4gICAgICBzZXRJbnRlcnZhbChhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmICghdmlkZW8gfHwgIWNhbnZhc0VsZW0uY3VycmVudCB8fCBjYW52YXNFbGVtLmN1cnJlbnQuaGVpZ2h0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICAgICAgY29uc3QgX2NhbnZhcyA9IHVzZUNhbnZhcyhjYW52YXNFbGVtLCB2aWRlbylcbiAgICAgICAgY29uc3QgbmV3RnJhbWUgPSBhd2FpdCBjcmVhdGVWYWxpZEZyYW1lKF9jYW52YXMpXG5cbiAgICAgICAgY29uc3QgcmVzdWx0OiBSZXN1bHQ8RnJhbWU+ID0gY2hlY2tSZWNlbnRGcmFtZXMobmV3RnJhbWUpXG5cbiAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuc3VjY2Vzcykge1xuICAgICAgICAgIC8vIGNvbnN0IHNldHRpbmdzID0geyBsb2NhdGlvbjogbG9jRWxlbS5jdXJyZW50LnZhbHVlIH1cbiAgICAgICAgICBjb25zdCBzZXR0aW5ncyA9IHsgbG9jYXRpb246ICcnIH1cbiAgICAgICAgICAvLyBzZXRDb29raWUoJ2xvY2F0aW9uJywgbG9jRWxlbS5jdXJyZW50LnZhbHVlKVxuICAgICAgICAgIC8vIHNlbmRGdWxsRGF0YShyZXN1bHQuc3VjY2Vzcywgc2V0dGluZ3MsIF9jYW52YXMpXG4gICAgICAgIH1cbiAgICAgIH0sIGNoZWNrRnJhbWVSYXRlKVxuICAgIH1cbiAgICBmZXRjaE1vZGVsKClcbiAgfSwgW10pXG5cbiAgY29uc3Qgb25WaXNpYmxlQ2hlY2tDaGFuZ2VkID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHNldElzVmlzaWJsZShldmVudC50YXJnZXQuY2hlY2tlZClcbiAgfVxuXG4gIGNvbnN0IG9uVXBsb2FkQnV0dG9uUHVzaGVkID0gKCkgPT4ge1xuICAgIGNvbnN0IGludGVydmFsU2VjID0gTnVtYmVyKGludGVydmFsRWxlbS5jdXJyZW50LnZhbHVlKVxuICAgIGxldCBfcmVzdFNlYyA9IGludGVydmFsU2VjXG4gICAgc2V0UmVzdFNlYyhfcmVzdFNlYylcbiAgICBzZXRJc1VwbG9hZGluZyh0cnVlKVxuXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwXG4gICAgY29uc3QgZW5kID0gbm93ICsgaW50ZXJ2YWxTZWNcbiAgICBjb25zdCBrZXlOYW1lID0gYGN1cnJlbnRfaW1hZ2UuanBnYFxuXG4gICAgaW50ZXJ2YWxSZWYuY3VycmVudCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDAgPiBlbmQgfHwgIWludGVydmFsUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgc2V0SXNVcGxvYWRpbmcoZmFsc2UpXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxSZWYuY3VycmVudClcbiAgICAgIH1cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgICAgY29uc3QgY2FudmFzID0gdXNlQ2FudmFzKGNhbnZhc0VsZW0sIHZpZGVvKVxuICAgICAgX3Jlc3RTZWMtLVxuICAgICAgc2V0UmVzdFNlYyhfcmVzdFNlYylcbiAgICAgIGlmIChfcmVzdFNlYyAlIDUgIT09IDApIHJldHVyblxuXG4gICAgICBjYW52YXMudG9CbG9iKGFzeW5jIChibG9iKSA9PiBhd2FpdCBzZW5kSW1hZ2VUb1MzKGtleU5hbWUsIGJsb2IpLCAnaW1hZ2UvanBlZycpXG4gICAgfSwgMTAwMClcbiAgfVxuXG4gIGNvbnN0IG9uU3RvcEJ1dHRvblB1c2hlZCA9ICgpID0+IHtcbiAgICBzZXRJc1VwbG9hZGluZyhmYWxzZSlcbiAgICBjbGVhckludGVydmFsKGludGVydmFsUmVmLmN1cnJlbnQpXG4gICAgaW50ZXJ2YWxSZWYuY3VycmVudCA9IG51bGxcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yXCI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtdC00XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyZXktNzAwIGZvbnQtYm9sZFwiPuaknOWHuuOBleOCjOOBn+OCguOBrjogPC9sYWJlbD57JyAnfVxuICAgICAgICB7bGFiZWwgPyBKU09OLnN0cmluZ2lmeShsYWJlbCkgOiAn44Gq44GXJ31cbiAgICAgIDwvcD5cbiAgICAgIDx2aWRlb1xuICAgICAgICBpZD1cInZpZGVvXCJcbiAgICAgICAgcmVmPXt2aWRlb0VsZW19XG4gICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgIGhlaWdodD1cIjUwMFwiXG4gICAgICAgIGNsYXNzTmFtZT17IWlzVmlzaWJsZSAmJiAnb3BhY2l0eS0wJ31cbiAgICAgICAgcm9sZT1cInZpZGVvXCJcbiAgICAgID48L3ZpZGVvPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNFwiPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17dHJ1ZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzWydmb3JtLWNoZWNrYm94J119YH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvblZpc2libGVDaGVja0NoYW5nZWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyZXktZGFya2VyIHRleHQtc20gZm9udC1ib2xkIHBsLTJcIj4g44OT44OH44Kq44Gu6KGo56S6IDwvc3Bhbj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvcD5cbiAgICAgIHsvKiA8cCBjbGFzc05hbWU9XCJtdC02XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyZXktZGFya2VyIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIj7loLTmiYDlkI08L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ncmF5LTIwMCAgdGV4dC1ncmF5LTcwMCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQgcHktMyBweC00XCJcbiAgICAgICAgICB2YWx1ZT17Y29va2llcy5sb2NhdGlvbn1cbiAgICAgICAgICByZWY9e2xvY0VsZW19XG4gICAgICAgIC8+XG4gICAgICA8L3A+ICovfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LThcIj5cbiAgICAgICAgPENhbWVyYVVwbG9kYVxuICAgICAgICAgIG9uVXBsb2FkQnV0dG9uUHVzaGVkPXtvblVwbG9hZEJ1dHRvblB1c2hlZH1cbiAgICAgICAgICBpbnRlcnZhbEVsZW09e2ludGVydmFsRWxlbX1cbiAgICAgICAgICBpc1VwbG9hZGluZz17aXNVcGxvYWRpbmd9XG4gICAgICAgICAgb25TdG9wQnV0dG9uUHVzaGVkPXtvblN0b3BCdXR0b25QdXNoZWR9XG4gICAgICAgIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JleS1kYXJrZXIgdGV4dC1zbSBmb250LWJvbGQgcGwtMlwiPntpc1VwbG9hZGluZyAmJiBg5q6L44KKOiAke3Jlc3RTZWN9IOenkmB9PC9zcGFuPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxjYW52YXMgaWQ9XCJjYW52YXNcIiByZWY9e2NhbnZhc0VsZW19IHdpZHRoPVwiMjAwcHhcIiBoZWlnaHQ9XCIxMDAlXCIgY2xhc3NOYW1lPVwiaGlkZVwiIHJvbGU9XCJjYW52YXNcIj48L2NhbnZhcz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmhpZGUge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\inoue\\\\Desktop\\\\detect-wildlife-src\\\\src\\\\components\\\\WildlifeDetector.tsx */"));
}

_s3(WildLifeDetector, "F+rASUy6cAZGU4oIdug81URnnXk=", false, function () {
  return [_hooks_useVideo__WEBPACK_IMPORTED_MODULE_7__["default"], _hooks_useObserver__WEBPACK_IMPORTED_MODULE_6__["useObserver"], _hooks_useCapture__WEBPACK_IMPORTED_MODULE_5__["default"]];
});

_c = WildLifeDetector;

var _c;

$RefreshReg$(_c, "WildLifeDetector");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvV2lsZGxpZmVEZXRlY3Rvci50c3giXSwibmFtZXMiOlsiV2lsZExpZmVEZXRlY3RvciIsImNoZWNrRnJhbWVSYXRlIiwicHJlZGljdG9yIiwiTUxQcmVkaWN0b3IiLCJ2aWRlb0VsZW0iLCJ1c2VSZWYiLCJjYW52YXNFbGVtIiwidXNlU3RhdGUiLCJpc1Zpc2libGUiLCJzZXRJc1Zpc2libGUiLCJpbnRlcnZhbEVsZW0iLCJyZXN0U2VjIiwic2V0UmVzdFNlYyIsImlzVXBsb2FkaW5nIiwic2V0SXNVcGxvYWRpbmciLCJpbnRlcnZhbFJlZiIsInZpZGVvIiwidXNlVmlkZW8iLCJ1c2VPYnNlcnZlciIsImNoZWNrUmVjZW50RnJhbWVzIiwidXNlQ2FwdHVyZSIsImxhYmVsIiwiY3JlYXRlVmFsaWRGcmFtZSIsInVzZUVmZmVjdCIsImZldGNoTW9kZWwiLCJzZXRJbnRlcnZhbCIsImN1cnJlbnQiLCJoZWlnaHQiLCJ1bmRlZmluZWQiLCJfY2FudmFzIiwidXNlQ2FudmFzIiwibmV3RnJhbWUiLCJyZXN1bHQiLCJzdWNjZXNzIiwic2V0dGluZ3MiLCJsb2NhdGlvbiIsIm9uVmlzaWJsZUNoZWNrQ2hhbmdlZCIsImV2ZW50IiwidGFyZ2V0IiwiY2hlY2tlZCIsIm9uVXBsb2FkQnV0dG9uUHVzaGVkIiwiaW50ZXJ2YWxTZWMiLCJOdW1iZXIiLCJ2YWx1ZSIsIl9yZXN0U2VjIiwibm93IiwiRGF0ZSIsImdldFRpbWUiLCJlbmQiLCJrZXlOYW1lIiwiY2xlYXJJbnRlcnZhbCIsImNhbnZhcyIsInRvQmxvYiIsImJsb2IiLCJzZW5kSW1hZ2VUb1MzIiwib25TdG9wQnV0dG9uUHVzaGVkIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFDRSx3QkFBb0IsRUFBRWxCLG9CQUR4QjtBQUVFLGdCQUFZLEVBQUU5QixZQUZoQjtBQUdFLGVBQVcsRUFBRUcsV0FIZjtBQUlFLHNCQUFrQixFQUFFMEMsa0JBSnRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQU9FO0FBQUEsd0NBQWdCLHlDQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTJEMUMsV0FBVyw0QkFBV0YsT0FBWCxZQUF0RSxDQVBGLENBbENGLEVBNENFO0FBQVEsTUFBRSxFQUFDLFFBQVg7QUFBb0IsT0FBRyxFQUFFTCxVQUF6QjtBQUFxQyxTQUFLLEVBQUMsT0FBM0M7QUFBbUQsVUFBTSxFQUFDLE1BQTFEO0FBQWtGLFFBQUksRUFBQyxRQUF2RjtBQUFBLHdDQUEyRSxNQUEzRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBNUNGO0FBQUE7QUFBQTtBQUFBLHU4T0FERjtBQXFERDs7SUFuSXVCTixnQjtVQWNSaUIsdUQsRUFHZ0JDLDhELEVBQ01FLHlEOzs7S0FsQmRwQixnQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYW1lcmEuMDNiNWY0NmMxZmMzNmJlZTA0MjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gJ3JlYWN0LWNvb2tpZSdcbmltcG9ydCBzZW5kRnVsbERhdGEgZnJvbSAnLi4vUmVwb3NpdG9yeS9zZW5kRnVsbERhdGEnXG5pbXBvcnQgdXNlQ2FudmFzIGZyb20gJy4uL2hvb2tzL3VzZUNhbnZhcydcbmltcG9ydCB1c2VDYXB0dXJlIGZyb20gJy4uL2hvb2tzL3VzZUNhcHR1cmUnXG5pbXBvcnQgeyB1c2VPYnNlcnZlciB9IGZyb20gJy4uL2hvb2tzL3VzZU9ic2VydmVyJ1xuaW1wb3J0IHVzZVZpZGVvIGZyb20gJy4uL2hvb2tzL3VzZVZpZGVvJ1xuaW1wb3J0IE1MUHJlZGljdG9yIGZyb20gJy4uL3V0aWxzL01MUHJlZGljdG9yJ1xuaW1wb3J0IENhbWVyYVVwbG9kYSBmcm9tICcuL0NhbWVyYS9DYW1lcmFVcGxvZGEnXG5pbXBvcnQgc2VuZEltYWdlVG9TMyBmcm9tICd+L3NyYy9SZXBvc2l0b3J5L3NlbmRJbWFnZVRvUzMnXG5pbXBvcnQgc3R5bGVzIGZyb20gJ34vc3JjL2NvbXBvbmVudHMvYXNzZXRzL2NvbW1vbi5tb2R1bGUuY3NzJ1xudHlwZSBQcm9wcyA9IHtcbiAgY2hlY2tGcmFtZVJhdGU6IG51bWJlclxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaWxkTGlmZURldGVjdG9yKHsgY2hlY2tGcmFtZVJhdGUgfTogUHJvcHMpIHtcbiAgY29uc3QgcHJlZGljdG9yID0gbmV3IE1MUHJlZGljdG9yKCdjb2NvJylcbiAgY29uc3QgdmlkZW9FbGVtID0gdXNlUmVmPEhUTUxWaWRlb0VsZW1lbnQ+KG51bGwpXG4gIGNvbnN0IGNhbnZhc0VsZW0gPSB1c2VSZWY8SFRNTENhbnZhc0VsZW1lbnQ+KG51bGwpXG4gIC8vIGNvbnN0IGxvY0VsZW0gPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4oKVxuICAvLyBjb25zdCBbY29va2llcywgc2V0Q29va2llXSA9IHVzZUNvb2tpZXMoWydsb2NhdGlvbiddKVxuICBjb25zdCBbaXNWaXNpYmxlLCBzZXRJc1Zpc2libGVdID0gdXNlU3RhdGUodHJ1ZSlcblxuICAvLyDjg6Ljg4vjgr/jg6rjg7PjgrDjgqLjg4Pjg5fjg63jg7zjg4nnlKhcbiAgY29uc3QgaW50ZXJ2YWxFbGVtID0gdXNlUmVmPEhUTUxTZWxlY3RFbGVtZW50PigpXG4gIGNvbnN0IFtyZXN0U2VjLCBzZXRSZXN0U2VjXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtpc1VwbG9hZGluZywgc2V0SXNVcGxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IGludGVydmFsUmVmID0gdXNlUmVmKG51bGwpXG5cbiAgY29uc3QgdmlkZW8gPSB1c2VWaWRlbyh2aWRlb0VsZW0pIC8vIOOCq+ODoeODqeeUqFxuICAvLyBjb25zdCB2aWRlbyA9IHZpZGVvRWxlbSAvLyDjg5Pjg4fjgqrnlKhcblxuICBjb25zdCB7IGNoZWNrUmVjZW50RnJhbWVzIH0gPSB1c2VPYnNlcnZlcigpXG4gIGNvbnN0IHsgbGFiZWwsIGNyZWF0ZVZhbGlkRnJhbWUgfSA9IHVzZUNhcHR1cmUocHJlZGljdG9yKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hNb2RlbCgpIHtcbiAgICAgIGF3YWl0IHByZWRpY3Rvci5mZXRjaE1vZGVsKClcbiAgICAgIHNldEludGVydmFsKGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKCF2aWRlbyB8fCAhY2FudmFzRWxlbS5jdXJyZW50IHx8IGNhbnZhc0VsZW0uY3VycmVudC5oZWlnaHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgICAgICBjb25zdCBfY2FudmFzID0gdXNlQ2FudmFzKGNhbnZhc0VsZW0sIHZpZGVvKVxuICAgICAgICBjb25zdCBuZXdGcmFtZSA9IGF3YWl0IGNyZWF0ZVZhbGlkRnJhbWUoX2NhbnZhcylcblxuICAgICAgICBjb25zdCByZXN1bHQ6IFJlc3VsdDxGcmFtZT4gPSBjaGVja1JlY2VudEZyYW1lcyhuZXdGcmFtZSlcblxuICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgICAgLy8gY29uc3Qgc2V0dGluZ3MgPSB7IGxvY2F0aW9uOiBsb2NFbGVtLmN1cnJlbnQudmFsdWUgfVxuICAgICAgICAgIGNvbnN0IHNldHRpbmdzID0geyBsb2NhdGlvbjogJycgfVxuICAgICAgICAgIC8vIHNldENvb2tpZSgnbG9jYXRpb24nLCBsb2NFbGVtLmN1cnJlbnQudmFsdWUpXG4gICAgICAgICAgLy8gc2VuZEZ1bGxEYXRhKHJlc3VsdC5zdWNjZXNzLCBzZXR0aW5ncywgX2NhbnZhcylcbiAgICAgICAgfVxuICAgICAgfSwgY2hlY2tGcmFtZVJhdGUpXG4gICAgfVxuICAgIGZldGNoTW9kZWwoKVxuICB9LCBbXSlcblxuICBjb25zdCBvblZpc2libGVDaGVja0NoYW5nZWQgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0SXNWaXNpYmxlKGV2ZW50LnRhcmdldC5jaGVja2VkKVxuICB9XG5cbiAgY29uc3Qgb25VcGxvYWRCdXR0b25QdXNoZWQgPSAoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWxTZWMgPSBOdW1iZXIoaW50ZXJ2YWxFbGVtLmN1cnJlbnQudmFsdWUpXG4gICAgbGV0IF9yZXN0U2VjID0gaW50ZXJ2YWxTZWNcbiAgICBzZXRSZXN0U2VjKF9yZXN0U2VjKVxuICAgIHNldElzVXBsb2FkaW5nKHRydWUpXG5cbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDBcbiAgICBjb25zdCBlbmQgPSBub3cgKyBpbnRlcnZhbFNlY1xuICAgIGNvbnN0IGtleU5hbWUgPSBgY3VycmVudF9pbWFnZS5qcGdgXG5cbiAgICBpbnRlcnZhbFJlZi5jdXJyZW50ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCA+IGVuZCB8fCAhaW50ZXJ2YWxSZWYuY3VycmVudCkge1xuICAgICAgICBzZXRJc1VwbG9hZGluZyhmYWxzZSlcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbFJlZi5jdXJyZW50KVxuICAgICAgfVxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgICBjb25zdCBjYW52YXMgPSB1c2VDYW52YXMoY2FudmFzRWxlbSwgdmlkZW8pXG4gICAgICBfcmVzdFNlYy0tXG4gICAgICBzZXRSZXN0U2VjKF9yZXN0U2VjKVxuICAgICAgaWYgKF9yZXN0U2VjICUgNSAhPT0gMCkgcmV0dXJuXG5cbiAgICAgIGNhbnZhcy50b0Jsb2IoYXN5bmMgKGJsb2IpID0+IGF3YWl0IHNlbmRJbWFnZVRvUzMoa2V5TmFtZSwgYmxvYiksICdpbWFnZS9qcGVnJylcbiAgICB9LCAxMDAwKVxuICB9XG5cbiAgY29uc3Qgb25TdG9wQnV0dG9uUHVzaGVkID0gKCkgPT4ge1xuICAgIHNldElzVXBsb2FkaW5nKGZhbHNlKVxuICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxSZWYuY3VycmVudClcbiAgICBpbnRlcnZhbFJlZi5jdXJyZW50ID0gbnVsbFxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwLTJcIj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG10LTRcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JleS03MDAgZm9udC1ib2xkXCI+5qSc5Ye644GV44KM44Gf44KC44GuOiA8L2xhYmVsPnsnICd9XG4gICAgICAgIHtsYWJlbCA/IEpTT04uc3RyaW5naWZ5KGxhYmVsKSA6ICfjgarjgZcnfVxuICAgICAgPC9wPlxuICAgICAgPHZpZGVvXG4gICAgICAgIGlkPVwidmlkZW9cIlxuICAgICAgICByZWY9e3ZpZGVvRWxlbX1cbiAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgaGVpZ2h0PVwiNTAwXCJcbiAgICAgICAgY2xhc3NOYW1lPXshaXNWaXNpYmxlICYmICdvcGFjaXR5LTAnfVxuICAgICAgICByb2xlPVwidmlkZW9cIlxuICAgICAgPjwvdmlkZW8+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtdC00XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXt0cnVlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbJ2Zvcm0tY2hlY2tib3gnXX1gfVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uVmlzaWJsZUNoZWNrQ2hhbmdlZH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JleS1kYXJrZXIgdGV4dC1zbSBmb250LWJvbGQgcGwtMlwiPiDjg5Pjg4fjgqrjga7ooajnpLogPC9zcGFuPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9wPlxuICAgICAgey8qIDxwIGNsYXNzTmFtZT1cIm10LTZcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JleS1kYXJrZXIgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiPuWgtOaJgOWQjTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyYXktMjAwICB0ZXh0LWdyYXktNzAwIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcm91bmRlZCBweS0zIHB4LTRcIlxuICAgICAgICAgIHZhbHVlPXtjb29raWVzLmxvY2F0aW9ufVxuICAgICAgICAgIHJlZj17bG9jRWxlbX1cbiAgICAgICAgLz5cbiAgICAgIDwvcD4gKi99XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOFwiPlxuICAgICAgICA8Q2FtZXJhVXBsb2RhXG4gICAgICAgICAgb25VcGxvYWRCdXR0b25QdXNoZWQ9e29uVXBsb2FkQnV0dG9uUHVzaGVkfVxuICAgICAgICAgIGludGVydmFsRWxlbT17aW50ZXJ2YWxFbGVtfVxuICAgICAgICAgIGlzVXBsb2FkaW5nPXtpc1VwbG9hZGluZ31cbiAgICAgICAgICBvblN0b3BCdXR0b25QdXNoZWQ9e29uU3RvcEJ1dHRvblB1c2hlZH1cbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmV5LWRhcmtlciB0ZXh0LXNtIGZvbnQtYm9sZCBwbC0yXCI+e2lzVXBsb2FkaW5nICYmIGDmrovjgoo6ICR7cmVzdFNlY30g56eSYH08L3NwYW4+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGNhbnZhcyBpZD1cImNhbnZhc1wiIHJlZj17Y2FudmFzRWxlbX0gd2lkdGg9XCIyMDBweFwiIGhlaWdodD1cIjEwMCVcIiBjbGFzc05hbWU9XCJoaWRlXCIgcm9sZT1cImNhbnZhc1wiPjwvY2FudmFzPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuaGlkZSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9
webpackHotUpdate_N_E("pages/camera",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
false,

/***/ "./node_modules/dayjs/dayjs.min.js":
false,

/***/ "./node_modules/dayjs/locale/ja.js":
false,

/***/ "./src/Repository/sendFullData.ts":
false,

/***/ "./src/Repository/sendToLineApi.ts":
false,

/***/ "./src/Repository/sendWildlifeRecord.ts":
false,

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
                            //sendFullData(result.success, settings, _canvas)
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
    intervalRef.current = setInterval(_s2(function () {
      _s2();

      if (new Date().getTime() / 1000 > end || !intervalRef.current) {
        setIsUploading(false);
        clearInterval(intervalRef.current);
      } // eslint-disable-next-line react-hooks/rules-of-hooks


      var canvas = Object(_hooks_useCanvas__WEBPACK_IMPORTED_MODULE_4__["default"])(canvasElem, video);
      _restSec--;
      setRestSec(_restSec);
      var keyName = "current_image.jpg";
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
      lineNumber: 94,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: "jsx-1880160421" + " " + "flex items-center mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }, __jsx("label", {
    className: "jsx-1880160421" + " " + "block uppercase tracking-wide text-grey-700 font-bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
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
      lineNumber: 99,
      columnNumber: 7
    }
  }), __jsx("p", {
    className: "jsx-1880160421" + " " + "mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }
  }, __jsx("label", {
    className: "jsx-1880160421" + " " + "flex items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
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
      lineNumber: 109,
      columnNumber: 11
    }
  }), __jsx("span", {
    className: "jsx-1880160421" + " " + "text-grey-darker text-sm font-bold pl-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, " \u30D3\u30C7\u30AA\u306E\u8868\u793A "))), __jsx("p", {
    className: "jsx-1880160421" + " " + "mt-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
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
      lineNumber: 129,
      columnNumber: 9
    }
  }), __jsx("span", {
    className: "jsx-1880160421" + " " + "text-grey-darker text-sm font-bold pl-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
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
      lineNumber: 138,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1880160421",
    __self: this
  }, ".hide.jsx-1880160421{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcaW5vdWVcXERlc2t0b3BcXGRldGVjdC13aWxkbGlmZS1zcmNcXHNyY1xcY29tcG9uZW50c1xcV2lsZGxpZmVEZXRlY3Rvci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMElrQixBQUd3QixhQUNmIiwiZmlsZSI6IkM6XFxVc2Vyc1xcaW5vdWVcXERlc2t0b3BcXGRldGVjdC13aWxkbGlmZS1zcmNcXHNyY1xcY29tcG9uZW50c1xcV2lsZGxpZmVEZXRlY3Rvci50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tICdyZWFjdC1jb29raWUnXG5pbXBvcnQgc2VuZEZ1bGxEYXRhIGZyb20gJy4uL1JlcG9zaXRvcnkvc2VuZEZ1bGxEYXRhJ1xuaW1wb3J0IHVzZUNhbnZhcyBmcm9tICcuLi9ob29rcy91c2VDYW52YXMnXG5pbXBvcnQgdXNlQ2FwdHVyZSBmcm9tICcuLi9ob29rcy91c2VDYXB0dXJlJ1xuaW1wb3J0IHsgdXNlT2JzZXJ2ZXIgfSBmcm9tICcuLi9ob29rcy91c2VPYnNlcnZlcidcbmltcG9ydCB1c2VWaWRlbyBmcm9tICcuLi9ob29rcy91c2VWaWRlbydcbmltcG9ydCBNTFByZWRpY3RvciBmcm9tICcuLi91dGlscy9NTFByZWRpY3RvcidcbmltcG9ydCBDYW1lcmFVcGxvZGEgZnJvbSAnLi9DYW1lcmEvQ2FtZXJhVXBsb2RhJ1xuaW1wb3J0IHNlbmRJbWFnZVRvUzMgZnJvbSAnfi9zcmMvUmVwb3NpdG9yeS9zZW5kSW1hZ2VUb1MzJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICd+L3NyYy9jb21wb25lbnRzL2Fzc2V0cy9jb21tb24ubW9kdWxlLmNzcydcbnR5cGUgUHJvcHMgPSB7XG4gIGNoZWNrRnJhbWVSYXRlOiBudW1iZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2lsZExpZmVEZXRlY3Rvcih7IGNoZWNrRnJhbWVSYXRlIH06IFByb3BzKSB7XG4gIGNvbnN0IHByZWRpY3RvciA9IG5ldyBNTFByZWRpY3RvcignY29jbycpXG4gIGNvbnN0IHZpZGVvRWxlbSA9IHVzZVJlZjxIVE1MVmlkZW9FbGVtZW50PihudWxsKVxuICBjb25zdCBjYW52YXNFbGVtID0gdXNlUmVmPEhUTUxDYW52YXNFbGVtZW50PihudWxsKVxuICAvLyBjb25zdCBsb2NFbGVtID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KClcbiAgLy8gY29uc3QgW2Nvb2tpZXMsIHNldENvb2tpZV0gPSB1c2VDb29raWVzKFsnbG9jYXRpb24nXSlcbiAgY29uc3QgW2lzVmlzaWJsZSwgc2V0SXNWaXNpYmxlXSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgLy8g44Oi44OL44K/44Oq44Oz44Kw44Ki44OD44OX44Ot44O844OJ55SoXG4gIGNvbnN0IGludGVydmFsRWxlbSA9IHVzZVJlZjxIVE1MU2VsZWN0RWxlbWVudD4oKVxuICBjb25zdCBbcmVzdFNlYywgc2V0UmVzdFNlY10gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbaXNVcGxvYWRpbmcsIHNldElzVXBsb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBpbnRlcnZhbFJlZiA9IHVzZVJlZihudWxsKVxuXG4gIGNvbnN0IHZpZGVvID0gdXNlVmlkZW8odmlkZW9FbGVtKSAvLyDjgqvjg6Hjg6nnlKhcbiAgLy8gY29uc3QgdmlkZW8gPSB2aWRlb0VsZW0gLy8g44OT44OH44Kq55SoXG5cbiAgY29uc3QgeyBjaGVja1JlY2VudEZyYW1lcyB9ID0gdXNlT2JzZXJ2ZXIoKVxuICBjb25zdCB7IGxhYmVsLCBjcmVhdGVWYWxpZEZyYW1lIH0gPSB1c2VDYXB0dXJlKHByZWRpY3RvcilcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoTW9kZWwoKSB7XG4gICAgICBhd2FpdCBwcmVkaWN0b3IuZmV0Y2hNb2RlbCgpXG4gICAgICBzZXRJbnRlcnZhbChhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmICghdmlkZW8gfHwgIWNhbnZhc0VsZW0uY3VycmVudCB8fCBjYW52YXNFbGVtLmN1cnJlbnQuaGVpZ2h0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICAgICAgY29uc3QgX2NhbnZhcyA9IHVzZUNhbnZhcyhjYW52YXNFbGVtLCB2aWRlbylcbiAgICAgICAgY29uc3QgbmV3RnJhbWUgPSBhd2FpdCBjcmVhdGVWYWxpZEZyYW1lKF9jYW52YXMpXG5cbiAgICAgICAgY29uc3QgcmVzdWx0OiBSZXN1bHQ8RnJhbWU+ID0gY2hlY2tSZWNlbnRGcmFtZXMobmV3RnJhbWUpXG5cbiAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuc3VjY2Vzcykge1xuICAgICAgICAgIC8vIGNvbnN0IHNldHRpbmdzID0geyBsb2NhdGlvbjogbG9jRWxlbS5jdXJyZW50LnZhbHVlIH1cbiAgICAgICAgICBjb25zdCBzZXR0aW5ncyA9IHsgbG9jYXRpb246ICcnIH1cbiAgICAgICAgICAvLyBzZXRDb29raWUoJ2xvY2F0aW9uJywgbG9jRWxlbS5jdXJyZW50LnZhbHVlKVxuICAgICAgICAgIC8vc2VuZEZ1bGxEYXRhKHJlc3VsdC5zdWNjZXNzLCBzZXR0aW5ncywgX2NhbnZhcylcbiAgICAgICAgfVxuICAgICAgfSwgY2hlY2tGcmFtZVJhdGUpXG4gICAgfVxuICAgIGZldGNoTW9kZWwoKVxuICB9LCBbXSlcblxuICBjb25zdCBvblZpc2libGVDaGVja0NoYW5nZWQgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0SXNWaXNpYmxlKGV2ZW50LnRhcmdldC5jaGVja2VkKVxuICB9XG5cbiAgY29uc3Qgb25VcGxvYWRCdXR0b25QdXNoZWQgPSAoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWxTZWMgPSBOdW1iZXIoaW50ZXJ2YWxFbGVtLmN1cnJlbnQudmFsdWUpXG4gICAgbGV0IF9yZXN0U2VjID0gaW50ZXJ2YWxTZWNcbiAgICBzZXRSZXN0U2VjKF9yZXN0U2VjKVxuICAgIHNldElzVXBsb2FkaW5nKHRydWUpXG5cbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDBcbiAgICBjb25zdCBlbmQgPSBub3cgKyBpbnRlcnZhbFNlY1xuXG4gICAgaW50ZXJ2YWxSZWYuY3VycmVudCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDAgPiBlbmQgfHwgIWludGVydmFsUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgc2V0SXNVcGxvYWRpbmcoZmFsc2UpXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxSZWYuY3VycmVudClcbiAgICAgIH1cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgICAgY29uc3QgY2FudmFzID0gdXNlQ2FudmFzKGNhbnZhc0VsZW0sIHZpZGVvKVxuICAgICAgX3Jlc3RTZWMtLVxuICAgICAgc2V0UmVzdFNlYyhfcmVzdFNlYylcblxuICAgICAgY29uc3Qga2V5TmFtZSA9IGBjdXJyZW50X2ltYWdlLmpwZ2BcbiAgICAgIGNhbnZhcy50b0Jsb2IoYXN5bmMgKGJsb2IpID0+IGF3YWl0IHNlbmRJbWFnZVRvUzMoa2V5TmFtZSwgYmxvYiksICdpbWFnZS9qcGVnJylcbiAgICB9LCAxMDAwKVxuICB9XG5cbiAgY29uc3Qgb25TdG9wQnV0dG9uUHVzaGVkID0gKCkgPT4ge1xuICAgIHNldElzVXBsb2FkaW5nKGZhbHNlKVxuICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxSZWYuY3VycmVudClcbiAgICBpbnRlcnZhbFJlZi5jdXJyZW50ID0gbnVsbFxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwLTJcIj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG10LTRcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JleS03MDAgZm9udC1ib2xkXCI+5qSc5Ye644GV44KM44Gf44KC44GuOiA8L2xhYmVsPnsnICd9XG4gICAgICAgIHtsYWJlbCA/IEpTT04uc3RyaW5naWZ5KGxhYmVsKSA6ICfjgarjgZcnfVxuICAgICAgPC9wPlxuICAgICAgPHZpZGVvXG4gICAgICAgIGlkPVwidmlkZW9cIlxuICAgICAgICByZWY9e3ZpZGVvRWxlbX1cbiAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgaGVpZ2h0PVwiNTAwXCJcbiAgICAgICAgY2xhc3NOYW1lPXshaXNWaXNpYmxlICYmICdvcGFjaXR5LTAnfVxuICAgICAgICByb2xlPVwidmlkZW9cIlxuICAgICAgPjwvdmlkZW8+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtdC00XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXt0cnVlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbJ2Zvcm0tY2hlY2tib3gnXX1gfVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uVmlzaWJsZUNoZWNrQ2hhbmdlZH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JleS1kYXJrZXIgdGV4dC1zbSBmb250LWJvbGQgcGwtMlwiPiDjg5Pjg4fjgqrjga7ooajnpLogPC9zcGFuPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9wPlxuICAgICAgey8qIDxwIGNsYXNzTmFtZT1cIm10LTZcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JleS1kYXJrZXIgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiPuWgtOaJgOWQjTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyYXktMjAwICB0ZXh0LWdyYXktNzAwIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcm91bmRlZCBweS0zIHB4LTRcIlxuICAgICAgICAgIHZhbHVlPXtjb29raWVzLmxvY2F0aW9ufVxuICAgICAgICAgIHJlZj17bG9jRWxlbX1cbiAgICAgICAgLz5cbiAgICAgIDwvcD4gKi99XG5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm10LThcIj5cbiAgICAgICAgPENhbWVyYVVwbG9kYVxuICAgICAgICAgIG9uVXBsb2FkQnV0dG9uUHVzaGVkPXtvblVwbG9hZEJ1dHRvblB1c2hlZH1cbiAgICAgICAgICBpbnRlcnZhbEVsZW09e2ludGVydmFsRWxlbX1cbiAgICAgICAgICBpc1VwbG9hZGluZz17aXNVcGxvYWRpbmd9XG4gICAgICAgICAgb25TdG9wQnV0dG9uUHVzaGVkPXtvblN0b3BCdXR0b25QdXNoZWR9XG4gICAgICAgIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JleS1kYXJrZXIgdGV4dC1zbSBmb250LWJvbGQgcGwtMlwiPntpc1VwbG9hZGluZyAmJiBg5q6L44KKOiAke3Jlc3RTZWN9IOenkmB9PC9zcGFuPlxuICAgICAgPC9wPlxuXG4gICAgICA8Y2FudmFzIGlkPVwiY2FudmFzXCIgcmVmPXtjYW52YXNFbGVtfSB3aWR0aD1cIjIwMHB4XCIgaGVpZ2h0PVwiMTAwJVwiIGNsYXNzTmFtZT1cImhpZGVcIiByb2xlPVwiY2FudmFzXCI+PC9jYW52YXM+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5oaWRlIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\inoue\\\\Desktop\\\\detect-wildlife-src\\\\src\\\\components\\\\WildlifeDetector.tsx */"));
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

/***/ }),

/***/ "./src/graphql/mutations.ts":
false,

/***/ "./src/graphql/queries.ts":
false,

/***/ "./src/utils/getTimestamp.ts":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvV2lsZGxpZmVEZXRlY3Rvci50c3giXSwibmFtZXMiOlsiV2lsZExpZmVEZXRlY3RvciIsImNoZWNrRnJhbWVSYXRlIiwicHJlZGljdG9yIiwiTUxQcmVkaWN0b3IiLCJ2aWRlb0VsZW0iLCJ1c2VSZWYiLCJjYW52YXNFbGVtIiwidXNlU3RhdGUiLCJpc1Zpc2libGUiLCJzZXRJc1Zpc2libGUiLCJpbnRlcnZhbEVsZW0iLCJyZXN0U2VjIiwic2V0UmVzdFNlYyIsImlzVXBsb2FkaW5nIiwic2V0SXNVcGxvYWRpbmciLCJpbnRlcnZhbFJlZiIsInZpZGVvIiwidXNlVmlkZW8iLCJ1c2VPYnNlcnZlciIsImNoZWNrUmVjZW50RnJhbWVzIiwidXNlQ2FwdHVyZSIsImxhYmVsIiwiY3JlYXRlVmFsaWRGcmFtZSIsInVzZUVmZmVjdCIsImZldGNoTW9kZWwiLCJzZXRJbnRlcnZhbCIsImN1cnJlbnQiLCJoZWlnaHQiLCJ1bmRlZmluZWQiLCJfY2FudmFzIiwidXNlQ2FudmFzIiwibmV3RnJhbWUiLCJyZXN1bHQiLCJzdWNjZXNzIiwic2V0dGluZ3MiLCJsb2NhdGlvbiIsIm9uVmlzaWJsZUNoZWNrQ2hhbmdlZCIsImV2ZW50IiwidGFyZ2V0IiwiY2hlY2tlZCIsIm9uVXBsb2FkQnV0dG9uUHVzaGVkIiwiaW50ZXJ2YWxTZWMiLCJOdW1iZXIiLCJ2YWx1ZSIsIl9yZXN0U2VjIiwibm93IiwiRGF0ZSIsImdldFRpbWUiLCJlbmQiLCJjbGVhckludGVydmFsIiwiY2FudmFzIiwia2V5TmFtZSIsInRvQmxvYiIsImJsb2IiLCJzZW5kSW1hZ2VUb1MzIiwib25TdG9wQnV0dG9uUHVzaGVkIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUVBO0FB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QUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFDRSx3QkFBb0IsRUFBRWxCLG9CQUR4QjtBQUVFLGdCQUFZLEVBQUU5QixZQUZoQjtBQUdFLGVBQVcsRUFBRUcsV0FIZjtBQUlFLHNCQUFrQixFQUFFMEMsa0JBSnRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQU9FO0FBQUEsd0NBQWdCLHlDQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTJEMUMsV0FBVyw0QkFBV0YsT0FBWCxZQUF0RSxDQVBGLENBbENGLEVBNENFO0FBQVEsTUFBRSxFQUFDLFFBQVg7QUFBb0IsT0FBRyxFQUFFTCxVQUF6QjtBQUFxQyxTQUFLLEVBQUMsT0FBM0M7QUFBbUQsVUFBTSxFQUFDLE1BQTFEO0FBQWtGLFFBQUksRUFBQyxRQUF2RjtBQUFBLHdDQUEyRSxNQUEzRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBNUNGO0FBQUE7QUFBQTtBQUFBLG01T0FERjtBQXFERDs7SUFsSXVCTixnQjtVQWNSaUIsdUQsRUFHZ0JDLDhELEVBQ01FLHlEOzs7S0FsQmRwQixnQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYW1lcmEuZjBhZjg1NjM2YTU3YjY5NzMxNmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gJ3JlYWN0LWNvb2tpZSdcbmltcG9ydCBzZW5kRnVsbERhdGEgZnJvbSAnLi4vUmVwb3NpdG9yeS9zZW5kRnVsbERhdGEnXG5pbXBvcnQgdXNlQ2FudmFzIGZyb20gJy4uL2hvb2tzL3VzZUNhbnZhcydcbmltcG9ydCB1c2VDYXB0dXJlIGZyb20gJy4uL2hvb2tzL3VzZUNhcHR1cmUnXG5pbXBvcnQgeyB1c2VPYnNlcnZlciB9IGZyb20gJy4uL2hvb2tzL3VzZU9ic2VydmVyJ1xuaW1wb3J0IHVzZVZpZGVvIGZyb20gJy4uL2hvb2tzL3VzZVZpZGVvJ1xuaW1wb3J0IE1MUHJlZGljdG9yIGZyb20gJy4uL3V0aWxzL01MUHJlZGljdG9yJ1xuaW1wb3J0IENhbWVyYVVwbG9kYSBmcm9tICcuL0NhbWVyYS9DYW1lcmFVcGxvZGEnXG5pbXBvcnQgc2VuZEltYWdlVG9TMyBmcm9tICd+L3NyYy9SZXBvc2l0b3J5L3NlbmRJbWFnZVRvUzMnXG5pbXBvcnQgc3R5bGVzIGZyb20gJ34vc3JjL2NvbXBvbmVudHMvYXNzZXRzL2NvbW1vbi5tb2R1bGUuY3NzJ1xudHlwZSBQcm9wcyA9IHtcbiAgY2hlY2tGcmFtZVJhdGU6IG51bWJlclxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaWxkTGlmZURldGVjdG9yKHsgY2hlY2tGcmFtZVJhdGUgfTogUHJvcHMpIHtcbiAgY29uc3QgcHJlZGljdG9yID0gbmV3IE1MUHJlZGljdG9yKCdjb2NvJylcbiAgY29uc3QgdmlkZW9FbGVtID0gdXNlUmVmPEhUTUxWaWRlb0VsZW1lbnQ+KG51bGwpXG4gIGNvbnN0IGNhbnZhc0VsZW0gPSB1c2VSZWY8SFRNTENhbnZhc0VsZW1lbnQ+KG51bGwpXG4gIC8vIGNvbnN0IGxvY0VsZW0gPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4oKVxuICAvLyBjb25zdCBbY29va2llcywgc2V0Q29va2llXSA9IHVzZUNvb2tpZXMoWydsb2NhdGlvbiddKVxuICBjb25zdCBbaXNWaXNpYmxlLCBzZXRJc1Zpc2libGVdID0gdXNlU3RhdGUodHJ1ZSlcblxuICAvLyDjg6Ljg4vjgr/jg6rjg7PjgrDjgqLjg4Pjg5fjg63jg7zjg4nnlKhcbiAgY29uc3QgaW50ZXJ2YWxFbGVtID0gdXNlUmVmPEhUTUxTZWxlY3RFbGVtZW50PigpXG4gIGNvbnN0IFtyZXN0U2VjLCBzZXRSZXN0U2VjXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtpc1VwbG9hZGluZywgc2V0SXNVcGxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IGludGVydmFsUmVmID0gdXNlUmVmKG51bGwpXG5cbiAgY29uc3QgdmlkZW8gPSB1c2VWaWRlbyh2aWRlb0VsZW0pIC8vIOOCq+ODoeODqeeUqFxuICAvLyBjb25zdCB2aWRlbyA9IHZpZGVvRWxlbSAvLyDjg5Pjg4fjgqrnlKhcblxuICBjb25zdCB7IGNoZWNrUmVjZW50RnJhbWVzIH0gPSB1c2VPYnNlcnZlcigpXG4gIGNvbnN0IHsgbGFiZWwsIGNyZWF0ZVZhbGlkRnJhbWUgfSA9IHVzZUNhcHR1cmUocHJlZGljdG9yKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hNb2RlbCgpIHtcbiAgICAgIGF3YWl0IHByZWRpY3Rvci5mZXRjaE1vZGVsKClcbiAgICAgIHNldEludGVydmFsKGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKCF2aWRlbyB8fCAhY2FudmFzRWxlbS5jdXJyZW50IHx8IGNhbnZhc0VsZW0uY3VycmVudC5oZWlnaHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgICAgICBjb25zdCBfY2FudmFzID0gdXNlQ2FudmFzKGNhbnZhc0VsZW0sIHZpZGVvKVxuICAgICAgICBjb25zdCBuZXdGcmFtZSA9IGF3YWl0IGNyZWF0ZVZhbGlkRnJhbWUoX2NhbnZhcylcblxuICAgICAgICBjb25zdCByZXN1bHQ6IFJlc3VsdDxGcmFtZT4gPSBjaGVja1JlY2VudEZyYW1lcyhuZXdGcmFtZSlcblxuICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgICAgLy8gY29uc3Qgc2V0dGluZ3MgPSB7IGxvY2F0aW9uOiBsb2NFbGVtLmN1cnJlbnQudmFsdWUgfVxuICAgICAgICAgIGNvbnN0IHNldHRpbmdzID0geyBsb2NhdGlvbjogJycgfVxuICAgICAgICAgIC8vIHNldENvb2tpZSgnbG9jYXRpb24nLCBsb2NFbGVtLmN1cnJlbnQudmFsdWUpXG4gICAgICAgICAgLy9zZW5kRnVsbERhdGEocmVzdWx0LnN1Y2Nlc3MsIHNldHRpbmdzLCBfY2FudmFzKVxuICAgICAgICB9XG4gICAgICB9LCBjaGVja0ZyYW1lUmF0ZSlcbiAgICB9XG4gICAgZmV0Y2hNb2RlbCgpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IG9uVmlzaWJsZUNoZWNrQ2hhbmdlZCA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBzZXRJc1Zpc2libGUoZXZlbnQudGFyZ2V0LmNoZWNrZWQpXG4gIH1cblxuICBjb25zdCBvblVwbG9hZEJ1dHRvblB1c2hlZCA9ICgpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbFNlYyA9IE51bWJlcihpbnRlcnZhbEVsZW0uY3VycmVudC52YWx1ZSlcbiAgICBsZXQgX3Jlc3RTZWMgPSBpbnRlcnZhbFNlY1xuICAgIHNldFJlc3RTZWMoX3Jlc3RTZWMpXG4gICAgc2V0SXNVcGxvYWRpbmcodHJ1ZSlcblxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMFxuICAgIGNvbnN0IGVuZCA9IG5vdyArIGludGVydmFsU2VjXG5cbiAgICBpbnRlcnZhbFJlZi5jdXJyZW50ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCA+IGVuZCB8fCAhaW50ZXJ2YWxSZWYuY3VycmVudCkge1xuICAgICAgICBzZXRJc1VwbG9hZGluZyhmYWxzZSlcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbFJlZi5jdXJyZW50KVxuICAgICAgfVxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgICBjb25zdCBjYW52YXMgPSB1c2VDYW52YXMoY2FudmFzRWxlbSwgdmlkZW8pXG4gICAgICBfcmVzdFNlYy0tXG4gICAgICBzZXRSZXN0U2VjKF9yZXN0U2VjKVxuXG4gICAgICBjb25zdCBrZXlOYW1lID0gYGN1cnJlbnRfaW1hZ2UuanBnYFxuICAgICAgY2FudmFzLnRvQmxvYihhc3luYyAoYmxvYikgPT4gYXdhaXQgc2VuZEltYWdlVG9TMyhrZXlOYW1lLCBibG9iKSwgJ2ltYWdlL2pwZWcnKVxuICAgIH0sIDEwMDApXG4gIH1cblxuICBjb25zdCBvblN0b3BCdXR0b25QdXNoZWQgPSAoKSA9PiB7XG4gICAgc2V0SXNVcGxvYWRpbmcoZmFsc2UpXG4gICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbFJlZi5jdXJyZW50KVxuICAgIGludGVydmFsUmVmLmN1cnJlbnQgPSBudWxsXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMlwiPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbXQtNFwiPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmV5LTcwMCBmb250LWJvbGRcIj7mpJzlh7rjgZXjgozjgZ/jgoLjga46IDwvbGFiZWw+eycgJ31cbiAgICAgICAge2xhYmVsID8gSlNPTi5zdHJpbmdpZnkobGFiZWwpIDogJ+OBquOBlyd9XG4gICAgICA8L3A+XG4gICAgICA8dmlkZW9cbiAgICAgICAgaWQ9XCJ2aWRlb1wiXG4gICAgICAgIHJlZj17dmlkZW9FbGVtfVxuICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICBoZWlnaHQ9XCI1MDBcIlxuICAgICAgICBjbGFzc05hbWU9eyFpc1Zpc2libGUgJiYgJ29wYWNpdHktMCd9XG4gICAgICAgIHJvbGU9XCJ2aWRlb1wiXG4gICAgICA+PC92aWRlbz5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e3RydWV9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlc1snZm9ybS1jaGVja2JveCddfWB9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25WaXNpYmxlQ2hlY2tDaGFuZ2VkfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmV5LWRhcmtlciB0ZXh0LXNtIGZvbnQtYm9sZCBwbC0yXCI+IOODk+ODh+OCquOBruihqOekuiA8L3NwYW4+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L3A+XG4gICAgICB7LyogPHAgY2xhc3NOYW1lPVwibXQtNlwiPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmV5LWRhcmtlciB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCI+5aC05omA5ZCNPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JheS0yMDAgIHRleHQtZ3JheS03MDAgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkIHB5LTMgcHgtNFwiXG4gICAgICAgICAgdmFsdWU9e2Nvb2tpZXMubG9jYXRpb259XG4gICAgICAgICAgcmVmPXtsb2NFbGVtfVxuICAgICAgICAvPlxuICAgICAgPC9wPiAqL31cblxuICAgICAgPHAgY2xhc3NOYW1lPVwibXQtOFwiPlxuICAgICAgICA8Q2FtZXJhVXBsb2RhXG4gICAgICAgICAgb25VcGxvYWRCdXR0b25QdXNoZWQ9e29uVXBsb2FkQnV0dG9uUHVzaGVkfVxuICAgICAgICAgIGludGVydmFsRWxlbT17aW50ZXJ2YWxFbGVtfVxuICAgICAgICAgIGlzVXBsb2FkaW5nPXtpc1VwbG9hZGluZ31cbiAgICAgICAgICBvblN0b3BCdXR0b25QdXNoZWQ9e29uU3RvcEJ1dHRvblB1c2hlZH1cbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmV5LWRhcmtlciB0ZXh0LXNtIGZvbnQtYm9sZCBwbC0yXCI+e2lzVXBsb2FkaW5nICYmIGDmrovjgoo6ICR7cmVzdFNlY30g56eSYH08L3NwYW4+XG4gICAgICA8L3A+XG5cbiAgICAgIDxjYW52YXMgaWQ9XCJjYW52YXNcIiByZWY9e2NhbnZhc0VsZW19IHdpZHRoPVwiMjAwcHhcIiBoZWlnaHQ9XCIxMDAlXCIgY2xhc3NOYW1lPVwiaGlkZVwiIHJvbGU9XCJjYW52YXNcIj48L2NhbnZhcz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmhpZGUge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
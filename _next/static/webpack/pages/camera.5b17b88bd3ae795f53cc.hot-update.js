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
/* harmony import */ var _Repository_sendFullData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Repository/sendFullData */ "./src/Repository/sendFullData.ts");
/* harmony import */ var _hooks_useCanvas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useCanvas */ "./src/hooks/useCanvas.tsx");
/* harmony import */ var _hooks_useCapture__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useCapture */ "./src/hooks/useCapture.ts");
/* harmony import */ var _hooks_useObserver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useObserver */ "./src/hooks/useObserver.tsx");
/* harmony import */ var _hooks_useVideo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useVideo */ "./src/hooks/useVideo.ts");
/* harmony import */ var _utils_MLPredictor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/MLPredictor */ "./src/utils/MLPredictor.ts");
/* harmony import */ var _Camera_CameraUploda__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Camera/CameraUploda */ "./src/components/Camera/CameraUploda.tsx");
/* harmony import */ var _src_Repository_sendImageToS3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/src/Repository/sendImageToS3 */ "./src/Repository/sendImageToS3.ts");
/* harmony import */ var _src_components_assets_common_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~/src/components/assets/common.module.css */ "./src/components/assets/common.module.css");
/* harmony import */ var _src_components_assets_common_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_src_components_assets_common_module_css__WEBPACK_IMPORTED_MODULE_12__);



var _jsxFileName = "C:\\Users\\inoue\\Desktop\\detect-wildlife-src\\src\\components\\WildlifeDetector.tsx",
    _s3 = $RefreshSig$();



var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;
 // import { useCookies } from 'react-cookie'










function WildLifeDetector(_ref) {
  _s3();

  var checkFrameRate = _ref.checkFrameRate;
  var predictor = new _utils_MLPredictor__WEBPACK_IMPORTED_MODULE_9__["default"]('mobile');
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
  var video = Object(_hooks_useVideo__WEBPACK_IMPORTED_MODULE_8__["default"])(videoElem); // カメラ用
  // const video = videoElem // ビデオ用

  var _useObserver = Object(_hooks_useObserver__WEBPACK_IMPORTED_MODULE_7__["useObserver"])(),
      checkRecentFrames = _useObserver.checkRecentFrames;

  var _useCapture = Object(_hooks_useCapture__WEBPACK_IMPORTED_MODULE_6__["default"])(predictor),
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
                          _canvas = Object(_hooks_useCanvas__WEBPACK_IMPORTED_MODULE_5__["default"])(canvasElem, video);
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

                            Object(_Repository_sendFullData__WEBPACK_IMPORTED_MODULE_4__["default"])(result.success, settings, _canvas);
                          }

                        case 9:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }), "cOx3lsPk64qbg93yVBTzRHsZNLU=", false, function () {
                  return [_hooks_useCanvas__WEBPACK_IMPORTED_MODULE_5__["default"]];
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


      var canvas = Object(_hooks_useCanvas__WEBPACK_IMPORTED_MODULE_5__["default"])(canvasElem, video);
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
                  return Object(_src_Repository_sendImageToS3__WEBPACK_IMPORTED_MODULE_11__["default"])(keyName, blob);

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
      return [_hooks_useCanvas__WEBPACK_IMPORTED_MODULE_5__["default"]];
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
    className: "jsx-1880160421" + " " + "".concat(_src_components_assets_common_module_css__WEBPACK_IMPORTED_MODULE_12___default.a['form-checkbox']),
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
  }, __jsx(_Camera_CameraUploda__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
  }, ".hide.jsx-1880160421{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcaW5vdWVcXERlc2t0b3BcXGRldGVjdC13aWxkbGlmZS1zcmNcXHNyY1xcY29tcG9uZW50c1xcV2lsZGxpZmVEZXRlY3Rvci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMElrQixBQUd3QixhQUNmIiwiZmlsZSI6IkM6XFxVc2Vyc1xcaW5vdWVcXERlc2t0b3BcXGRldGVjdC13aWxkbGlmZS1zcmNcXHNyY1xcY29tcG9uZW50c1xcV2lsZGxpZmVEZXRlY3Rvci50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tICdyZWFjdC1jb29raWUnXG5pbXBvcnQgc2VuZEZ1bGxEYXRhIGZyb20gJy4uL1JlcG9zaXRvcnkvc2VuZEZ1bGxEYXRhJ1xuaW1wb3J0IHVzZUNhbnZhcyBmcm9tICcuLi9ob29rcy91c2VDYW52YXMnXG5pbXBvcnQgdXNlQ2FwdHVyZSBmcm9tICcuLi9ob29rcy91c2VDYXB0dXJlJ1xuaW1wb3J0IHsgdXNlT2JzZXJ2ZXIgfSBmcm9tICcuLi9ob29rcy91c2VPYnNlcnZlcidcbmltcG9ydCB1c2VWaWRlbyBmcm9tICcuLi9ob29rcy91c2VWaWRlbydcbmltcG9ydCBNTFByZWRpY3RvciBmcm9tICcuLi91dGlscy9NTFByZWRpY3RvcidcbmltcG9ydCBDYW1lcmFVcGxvZGEgZnJvbSAnLi9DYW1lcmEvQ2FtZXJhVXBsb2RhJ1xuaW1wb3J0IHNlbmRJbWFnZVRvUzMgZnJvbSAnfi9zcmMvUmVwb3NpdG9yeS9zZW5kSW1hZ2VUb1MzJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICd+L3NyYy9jb21wb25lbnRzL2Fzc2V0cy9jb21tb24ubW9kdWxlLmNzcydcbnR5cGUgUHJvcHMgPSB7XG4gIGNoZWNrRnJhbWVSYXRlOiBudW1iZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2lsZExpZmVEZXRlY3Rvcih7IGNoZWNrRnJhbWVSYXRlIH06IFByb3BzKSB7XG4gIGNvbnN0IHByZWRpY3RvciA9IG5ldyBNTFByZWRpY3RvcignbW9iaWxlJylcbiAgY29uc3QgdmlkZW9FbGVtID0gdXNlUmVmPEhUTUxWaWRlb0VsZW1lbnQ+KG51bGwpXG4gIGNvbnN0IGNhbnZhc0VsZW0gPSB1c2VSZWY8SFRNTENhbnZhc0VsZW1lbnQ+KG51bGwpXG4gIC8vIGNvbnN0IGxvY0VsZW0gPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4oKVxuICAvLyBjb25zdCBbY29va2llcywgc2V0Q29va2llXSA9IHVzZUNvb2tpZXMoWydsb2NhdGlvbiddKVxuICBjb25zdCBbaXNWaXNpYmxlLCBzZXRJc1Zpc2libGVdID0gdXNlU3RhdGUodHJ1ZSlcblxuICAvLyDjg6Ljg4vjgr/jg6rjg7PjgrDjgqLjg4Pjg5fjg63jg7zjg4nnlKhcbiAgY29uc3QgaW50ZXJ2YWxFbGVtID0gdXNlUmVmPEhUTUxTZWxlY3RFbGVtZW50PigpXG4gIGNvbnN0IFtyZXN0U2VjLCBzZXRSZXN0U2VjXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtpc1VwbG9hZGluZywgc2V0SXNVcGxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IGludGVydmFsUmVmID0gdXNlUmVmKG51bGwpXG5cbiAgY29uc3QgdmlkZW8gPSB1c2VWaWRlbyh2aWRlb0VsZW0pIC8vIOOCq+ODoeODqeeUqFxuICAvLyBjb25zdCB2aWRlbyA9IHZpZGVvRWxlbSAvLyDjg5Pjg4fjgqrnlKhcblxuICBjb25zdCB7IGNoZWNrUmVjZW50RnJhbWVzIH0gPSB1c2VPYnNlcnZlcigpXG4gIGNvbnN0IHsgbGFiZWwsIGNyZWF0ZVZhbGlkRnJhbWUgfSA9IHVzZUNhcHR1cmUocHJlZGljdG9yKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hNb2RlbCgpIHtcbiAgICAgIGF3YWl0IHByZWRpY3Rvci5mZXRjaE1vZGVsKClcbiAgICAgIHNldEludGVydmFsKGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKCF2aWRlbyB8fCAhY2FudmFzRWxlbS5jdXJyZW50IHx8IGNhbnZhc0VsZW0uY3VycmVudC5oZWlnaHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgICAgICBjb25zdCBfY2FudmFzID0gdXNlQ2FudmFzKGNhbnZhc0VsZW0sIHZpZGVvKVxuICAgICAgICBjb25zdCBuZXdGcmFtZSA9IGF3YWl0IGNyZWF0ZVZhbGlkRnJhbWUoX2NhbnZhcylcblxuICAgICAgICBjb25zdCByZXN1bHQ6IFJlc3VsdDxGcmFtZT4gPSBjaGVja1JlY2VudEZyYW1lcyhuZXdGcmFtZSlcblxuICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgICAgLy8gY29uc3Qgc2V0dGluZ3MgPSB7IGxvY2F0aW9uOiBsb2NFbGVtLmN1cnJlbnQudmFsdWUgfVxuICAgICAgICAgIGNvbnN0IHNldHRpbmdzID0geyBsb2NhdGlvbjogJycgfVxuICAgICAgICAgIC8vIHNldENvb2tpZSgnbG9jYXRpb24nLCBsb2NFbGVtLmN1cnJlbnQudmFsdWUpXG4gICAgICAgICAgc2VuZEZ1bGxEYXRhKHJlc3VsdC5zdWNjZXNzLCBzZXR0aW5ncywgX2NhbnZhcylcbiAgICAgICAgfVxuICAgICAgfSwgY2hlY2tGcmFtZVJhdGUpXG4gICAgfVxuICAgIGZldGNoTW9kZWwoKVxuICB9LCBbXSlcblxuICBjb25zdCBvblZpc2libGVDaGVja0NoYW5nZWQgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0SXNWaXNpYmxlKGV2ZW50LnRhcmdldC5jaGVja2VkKVxuICB9XG5cbiAgY29uc3Qgb25VcGxvYWRCdXR0b25QdXNoZWQgPSAoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWxTZWMgPSBOdW1iZXIoaW50ZXJ2YWxFbGVtLmN1cnJlbnQudmFsdWUpXG4gICAgbGV0IF9yZXN0U2VjID0gaW50ZXJ2YWxTZWNcbiAgICBzZXRSZXN0U2VjKF9yZXN0U2VjKVxuICAgIHNldElzVXBsb2FkaW5nKHRydWUpXG5cbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDBcbiAgICBjb25zdCBlbmQgPSBub3cgKyBpbnRlcnZhbFNlY1xuXG4gICAgaW50ZXJ2YWxSZWYuY3VycmVudCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDAgPiBlbmQgfHwgIWludGVydmFsUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgc2V0SXNVcGxvYWRpbmcoZmFsc2UpXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxSZWYuY3VycmVudClcbiAgICAgIH1cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgICAgY29uc3QgY2FudmFzID0gdXNlQ2FudmFzKGNhbnZhc0VsZW0sIHZpZGVvKVxuICAgICAgX3Jlc3RTZWMtLVxuICAgICAgc2V0UmVzdFNlYyhfcmVzdFNlYylcblxuICAgICAgY29uc3Qga2V5TmFtZSA9IGBjdXJyZW50X2ltYWdlLmpwZ2BcbiAgICAgIGNhbnZhcy50b0Jsb2IoYXN5bmMgKGJsb2IpID0+IGF3YWl0IHNlbmRJbWFnZVRvUzMoa2V5TmFtZSwgYmxvYiksICdpbWFnZS9qcGVnJylcbiAgICB9LCAxMDAwKVxuICB9XG5cbiAgY29uc3Qgb25TdG9wQnV0dG9uUHVzaGVkID0gKCkgPT4ge1xuICAgIHNldElzVXBsb2FkaW5nKGZhbHNlKVxuICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxSZWYuY3VycmVudClcbiAgICBpbnRlcnZhbFJlZi5jdXJyZW50ID0gbnVsbFxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwLTJcIj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG10LTRcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JleS03MDAgZm9udC1ib2xkXCI+5qSc5Ye644GV44KM44Gf44KC44GuOiA8L2xhYmVsPnsnICd9XG4gICAgICAgIHtsYWJlbCA/IEpTT04uc3RyaW5naWZ5KGxhYmVsKSA6ICfjgarjgZcnfVxuICAgICAgPC9wPlxuICAgICAgPHZpZGVvXG4gICAgICAgIGlkPVwidmlkZW9cIlxuICAgICAgICByZWY9e3ZpZGVvRWxlbX1cbiAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgaGVpZ2h0PVwiNTAwXCJcbiAgICAgICAgY2xhc3NOYW1lPXshaXNWaXNpYmxlICYmICdvcGFjaXR5LTAnfVxuICAgICAgICByb2xlPVwidmlkZW9cIlxuICAgICAgPjwvdmlkZW8+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtdC00XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXt0cnVlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbJ2Zvcm0tY2hlY2tib3gnXX1gfVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uVmlzaWJsZUNoZWNrQ2hhbmdlZH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JleS1kYXJrZXIgdGV4dC1zbSBmb250LWJvbGQgcGwtMlwiPiDjg5Pjg4fjgqrjga7ooajnpLogPC9zcGFuPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9wPlxuICAgICAgey8qIDxwIGNsYXNzTmFtZT1cIm10LTZcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JleS1kYXJrZXIgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiPuWgtOaJgOWQjTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyYXktMjAwICB0ZXh0LWdyYXktNzAwIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcm91bmRlZCBweS0zIHB4LTRcIlxuICAgICAgICAgIHZhbHVlPXtjb29raWVzLmxvY2F0aW9ufVxuICAgICAgICAgIHJlZj17bG9jRWxlbX1cbiAgICAgICAgLz5cbiAgICAgIDwvcD4gKi99XG5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm10LThcIj5cbiAgICAgICAgPENhbWVyYVVwbG9kYVxuICAgICAgICAgIG9uVXBsb2FkQnV0dG9uUHVzaGVkPXtvblVwbG9hZEJ1dHRvblB1c2hlZH1cbiAgICAgICAgICBpbnRlcnZhbEVsZW09e2ludGVydmFsRWxlbX1cbiAgICAgICAgICBpc1VwbG9hZGluZz17aXNVcGxvYWRpbmd9XG4gICAgICAgICAgb25TdG9wQnV0dG9uUHVzaGVkPXtvblN0b3BCdXR0b25QdXNoZWR9XG4gICAgICAgIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JleS1kYXJrZXIgdGV4dC1zbSBmb250LWJvbGQgcGwtMlwiPntpc1VwbG9hZGluZyAmJiBg5q6L44KKOiAke3Jlc3RTZWN9IOenkmB9PC9zcGFuPlxuICAgICAgPC9wPlxuXG4gICAgICA8Y2FudmFzIGlkPVwiY2FudmFzXCIgcmVmPXtjYW52YXNFbGVtfSB3aWR0aD1cIjIwMHB4XCIgaGVpZ2h0PVwiMTAwJVwiIGNsYXNzTmFtZT1cImhpZGVcIiByb2xlPVwiY2FudmFzXCI+PC9jYW52YXM+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5oaWRlIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\inoue\\\\Desktop\\\\detect-wildlife-src\\\\src\\\\components\\\\WildlifeDetector.tsx */"));
}

_s3(WildLifeDetector, "F+rASUy6cAZGU4oIdug81URnnXk=", false, function () {
  return [_hooks_useVideo__WEBPACK_IMPORTED_MODULE_8__["default"], _hooks_useObserver__WEBPACK_IMPORTED_MODULE_7__["useObserver"], _hooks_useCapture__WEBPACK_IMPORTED_MODULE_6__["default"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvV2lsZGxpZmVEZXRlY3Rvci50c3giXSwibmFtZXMiOlsiV2lsZExpZmVEZXRlY3RvciIsImNoZWNrRnJhbWVSYXRlIiwicHJlZGljdG9yIiwiTUxQcmVkaWN0b3IiLCJ2aWRlb0VsZW0iLCJ1c2VSZWYiLCJjYW52YXNFbGVtIiwidXNlU3RhdGUiLCJpc1Zpc2libGUiLCJzZXRJc1Zpc2libGUiLCJpbnRlcnZhbEVsZW0iLCJyZXN0U2VjIiwic2V0UmVzdFNlYyIsImlzVXBsb2FkaW5nIiwic2V0SXNVcGxvYWRpbmciLCJpbnRlcnZhbFJlZiIsInZpZGVvIiwidXNlVmlkZW8iLCJ1c2VPYnNlcnZlciIsImNoZWNrUmVjZW50RnJhbWVzIiwidXNlQ2FwdHVyZSIsImxhYmVsIiwiY3JlYXRlVmFsaWRGcmFtZSIsInVzZUVmZmVjdCIsImZldGNoTW9kZWwiLCJzZXRJbnRlcnZhbCIsImN1cnJlbnQiLCJoZWlnaHQiLCJ1bmRlZmluZWQiLCJfY2FudmFzIiwidXNlQ2FudmFzIiwibmV3RnJhbWUiLCJyZXN1bHQiLCJzdWNjZXNzIiwic2V0dGluZ3MiLCJsb2NhdGlvbiIsInNlbmRGdWxsRGF0YSIsIm9uVmlzaWJsZUNoZWNrQ2hhbmdlZCIsImV2ZW50IiwidGFyZ2V0IiwiY2hlY2tlZCIsIm9uVXBsb2FkQnV0dG9uUHVzaGVkIiwiaW50ZXJ2YWxTZWMiLCJOdW1iZXIiLCJ2YWx1ZSIsIl9yZXN0U2VjIiwibm93IiwiRGF0ZSIsImdldFRpbWUiLCJlbmQiLCJjbGVhckludGVydmFsIiwiY2FudmFzIiwia2V5TmFtZSIsInRvQmxvYiIsImJsb2IiLCJzZW5kSW1hZ2VUb1MzIiwib25TdG9wQnV0dG9uUHVzaGVkIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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LENBYkYsRUFrQ0U7QUFBQSx3Q0FBYSxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQ0Usd0JBQW9CLEVBQUVsQixvQkFEeEI7QUFFRSxnQkFBWSxFQUFFL0IsWUFGaEI7QUFHRSxlQUFXLEVBQUVHLFdBSGY7QUFJRSxzQkFBa0IsRUFBRTJDLGtCQUp0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFPRTtBQUFBLHdDQUFnQix5Q0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEyRDNDLFdBQVcsNEJBQVdGLE9BQVgsWUFBdEUsQ0FQRixDQWxDRixFQTRDRTtBQUFRLE1BQUUsRUFBQyxRQUFYO0FBQW9CLE9BQUcsRUFBRUwsVUFBekI7QUFBcUMsU0FBSyxFQUFDLE9BQTNDO0FBQW1ELFVBQU0sRUFBQyxNQUExRDtBQUFrRixRQUFJLEVBQUMsUUFBdkY7QUFBQSx3Q0FBMkUsTUFBM0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTVDRjtBQUFBO0FBQUE7QUFBQSxtNU9BREY7QUFxREQ7O0lBbEl1Qk4sZ0I7VUFjUmlCLHVELEVBR2dCQyw4RCxFQUNNRSx5RDs7O0tBbEJkcEIsZ0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FtZXJhLjViMTdiODhiZDNhZTc5NWY1M2NjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tICdyZWFjdC1jb29raWUnXG5pbXBvcnQgc2VuZEZ1bGxEYXRhIGZyb20gJy4uL1JlcG9zaXRvcnkvc2VuZEZ1bGxEYXRhJ1xuaW1wb3J0IHVzZUNhbnZhcyBmcm9tICcuLi9ob29rcy91c2VDYW52YXMnXG5pbXBvcnQgdXNlQ2FwdHVyZSBmcm9tICcuLi9ob29rcy91c2VDYXB0dXJlJ1xuaW1wb3J0IHsgdXNlT2JzZXJ2ZXIgfSBmcm9tICcuLi9ob29rcy91c2VPYnNlcnZlcidcbmltcG9ydCB1c2VWaWRlbyBmcm9tICcuLi9ob29rcy91c2VWaWRlbydcbmltcG9ydCBNTFByZWRpY3RvciBmcm9tICcuLi91dGlscy9NTFByZWRpY3RvcidcbmltcG9ydCBDYW1lcmFVcGxvZGEgZnJvbSAnLi9DYW1lcmEvQ2FtZXJhVXBsb2RhJ1xuaW1wb3J0IHNlbmRJbWFnZVRvUzMgZnJvbSAnfi9zcmMvUmVwb3NpdG9yeS9zZW5kSW1hZ2VUb1MzJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICd+L3NyYy9jb21wb25lbnRzL2Fzc2V0cy9jb21tb24ubW9kdWxlLmNzcydcbnR5cGUgUHJvcHMgPSB7XG4gIGNoZWNrRnJhbWVSYXRlOiBudW1iZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2lsZExpZmVEZXRlY3Rvcih7IGNoZWNrRnJhbWVSYXRlIH06IFByb3BzKSB7XG4gIGNvbnN0IHByZWRpY3RvciA9IG5ldyBNTFByZWRpY3RvcignbW9iaWxlJylcbiAgY29uc3QgdmlkZW9FbGVtID0gdXNlUmVmPEhUTUxWaWRlb0VsZW1lbnQ+KG51bGwpXG4gIGNvbnN0IGNhbnZhc0VsZW0gPSB1c2VSZWY8SFRNTENhbnZhc0VsZW1lbnQ+KG51bGwpXG4gIC8vIGNvbnN0IGxvY0VsZW0gPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4oKVxuICAvLyBjb25zdCBbY29va2llcywgc2V0Q29va2llXSA9IHVzZUNvb2tpZXMoWydsb2NhdGlvbiddKVxuICBjb25zdCBbaXNWaXNpYmxlLCBzZXRJc1Zpc2libGVdID0gdXNlU3RhdGUodHJ1ZSlcblxuICAvLyDjg6Ljg4vjgr/jg6rjg7PjgrDjgqLjg4Pjg5fjg63jg7zjg4nnlKhcbiAgY29uc3QgaW50ZXJ2YWxFbGVtID0gdXNlUmVmPEhUTUxTZWxlY3RFbGVtZW50PigpXG4gIGNvbnN0IFtyZXN0U2VjLCBzZXRSZXN0U2VjXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtpc1VwbG9hZGluZywgc2V0SXNVcGxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IGludGVydmFsUmVmID0gdXNlUmVmKG51bGwpXG5cbiAgY29uc3QgdmlkZW8gPSB1c2VWaWRlbyh2aWRlb0VsZW0pIC8vIOOCq+ODoeODqeeUqFxuICAvLyBjb25zdCB2aWRlbyA9IHZpZGVvRWxlbSAvLyDjg5Pjg4fjgqrnlKhcblxuICBjb25zdCB7IGNoZWNrUmVjZW50RnJhbWVzIH0gPSB1c2VPYnNlcnZlcigpXG4gIGNvbnN0IHsgbGFiZWwsIGNyZWF0ZVZhbGlkRnJhbWUgfSA9IHVzZUNhcHR1cmUocHJlZGljdG9yKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hNb2RlbCgpIHtcbiAgICAgIGF3YWl0IHByZWRpY3Rvci5mZXRjaE1vZGVsKClcbiAgICAgIHNldEludGVydmFsKGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKCF2aWRlbyB8fCAhY2FudmFzRWxlbS5jdXJyZW50IHx8IGNhbnZhc0VsZW0uY3VycmVudC5oZWlnaHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgICAgICBjb25zdCBfY2FudmFzID0gdXNlQ2FudmFzKGNhbnZhc0VsZW0sIHZpZGVvKVxuICAgICAgICBjb25zdCBuZXdGcmFtZSA9IGF3YWl0IGNyZWF0ZVZhbGlkRnJhbWUoX2NhbnZhcylcblxuICAgICAgICBjb25zdCByZXN1bHQ6IFJlc3VsdDxGcmFtZT4gPSBjaGVja1JlY2VudEZyYW1lcyhuZXdGcmFtZSlcblxuICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgICAgLy8gY29uc3Qgc2V0dGluZ3MgPSB7IGxvY2F0aW9uOiBsb2NFbGVtLmN1cnJlbnQudmFsdWUgfVxuICAgICAgICAgIGNvbnN0IHNldHRpbmdzID0geyBsb2NhdGlvbjogJycgfVxuICAgICAgICAgIC8vIHNldENvb2tpZSgnbG9jYXRpb24nLCBsb2NFbGVtLmN1cnJlbnQudmFsdWUpXG4gICAgICAgICAgc2VuZEZ1bGxEYXRhKHJlc3VsdC5zdWNjZXNzLCBzZXR0aW5ncywgX2NhbnZhcylcbiAgICAgICAgfVxuICAgICAgfSwgY2hlY2tGcmFtZVJhdGUpXG4gICAgfVxuICAgIGZldGNoTW9kZWwoKVxuICB9LCBbXSlcblxuICBjb25zdCBvblZpc2libGVDaGVja0NoYW5nZWQgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0SXNWaXNpYmxlKGV2ZW50LnRhcmdldC5jaGVja2VkKVxuICB9XG5cbiAgY29uc3Qgb25VcGxvYWRCdXR0b25QdXNoZWQgPSAoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWxTZWMgPSBOdW1iZXIoaW50ZXJ2YWxFbGVtLmN1cnJlbnQudmFsdWUpXG4gICAgbGV0IF9yZXN0U2VjID0gaW50ZXJ2YWxTZWNcbiAgICBzZXRSZXN0U2VjKF9yZXN0U2VjKVxuICAgIHNldElzVXBsb2FkaW5nKHRydWUpXG5cbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDBcbiAgICBjb25zdCBlbmQgPSBub3cgKyBpbnRlcnZhbFNlY1xuXG4gICAgaW50ZXJ2YWxSZWYuY3VycmVudCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDAgPiBlbmQgfHwgIWludGVydmFsUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgc2V0SXNVcGxvYWRpbmcoZmFsc2UpXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxSZWYuY3VycmVudClcbiAgICAgIH1cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgICAgY29uc3QgY2FudmFzID0gdXNlQ2FudmFzKGNhbnZhc0VsZW0sIHZpZGVvKVxuICAgICAgX3Jlc3RTZWMtLVxuICAgICAgc2V0UmVzdFNlYyhfcmVzdFNlYylcblxuICAgICAgY29uc3Qga2V5TmFtZSA9IGBjdXJyZW50X2ltYWdlLmpwZ2BcbiAgICAgIGNhbnZhcy50b0Jsb2IoYXN5bmMgKGJsb2IpID0+IGF3YWl0IHNlbmRJbWFnZVRvUzMoa2V5TmFtZSwgYmxvYiksICdpbWFnZS9qcGVnJylcbiAgICB9LCAxMDAwKVxuICB9XG5cbiAgY29uc3Qgb25TdG9wQnV0dG9uUHVzaGVkID0gKCkgPT4ge1xuICAgIHNldElzVXBsb2FkaW5nKGZhbHNlKVxuICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxSZWYuY3VycmVudClcbiAgICBpbnRlcnZhbFJlZi5jdXJyZW50ID0gbnVsbFxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwLTJcIj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG10LTRcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JleS03MDAgZm9udC1ib2xkXCI+5qSc5Ye644GV44KM44Gf44KC44GuOiA8L2xhYmVsPnsnICd9XG4gICAgICAgIHtsYWJlbCA/IEpTT04uc3RyaW5naWZ5KGxhYmVsKSA6ICfjgarjgZcnfVxuICAgICAgPC9wPlxuICAgICAgPHZpZGVvXG4gICAgICAgIGlkPVwidmlkZW9cIlxuICAgICAgICByZWY9e3ZpZGVvRWxlbX1cbiAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgaGVpZ2h0PVwiNTAwXCJcbiAgICAgICAgY2xhc3NOYW1lPXshaXNWaXNpYmxlICYmICdvcGFjaXR5LTAnfVxuICAgICAgICByb2xlPVwidmlkZW9cIlxuICAgICAgPjwvdmlkZW8+XG4gICAgICA8cCBjbGFzc05hbWU9XCJtdC00XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXt0cnVlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbJ2Zvcm0tY2hlY2tib3gnXX1gfVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uVmlzaWJsZUNoZWNrQ2hhbmdlZH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JleS1kYXJrZXIgdGV4dC1zbSBmb250LWJvbGQgcGwtMlwiPiDjg5Pjg4fjgqrjga7ooajnpLogPC9zcGFuPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9wPlxuICAgICAgey8qIDxwIGNsYXNzTmFtZT1cIm10LTZcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JleS1kYXJrZXIgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiPuWgtOaJgOWQjTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyYXktMjAwICB0ZXh0LWdyYXktNzAwIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcm91bmRlZCBweS0zIHB4LTRcIlxuICAgICAgICAgIHZhbHVlPXtjb29raWVzLmxvY2F0aW9ufVxuICAgICAgICAgIHJlZj17bG9jRWxlbX1cbiAgICAgICAgLz5cbiAgICAgIDwvcD4gKi99XG5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm10LThcIj5cbiAgICAgICAgPENhbWVyYVVwbG9kYVxuICAgICAgICAgIG9uVXBsb2FkQnV0dG9uUHVzaGVkPXtvblVwbG9hZEJ1dHRvblB1c2hlZH1cbiAgICAgICAgICBpbnRlcnZhbEVsZW09e2ludGVydmFsRWxlbX1cbiAgICAgICAgICBpc1VwbG9hZGluZz17aXNVcGxvYWRpbmd9XG4gICAgICAgICAgb25TdG9wQnV0dG9uUHVzaGVkPXtvblN0b3BCdXR0b25QdXNoZWR9XG4gICAgICAgIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JleS1kYXJrZXIgdGV4dC1zbSBmb250LWJvbGQgcGwtMlwiPntpc1VwbG9hZGluZyAmJiBg5q6L44KKOiAke3Jlc3RTZWN9IOenkmB9PC9zcGFuPlxuICAgICAgPC9wPlxuXG4gICAgICA8Y2FudmFzIGlkPVwiY2FudmFzXCIgcmVmPXtjYW52YXNFbGVtfSB3aWR0aD1cIjIwMHB4XCIgaGVpZ2h0PVwiMTAwJVwiIGNsYXNzTmFtZT1cImhpZGVcIiByb2xlPVwiY2FudmFzXCI+PC9jYW52YXM+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5oaWRlIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
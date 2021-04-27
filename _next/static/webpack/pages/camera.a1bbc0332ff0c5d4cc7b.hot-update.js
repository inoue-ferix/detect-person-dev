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
  var predictor = new _utils_MLPredictor__WEBPACK_IMPORTED_MODULE_9__["default"]('mobileNew'); // const videoElem = useRef<HTMLVideoElement>(null)

  var videoElem = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var canvasElem = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null); // const imageElem = useRef<HTMLImageElement>(null)
  // const locElem = useRef<HTMLInputElement>()
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

  var intervalRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null); // 分析対象をカメラ画像ならtrue
  // ビデオ動画(mp4,movなど)ならfalse

  var isUsingCamera = false;
  var video = Object(_hooks_useVideo__WEBPACK_IMPORTED_MODULE_8__["default"])(videoElem);
  if (!isUsingCamera) video = videoElem; // const video = useVideo(videoElem) // カメラ用
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
                            //※一時的に！

                            console.log('データ送信！');
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
    var keyName = "current_image.jpg";
    intervalRef.current = setInterval(_s2(function () {
      _s2();

      if (new Date().getTime() / 1000 > end || !intervalRef.current) {
        setIsUploading(false);
        clearInterval(intervalRef.current);
      } // eslint-disable-next-line react-hooks/rules-of-hooks


      var canvas = Object(_hooks_useCanvas__WEBPACK_IMPORTED_MODULE_5__["default"])(canvasElem, video);
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
      lineNumber: 107,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: "jsx-1880160421" + " " + "flex items-center mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }
  }, __jsx("label", {
    className: "jsx-1880160421" + " " + "block uppercase tracking-wide text-grey-700 font-bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }, "\u691C\u51FA\u3055\u308C\u305F\u3082\u306E: "), ' ', label ? JSON.stringify(label) : 'なし'), isUsingCamera ? __jsx("video", {
    id: "video",
    ref: videoElem,
    width: "100%",
    height: "500",
    role: "video",
    className: "jsx-1880160421" + " " + (!isVisible && 'opacity-0' || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }) : __jsx("video", {
    id: "video",
    ref: videoElem,
    width: "100%",
    height: "500",
    preload: "auto",
    src: "chrome-capture_people.webm",
    controls: true,
    autoPlay: true,
    className: "jsx-1880160421",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }), __jsx("p", {
    className: "jsx-1880160421" + " " + "mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 7
    }
  }, __jsx("label", {
    className: "jsx-1880160421" + " " + "flex items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
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
      lineNumber: 154,
      columnNumber: 11
    }
  }), __jsx("span", {
    className: "jsx-1880160421" + " " + "text-grey-darker text-sm font-bold pl-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 11
    }
  }, " \u30D3\u30C7\u30AA\u306E\u8868\u793A "))), __jsx("div", {
    className: "jsx-1880160421" + " " + "mt-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
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
      lineNumber: 173,
      columnNumber: 9
    }
  }), __jsx("span", {
    className: "jsx-1880160421" + " " + "text-grey-darker text-sm font-bold pl-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
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
      lineNumber: 181,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1880160421",
    __self: this
  }, ".hide.jsx-1880160421{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcaW5vdWVcXERlc2t0b3BcXGRldGVjdC13aWxkbGlmZS1zcmNcXHNyY1xcY29tcG9uZW50c1xcV2lsZGxpZmVEZXRlY3Rvci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUxrQixBQUd3QixhQUNmIiwiZmlsZSI6IkM6XFxVc2Vyc1xcaW5vdWVcXERlc2t0b3BcXGRldGVjdC13aWxkbGlmZS1zcmNcXHNyY1xcY29tcG9uZW50c1xcV2lsZGxpZmVEZXRlY3Rvci50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tICdyZWFjdC1jb29raWUnXG5pbXBvcnQgc2VuZEZ1bGxEYXRhIGZyb20gJy4uL1JlcG9zaXRvcnkvc2VuZEZ1bGxEYXRhJ1xuaW1wb3J0IHVzZUNhbnZhcyBmcm9tICcuLi9ob29rcy91c2VDYW52YXMnXG5pbXBvcnQgdXNlQ2FwdHVyZSBmcm9tICcuLi9ob29rcy91c2VDYXB0dXJlJ1xuaW1wb3J0IHsgdXNlT2JzZXJ2ZXIgfSBmcm9tICcuLi9ob29rcy91c2VPYnNlcnZlcidcbmltcG9ydCB1c2VWaWRlbyBmcm9tICcuLi9ob29rcy91c2VWaWRlbydcbmltcG9ydCBNTFByZWRpY3RvciBmcm9tICcuLi91dGlscy9NTFByZWRpY3RvcidcbmltcG9ydCBDYW1lcmFVcGxvZGEgZnJvbSAnLi9DYW1lcmEvQ2FtZXJhVXBsb2RhJ1xuaW1wb3J0IHNlbmRJbWFnZVRvUzMgZnJvbSAnfi9zcmMvUmVwb3NpdG9yeS9zZW5kSW1hZ2VUb1MzJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICd+L3NyYy9jb21wb25lbnRzL2Fzc2V0cy9jb21tb24ubW9kdWxlLmNzcydcblxudHlwZSBQcm9wcyA9IHtcbiAgY2hlY2tGcmFtZVJhdGU6IG51bWJlclxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaWxkTGlmZURldGVjdG9yKHsgY2hlY2tGcmFtZVJhdGUgfTogUHJvcHMpIHtcbiAgY29uc3QgcHJlZGljdG9yID0gbmV3IE1MUHJlZGljdG9yKCdtb2JpbGVOZXcnKVxuICAvLyBjb25zdCB2aWRlb0VsZW0gPSB1c2VSZWY8SFRNTFZpZGVvRWxlbWVudD4obnVsbClcbiAgY29uc3QgdmlkZW9FbGVtID0gdXNlUmVmPEhUTUxWaWRlb0VsZW1lbnQ+KG51bGwpXG4gIGNvbnN0IGNhbnZhc0VsZW0gPSB1c2VSZWY8SFRNTENhbnZhc0VsZW1lbnQ+KG51bGwpXG4gIC8vIGNvbnN0IGltYWdlRWxlbSA9IHVzZVJlZjxIVE1MSW1hZ2VFbGVtZW50PihudWxsKVxuICAvLyBjb25zdCBsb2NFbGVtID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KClcbiAgLy8gY29uc3QgW2Nvb2tpZXMsIHNldENvb2tpZV0gPSB1c2VDb29raWVzKFsnbG9jYXRpb24nXSlcbiAgY29uc3QgW2lzVmlzaWJsZSwgc2V0SXNWaXNpYmxlXSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgLy8g44Oi44OL44K/44Oq44Oz44Kw44Ki44OD44OX44Ot44O844OJ55SoXG4gIGNvbnN0IGludGVydmFsRWxlbSA9IHVzZVJlZjxIVE1MU2VsZWN0RWxlbWVudD4oKVxuICBjb25zdCBbcmVzdFNlYywgc2V0UmVzdFNlY10gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbaXNVcGxvYWRpbmcsIHNldElzVXBsb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBpbnRlcnZhbFJlZiA9IHVzZVJlZihudWxsKVxuXG4gIC8vIOWIhuaekOWvvuixoeOCkuOCq+ODoeODqeeUu+WDj+OBquOCiXRydWVcbiAgLy8g44OT44OH44Kq5YuV55S7KG1wNCxtb3bjgarjgakp44Gq44KJZmFsc2VcbiAgY29uc3QgaXNVc2luZ0NhbWVyYSA9IGZhbHNlXG5cbiAgbGV0IHZpZGVvID0gdXNlVmlkZW8odmlkZW9FbGVtKVxuICBpZiAoIWlzVXNpbmdDYW1lcmEpIHZpZGVvID0gdmlkZW9FbGVtXG5cbiAgLy8gY29uc3QgdmlkZW8gPSB1c2VWaWRlbyh2aWRlb0VsZW0pIC8vIOOCq+ODoeODqeeUqFxuICAvLyBjb25zdCB2aWRlbyA9IHZpZGVvRWxlbSAvLyDjg5Pjg4fjgqrnlKhcblxuICBjb25zdCB7IGNoZWNrUmVjZW50RnJhbWVzIH0gPSB1c2VPYnNlcnZlcigpXG4gIGNvbnN0IHsgbGFiZWwsIGNyZWF0ZVZhbGlkRnJhbWUgfSA9IHVzZUNhcHR1cmUocHJlZGljdG9yKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hNb2RlbCgpIHtcbiAgICAgIGF3YWl0IHByZWRpY3Rvci5mZXRjaE1vZGVsKClcbiAgICAgIHNldEludGVydmFsKGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKCF2aWRlbyB8fCAhY2FudmFzRWxlbS5jdXJyZW50IHx8IGNhbnZhc0VsZW0uY3VycmVudC5oZWlnaHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgICAgICBjb25zdCBfY2FudmFzID0gdXNlQ2FudmFzKGNhbnZhc0VsZW0sIHZpZGVvKVxuICAgICAgICBjb25zdCBuZXdGcmFtZSA9IGF3YWl0IGNyZWF0ZVZhbGlkRnJhbWUoX2NhbnZhcylcblxuICAgICAgICBjb25zdCByZXN1bHQ6IFJlc3VsdDxGcmFtZT4gPSBjaGVja1JlY2VudEZyYW1lcyhuZXdGcmFtZSlcblxuICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgICAgICAgLy8gY29uc3Qgc2V0dGluZ3MgPSB7IGxvY2F0aW9uOiBsb2NFbGVtLmN1cnJlbnQudmFsdWUgfVxuICAgICAgICAgIGNvbnN0IHNldHRpbmdzID0geyBsb2NhdGlvbjogJycgfVxuICAgICAgICAgIC8vIHNldENvb2tpZSgnbG9jYXRpb24nLCBsb2NFbGVtLmN1cnJlbnQudmFsdWUpXG4gICAgICAgICAgLy/igLvkuIDmmYLnmoTjgavvvIFcbiAgICAgICAgICBjb25zb2xlLmxvZygn44OH44O844K/6YCB5L+h77yBJylcbiAgICAgICAgICBzZW5kRnVsbERhdGEocmVzdWx0LnN1Y2Nlc3MsIHNldHRpbmdzLCBfY2FudmFzKVxuICAgICAgICB9XG4gICAgICB9LCBjaGVja0ZyYW1lUmF0ZSlcbiAgICB9XG4gICAgZmV0Y2hNb2RlbCgpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IG9uVmlzaWJsZUNoZWNrQ2hhbmdlZCA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBzZXRJc1Zpc2libGUoZXZlbnQudGFyZ2V0LmNoZWNrZWQpXG4gIH1cblxuICBjb25zdCBvblVwbG9hZEJ1dHRvblB1c2hlZCA9ICgpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbFNlYyA9IE51bWJlcihpbnRlcnZhbEVsZW0uY3VycmVudC52YWx1ZSlcbiAgICBsZXQgX3Jlc3RTZWMgPSBpbnRlcnZhbFNlY1xuICAgIHNldFJlc3RTZWMoX3Jlc3RTZWMpXG4gICAgc2V0SXNVcGxvYWRpbmcodHJ1ZSlcblxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMFxuICAgIGNvbnN0IGVuZCA9IG5vdyArIGludGVydmFsU2VjXG4gICAgY29uc3Qga2V5TmFtZSA9IGBjdXJyZW50X2ltYWdlLmpwZ2BcblxuICAgIGludGVydmFsUmVmLmN1cnJlbnQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwID4gZW5kIHx8ICFpbnRlcnZhbFJlZi5jdXJyZW50KSB7XG4gICAgICAgIHNldElzVXBsb2FkaW5nKGZhbHNlKVxuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsUmVmLmN1cnJlbnQpXG4gICAgICB9XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICAgIGNvbnN0IGNhbnZhcyA9IHVzZUNhbnZhcyhjYW52YXNFbGVtLCB2aWRlbylcbiAgICAgIF9yZXN0U2VjLS1cbiAgICAgIHNldFJlc3RTZWMoX3Jlc3RTZWMpXG4gICAgICBpZiAoX3Jlc3RTZWMgJSA1ICE9PSAwKSByZXR1cm5cblxuICAgICAgY2FudmFzLnRvQmxvYihhc3luYyAoYmxvYikgPT4gYXdhaXQgc2VuZEltYWdlVG9TMyhrZXlOYW1lLCBibG9iKSwgJ2ltYWdlL2pwZWcnKVxuICAgIH0sIDEwMDApXG4gIH1cblxuICBjb25zdCBvblN0b3BCdXR0b25QdXNoZWQgPSAoKSA9PiB7XG4gICAgc2V0SXNVcGxvYWRpbmcoZmFsc2UpXG4gICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbFJlZi5jdXJyZW50KVxuICAgIGludGVydmFsUmVmLmN1cnJlbnQgPSBudWxsXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMlwiPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbXQtNFwiPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmV5LTcwMCBmb250LWJvbGRcIj7mpJzlh7rjgZXjgozjgZ/jgoLjga46IDwvbGFiZWw+eycgJ31cbiAgICAgICAge2xhYmVsID8gSlNPTi5zdHJpbmdpZnkobGFiZWwpIDogJ+OBquOBlyd9XG4gICAgICA8L3A+XG4gICAgICB7Lyog44Kr44Oh44Op44G+44Gf44Gv44OT44OH44Kq44Gu5YiG5bKQ44GV44Gb44KLICovfVxuICAgICAge2lzVXNpbmdDYW1lcmEgPyAoXG4gICAgICAgIDx2aWRlb1xuICAgICAgICAgIGlkPVwidmlkZW9cIlxuICAgICAgICAgIHJlZj17dmlkZW9FbGVtfVxuICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgaGVpZ2h0PVwiNTAwXCJcbiAgICAgICAgICBjbGFzc05hbWU9eyFpc1Zpc2libGUgJiYgJ29wYWNpdHktMCd9XG4gICAgICAgICAgcm9sZT1cInZpZGVvXCJcbiAgICAgICAgPjwvdmlkZW8+XG4gICAgICApIDogKFxuICAgICAgICA8dmlkZW9cbiAgICAgICAgICBpZD1cInZpZGVvXCJcbiAgICAgICAgICByZWY9e3ZpZGVvRWxlbX1cbiAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgIGhlaWdodD1cIjUwMFwiXG4gICAgICAgICAgcHJlbG9hZD1cImF1dG9cIlxuICAgICAgICAgIHNyYz1cImNocm9tZS1jYXB0dXJlX3Blb3BsZS53ZWJtXCJcbiAgICAgICAgICBjb250cm9sc1xuICAgICAgICAgIGF1dG9QbGF5XG4gICAgICAgID48L3ZpZGVvPlxuICAgICAgKX1cbiAgICAgIHsvKiA8dmlkZW9cbiAgICAgICAgaWQ9XCJ2aWRlb1wiXG4gICAgICAgIHJlZj17dmlkZW9FbGVtfVxuICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICBoZWlnaHQ9XCI1MDBcIlxuICAgICAgICBwcmVsb2FkPVwiYXV0b1wiXG4gICAgICAgIHNyYz1cImNocm9tZS1jYXB0dXJlMS53ZWJtXCJcbiAgICAgICAgY29udHJvbHNcbiAgICAgICAgYXV0b1BsYXlcbiAgICAgID48L3ZpZGVvPiAqL31cbiAgICAgIHsvKiA8dmlkZW9cbiAgICAgICAgaWQ9XCJ2aWRlb1wiXG4gICAgICAgIHJlZj17dmlkZW9FbGVtfVxuICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICBoZWlnaHQ9XCI1MDBcIlxuICAgICAgICBjbGFzc05hbWU9eyFpc1Zpc2libGUgJiYgJ29wYWNpdHktMCd9XG4gICAgICAgIHJvbGU9XCJ2aWRlb1wiXG4gICAgICA+PC92aWRlbz4gKi99XG4gICAgICA8cCBjbGFzc05hbWU9XCJtdC00XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXt0cnVlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXNbJ2Zvcm0tY2hlY2tib3gnXX1gfVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uVmlzaWJsZUNoZWNrQ2hhbmdlZH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JleS1kYXJrZXIgdGV4dC1zbSBmb250LWJvbGQgcGwtMlwiPiDjg5Pjg4fjgqrjga7ooajnpLogPC9zcGFuPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9wPlxuICAgICAgey8qIDxwIGNsYXNzTmFtZT1cIm10LTZcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JleS1kYXJrZXIgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiPuWgtOaJgOWQjTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyYXktMjAwICB0ZXh0LWdyYXktNzAwIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcm91bmRlZCBweS0zIHB4LTRcIlxuICAgICAgICAgIHZhbHVlPXtjb29raWVzLmxvY2F0aW9ufVxuICAgICAgICAgIHJlZj17bG9jRWxlbX1cbiAgICAgICAgLz5cbiAgICAgIDwvcD4gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LThcIj5cbiAgICAgICAgPENhbWVyYVVwbG9kYVxuICAgICAgICAgIG9uVXBsb2FkQnV0dG9uUHVzaGVkPXtvblVwbG9hZEJ1dHRvblB1c2hlZH1cbiAgICAgICAgICBpbnRlcnZhbEVsZW09e2ludGVydmFsRWxlbX1cbiAgICAgICAgICBpc1VwbG9hZGluZz17aXNVcGxvYWRpbmd9XG4gICAgICAgICAgb25TdG9wQnV0dG9uUHVzaGVkPXtvblN0b3BCdXR0b25QdXNoZWR9XG4gICAgICAgIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JleS1kYXJrZXIgdGV4dC1zbSBmb250LWJvbGQgcGwtMlwiPntpc1VwbG9hZGluZyAmJiBg5q6L44KKOiAke3Jlc3RTZWN9IOenkmB9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8Y2FudmFzIGlkPVwiY2FudmFzXCIgcmVmPXtjYW52YXNFbGVtfSB3aWR0aD1cIjIwMHB4XCIgaGVpZ2h0PVwiMTAwJVwiIGNsYXNzTmFtZT1cImhpZGVcIiByb2xlPVwiY2FudmFzXCI+PC9jYW52YXM+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5oaWRlIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\inoue\\\\Desktop\\\\detect-wildlife-src\\\\src\\\\components\\\\WildlifeDetector.tsx */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvV2lsZGxpZmVEZXRlY3Rvci50c3giXSwibmFtZXMiOlsiV2lsZExpZmVEZXRlY3RvciIsImNoZWNrRnJhbWVSYXRlIiwicHJlZGljdG9yIiwiTUxQcmVkaWN0b3IiLCJ2aWRlb0VsZW0iLCJ1c2VSZWYiLCJjYW52YXNFbGVtIiwidXNlU3RhdGUiLCJpc1Zpc2libGUiLCJzZXRJc1Zpc2libGUiLCJpbnRlcnZhbEVsZW0iLCJyZXN0U2VjIiwic2V0UmVzdFNlYyIsImlzVXBsb2FkaW5nIiwic2V0SXNVcGxvYWRpbmciLCJpbnRlcnZhbFJlZiIsImlzVXNpbmdDYW1lcmEiLCJ2aWRlbyIsInVzZVZpZGVvIiwidXNlT2JzZXJ2ZXIiLCJjaGVja1JlY2VudEZyYW1lcyIsInVzZUNhcHR1cmUiLCJsYWJlbCIsImNyZWF0ZVZhbGlkRnJhbWUiLCJ1c2VFZmZlY3QiLCJmZXRjaE1vZGVsIiwic2V0SW50ZXJ2YWwiLCJjdXJyZW50IiwiaGVpZ2h0IiwidW5kZWZpbmVkIiwiX2NhbnZhcyIsInVzZUNhbnZhcyIsIm5ld0ZyYW1lIiwicmVzdWx0Iiwic3VjY2VzcyIsInNldHRpbmdzIiwibG9jYXRpb24iLCJjb25zb2xlIiwibG9nIiwic2VuZEZ1bGxEYXRhIiwib25WaXNpYmxlQ2hlY2tDaGFuZ2VkIiwiZXZlbnQiLCJ0YXJnZXQiLCJjaGVja2VkIiwib25VcGxvYWRCdXR0b25QdXNoZWQiLCJpbnRlcnZhbFNlYyIsIk51bWJlciIsInZhbHVlIiwiX3Jlc3RTZWMiLCJub3ciLCJEYXRlIiwiZ2V0VGltZSIsImVuZCIsImtleU5hbWUiLCJjbGVhckludGVydmFsIiwiY2FudmFzIiwidG9CbG9iIiwiYmxvYiIsInNlbmRJbWFnZVRvUzMiLCJvblN0b3BCdXR0b25QdXNoZWQiLCJKU09OIiwic3RyaW5naWZ5Iiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTFFRjtBQUFBO0FBQUE7QUFBQSwyaFNBREY7QUFtRkQ7O0lBNUt1Qk4sZ0I7VUFvQlZrQix1RCxFQU1rQkMsOEQsRUFDTUUseUQ7OztLQTNCZHJCLGdCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhbWVyYS5hMWJiYzAzMzJmZjBjNWQ0Y2M3Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG4vLyBpbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSAncmVhY3QtY29va2llJ1xuaW1wb3J0IHNlbmRGdWxsRGF0YSBmcm9tICcuLi9SZXBvc2l0b3J5L3NlbmRGdWxsRGF0YSdcbmltcG9ydCB1c2VDYW52YXMgZnJvbSAnLi4vaG9va3MvdXNlQ2FudmFzJ1xuaW1wb3J0IHVzZUNhcHR1cmUgZnJvbSAnLi4vaG9va3MvdXNlQ2FwdHVyZSdcbmltcG9ydCB7IHVzZU9ic2VydmVyIH0gZnJvbSAnLi4vaG9va3MvdXNlT2JzZXJ2ZXInXG5pbXBvcnQgdXNlVmlkZW8gZnJvbSAnLi4vaG9va3MvdXNlVmlkZW8nXG5pbXBvcnQgTUxQcmVkaWN0b3IgZnJvbSAnLi4vdXRpbHMvTUxQcmVkaWN0b3InXG5pbXBvcnQgQ2FtZXJhVXBsb2RhIGZyb20gJy4vQ2FtZXJhL0NhbWVyYVVwbG9kYSdcbmltcG9ydCBzZW5kSW1hZ2VUb1MzIGZyb20gJ34vc3JjL1JlcG9zaXRvcnkvc2VuZEltYWdlVG9TMydcbmltcG9ydCBzdHlsZXMgZnJvbSAnfi9zcmMvY29tcG9uZW50cy9hc3NldHMvY29tbW9uLm1vZHVsZS5jc3MnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNoZWNrRnJhbWVSYXRlOiBudW1iZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2lsZExpZmVEZXRlY3Rvcih7IGNoZWNrRnJhbWVSYXRlIH06IFByb3BzKSB7XG4gIGNvbnN0IHByZWRpY3RvciA9IG5ldyBNTFByZWRpY3RvcignbW9iaWxlTmV3JylcbiAgLy8gY29uc3QgdmlkZW9FbGVtID0gdXNlUmVmPEhUTUxWaWRlb0VsZW1lbnQ+KG51bGwpXG4gIGNvbnN0IHZpZGVvRWxlbSA9IHVzZVJlZjxIVE1MVmlkZW9FbGVtZW50PihudWxsKVxuICBjb25zdCBjYW52YXNFbGVtID0gdXNlUmVmPEhUTUxDYW52YXNFbGVtZW50PihudWxsKVxuICAvLyBjb25zdCBpbWFnZUVsZW0gPSB1c2VSZWY8SFRNTEltYWdlRWxlbWVudD4obnVsbClcbiAgLy8gY29uc3QgbG9jRWxlbSA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PigpXG4gIC8vIGNvbnN0IFtjb29raWVzLCBzZXRDb29raWVdID0gdXNlQ29va2llcyhbJ2xvY2F0aW9uJ10pXG4gIGNvbnN0IFtpc1Zpc2libGUsIHNldElzVmlzaWJsZV0gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gIC8vIOODouODi+OCv+ODquODs+OCsOOCouODg+ODl+ODreODvOODieeUqFxuICBjb25zdCBpbnRlcnZhbEVsZW0gPSB1c2VSZWY8SFRNTFNlbGVjdEVsZW1lbnQ+KClcbiAgY29uc3QgW3Jlc3RTZWMsIHNldFJlc3RTZWNdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW2lzVXBsb2FkaW5nLCBzZXRJc1VwbG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgaW50ZXJ2YWxSZWYgPSB1c2VSZWYobnVsbClcblxuICAvLyDliIbmnpDlr77osaHjgpLjgqvjg6Hjg6nnlLvlg4/jgarjgol0cnVlXG4gIC8vIOODk+ODh+OCquWLleeUuyhtcDQsbW9244Gq44GpKeOBquOCiWZhbHNlXG4gIGNvbnN0IGlzVXNpbmdDYW1lcmEgPSBmYWxzZVxuXG4gIGxldCB2aWRlbyA9IHVzZVZpZGVvKHZpZGVvRWxlbSlcbiAgaWYgKCFpc1VzaW5nQ2FtZXJhKSB2aWRlbyA9IHZpZGVvRWxlbVxuXG4gIC8vIGNvbnN0IHZpZGVvID0gdXNlVmlkZW8odmlkZW9FbGVtKSAvLyDjgqvjg6Hjg6nnlKhcbiAgLy8gY29uc3QgdmlkZW8gPSB2aWRlb0VsZW0gLy8g44OT44OH44Kq55SoXG5cbiAgY29uc3QgeyBjaGVja1JlY2VudEZyYW1lcyB9ID0gdXNlT2JzZXJ2ZXIoKVxuICBjb25zdCB7IGxhYmVsLCBjcmVhdGVWYWxpZEZyYW1lIH0gPSB1c2VDYXB0dXJlKHByZWRpY3RvcilcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoTW9kZWwoKSB7XG4gICAgICBhd2FpdCBwcmVkaWN0b3IuZmV0Y2hNb2RlbCgpXG4gICAgICBzZXRJbnRlcnZhbChhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmICghdmlkZW8gfHwgIWNhbnZhc0VsZW0uY3VycmVudCB8fCBjYW52YXNFbGVtLmN1cnJlbnQuaGVpZ2h0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICAgICAgY29uc3QgX2NhbnZhcyA9IHVzZUNhbnZhcyhjYW52YXNFbGVtLCB2aWRlbylcbiAgICAgICAgY29uc3QgbmV3RnJhbWUgPSBhd2FpdCBjcmVhdGVWYWxpZEZyYW1lKF9jYW52YXMpXG5cbiAgICAgICAgY29uc3QgcmVzdWx0OiBSZXN1bHQ8RnJhbWU+ID0gY2hlY2tSZWNlbnRGcmFtZXMobmV3RnJhbWUpXG5cbiAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuc3VjY2Vzcykge1xuICAgICAgICAgIC8vIGNvbnN0IHNldHRpbmdzID0geyBsb2NhdGlvbjogbG9jRWxlbS5jdXJyZW50LnZhbHVlIH1cbiAgICAgICAgICBjb25zdCBzZXR0aW5ncyA9IHsgbG9jYXRpb246ICcnIH1cbiAgICAgICAgICAvLyBzZXRDb29raWUoJ2xvY2F0aW9uJywgbG9jRWxlbS5jdXJyZW50LnZhbHVlKVxuICAgICAgICAgIC8v4oC75LiA5pmC55qE44Gr77yBXG4gICAgICAgICAgY29uc29sZS5sb2coJ+ODh+ODvOOCv+mAgeS/oe+8gScpXG4gICAgICAgICAgc2VuZEZ1bGxEYXRhKHJlc3VsdC5zdWNjZXNzLCBzZXR0aW5ncywgX2NhbnZhcylcbiAgICAgICAgfVxuICAgICAgfSwgY2hlY2tGcmFtZVJhdGUpXG4gICAgfVxuICAgIGZldGNoTW9kZWwoKVxuICB9LCBbXSlcblxuICBjb25zdCBvblZpc2libGVDaGVja0NoYW5nZWQgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0SXNWaXNpYmxlKGV2ZW50LnRhcmdldC5jaGVja2VkKVxuICB9XG5cbiAgY29uc3Qgb25VcGxvYWRCdXR0b25QdXNoZWQgPSAoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWxTZWMgPSBOdW1iZXIoaW50ZXJ2YWxFbGVtLmN1cnJlbnQudmFsdWUpXG4gICAgbGV0IF9yZXN0U2VjID0gaW50ZXJ2YWxTZWNcbiAgICBzZXRSZXN0U2VjKF9yZXN0U2VjKVxuICAgIHNldElzVXBsb2FkaW5nKHRydWUpXG5cbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDBcbiAgICBjb25zdCBlbmQgPSBub3cgKyBpbnRlcnZhbFNlY1xuICAgIGNvbnN0IGtleU5hbWUgPSBgY3VycmVudF9pbWFnZS5qcGdgXG5cbiAgICBpbnRlcnZhbFJlZi5jdXJyZW50ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCA+IGVuZCB8fCAhaW50ZXJ2YWxSZWYuY3VycmVudCkge1xuICAgICAgICBzZXRJc1VwbG9hZGluZyhmYWxzZSlcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbFJlZi5jdXJyZW50KVxuICAgICAgfVxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgICBjb25zdCBjYW52YXMgPSB1c2VDYW52YXMoY2FudmFzRWxlbSwgdmlkZW8pXG4gICAgICBfcmVzdFNlYy0tXG4gICAgICBzZXRSZXN0U2VjKF9yZXN0U2VjKVxuICAgICAgaWYgKF9yZXN0U2VjICUgNSAhPT0gMCkgcmV0dXJuXG5cbiAgICAgIGNhbnZhcy50b0Jsb2IoYXN5bmMgKGJsb2IpID0+IGF3YWl0IHNlbmRJbWFnZVRvUzMoa2V5TmFtZSwgYmxvYiksICdpbWFnZS9qcGVnJylcbiAgICB9LCAxMDAwKVxuICB9XG5cbiAgY29uc3Qgb25TdG9wQnV0dG9uUHVzaGVkID0gKCkgPT4ge1xuICAgIHNldElzVXBsb2FkaW5nKGZhbHNlKVxuICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxSZWYuY3VycmVudClcbiAgICBpbnRlcnZhbFJlZi5jdXJyZW50ID0gbnVsbFxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwLTJcIj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG10LTRcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JleS03MDAgZm9udC1ib2xkXCI+5qSc5Ye644GV44KM44Gf44KC44GuOiA8L2xhYmVsPnsnICd9XG4gICAgICAgIHtsYWJlbCA/IEpTT04uc3RyaW5naWZ5KGxhYmVsKSA6ICfjgarjgZcnfVxuICAgICAgPC9wPlxuICAgICAgey8qIOOCq+ODoeODqeOBvuOBn+OBr+ODk+ODh+OCquOBruWIhuWykOOBleOBm+OCiyAqL31cbiAgICAgIHtpc1VzaW5nQ2FtZXJhID8gKFxuICAgICAgICA8dmlkZW9cbiAgICAgICAgICBpZD1cInZpZGVvXCJcbiAgICAgICAgICByZWY9e3ZpZGVvRWxlbX1cbiAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgIGhlaWdodD1cIjUwMFwiXG4gICAgICAgICAgY2xhc3NOYW1lPXshaXNWaXNpYmxlICYmICdvcGFjaXR5LTAnfVxuICAgICAgICAgIHJvbGU9XCJ2aWRlb1wiXG4gICAgICAgID48L3ZpZGVvPlxuICAgICAgKSA6IChcbiAgICAgICAgPHZpZGVvXG4gICAgICAgICAgaWQ9XCJ2aWRlb1wiXG4gICAgICAgICAgcmVmPXt2aWRlb0VsZW19XG4gICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICBoZWlnaHQ9XCI1MDBcIlxuICAgICAgICAgIHByZWxvYWQ9XCJhdXRvXCJcbiAgICAgICAgICBzcmM9XCJjaHJvbWUtY2FwdHVyZV9wZW9wbGUud2VibVwiXG4gICAgICAgICAgY29udHJvbHNcbiAgICAgICAgICBhdXRvUGxheVxuICAgICAgICA+PC92aWRlbz5cbiAgICAgICl9XG4gICAgICB7LyogPHZpZGVvXG4gICAgICAgIGlkPVwidmlkZW9cIlxuICAgICAgICByZWY9e3ZpZGVvRWxlbX1cbiAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgaGVpZ2h0PVwiNTAwXCJcbiAgICAgICAgcHJlbG9hZD1cImF1dG9cIlxuICAgICAgICBzcmM9XCJjaHJvbWUtY2FwdHVyZTEud2VibVwiXG4gICAgICAgIGNvbnRyb2xzXG4gICAgICAgIGF1dG9QbGF5XG4gICAgICA+PC92aWRlbz4gKi99XG4gICAgICB7LyogPHZpZGVvXG4gICAgICAgIGlkPVwidmlkZW9cIlxuICAgICAgICByZWY9e3ZpZGVvRWxlbX1cbiAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgaGVpZ2h0PVwiNTAwXCJcbiAgICAgICAgY2xhc3NOYW1lPXshaXNWaXNpYmxlICYmICdvcGFjaXR5LTAnfVxuICAgICAgICByb2xlPVwidmlkZW9cIlxuICAgICAgPjwvdmlkZW8+ICovfVxuICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNFwiPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17dHJ1ZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzWydmb3JtLWNoZWNrYm94J119YH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvblZpc2libGVDaGVja0NoYW5nZWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyZXktZGFya2VyIHRleHQtc20gZm9udC1ib2xkIHBsLTJcIj4g44OT44OH44Kq44Gu6KGo56S6IDwvc3Bhbj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvcD5cbiAgICAgIHsvKiA8cCBjbGFzc05hbWU9XCJtdC02XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyZXktZGFya2VyIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIj7loLTmiYDlkI08L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ncmF5LTIwMCAgdGV4dC1ncmF5LTcwMCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQgcHktMyBweC00XCJcbiAgICAgICAgICB2YWx1ZT17Y29va2llcy5sb2NhdGlvbn1cbiAgICAgICAgICByZWY9e2xvY0VsZW19XG4gICAgICAgIC8+XG4gICAgICA8L3A+ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04XCI+XG4gICAgICAgIDxDYW1lcmFVcGxvZGFcbiAgICAgICAgICBvblVwbG9hZEJ1dHRvblB1c2hlZD17b25VcGxvYWRCdXR0b25QdXNoZWR9XG4gICAgICAgICAgaW50ZXJ2YWxFbGVtPXtpbnRlcnZhbEVsZW19XG4gICAgICAgICAgaXNVcGxvYWRpbmc9e2lzVXBsb2FkaW5nfVxuICAgICAgICAgIG9uU3RvcEJ1dHRvblB1c2hlZD17b25TdG9wQnV0dG9uUHVzaGVkfVxuICAgICAgICAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyZXktZGFya2VyIHRleHQtc20gZm9udC1ib2xkIHBsLTJcIj57aXNVcGxvYWRpbmcgJiYgYOaui+OCijogJHtyZXN0U2VjfSDnp5JgfTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGNhbnZhcyBpZD1cImNhbnZhc1wiIHJlZj17Y2FudmFzRWxlbX0gd2lkdGg9XCIyMDBweFwiIGhlaWdodD1cIjEwMCVcIiBjbGFzc05hbWU9XCJoaWRlXCIgcm9sZT1cImNhbnZhc1wiPjwvY2FudmFzPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuaGlkZSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9
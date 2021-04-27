webpackHotUpdate_N_E("pages/camera",{

/***/ "./src/utils/ssdMoblie.js":
/*!********************************!*\
  !*** ./src/utils/ssdMoblie.js ***!
  \********************************/
/*! exports provided: loadModel, detect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadModel", function() { return loadModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detect", function() { return detect; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _tensorflow_tfjs_converter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tensorflow/tfjs-converter */ "./node_modules/@tensorflow/tfjs-converter/dist/index.js");
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tensorflow/tfjs-core */ "./node_modules/@tensorflow/tfjs-core/dist/index.js");


// import * as tf from '@tensorflow/tfjs'

 // tf.setBackend('cpu')
// tf.setBackend('webgl')

function loadModel() {
  return _loadModel.apply(this, arguments);
}

function _loadModel() {
  _loadModel = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    var model;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Object(_tensorflow_tfjs_converter__WEBPACK_IMPORTED_MODULE_2__["loadGraphModel"])('/my_detector_10000/model.json');

          case 2:
            model = _context2.sent;
            return _context2.abrupt("return", model);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _loadModel.apply(this, arguments);
}

var threshold = 0.5;
var classesDir = {
  1: {
    name: 'monkey',
    id: 1
  },
  2: {
    name: 'deer',
    id: 2
  },
  3: {
    name: 'antelope',
    id: 3
  },
  4: {
    name: 'Other',
    id: 4
  }
}; // const classesDir = {
//   1: {
//     name: 'Kangaroo',
//     id: 1,
//   },
//   2: {
//     name: 'Other',
//     id: 2,
//   },
// }

var detect = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(model, elem) {
    var predictions, predictionsTmp;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_3__["setBackend"]('webgl');
            _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_3__["engine"]().startScope(); // requestAnimationFrame(() => {
            //   this.detectFrame(video, model);
            // });
            //   tf.engine().endScope()
            //   tf.dispose()
            //   console.table(tf.memory())
            //   const batched = tf.tidy(() => {
            //     return
            //   })

            _context.prev = 2;
            console.table(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_3__["memory"]());
            _context.next = 6;
            return model.executeAsync(processInput(elem));

          case 6:
            predictionsTmp = _context.sent;
            predictions = renderPredictions(predictionsTmp);

          case 8:
            _context.prev = 8;
            _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_3__["engine"]().endScope();
            return _context.finish(8);

          case 11:
            return _context.abrupt("return", predictions);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2,, 8, 11]]);
  }));

  return function detect(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var processInput = function processInput(elem) {
  var tfimg = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_3__["browser"].fromPixels(elem).toInt();
  var expandedimg = tfimg.transpose([0, 1, 2]).expandDims();
  return expandedimg;
};

var renderPredictions = function renderPredictions(predictions) {
  //   const ctx = this.canvasRef.current.getContext('2d')
  //   ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  // Font options.
  //   const font = '16px sans-serif'
  //   ctx.font = font
  //   ctx.textBaseline = 'top'
  //Getting predictions
  var boxes = predictions[6].arraySync();
  var scores = predictions[5].arraySync();
  var classes = predictions[3].dataSync();
  console.log(boxes);
  console.log(scores);
  console.log(classes);
  var detections = buildDetectedObjects(scores, threshold, boxes, classes, classesDir);
  return detections; //   detections.forEach((item) => {
  //     const x = item.bbox[0]
  //     const y = item.bbox[1]
  //     const width = item.bbox[2]
  //     const height = item.bbox[3]
  //     // Draw the bounding box.
  //     ctx.strokeStyle = '#00FFFF'
  //     ctx.lineWidth = 4
  //     ctx.strokeRect(x, y, width, height)
  //     // Draw the label background.
  //     ctx.fillStyle = '#00FFFF'
  //     const textWidth = ctx.measureText(item.label + ' ' + (100 * item.score).toFixed(2) + '%').width
  //     const textHeight = parseInt(font, 10) // base 10
  //     ctx.fillRect(x, y, textWidth + 4, textHeight + 4)
  //   })
  //   detections.forEach((item) => {
  //     // const x = item.bbox[0]
  //     // const y = item.bbox[1]
  //     // Draw the text last to ensure it's on top.
  //     // ctx.fillStyle = '#000000'
  //     // ctx.fillText(item.label + ' ' + (100 * item.score).toFixed(2) + '%', x, y)
  //   })
};

var buildDetectedObjects = function buildDetectedObjects(scores, threshold, boxes, classes, classesDir) {
  var detectionObjects = []; //   const video_frame = document.getElementById('frame')

  scores[0].forEach(function (score, i) {
    if (score > threshold) {
      var bbox = []; //   const minY = boxes[0][i][0] * video_frame.offsetHeight
      //   const minX = boxes[0][i][1] * video_frame.offsetWidth
      //   const maxY = boxes[0][i][2] * video_frame.offsetHeight
      //   const maxX = boxes[0][i][3] * video_frame.offsetWidth
      //   bbox[0] = minX
      //   bbox[1] = minY
      //   bbox[2] = maxX - minX
      //   bbox[3] = maxY - minY

      detectionObjects.push({
        classNo: classes[i],
        className: classesDir[classes[i]].name,
        score: score.toFixed(4),
        bbox: bbox
      });
    }
  });
  console.log(detectionObjects);
  return detectionObjects;
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL3NzZE1vYmxpZS5qcyJdLCJuYW1lcyI6WyJsb2FkTW9kZWwiLCJsb2FkR3JhcGhNb2RlbCIsIm1vZGVsIiwidGhyZXNob2xkIiwiY2xhc3Nlc0RpciIsIm5hbWUiLCJpZCIsImRldGVjdCIsImVsZW0iLCJ0ZiIsInN0YXJ0U2NvcGUiLCJjb25zb2xlIiwidGFibGUiLCJleGVjdXRlQXN5bmMiLCJwcm9jZXNzSW5wdXQiLCJwcmVkaWN0aW9uc1RtcCIsInByZWRpY3Rpb25zIiwicmVuZGVyUHJlZGljdGlvbnMiLCJlbmRTY29wZSIsInRmaW1nIiwiZnJvbVBpeGVscyIsInRvSW50IiwiZXhwYW5kZWRpbWciLCJ0cmFuc3Bvc2UiLCJleHBhbmREaW1zIiwiYm94ZXMiLCJhcnJheVN5bmMiLCJzY29yZXMiLCJjbGFzc2VzIiwiZGF0YVN5bmMiLCJsb2ciLCJkZXRlY3Rpb25zIiwiYnVpbGREZXRlY3RlZE9iamVjdHMiLCJkZXRlY3Rpb25PYmplY3RzIiwiZm9yRWFjaCIsInNjb3JlIiwiaSIsImJib3giLCJwdXNoIiwiY2xhc3NObyIsImNsYXNzTmFtZSIsInRvRml4ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBO0FBQ0E7O0FBQ08sU0FBZUEsU0FBdEI7QUFBQTtBQUFBOzs7Z01BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFHZUMsaUZBQWMsQ0FBQywrQkFBRCxDQUg3Qjs7QUFBQTtBQUdDQyxpQkFIRDtBQUFBLDhDQVFFQSxLQVJGOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFVUCxJQUFNQyxTQUFTLEdBQUcsR0FBbEI7QUFDQSxJQUFNQyxVQUFVLEdBQUc7QUFDakIsS0FBRztBQUNEQyxRQUFJLEVBQUUsUUFETDtBQUVEQyxNQUFFLEVBQUU7QUFGSCxHQURjO0FBS2pCLEtBQUc7QUFDREQsUUFBSSxF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QUFDOUIsUUFBSUQsS0FBSyxHQUFHaEMsU0FBWixFQUF1QjtBQUNyQixVQUFNa0MsSUFBSSxHQUFHLEVBQWIsQ0FEcUIsQ0FFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQUosc0JBQWdCLENBQUNLLElBQWpCLENBQXNCO0FBQ3BCQyxlQUFPLEVBQUVYLE9BQU8sQ0FBQ1EsQ0FBRCxDQURJO0FBRXBCSSxpQkFBUyxFQUFFcEMsVUFBVSxDQUFDd0IsT0FBTyxDQUFDUSxDQUFELENBQVIsQ0FBVixDQUF1Qi9CLElBRmQ7QUFHcEI4QixhQUFLLEVBQUVBLEtBQUssQ0FBQ00sT0FBTixDQUFjLENBQWQsQ0FIYTtBQUlwQkosWUFBSSxFQUFFQTtBQUpjLE9BQXRCO0FBTUQ7QUFDRixHQWxCRDtBQW1CQTFCLFNBQU8sQ0FBQ21CLEdBQVIsQ0FBWUcsZ0JBQVo7QUFDQSxTQUFPQSxnQkFBUDtBQUNELENBekJEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhbWVyYS43YzBhYjQ3YjkyNTBmOWFlNGM3NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICogYXMgdGYgZnJvbSAnQHRlbnNvcmZsb3cvdGZqcydcbmltcG9ydCB7IGxvYWRHcmFwaE1vZGVsIH0gZnJvbSAnQHRlbnNvcmZsb3cvdGZqcy1jb252ZXJ0ZXInXG5pbXBvcnQgKiBhcyB0ZiBmcm9tICdAdGVuc29yZmxvdy90ZmpzLWNvcmUnXG4vLyB0Zi5zZXRCYWNrZW5kKCdjcHUnKVxuLy8gdGYuc2V0QmFja2VuZCgnd2ViZ2wnKVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRNb2RlbCgpIHtcbiAgLy8gSXQncyBwb3NzaWJsZSB0byBsb2FkIHRoZSBtb2RlbCBsb2NhbGx5IG9yIGZyb20gYSByZXBvXG4gIC8vIFlvdSBjYW4gY2hvb3NlIHdoYXRldmVyIElQIGFuZCBQT1JUIHlvdSB3YW50IGluIHRoZSBcImh0dHA6Ly8xMjcuMC4wLjE6ODA4MC9tb2RlbC5qc29uXCIganVzdCBzZXQgaXQgYmVmb3JlIGluIHlvdXIgaHR0cHMgc2VydmVyXG4gIGNvbnN0IG1vZGVsID0gYXdhaXQgbG9hZEdyYXBoTW9kZWwoJy9teV9kZXRlY3Rvcl8xMDAwMC9tb2RlbC5qc29uJylcbiAgLy8gY29uc3QgbW9kZWwgPSBhd2FpdCBsb2FkR3JhcGhNb2RlbCgnaHR0cDovLzEyNy4wLjAuMTo4MDgwL21vZGVsLmpzb24nKVxuICAvLyBjb25zdCBtb2RlbCA9IGF3YWl0IGxvYWRHcmFwaE1vZGVsKFxuICAvLyAgICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vaHVnb3phbmluaS9URkpTLW9iamVjdC1kZXRlY3Rpb24vbWFzdGVyL21vZGVscy9rYW5nYXJvby1kZXRlY3Rvci9tb2RlbC5qc29uJ1xuICAvLyApXG4gIHJldHVybiBtb2RlbFxufVxuY29uc3QgdGhyZXNob2xkID0gMC41XG5jb25zdCBjbGFzc2VzRGlyID0ge1xuICAxOiB7XG4gICAgbmFtZTogJ21vbmtleScsXG4gICAgaWQ6IDEsXG4gIH0sXG4gIDI6IHtcbiAgICBuYW1lOiAnZGVlcicsXG4gICAgaWQ6IDIsXG4gIH0sXG4gIDM6IHtcbiAgICBuYW1lOiAnYW50ZWxvcGUnLFxuICAgIGlkOiAzLFxuICB9LFxuICA0OiB7XG4gICAgbmFtZTogJ090aGVyJyxcbiAgICBpZDogNCxcbiAgfSxcbn1cbi8vIGNvbnN0IGNsYXNzZXNEaXIgPSB7XG4vLyAgIDE6IHtcbi8vICAgICBuYW1lOiAnS2FuZ2Fyb28nLFxuLy8gICAgIGlkOiAxLFxuLy8gICB9LFxuLy8gICAyOiB7XG4vLyAgICAgbmFtZTogJ090aGVyJyxcbi8vICAgICBpZDogMixcbi8vICAgfSxcbi8vIH1cblxuZXhwb3J0IGNvbnN0IGRldGVjdCA9IGFzeW5jIChtb2RlbCwgZWxlbSkgPT4ge1xuICB0Zi5zZXRCYWNrZW5kKCd3ZWJnbCcpXG4gIHRmLmVuZ2luZSgpLnN0YXJ0U2NvcGUoKVxuICAvLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAvLyAgIHRoaXMuZGV0ZWN0RnJhbWUodmlkZW8sIG1vZGVsKTtcbiAgLy8gfSk7XG5cbiAgLy8gICB0Zi5lbmdpbmUoKS5lbmRTY29wZSgpXG4gIC8vICAgdGYuZGlzcG9zZSgpXG4gIC8vICAgY29uc29sZS50YWJsZSh0Zi5tZW1vcnkoKSlcbiAgLy8gICBjb25zdCBiYXRjaGVkID0gdGYudGlkeSgoKSA9PiB7XG4gIC8vICAgICByZXR1cm5cbiAgLy8gICB9KVxuICBsZXQgcHJlZGljdGlvbnNcbiAgdHJ5IHtcbiAgICBjb25zb2xlLnRhYmxlKHRmLm1lbW9yeSgpKVxuICAgIGNvbnN0IHByZWRpY3Rpb25zVG1wID0gYXdhaXQgbW9kZWwuZXhlY3V0ZUFzeW5jKHByb2Nlc3NJbnB1dChlbGVtKSlcbiAgICBwcmVkaWN0aW9ucyA9IHJlbmRlclByZWRpY3Rpb25zKHByZWRpY3Rpb25zVG1wKVxuICB9IGZpbmFsbHkge1xuICAgIHRmLmVuZ2luZSgpLmVuZFNjb3BlKClcbiAgfVxuICByZXR1cm4gcHJlZGljdGlvbnNcbn1cblxuY29uc3QgcHJvY2Vzc0lucHV0ID0gKGVsZW0pID0+IHtcbiAgY29uc3QgdGZpbWcgPSB0Zi5icm93c2VyLmZyb21QaXhlbHMoZWxlbSkudG9JbnQoKVxuICBjb25zdCBleHBhbmRlZGltZyA9IHRmaW1nLnRyYW5zcG9zZShbMCwgMSwgMl0pLmV4cGFuZERpbXMoKVxuICByZXR1cm4gZXhwYW5kZWRpbWdcbn1cblxuY29uc3QgcmVuZGVyUHJlZGljdGlvbnMgPSAocHJlZGljdGlvbnMpID0+IHtcbiAgLy8gICBjb25zdCBjdHggPSB0aGlzLmNhbnZhc1JlZi5jdXJyZW50LmdldENvbnRleHQoJzJkJylcbiAgLy8gICBjdHguY2xlYXJSZWN0KDAsIDAsIGN0eC5jYW52YXMud2lkdGgsIGN0eC5jYW52YXMuaGVpZ2h0KVxuXG4gIC8vIEZvbnQgb3B0aW9ucy5cbiAgLy8gICBjb25zdCBmb250ID0gJzE2cHggc2Fucy1zZXJpZidcbiAgLy8gICBjdHguZm9udCA9IGZvbnRcbiAgLy8gICBjdHgudGV4dEJhc2VsaW5lID0gJ3RvcCdcblxuICAvL0dldHRpbmcgcHJlZGljdGlvbnNcblxuICBjb25zdCBib3hlcyA9IHByZWRpY3Rpb25zWzZdLmFycmF5U3luYygpXG4gIGNvbnN0IHNjb3JlcyA9IHByZWRpY3Rpb25zWzVdLmFycmF5U3luYygpXG4gIGNvbnN0IGNsYXNzZXMgPSBwcmVkaWN0aW9uc1szXS5kYXRhU3luYygpXG4gIGNvbnNvbGUubG9nKGJveGVzKVxuICBjb25zb2xlLmxvZyhzY29yZXMpXG4gIGNvbnNvbGUubG9nKGNsYXNzZXMpXG4gIGNvbnN0IGRldGVjdGlvbnMgPSBidWlsZERldGVjdGVkT2JqZWN0cyhzY29yZXMsIHRocmVzaG9sZCwgYm94ZXMsIGNsYXNzZXMsIGNsYXNzZXNEaXIpXG5cbiAgcmV0dXJuIGRldGVjdGlvbnNcbiAgLy8gICBkZXRlY3Rpb25zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgLy8gICAgIGNvbnN0IHggPSBpdGVtLmJib3hbMF1cbiAgLy8gICAgIGNvbnN0IHkgPSBpdGVtLmJib3hbMV1cbiAgLy8gICAgIGNvbnN0IHdpZHRoID0gaXRlbS5iYm94WzJdXG4gIC8vICAgICBjb25zdCBoZWlnaHQgPSBpdGVtLmJib3hbM11cblxuICAvLyAgICAgLy8gRHJhdyB0aGUgYm91bmRpbmcgYm94LlxuICAvLyAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyMwMEZGRkYnXG4gIC8vICAgICBjdHgubGluZVdpZHRoID0gNFxuICAvLyAgICAgY3R4LnN0cm9rZVJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodClcblxuICAvLyAgICAgLy8gRHJhdyB0aGUgbGFiZWwgYmFja2dyb3VuZC5cbiAgLy8gICAgIGN0eC5maWxsU3R5bGUgPSAnIzAwRkZGRidcbiAgLy8gICAgIGNvbnN0IHRleHRXaWR0aCA9IGN0eC5tZWFzdXJlVGV4dChpdGVtLmxhYmVsICsgJyAnICsgKDEwMCAqIGl0ZW0uc2NvcmUpLnRvRml4ZWQoMikgKyAnJScpLndpZHRoXG4gIC8vICAgICBjb25zdCB0ZXh0SGVpZ2h0ID0gcGFyc2VJbnQoZm9udCwgMTApIC8vIGJhc2UgMTBcbiAgLy8gICAgIGN0eC5maWxsUmVjdCh4LCB5LCB0ZXh0V2lkdGggKyA0LCB0ZXh0SGVpZ2h0ICsgNClcbiAgLy8gICB9KVxuXG4gIC8vICAgZGV0ZWN0aW9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gIC8vICAgICAvLyBjb25zdCB4ID0gaXRlbS5iYm94WzBdXG4gIC8vICAgICAvLyBjb25zdCB5ID0gaXRlbS5iYm94WzFdXG4gIC8vICAgICAvLyBEcmF3IHRoZSB0ZXh0IGxhc3QgdG8gZW5zdXJlIGl0J3Mgb24gdG9wLlxuICAvLyAgICAgLy8gY3R4LmZpbGxTdHlsZSA9ICcjMDAwMDAwJ1xuICAvLyAgICAgLy8gY3R4LmZpbGxUZXh0KGl0ZW0ubGFiZWwgKyAnICcgKyAoMTAwICogaXRlbS5zY29yZSkudG9GaXhlZCgyKSArICclJywgeCwgeSlcbiAgLy8gICB9KVxufVxuXG5jb25zdCBidWlsZERldGVjdGVkT2JqZWN0cyA9IChzY29yZXMsIHRocmVzaG9sZCwgYm94ZXMsIGNsYXNzZXMsIGNsYXNzZXNEaXIpID0+IHtcbiAgY29uc3QgZGV0ZWN0aW9uT2JqZWN0cyA9IFtdXG4gIC8vICAgY29uc3QgdmlkZW9fZnJhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnJhbWUnKVxuXG4gIHNjb3Jlc1swXS5mb3JFYWNoKChzY29yZSwgaSkgPT4ge1xuICAgIGlmIChzY29yZSA+IHRocmVzaG9sZCkge1xuICAgICAgY29uc3QgYmJveCA9IFtdXG4gICAgICAvLyAgIGNvbnN0IG1pblkgPSBib3hlc1swXVtpXVswXSAqIHZpZGVvX2ZyYW1lLm9mZnNldEhlaWdodFxuICAgICAgLy8gICBjb25zdCBtaW5YID0gYm94ZXNbMF1baV1bMV0gKiB2aWRlb19mcmFtZS5vZmZzZXRXaWR0aFxuICAgICAgLy8gICBjb25zdCBtYXhZID0gYm94ZXNbMF1baV1bMl0gKiB2aWRlb19mcmFtZS5vZmZzZXRIZWlnaHRcbiAgICAgIC8vICAgY29uc3QgbWF4WCA9IGJveGVzWzBdW2ldWzNdICogdmlkZW9fZnJhbWUub2Zmc2V0V2lkdGhcbiAgICAgIC8vICAgYmJveFswXSA9IG1pblhcbiAgICAgIC8vICAgYmJveFsxXSA9IG1pbllcbiAgICAgIC8vICAgYmJveFsyXSA9IG1heFggLSBtaW5YXG4gICAgICAvLyAgIGJib3hbM10gPSBtYXhZIC0gbWluWVxuICAgICAgZGV0ZWN0aW9uT2JqZWN0cy5wdXNoKHtcbiAgICAgICAgY2xhc3NObzogY2xhc3Nlc1tpXSxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzRGlyW2NsYXNzZXNbaV1dLm5hbWUsXG4gICAgICAgIHNjb3JlOiBzY29yZS50b0ZpeGVkKDQpLFxuICAgICAgICBiYm94OiBiYm94LFxuICAgICAgfSlcbiAgICB9XG4gIH0pXG4gIGNvbnNvbGUubG9nKGRldGVjdGlvbk9iamVjdHMpXG4gIHJldHVybiBkZXRlY3Rpb25PYmplY3RzXG59XG4iXSwic291cmNlUm9vdCI6IiJ9
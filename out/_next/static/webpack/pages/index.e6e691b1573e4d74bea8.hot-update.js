webpackHotUpdate_N_E("pages/index",{

/***/ "./components/carousel.js":
/*!********************************!*\
  !*** ./components/carousel.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Aditya_Desktop_Code_CSS_Backup_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _header_header_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.module.css */ "./components/header/header.module.css");
/* harmony import */ var _header_header_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_header_header_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "C:\\Users\\Aditya\\Desktop\\Code\\CSS\\Backup\\components\\carousel.js",
    _this = undefined,
    _s = $RefreshSig$();

 // requires a loader






var LazyImg = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./lazyimg */ "./components/lazyimg.js"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./lazyimg */ "./components/lazyimg.js")];
    },
    modules: ["./lazyimg"]
  }
});
_c2 = LazyImg;

var MainCarousel = function MainCarousel() {
  _s();

  var _useMediaQuery = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["useMediaQuery"])("(max-width: 500px)"),
      _useMediaQuery2 = Object(C_Users_Aditya_Desktop_Code_CSS_Backup_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMediaQuery, 1),
      isLargerThan500 = _useMediaQuery2[0];

  console.log(isLargerThan500);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      ratio = _useState[0],
      setRatio = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (isLargerThan500) {
      setRatio(1);
    } else {
      setRatio(2.27);
    }

    console.log("test");
  }, [isLargerThan500]);
  var data = [{
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    head: "Example Head 1",
    subhead: "Example Sub Head 1"
  }, {
    image: "https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    head: "Example Head 2",
    subhead: "Example Sub Head 2"
  }, {
    image: "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    head: "Example Head 3",
    subhead: "Example Sub Head 3"
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    id: "1",
    className: _header_header_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.car_div,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Carousel"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Carousel"].Item, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["AspectRatio"], {
          maxW: "100%",
          ratio: ratio,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_7___default.a, {
            className: _header_header_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.img,
            layout: "fill",
            src: data[0].image,
            alt: "First slide",
            priority: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Carousel"].Caption, {
          id: _header_header_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.caption,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "First slide label"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Nulla vitae elit libero, a pharetra augue mollis interdum."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Carousel"].Item, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["AspectRatio"], {
          maxW: "100%",
          ratio: ratio,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(LazyImg, {
            style: _header_header_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.img,
            data: data[1].image,
            alt: "Second slide"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Carousel"].Caption, {
          id: _header_header_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.caption,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "Second slide label"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Carousel"].Item, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["AspectRatio"], {
          maxW: "100%",
          ratio: ratio,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(LazyImg, {
            style: _header_header_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.img,
            data: data[2].image,
            alt: "Third slide"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Carousel"].Caption, {
          id: _header_header_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.caption,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: "Third slide label"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, _this);
};

_s(MainCarousel, "JQSTzIq7KBwAp1Hbpfgy3+6C1tM=", false, function () {
  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["useMediaQuery"]];
});

_c3 = MainCarousel;
/* harmony default export */ __webpack_exports__["default"] = (MainCarousel);

var _c, _c2, _c3;

$RefreshReg$(_c, "LazyImg$dynamic");
$RefreshReg$(_c2, "LazyImg");
$RefreshReg$(_c3, "MainCarousel");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJvdXNlbC5qcyJdLCJuYW1lcyI6WyJMYXp5SW1nIiwiZHluYW1pYyIsIk1haW5DYXJvdXNlbCIsInVzZU1lZGlhUXVlcnkiLCJpc0xhcmdlclRoYW41MDAiLCJjb25zb2xlIiwibG9nIiwidXNlU3RhdGUiLCJyYXRpbyIsInNldFJhdGlvIiwidXNlRWZmZWN0IiwiZGF0YSIsImltYWdlIiwiaGVhZCIsInN1YmhlYWQiLCJzdHlsZXMiLCJjYXJfZGl2IiwiaW1nIiwiY2FwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFvRDs7QUFDcEQ7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBR0MsbURBQU8sTUFBQztBQUFBLFNBQU0seUhBQU47QUFBQSxDQUFEO0FBQUE7QUFBQTtBQUFBLGtDQUFjLDBDQUFkO0FBQUE7QUFBQSxjQUFjLFdBQWQ7QUFBQTtBQUFBLEVBQXZCO01BQU1ELE87O0FBRU4sSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUFBLHVCQUNDQyxzRUFBYSxDQUFDLG9CQUFELENBRGQ7QUFBQTtBQUFBLE1BQ2xCQyxlQURrQjs7QUFFekJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixlQUFaOztBQUZ5QixrQkFJQ0csc0RBQVEsRUFKVDtBQUFBLE1BSWxCQyxLQUprQjtBQUFBLE1BSVhDLFFBSlc7O0FBS3pCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJTixlQUFKLEVBQXFCO0FBQ25CSyxjQUFRLENBQUMsQ0FBRCxDQUFSO0FBQ0QsS0FGRCxNQUVPO0FBQ0xBLGNBQVEsQ0FBQyxJQUFELENBQVI7QUFDRDs7QUFDREosV0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNELEdBUFEsRUFPTixDQUFDRixlQUFELENBUE0sQ0FBVDtBQVFBLE1BQU1PLElBQUksR0FBRyxDQUNYO0FBQ0VDLFNBQUssRUFD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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTJDRCxDQTdFRDs7R0FBTWhCLFk7VUFDc0JDLDhEOzs7TUFEdEJELFk7QUE4RVNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU2ZTY5MWIxNTczZTRkNzRiZWE4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiOyAvLyByZXF1aXJlcyBhIGxvYWRlclxyXG5pbXBvcnQge1xyXG4gIEJveCxcclxuICBBc3BlY3RSYXRpbyxcclxuICBIZWFkaW5nLFxyXG4gIFRleHQsXHJcbiAgdXNlTWVkaWFRdWVyeSxcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2hlYWRlci9oZWFkZXIubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcbmNvbnN0IExhenlJbWcgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4vbGF6eWltZ1wiKSk7XHJcblxyXG5jb25zdCBNYWluQ2Fyb3VzZWwgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2lzTGFyZ2VyVGhhbjUwMF0gPSB1c2VNZWRpYVF1ZXJ5KFwiKG1heC13aWR0aDogNTAwcHgpXCIpO1xyXG4gIGNvbnNvbGUubG9nKGlzTGFyZ2VyVGhhbjUwMCk7XHJcblxyXG4gIGNvbnN0IFtyYXRpbywgc2V0UmF0aW9dID0gdXNlU3RhdGUoKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGlzTGFyZ2VyVGhhbjUwMCkge1xyXG4gICAgICBzZXRSYXRpbygxKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFJhdGlvKDIuMjcpO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coXCJ0ZXN0XCIpO1xyXG4gIH0sIFtpc0xhcmdlclRoYW41MDBdKTtcclxuICBjb25zdCBkYXRhID0gW1xyXG4gICAge1xyXG4gICAgICBpbWFnZTpcclxuICAgICAgICBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzU0NjgxOS9wZXhlbHMtcGhvdG8tNTQ2ODE5LmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MiZoPTY1MCZ3PTk0MFwiLFxyXG4gICAgICBoZWFkOiBcIkV4YW1wbGUgSGVhZCAxXCIsXHJcbiAgICAgIHN1YmhlYWQ6IFwiRXhhbXBsZSBTdWIgSGVhZCAxXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbWFnZTpcclxuICAgICAgICBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzE2OTU3My9wZXhlbHMtcGhvdG8tMTY5NTczLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MiZoPTY1MCZ3PTk0MFwiLFxyXG4gICAgICBoZWFkOiBcIkV4YW1wbGUgSGVhZCAyXCIsXHJcbiAgICAgIHN1YmhlYWQ6IFwiRXhhbXBsZSBTdWIgSGVhZCAyXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbWFnZTpcclxuICAgICAgICBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzM0MTUzL3BleGVscy1waG90by5qcGc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MiZoPTY1MCZ3PTk0MFwiLFxyXG4gICAgICBoZWFkOiBcIkV4YW1wbGUgSGVhZCAzXCIsXHJcbiAgICAgIHN1YmhlYWQ6IFwiRXhhbXBsZSBTdWIgSGVhZCAzXCIsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPVwiMVwiIGNsYXNzTmFtZT17c3R5bGVzLmNhcl9kaXZ9PlxyXG4gICAgICA8Q2Fyb3VzZWw+XHJcbiAgICAgICAgPENhcm91c2VsLkl0ZW0+XHJcbiAgICAgICAgICA8QXNwZWN0UmF0aW8gbWF4Vz1cIjEwMCVcIiByYXRpbz17cmF0aW99PlxyXG4gICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPXtzdHlsZXMuaW1nfSBsYXlvdXQ9XCJmaWxsXCIgc3JjPXtkYXRhWzBdLmltYWdlfSBhbHQ9XCJGaXJzdCBzbGlkZVwiIHByaW9yaXR5Lz5cclxuICAgICAgICAgIDwvQXNwZWN0UmF0aW8+XHJcbiAgICAgICAgICA8Q2Fyb3VzZWwuQ2FwdGlvbiBpZD17c3R5bGVzLmNhcHRpb259PlxyXG4gICAgICAgICAgICA8aDM+Rmlyc3Qgc2xpZGUgbGFiZWw8L2gzPlxyXG4gICAgICAgICAgICA8cD5OdWxsYSB2aXRhZSBlbGl0IGxpYmVybywgYSBwaGFyZXRyYSBhdWd1ZSBtb2xsaXMgaW50ZXJkdW0uPC9wPlxyXG4gICAgICAgICAgPC9DYXJvdXNlbC5DYXB0aW9uPlxyXG4gICAgICAgIDwvQ2Fyb3VzZWwuSXRlbT5cclxuICAgICAgICA8Q2Fyb3VzZWwuSXRlbT5cclxuICAgICAgICAgIDxBc3BlY3RSYXRpbyBtYXhXPVwiMTAwJVwiIHJhdGlvPXtyYXRpb30+XHJcbiAgICAgICAgICAgIDxMYXp5SW1nXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5pbWd9XHJcbiAgICAgICAgICAgICAgZGF0YT17ZGF0YVsxXS5pbWFnZX1cclxuICAgICAgICAgICAgICBhbHQ9XCJTZWNvbmQgc2xpZGVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Bc3BlY3RSYXRpbz5cclxuICAgICAgICAgIDxDYXJvdXNlbC5DYXB0aW9uIGlkPXtzdHlsZXMuY2FwdGlvbn0+XHJcbiAgICAgICAgICAgIDxoMz5TZWNvbmQgc2xpZGUgbGFiZWw8L2gzPlxyXG4gICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LjwvcD5cclxuICAgICAgICAgIDwvQ2Fyb3VzZWwuQ2FwdGlvbj5cclxuICAgICAgICA8L0Nhcm91c2VsLkl0ZW0+XHJcbiAgICAgICAgPENhcm91c2VsLkl0ZW0+XHJcbiAgICAgICAgICA8QXNwZWN0UmF0aW8gbWF4Vz1cIjEwMCVcIiByYXRpbz17cmF0aW99PlxyXG4gICAgICAgICAgICA8TGF6eUltZ1xyXG4gICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuaW1nfVxyXG4gICAgICAgICAgICAgIGRhdGE9e2RhdGFbMl0uaW1hZ2V9XHJcbiAgICAgICAgICAgICAgYWx0PVwiVGhpcmQgc2xpZGVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Bc3BlY3RSYXRpbz5cclxuICAgICAgICAgIDxDYXJvdXNlbC5DYXB0aW9uIGlkPXtzdHlsZXMuY2FwdGlvbn0+XHJcbiAgICAgICAgICAgIDxoMz5UaGlyZCBzbGlkZSBsYWJlbDwvaDM+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIFByYWVzZW50IGNvbW1vZG8gY3Vyc3VzIG1hZ25hLCB2ZWwgc2NlbGVyaXNxdWUgbmlzbCBjb25zZWN0ZXR1ci5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9DYXJvdXNlbC5DYXB0aW9uPlxyXG4gICAgICAgIDwvQ2Fyb3VzZWwuSXRlbT5cclxuICAgICAgPC9DYXJvdXNlbD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IE1haW5DYXJvdXNlbDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
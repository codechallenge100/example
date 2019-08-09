webpackHotUpdate("app",{

/***/ "./ui/components/Validator.js":
/*!************************************!*\
  !*** ./ui/components/Validator.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Validator; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Validator =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Validator, _React$Component);

  function Validator(props) {
    var _this$state;

    var _this;

    _classCallCheck(this, Validator);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Validator).call(this, props));
    _this.state = (_this$state = {
      showNumericError: false,
      showStudentResponseError: false,
      unitBeingMeasured: '',
      targetUnitOfMeasure: '',
      valid: false,
      options: [{
        value: 'rankine',
        text: 'Rankine'
      }, {
        value: 'celsius',
        text: 'Celsius'
      }, {
        value: 'fahrenheit',
        text: 'Fahrenheit'
      }, {
        value: 'kelvin',
        text: 'Kelvin'
      }, {
        value: 'liters',
        text: 'Liters'
      }, {
        value: 'tablespoons',
        text: 'Tablespoons'
      }, {
        value: 'cubic-inches',
        text: 'Cubic Inches'
      }, {
        value: 'cups',
        text: 'Cups'
      }, {
        value: 'cubic-feet',
        text: 'Cubic Feet'
      }, {
        value: 'gallons',
        text: 'Gallons'
      }],
      optionsTarget: []
    }, _defineProperty(_this$state, "valid", false), _defineProperty(_this$state, "disabled", true), _defineProperty(_this$state, "numericalValue", 0), _defineProperty(_this$state, "studentResponse", 0), _defineProperty(_this$state, "showGrade", false), _this$state);
    _this.numericalValueChange = _this.numericalValueChange.bind(_assertThisInitialized(_this));
    _this.studentResponseChange = _this.studentResponseChange.bind(_assertThisInitialized(_this));
    _this.unitOfMeasureChange = _this.unitOfMeasureChange.bind(_assertThisInitialized(_this));
    _this.targetUnitOfMeasure = _this.targetUnitOfMeasure.bind(_assertThisInitialized(_this));
    _this.validate = _this.validate.bind(_assertThisInitialized(_this));
    _this.grade = _this.grade.bind(_assertThisInitialized(_this));
    _this.temp = ['rankine', 'celsius', 'fahrenheit', 'kelvin'];
    _this.volumes = ['liters', 'tablespoons', 'cubic-inches', 'cups', 'cubic-feet', 'gallons'];
    return _this;
  }

  _createClass(Validator, [{
    key: "unitOfMeasureChange",
    value: function unitOfMeasureChange(e) {
      this.setState({
        unitBeingMeasured: e.target.value
      }, this.buildOptionsList);
      this.validate();
    }
  }, {
    key: "targetUnitOfMeasure",
    value: function targetUnitOfMeasure(e) {
      this.setState({
        targetUnitOfMeasure: e.target.value
      }, this.buildOptionsList);
      this.validate();
    }
  }, {
    key: "numericalValueChange",
    value: function numericalValueChange(e) {
      if (e.target.value === "") {
        this.setState({
          showNumericError: false
        });
      }

      this.setState({
        showNumericError: false,
        numericalValue: parseFloat(e.target.value).toFixed(2)
      });
      this.validate();
    }
  }, {
    key: "studentResponseChange",
    value: function studentResponseChange(e) {
      if (e.target.value === "") {
        this.setState({
          showStudentResponseError: false
        });
      }

      this.setState({
        showStudentResponseError: false,
        studentResponse: parseFloat(e.target.value).toFixed(2)
      });
      this.validate();
    }
  }, {
    key: "validate",
    value: function validate() {
      if (this.state.unitBeingMeasured && this.state.targetUnitOfMeasure && this.state.studentResponse && this.state.numericalValue) {
        this.setState({
          disabled: false,
          showGrade: true
        });
        this.grade();
      } else {
        this.setState({
          disabled: true,
          showGrade: false
        });
      }
    }
  }, {
    key: "buildOptionsList",
    value: function buildOptionsList() {
      var _this2 = this;

      switch (this.state.unitBeingMeasured) {
        case "fahrenheit":
        case "celsius":
        case "kelvin":
        case 'rankine':
          this.setState({
            optionsTarget: this.temp.filter(function (e) {
              return e !== _this2.state.unitBeingMeasured;
            })
          });
          break;

        default:
          this.setState({
            optionsTarget: this.volumes.filter(function (e) {
              return e !== _this2.state.unitBeingMeasured;
            })
          });
      }
    }
  }, {
    key: "convertFahrenheit",
    value: function convertFahrenheit(input, output) {
      switch (output) {
        case "rankine":
          // done
          return parseFloat(input * 1.0 - 459.67).toFixed(2);

        case "kelvin":
          // done
          return parseFloat((input - 32) / 1.8 + 273.15).toFixed(2);

        case "celsius":
          // done
          return parseFloat((input - 32) / 1.8).toFixed(2);

        default:
          return;
      }
    }
  }, {
    key: "convertCelsius",
    value: function convertCelsius(input, output) {
      switch (output) {
        case "fahrenheit":
          // done
          return parseFloat(input * 1.8 + 32).toFixed(2);

        case "kelvin":
          // done
          return parseFloat(input + 273.15).toFixed(2);

        case "rankine":
          // done
          return parseFloat(input * 9 / 5 + 491.67).toFixed(2);

        default:
          return;
      }
    }
  }, {
    key: "convertKelvin",
    value: function convertKelvin(input, output) {
      switch (output) {
        case "rankine":
          // done
          return parseFloat(input * 1.8).toFixed(2);

        case "fahrenheit":
          // done
          return parseFloat((input - 273.15) * 9 / 5 + 32).toFixed(2);

        case "celsius":
          // done
          return parseFloat(input - 273.15).toFixed(2);

        default:
          return;
      }
    }
  }, {
    key: "convertRankine",
    value: function convertRankine(input, output) {
      switch (output) {
        case "fahrenheit":
          // done
          return parseFloat(input - 459.67).toFixed(2);

        case "kelvin":
          // done
          return parseFloat(input * 5 / 9).toFixed(2);

        case "celsius":
          // done
          return parseFloat((input - 491.67) * 5 / 9);

        default:
          return;
      }
    }
  }, {
    key: "convertLiters",
    value: function convertLiters(input, output) {
      switch (output) {
        case "tablespoons":
          return parseFloat(input * 67.628).toFixed(2);

        case "cubic-inches":
          return parseFloat(input * 61.024).toFixed(2);

        case "cups":
          return parseFloat(input * 4.227).toFixed(2);

        case "cubic-feet":
          return parseFloat(input / 28.317).toFixed(2);

        case "gallons":
          return parseFloat(input / 3.785).toFixed(2);

        default:
          return;
      }
    }
  }, {
    key: "convertTablespoons",
    value: function convertTablespoons(input, output) {
      switch (output) {
        case "liters":
          return parseFloat(input / 67.628).toFixed(2);

        case "cubic-inches":
          return parseFloat(input / 1.108).toFixed(2);

        case "cups":
          return parseFloat(input / 16).toFixed(2);

        case "cubic-feet":
          return parseFloat(input / 1915.013).toFixed(2);

        case "gallons":
          return parseFloat(input / 256).toFixed(2);

        default:
          return;
      }
    }
  }, {
    key: "convertCubicInches",
    value: function convertCubicInches(input, output) {
      switch (output) {
        case "tablespoons":
          return parseFloat(input * 1.108).toFixed(2);

        case "liters":
          return parseFloat(input / 61.024).toFixed(2);

        case "cups":
          return parseFloat(input / 14.438).toFixed(2);

        case "cubic-feet":
          return parseFloat(input / 1728).toFixed(2);

        case "gallons":
          return parseFloat(input / 231).toFixed(2);

        default:
          return;
      }
    }
  }, {
    key: "grade",
    value: function grade() {
      var value;

      switch (this.state.unitBeingMeasured) {
        case "fahrenheit":
          value = parseFloat(this.convertFahrenheit(this.state.numericalValue, this.state.targetUnitOfMeasure)).toFixed(2);
          break;

        case "celsius":
          value = this.convertCelsius(this.state.numericalValue, this.state.targetUnitOfMeasure);
          break;

        case "kelvin":
          value = this.convertKelvin(this.state.numericalValue, this.state.targetUnitOfMeasure);
          break;

        case "rankine":
          value = this.convertRankine(this.state.numericalValue, this.state.targetUnitOfMeasure);
          break;

        case "liters":
          value = this.convertLiters(this.state.numericalValue, this.state.targetUnitOfMeasure);
          break;

        case "tablespoons":
          value = this.convertTablespoons(this.state.numericalValue, this.state.targetUnitOfMeasure);
          break;
      }

      if (value === this.state.studentResponse) {
        this.setState({
          valid: true,
          showGrade: true
        });
      } else {
        this.setState({
          valid: false,
          showGrade: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Student Grade Validator"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "numericalValue"
      }, "Input Numerical Value"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "form-control",
        onChange: this.numericalValueChange,
        onBlur: this.numericalValueChange,
        type: "text",
        id: "numericalValue"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "unitOfMeasure"
      }, "Input Unit of Measure"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        className: "form-control",
        defaultValue: "default",
        onChange: this.unitOfMeasureChange
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "default",
        disabled: true
      }, "Please Select"), this.state.options.map(function (option, key) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          key: key,
          value: option.value
        }, option.text);
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "targetOfMeasure"
      }, "Target Unit of Measure"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        className: "form-control",
        defaultValue: "default",
        onChange: this.targetUnitOfMeasure
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "default",
        disabled: true
      }, "Please Select"), this.state.optionsTarget.map(function (option, key) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          key: key,
          value: option
        }, option.charAt(0).toUpperCase() + option.slice(1));
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "studentResponse"
      }, "Student Response"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "form-control",
        onChange: this.studentResponseChange,
        onBlur: this.studentResponseChange,
        type: "text",
        id: "studentResponse"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), this.state.showGrade ? this.state.valid ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "correct"
      }, "Correct") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "incorrect"
      }, "Incorrect") : "");
    }
  }]);

  return Validator;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ })

})
//# sourceMappingURL=app.22cedd4e8d92ae3fa116.hot-update.js.map
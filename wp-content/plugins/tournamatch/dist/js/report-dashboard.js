/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/report-dashboard.js":
/*!************************************!*\
  !*** ./src/js/report-dashboard.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tournamatch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tournamatch.js */ "./src/js/tournamatch.js");
/**
 * Handles client scripting for the report dashbaord page.
 *
 * @link       https://www.tournamatch.com
 * @since      3.11.0
 *
 * @package    Tournamatch
 *
 */


(function ($) {
  'use strict';

  window.addEventListener('load', function () {
    var options = trn_report_dashboard_options;
    $.event('match').addEventListener('deleted', function () {
      window.location.href = options.redirect_link;
    });
    $.event('match').addEventListener('disputed', function (data) {
      window.location.href = options.redirect_link + "?&dispute_match_id=".concat(data.match_id);
    });
  }, false);
})(_tournamatch_js__WEBPACK_IMPORTED_MODULE_0__["trn"]);

/***/ }),

/***/ "./src/js/tournamatch.js":
/*!*******************************!*\
  !*** ./src/js/tournamatch.js ***!
  \*******************************/
/*! exports provided: trn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trn", function() { return trn; });


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Tournamatch = /*#__PURE__*/function () {
  function Tournamatch() {
    _classCallCheck(this, Tournamatch);

    this.events = {};
  }

  _createClass(Tournamatch, [{
    key: "param",
    value: function param(object, prefix) {
      var str = [];

      for (var prop in object) {
        if (object.hasOwnProperty(prop)) {
          var k = prefix ? prefix + "[" + prop + "]" : prop;
          var v = object[prop];
          str.push(v !== null && _typeof(v) === "object" ? this.param(v, k) : encodeURIComponent(k) + "=" + encodeURIComponent(v));
        }
      }

      return str.join("&");
    }
  }, {
    key: "event",
    value: function event(eventName) {
      if (!(eventName in this.events)) {
        this.events[eventName] = new EventTarget(eventName);
      }

      return this.events[eventName];
    }
  }, {
    key: "autocomplete",
    value: function autocomplete(input, dataCallback) {
      new Tournamatch_Autocomplete(input, dataCallback);
    }
  }, {
    key: "ucfirst",
    value: function ucfirst(s) {
      if (typeof s !== 'string') return '';
      return s.charAt(0).toUpperCase() + s.slice(1);
    }
  }, {
    key: "ordinal_suffix",
    value: function ordinal_suffix(number) {
      var remainder = number % 100;

      if (remainder < 11 || remainder > 13) {
        switch (remainder % 10) {
          case 1:
            return 'st';

          case 2:
            return 'nd';

          case 3:
            return 'rd';
        }
      }

      return 'th';
    }
  }, {
    key: "tabs",
    value: function tabs(element) {
      var tabs = element.getElementsByClassName('trn-nav-link');
      var panes = document.getElementsByClassName('trn-tab-pane');

      var clearActive = function clearActive() {
        Array.prototype.forEach.call(tabs, function (tab) {
          tab.classList.remove('trn-nav-active');
          tab.ariaSelected = false;
        });
        Array.prototype.forEach.call(panes, function (pane) {
          return pane.classList.remove('trn-tab-active');
        });
      };

      var setActive = function setActive(targetId) {
        var targetTab = document.querySelector('a[href="#' + targetId + '"].trn-nav-link');
        var targetPaneId = targetTab && targetTab.dataset && targetTab.dataset.target || false;

        if (targetPaneId) {
          clearActive();
          targetTab.classList.add('trn-nav-active');
          targetTab.ariaSelected = true;
          document.getElementById(targetPaneId).classList.add('trn-tab-active');
        }
      };

      var tabClick = function tabClick(event) {
        var targetTab = event.currentTarget;
        var targetPaneId = targetTab && targetTab.dataset && targetTab.dataset.target || false;

        if (targetPaneId) {
          setActive(targetPaneId);
          event.preventDefault();
        }
      };

      Array.prototype.forEach.call(tabs, function (tab) {
        tab.addEventListener('click', tabClick);
      });

      if (location.hash) {
        setActive(location.hash.substr(1));
      } else if (tabs.length > 0) {
        setActive(tabs[0].dataset.target);
      }
    }
  }]);

  return Tournamatch;
}(); //trn.initialize();


if (!window.trn_obj_instance) {
  window.trn_obj_instance = new Tournamatch();
  window.addEventListener('load', function () {
    var tabViews = document.getElementsByClassName('trn-nav');
    Array.from(tabViews).forEach(function (tab) {
      trn.tabs(tab);
    });
    var dropdowns = document.getElementsByClassName('trn-dropdown-toggle');

    var handleDropdownClose = function handleDropdownClose() {
      Array.from(dropdowns).forEach(function (dropdown) {
        dropdown.nextElementSibling.classList.remove('trn-show');
      });
      document.removeEventListener("click", handleDropdownClose, false);
    };

    Array.from(dropdowns).forEach(function (dropdown) {
      dropdown.addEventListener('click', function (e) {
        e.stopPropagation();
        this.nextElementSibling.classList.add('trn-show');
        document.addEventListener("click", handleDropdownClose, false);
      }, false);
    });
  }, false);
}

var trn = window.trn_obj_instance;

var Tournamatch_Autocomplete = /*#__PURE__*/function () {
  // currentFocus;
  //
  // nameInput;
  //
  // self;
  function Tournamatch_Autocomplete(input, dataCallback) {
    var _this = this;

    _classCallCheck(this, Tournamatch_Autocomplete);

    // this.self = this;
    this.nameInput = input;
    this.nameInput.addEventListener("input", function () {
      var a,
          b,
          i,
          val = _this.nameInput.value; //this.value;

      var parent = _this.nameInput.parentNode; //this.parentNode;
      // let p = new Promise((resolve, reject) => {
      //     /* need to query server for names here. */
      //     let xhr = new XMLHttpRequest();
      //     xhr.open('GET', options.api_url + 'players/?search=' + val + '&per_page=5');
      //     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      //     xhr.setRequestHeader('X-WP-Nonce', options.rest_nonce);
      //     xhr.onload = function () {
      //         if (xhr.status === 200) {
      //             // resolve(JSON.parse(xhr.response).map((player) => {return { 'value': player.id, 'text': player.name };}));
      //             resolve(JSON.parse(xhr.response).map((player) => {return player.name;}));
      //         } else {
      //             reject();
      //         }
      //     };
      //     xhr.send();
      // });

      dataCallback(val).then(function (data) {
        //p.then((data) => {
        console.log(data);
        /*close any already open lists of auto-completed values*/

        _this.closeAllLists();

        if (!val) {
          return false;
        }

        _this.currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/

        a = document.createElement("DIV");
        a.setAttribute("id", _this.nameInput.id + "-auto-complete-list");
        a.setAttribute("class", "trn-auto-complete-items");
        /*append the DIV element as a child of the auto-complete container:*/

        parent.appendChild(a);
        /*for each item in the array...*/

        for (i = 0; i < data.length; i++) {
          var text = void 0,
              value = void 0;
          /* Which format did they give us. */

          if (_typeof(data[i]) === 'object') {
            text = data[i]['text'];
            value = data[i]['value'];
          } else {
            text = data[i];
            value = data[i];
          }
          /*check if the item starts with the same letters as the text field value:*/


          if (text.substr(0, val.length).toUpperCase() === val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/

            b.innerHTML = "<strong>" + text.substr(0, val.length) + "</strong>";
            b.innerHTML += text.substr(val.length);
            /*insert a input field that will hold the current array item's value:*/

            b.innerHTML += "<input type='hidden' value='" + value + "'>";
            b.dataset.value = value;
            b.dataset.text = text;
            /*execute a function when someone clicks on the item value (DIV element):*/

            b.addEventListener("click", function (e) {
              console.log("item clicked with value ".concat(e.currentTarget.dataset.value));
              /* insert the value for the autocomplete text field: */

              _this.nameInput.value = e.currentTarget.dataset.text;
              _this.nameInput.dataset.selectedId = e.currentTarget.dataset.value;
              /* close the list of autocompleted values, (or any other open lists of autocompleted values:*/

              _this.closeAllLists();

              _this.nameInput.dispatchEvent(new Event('change'));
            });
            a.appendChild(b);
          }
        }
      });
    });
    /*execute a function presses a key on the keyboard:*/

    this.nameInput.addEventListener("keydown", function (e) {
      var x = document.getElementById(_this.nameInput.id + "-auto-complete-list");
      if (x) x = x.getElementsByTagName("div");

      if (e.keyCode === 40) {
        /*If the arrow DOWN key is pressed,
         increase the currentFocus variable:*/
        _this.currentFocus++;
        /*and and make the current item more visible:*/

        _this.addActive(x);
      } else if (e.keyCode === 38) {
        //up

        /*If the arrow UP key is pressed,
         decrease the currentFocus variable:*/
        _this.currentFocus--;
        /*and and make the current item more visible:*/

        _this.addActive(x);
      } else if (e.keyCode === 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();

        if (_this.currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[_this.currentFocus].click();
        }
      }
    });
    /*execute a function when someone clicks in the document:*/

    document.addEventListener("click", function (e) {
      _this.closeAllLists(e.target);
    });
  }

  _createClass(Tournamatch_Autocomplete, [{
    key: "addActive",
    value: function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/

      this.removeActive(x);
      if (this.currentFocus >= x.length) this.currentFocus = 0;
      if (this.currentFocus < 0) this.currentFocus = x.length - 1;
      /*add class "autocomplete-active":*/

      x[this.currentFocus].classList.add("trn-auto-complete-active");
    }
  }, {
    key: "removeActive",
    value: function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("trn-auto-complete-active");
      }
    }
  }, {
    key: "closeAllLists",
    value: function closeAllLists(element) {
      console.log("close all lists");
      /*close all autocomplete lists in the document,
       except the one passed as an argument:*/

      var x = document.getElementsByClassName("trn-auto-complete-items");

      for (var i = 0; i < x.length; i++) {
        if (element !== x[i] && element !== this.nameInput) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
  }]);

  return Tournamatch_Autocomplete;
}(); // First, checks if it isn't implemented yet.


if (!String.prototype.format) {
  String.prototype.format = function () {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function (match, number) {
      return typeof args[number] !== 'undefined' ? args[number] : match;
    });
  };
}

/***/ }),

/***/ 29:
/*!******************************************!*\
  !*** multi ./src/js/report-dashboard.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\wamp\www\wordpress.dev\wp-content\plugins\tournamatch\src\js\report-dashboard.js */"./src/js/report-dashboard.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3JlcG9ydC1kYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RvdXJuYW1hdGNoLmpzIl0sIm5hbWVzIjpbIiQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwib3B0aW9ucyIsInRybl9yZXBvcnRfZGFzaGJvYXJkX29wdGlvbnMiLCJldmVudCIsImxvY2F0aW9uIiwiaHJlZiIsInJlZGlyZWN0X2xpbmsiLCJkYXRhIiwibWF0Y2hfaWQiLCJ0cm4iLCJUb3VybmFtYXRjaCIsImV2ZW50cyIsIm9iamVjdCIsInByZWZpeCIsInN0ciIsInByb3AiLCJoYXNPd25Qcm9wZXJ0eSIsImsiLCJ2IiwicHVzaCIsInBhcmFtIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwiam9pbiIsImV2ZW50TmFtZSIsIkV2ZW50VGFyZ2V0IiwiaW5wdXQiLCJkYXRhQ2FsbGJhY2siLCJUb3VybmFtYXRjaF9BdXRvY29tcGxldGUiLCJzIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsIm51bWJlciIsInJlbWFpbmRlciIsImVsZW1lbnQiLCJ0YWJzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInBhbmVzIiwiZG9jdW1lbnQiLCJjbGVhckFjdGl2ZSIsIkFycmF5IiwicHJvdG90eXBlIiwiZm9yRWFjaCIsImNhbGwiLCJ0YWIiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhcmlhU2VsZWN0ZWQiLCJwYW5lIiwic2V0QWN0aXZlIiwidGFyZ2V0SWQiLCJ0YXJnZXRUYWIiLCJxdWVyeVNlbGVjdG9yIiwidGFyZ2V0UGFuZUlkIiwiZGF0YXNldCIsInRhcmdldCIsImFkZCIsImdldEVsZW1lbnRCeUlkIiwidGFiQ2xpY2siLCJjdXJyZW50VGFyZ2V0IiwicHJldmVudERlZmF1bHQiLCJoYXNoIiwic3Vic3RyIiwibGVuZ3RoIiwidHJuX29ial9pbnN0YW5jZSIsInRhYlZpZXdzIiwiZnJvbSIsImRyb3Bkb3ducyIsImhhbmRsZURyb3Bkb3duQ2xvc2UiLCJkcm9wZG93biIsIm5leHRFbGVtZW50U2libGluZyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwibmFtZUlucHV0IiwiYSIsImIiLCJpIiwidmFsIiwidmFsdWUiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJjbG9zZUFsbExpc3RzIiwiY3VycmVudEZvY3VzIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImlkIiwiYXBwZW5kQ2hpbGQiLCJ0ZXh0IiwiaW5uZXJIVE1MIiwic2VsZWN0ZWRJZCIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsIngiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImtleUNvZGUiLCJhZGRBY3RpdmUiLCJjbGljayIsInJlbW92ZUFjdGl2ZSIsInJlbW92ZUNoaWxkIiwiU3RyaW5nIiwiZm9ybWF0IiwiYXJncyIsImFyZ3VtZW50cyIsInJlcGxhY2UiLCJtYXRjaCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNB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UDtBQU1ILEdBUkQ7QUFTSCxDIiwiZmlsZSI6InJlcG9ydC1kYXNoYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjkpO1xuIiwiLyoqXHJcbiAqIEhhbmRsZXMgY2xpZW50IHNjcmlwdGluZyBmb3IgdGhlIHJlcG9ydCBkYXNoYmFvcmQgcGFnZS5cclxuICpcclxuICogQGxpbmsgICAgICAgaHR0cHM6Ly93d3cudG91cm5hbWF0Y2guY29tXHJcbiAqIEBzaW5jZSAgICAgIDMuMTEuMFxyXG4gKlxyXG4gKiBAcGFja2FnZSAgICBUb3VybmFtYXRjaFxyXG4gKlxyXG4gKi9cclxuaW1wb3J0IHsgdHJuIH0gZnJvbSAnLi90b3VybmFtYXRjaC5qcyc7XHJcblxyXG4oZnVuY3Rpb24gKCQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHRybl9yZXBvcnRfZGFzaGJvYXJkX29wdGlvbnM7XHJcblxyXG4gICAgICAgICQuZXZlbnQoJ21hdGNoJykuYWRkRXZlbnRMaXN0ZW5lcignZGVsZXRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IG9wdGlvbnMucmVkaXJlY3RfbGluaztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJC5ldmVudCgnbWF0Y2gnKS5hZGRFdmVudExpc3RlbmVyKCdkaXNwdXRlZCcsIGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBvcHRpb25zLnJlZGlyZWN0X2xpbmsgKyBgPyZkaXNwdXRlX21hdGNoX2lkPSR7ZGF0YS5tYXRjaF9pZH1gO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0sIGZhbHNlKTtcclxufSkodHJuKTsiLCIndXNlIHN0cmljdCc7XHJcbmNsYXNzIFRvdXJuYW1hdGNoIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmV2ZW50cyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHBhcmFtKG9iamVjdCwgcHJlZml4KSB7XHJcbiAgICAgICAgbGV0IHN0ciA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IHByb3AgaW4gb2JqZWN0KSB7XHJcbiAgICAgICAgICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBrID0gcHJlZml4ID8gcHJlZml4ICsgXCJbXCIgKyBwcm9wICsgXCJdXCIgOiBwcm9wO1xyXG4gICAgICAgICAgICAgICAgbGV0IHYgPSBvYmplY3RbcHJvcF07XHJcbiAgICAgICAgICAgICAgICBzdHIucHVzaCgodiAhPT0gbnVsbCAmJiB0eXBlb2YgdiA9PT0gXCJvYmplY3RcIikgPyB0aGlzLnBhcmFtKHYsIGspIDogZW5jb2RlVVJJQ29tcG9uZW50KGspICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdHIuam9pbihcIiZcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnQoZXZlbnROYW1lKSB7XHJcbiAgICAgICAgaWYgKCEoZXZlbnROYW1lIGluIHRoaXMuZXZlbnRzKSkge1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gbmV3IEV2ZW50VGFyZ2V0KGV2ZW50TmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmV2ZW50c1tldmVudE5hbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIGF1dG9jb21wbGV0ZShpbnB1dCwgZGF0YUNhbGxiYWNrKSB7XHJcbiAgICAgICAgbmV3IFRvdXJuYW1hdGNoX0F1dG9jb21wbGV0ZShpbnB1dCwgZGF0YUNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICB1Y2ZpcnN0KHMpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHMgIT09ICdzdHJpbmcnKSByZXR1cm4gJyc7XHJcbiAgICAgICAgcmV0dXJuIHMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzLnNsaWNlKDEpO1xyXG4gICAgfVxyXG5cclxuICAgIG9yZGluYWxfc3VmZml4KG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IHJlbWFpbmRlciA9IG51bWJlciAlIDEwMDtcclxuXHJcbiAgICAgICAgaWYgKChyZW1haW5kZXIgPCAxMSkgfHwgKHJlbWFpbmRlciA+IDEzKSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHJlbWFpbmRlciAlIDEwKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiAnc3QnO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gJ25kJztcclxuICAgICAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuICdyZCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICd0aCc7XHJcbiAgICB9XHJcblxyXG4gICAgdGFicyhlbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3QgdGFicyA9IGVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndHJuLW5hdi1saW5rJyk7XHJcbiAgICAgICAgY29uc3QgcGFuZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0cm4tdGFiLXBhbmUnKTtcclxuICAgICAgICBjb25zdCBjbGVhckFjdGl2ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCh0YWJzLCAodGFiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgndHJuLW5hdi1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIHRhYi5hcmlhU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwocGFuZXMsIHBhbmUgPT4gcGFuZS5jbGFzc0xpc3QucmVtb3ZlKCd0cm4tdGFiLWFjdGl2ZScpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHNldEFjdGl2ZSA9ICh0YXJnZXRJZCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhW2hyZWY9XCIjJyArIHRhcmdldElkICsgJ1wiXS50cm4tbmF2LWxpbmsnKTtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0UGFuZUlkID0gdGFyZ2V0VGFiICYmIHRhcmdldFRhYi5kYXRhc2V0ICYmIHRhcmdldFRhYi5kYXRhc2V0LnRhcmdldCB8fCBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXRQYW5lSWQpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyQWN0aXZlKCk7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRUYWIuY2xhc3NMaXN0LmFkZCgndHJuLW5hdi1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIHRhcmdldFRhYi5hcmlhU2VsZWN0ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldFBhbmVJZCkuY2xhc3NMaXN0LmFkZCgndHJuLXRhYi1hY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgdGFiQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0VGFiID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0UGFuZUlkID0gdGFyZ2V0VGFiICYmIHRhcmdldFRhYi5kYXRhc2V0ICYmIHRhcmdldFRhYi5kYXRhc2V0LnRhcmdldCB8fCBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXRQYW5lSWQpIHtcclxuICAgICAgICAgICAgICAgIHNldEFjdGl2ZSh0YXJnZXRQYW5lSWQpO1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwodGFicywgKHRhYikgPT4ge1xyXG4gICAgICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0YWJDbGljayk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChsb2NhdGlvbi5oYXNoKSB7XHJcbiAgICAgICAgICAgIHNldEFjdGl2ZShsb2NhdGlvbi5oYXNoLnN1YnN0cigxKSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0YWJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgc2V0QWN0aXZlKHRhYnNbMF0uZGF0YXNldC50YXJnZXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8vdHJuLmluaXRpYWxpemUoKTtcclxuaWYgKCF3aW5kb3cudHJuX29ial9pbnN0YW5jZSkge1xyXG4gICAgd2luZG93LnRybl9vYmpfaW5zdGFuY2UgPSBuZXcgVG91cm5hbWF0Y2goKTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgdGFiVmlld3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0cm4tbmF2Jyk7XHJcblxyXG4gICAgICAgIEFycmF5LmZyb20odGFiVmlld3MpLmZvckVhY2goKHRhYikgPT4ge1xyXG4gICAgICAgICAgICB0cm4udGFicyh0YWIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBkcm9wZG93bnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0cm4tZHJvcGRvd24tdG9nZ2xlJyk7XHJcbiAgICAgICAgY29uc3QgaGFuZGxlRHJvcGRvd25DbG9zZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgQXJyYXkuZnJvbShkcm9wZG93bnMpLmZvckVhY2goKGRyb3Bkb3duKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkcm9wZG93bi5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgndHJuLXNob3cnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVEcm9wZG93bkNsb3NlLCBmYWxzZSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgQXJyYXkuZnJvbShkcm9wZG93bnMpLmZvckVhY2goKGRyb3Bkb3duKSA9PiB7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ3Rybi1zaG93Jyk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlRHJvcGRvd25DbG9zZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSwgZmFsc2UpO1xyXG59XHJcbmV4cG9ydCBsZXQgdHJuID0gd2luZG93LnRybl9vYmpfaW5zdGFuY2U7XHJcblxyXG5jbGFzcyBUb3VybmFtYXRjaF9BdXRvY29tcGxldGUge1xyXG5cclxuICAgIC8vIGN1cnJlbnRGb2N1cztcclxuICAgIC8vXHJcbiAgICAvLyBuYW1lSW5wdXQ7XHJcbiAgICAvL1xyXG4gICAgLy8gc2VsZjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpbnB1dCwgZGF0YUNhbGxiYWNrKSB7XHJcbiAgICAgICAgLy8gdGhpcy5zZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLm5hbWVJbnB1dCA9IGlucHV0O1xyXG5cclxuICAgICAgICB0aGlzLm5hbWVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYSwgYiwgaSwgdmFsID0gdGhpcy5uYW1lSW5wdXQudmFsdWU7Ly90aGlzLnZhbHVlO1xyXG4gICAgICAgICAgICBsZXQgcGFyZW50ID0gdGhpcy5uYW1lSW5wdXQucGFyZW50Tm9kZTsvL3RoaXMucGFyZW50Tm9kZTtcclxuXHJcbiAgICAgICAgICAgIC8vIGxldCBwID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgLyogbmVlZCB0byBxdWVyeSBzZXJ2ZXIgZm9yIG5hbWVzIGhlcmUuICovXHJcbiAgICAgICAgICAgIC8vICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIC8vICAgICB4aHIub3BlbignR0VUJywgb3B0aW9ucy5hcGlfdXJsICsgJ3BsYXllcnMvP3NlYXJjaD0nICsgdmFsICsgJyZwZXJfcGFnZT01Jyk7XHJcbiAgICAgICAgICAgIC8vICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xyXG4gICAgICAgICAgICAvLyAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ1gtV1AtTm9uY2UnLCBvcHRpb25zLnJlc3Rfbm9uY2UpO1xyXG4gICAgICAgICAgICAvLyAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIC8vIHJlc29sdmUoSlNPTi5wYXJzZSh4aHIucmVzcG9uc2UpLm1hcCgocGxheWVyKSA9PiB7cmV0dXJuIHsgJ3ZhbHVlJzogcGxheWVyLmlkLCAndGV4dCc6IHBsYXllci5uYW1lIH07fSkpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlKS5tYXAoKHBsYXllcikgPT4ge3JldHVybiBwbGF5ZXIubmFtZTt9KSk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgfTtcclxuICAgICAgICAgICAgLy8gICAgIHhoci5zZW5kKCk7XHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICBkYXRhQ2FsbGJhY2sodmFsKS50aGVuKChkYXRhKSA9PiB7Ly9wLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8qY2xvc2UgYW55IGFscmVhZHkgb3BlbiBsaXN0cyBvZiBhdXRvLWNvbXBsZXRlZCB2YWx1ZXMqL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZUFsbExpc3RzKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXZhbCkgeyByZXR1cm4gZmFsc2U7fVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Rm9jdXMgPSAtMTtcclxuXHJcbiAgICAgICAgICAgICAgICAvKmNyZWF0ZSBhIERJViBlbGVtZW50IHRoYXQgd2lsbCBjb250YWluIHRoZSBpdGVtcyAodmFsdWVzKToqL1xyXG4gICAgICAgICAgICAgICAgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XHJcbiAgICAgICAgICAgICAgICBhLnNldEF0dHJpYnV0ZShcImlkXCIsIHRoaXMubmFtZUlucHV0LmlkICsgXCItYXV0by1jb21wbGV0ZS1saXN0XCIpO1xyXG4gICAgICAgICAgICAgICAgYS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRybi1hdXRvLWNvbXBsZXRlLWl0ZW1zXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8qYXBwZW5kIHRoZSBESVYgZWxlbWVudCBhcyBhIGNoaWxkIG9mIHRoZSBhdXRvLWNvbXBsZXRlIGNvbnRhaW5lcjoqL1xyXG4gICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGEpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8qZm9yIGVhY2ggaXRlbSBpbiB0aGUgYXJyYXkuLi4qL1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dCwgdmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8qIFdoaWNoIGZvcm1hdCBkaWQgdGhleSBnaXZlIHVzLiAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVtpXSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IGRhdGFbaV1bJ3RleHQnXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBkYXRhW2ldWyd2YWx1ZSddO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgPSBkYXRhW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGRhdGFbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvKmNoZWNrIGlmIHRoZSBpdGVtIHN0YXJ0cyB3aXRoIHRoZSBzYW1lIGxldHRlcnMgYXMgdGhlIHRleHQgZmllbGQgdmFsdWU6Ki9cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGV4dC5zdWJzdHIoMCwgdmFsLmxlbmd0aCkudG9VcHBlckNhc2UoKSA9PT0gdmFsLnRvVXBwZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLypjcmVhdGUgYSBESVYgZWxlbWVudCBmb3IgZWFjaCBtYXRjaGluZyBlbGVtZW50OiovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKm1ha2UgdGhlIG1hdGNoaW5nIGxldHRlcnMgYm9sZDoqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiLmlubmVySFRNTCA9IFwiPHN0cm9uZz5cIiArIHRleHQuc3Vic3RyKDAsIHZhbC5sZW5ndGgpICsgXCI8L3N0cm9uZz5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYi5pbm5lckhUTUwgKz0gdGV4dC5zdWJzdHIodmFsLmxlbmd0aCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKmluc2VydCBhIGlucHV0IGZpZWxkIHRoYXQgd2lsbCBob2xkIHRoZSBjdXJyZW50IGFycmF5IGl0ZW0ncyB2YWx1ZToqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiLmlubmVySFRNTCArPSBcIjxpbnB1dCB0eXBlPSdoaWRkZW4nIHZhbHVlPSdcIiArIHZhbHVlICsgXCInPlwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYi5kYXRhc2V0LnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGIuZGF0YXNldC50ZXh0ID0gdGV4dDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qZXhlY3V0ZSBhIGZ1bmN0aW9uIHdoZW4gc29tZW9uZSBjbGlja3Mgb24gdGhlIGl0ZW0gdmFsdWUgKERJViBlbGVtZW50KToqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGl0ZW0gY2xpY2tlZCB3aXRoIHZhbHVlICR7ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudmFsdWV9YCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogaW5zZXJ0IHRoZSB2YWx1ZSBmb3IgdGhlIGF1dG9jb21wbGV0ZSB0ZXh0IGZpZWxkOiAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYW1lSW5wdXQudmFsdWUgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC50ZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYW1lSW5wdXQuZGF0YXNldC5zZWxlY3RlZElkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogY2xvc2UgdGhlIGxpc3Qgb2YgYXV0b2NvbXBsZXRlZCB2YWx1ZXMsIChvciBhbnkgb3RoZXIgb3BlbiBsaXN0cyBvZiBhdXRvY29tcGxldGVkIHZhbHVlczoqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZUFsbExpc3RzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYW1lSW5wdXQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuYXBwZW5kQ2hpbGQoYik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLypleGVjdXRlIGEgZnVuY3Rpb24gcHJlc3NlcyBhIGtleSBvbiB0aGUga2V5Ym9hcmQ6Ki9cclxuICAgICAgICB0aGlzLm5hbWVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMubmFtZUlucHV0LmlkICsgXCItYXV0by1jb21wbGV0ZS1saXN0XCIpO1xyXG4gICAgICAgICAgICBpZiAoeCkgeCA9IHguZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDQwKSB7XHJcbiAgICAgICAgICAgICAgICAvKklmIHRoZSBhcnJvdyBET1dOIGtleSBpcyBwcmVzc2VkLFxyXG4gICAgICAgICAgICAgICAgIGluY3JlYXNlIHRoZSBjdXJyZW50Rm9jdXMgdmFyaWFibGU6Ki9cclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEZvY3VzKys7XHJcbiAgICAgICAgICAgICAgICAvKmFuZCBhbmQgbWFrZSB0aGUgY3VycmVudCBpdGVtIG1vcmUgdmlzaWJsZToqL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRBY3RpdmUoeCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAzOCkgeyAvL3VwXHJcbiAgICAgICAgICAgICAgICAvKklmIHRoZSBhcnJvdyBVUCBrZXkgaXMgcHJlc3NlZCxcclxuICAgICAgICAgICAgICAgICBkZWNyZWFzZSB0aGUgY3VycmVudEZvY3VzIHZhcmlhYmxlOiovXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRGb2N1cy0tO1xyXG4gICAgICAgICAgICAgICAgLyphbmQgYW5kIG1ha2UgdGhlIGN1cnJlbnQgaXRlbSBtb3JlIHZpc2libGU6Ki9cclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQWN0aXZlKHgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgICAgICAgICAgIC8qSWYgdGhlIEVOVEVSIGtleSBpcyBwcmVzc2VkLCBwcmV2ZW50IHRoZSBmb3JtIGZyb20gYmVpbmcgc3VibWl0dGVkLCovXHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50Rm9jdXMgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8qYW5kIHNpbXVsYXRlIGEgY2xpY2sgb24gdGhlIFwiYWN0aXZlXCIgaXRlbToqL1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh4KSB4W3RoaXMuY3VycmVudEZvY3VzXS5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8qZXhlY3V0ZSBhIGZ1bmN0aW9uIHdoZW4gc29tZW9uZSBjbGlja3MgaW4gdGhlIGRvY3VtZW50OiovXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VBbGxMaXN0cyhlLnRhcmdldCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQWN0aXZlKHgpIHtcclxuICAgICAgICAvKmEgZnVuY3Rpb24gdG8gY2xhc3NpZnkgYW4gaXRlbSBhcyBcImFjdGl2ZVwiOiovXHJcbiAgICAgICAgaWYgKCF4KSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgLypzdGFydCBieSByZW1vdmluZyB0aGUgXCJhY3RpdmVcIiBjbGFzcyBvbiBhbGwgaXRlbXM6Ki9cclxuICAgICAgICB0aGlzLnJlbW92ZUFjdGl2ZSh4KTtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50Rm9jdXMgPj0geC5sZW5ndGgpIHRoaXMuY3VycmVudEZvY3VzID0gMDtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50Rm9jdXMgPCAwKSB0aGlzLmN1cnJlbnRGb2N1cyA9ICh4Lmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIC8qYWRkIGNsYXNzIFwiYXV0b2NvbXBsZXRlLWFjdGl2ZVwiOiovXHJcbiAgICAgICAgeFt0aGlzLmN1cnJlbnRGb2N1c10uY2xhc3NMaXN0LmFkZChcInRybi1hdXRvLWNvbXBsZXRlLWFjdGl2ZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVBY3RpdmUoeCkge1xyXG4gICAgICAgIC8qYSBmdW5jdGlvbiB0byByZW1vdmUgdGhlIFwiYWN0aXZlXCIgY2xhc3MgZnJvbSBhbGwgYXV0b2NvbXBsZXRlIGl0ZW1zOiovXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHhbaV0uY2xhc3NMaXN0LnJlbW92ZShcInRybi1hdXRvLWNvbXBsZXRlLWFjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VBbGxMaXN0cyhlbGVtZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjbG9zZSBhbGwgbGlzdHNcIik7XHJcbiAgICAgICAgLypjbG9zZSBhbGwgYXV0b2NvbXBsZXRlIGxpc3RzIGluIHRoZSBkb2N1bWVudCxcclxuICAgICAgICAgZXhjZXB0IHRoZSBvbmUgcGFzc2VkIGFzIGFuIGFyZ3VtZW50OiovXHJcbiAgICAgICAgbGV0IHggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidHJuLWF1dG8tY29tcGxldGUtaXRlbXNcIik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50ICE9PSB4W2ldICYmIGVsZW1lbnQgIT09IHRoaXMubmFtZUlucHV0KSB7XHJcbiAgICAgICAgICAgICAgICB4W2ldLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoeFtpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEZpcnN0LCBjaGVja3MgaWYgaXQgaXNuJ3QgaW1wbGVtZW50ZWQgeWV0LlxyXG5pZiAoIVN0cmluZy5wcm90b3R5cGUuZm9ybWF0KSB7XHJcbiAgICBTdHJpbmcucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVwbGFjZSgveyhcXGQrKX0vZywgZnVuY3Rpb24obWF0Y2gsIG51bWJlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGFyZ3NbbnVtYmVyXSAhPT0gJ3VuZGVmaW5lZCdcclxuICAgICAgICAgICAgICAgID8gYXJnc1tudW1iZXJdXHJcbiAgICAgICAgICAgICAgICA6IG1hdGNoXHJcbiAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
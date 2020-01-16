/* eslint-disable */
function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

import React, { useState, useRef, useEffect, useContext } from 'react';
import { createPortal } from 'react-dom';

___$insertStyle(".test-component {\n  background-color: white;\n  border: 1px solid black;\n  padding: 16px;\n  width: 360px;\n  text-align: center;\n}\n.test-component .heading {\n  font-size: 64px;\n}\n.test-component.test-component-secondary {\n  background-color: black;\n  color: white;\n}");

var TestComponent = function (_a) {
    var theme = _a.theme;
    return (React.createElement("div", { className: "test-component test-component-" + theme },
        React.createElement("h1", { className: "heading" }, "I'm the test component"),
        React.createElement("h2", null, "Made with love by Harvey")));
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

function getUuid() {
    function uuid(a, b) {
        for (b = a = ""; a++ < 36; b +=
            (a * 51) & 52
                ? (a ^ 15 ? 8 ^ (Math.random() * (a ^ 20 ? 16 : 4)) : 4).toString(16)
                : "-") { }
        return b;
    }
    return uuid(null, null);
}

// interface IContextProps {
//   add: (textContent: string, options: { position?: string, variant?: string, duration?: number }) => void;
//   remove: (id: string, position: string) => void;
// }
var ToastContext = React.createContext({
    add: function (textContent, options) { return null; },
    remove: function (id, position) { return null; }
});

var Timer = function (callback, delay) {
    var timerId;
    var start;
    var remaining = delay;
    this.pause = function () {
        window.clearTimeout(timerId);
        remaining -= Date.now() - start;
    };
    this.resume = function () {
        start = Date.now();
        window.clearTimeout(timerId);
        timerId = window.setTimeout(callback, remaining);
    };
    this.resume();
};
// TODO: Introduce prop-types and add types and default values
function Toast(props) {
    var children = props.children, variant = props.variant, duration = props.duration, remove = props.remove;
    var _a = useState(true), show = _a[0], setShow = _a[1];
    var _b = useState(false), isPaused = _b[0], setIsPaused = _b[1];
    var _c = useState(), timer = _c[0], setTimer = _c[1];
    var removeRef = useRef(null);
    removeRef.current = remove;
    useEffect(function () {
        if (!duration) {
            return;
        }
        var timer = new Timer(function () {
            setShow(false);
        }, duration);
        setTimer(timer);
        return function () { return clearTimeout(timer); };
    }, [duration]);
    var setToRemove = function () {
        setShow(false);
    };
    var onAnimationEnd = function () {
        if (!show) {
            removeRef.current();
        }
    };
    var onMouseOver = function () {
        if (isPaused || !timer) {
            return;
        }
        timer.pause();
        setIsPaused(true);
    };
    var onMouseLeave = function () {
        if (!isPaused || !timer) {
            return;
        }
        timer.resume();
        setIsPaused(false);
    };
    var wrapperClasses = classnames("\n    LittleToast\n    LittleToast-variant--" + variant + "\n  ", {
        "LittleToast--visible": show,
        "LittleToast--hidden": !show
    });
    return (React.createElement("div", { className: wrapperClasses, onClick: setToRemove, onAnimationEnd: onAnimationEnd, onMouseOver: onMouseOver, onMouseLeave: onMouseLeave },
        React.createElement("div", { className: "LittleToast__text" }, children)));
}

___$insertStyle(".LittleToast-container {\n  position: fixed;\n  z-index: 9999;\n}\n\n.LittleToast-container--topRight {\n  top: 8px;\n  right: 8px;\n}\n\n.LittleToast-container--topLeft {\n  top: 8px;\n  left: 8px;\n}\n\n.LittleToast-container--bottomRight {\n  bottom: 8px;\n  right: 8px;\n}\n\n.LittleToast-container--bottomLeft {\n  bottom: 8px;\n  left: 8px;\n}\n\n.LittleToast-container--top {\n  top: 8px;\n  left: 50%;\n  width: auto;\n  -webkit-transform: translateX(-50%);\n  -moz-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  -o-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n\n.LittleToast-container--bottom {\n  bottom: 8px;\n  left: 50%;\n  width: auto;\n  -webkit-transform: translateX(-50%);\n  -moz-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  -o-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n\n/* THE ACTUAL TOAST */\n.LittleToast {\n  position: relative;\n  overflow: hidden;\n  margin-top: 8px;\n  width: 280px;\n  height: 48px;\n  padding: 16px 24px 16px 16px;\n  border-radius: 4px;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);\n  cursor: pointer;\n}\n\n.LittleToast__close-button {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  color: white;\n}\n\n/* VARIANTS */\n.LittleToast-variant--default {\n  background: white;\n}\n\n.LittleToast-variant--primary {\n  background: blueviolet;\n  color: white;\n}\n\n.LittleToast-variant--danger {\n  background: indianred;\n  color: white;\n}\n\n.LittleToast-variant--success {\n  background: greenyellow;\n}\n\n/* Animations */\n.LittleToast--visible {\n  animation: fadeIn 500ms forwards;\n  color: white;\n}\n\n.LittleToast--hidden {\n  animation: fadeOut 500ms forwards;\n  color: white;\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fadeOut {\n  0% {\n    opacity: 1;\n  }\n  80% {\n    opacity: 0.5;\n    height: 0px;\n    padding-top: 0px;\n    padding-bottom: 0px;\n    margin-top: 0px;\n  }\n  90% {\n    opacity: 0.1;\n    height: 0px;\n    padding-top: 0px;\n    padding-bottom: 0px;\n    margin-top: 0px;\n  }\n  100% {\n    opacity: 0;\n    height: 0px;\n    padding-top: 0px;\n    padding-bottom: 0px;\n    margin-top: 0px;\n  }\n}");

var ToastContainer = function (props) { return (React.createElement("div", __assign({ className: classnames("LittleToast-container", "LittleToast-container--" + props.position, {}) }, props))); };
function withToastProvider(Component) {
    function WithToastProvider(props) {
        var _a = useState({
            topLeft: [],
            topRight: [],
            bottomLeft: [],
            bottomRight: [],
            top: [],
            bottom: [],
        }), toasts = _a[0], setToasts = _a[1];
        useEffect(function () {
            console.log("toasts: ", toasts);
        }, [toasts]);
        var add = function (textContent, options) {
            var _a;
            console.log(' add @ withToastProvider: ', textContent);
            var id = getUuid();
            var position = options.position ? options.position : "topRight";
            var newToast = __assign({ id: id, textContent: textContent, position: position }, options);
            console.log('newToast: ', newToast);
            setToasts(__assign(__assign({}, toasts), (_a = {}, _a[position] = __spreadArrays(toasts[position], [newToast]), _a)));
        };
        var remove = function (id, position) {
            var _a;
            var newToasts = toasts[position].filter(function (t) { return t.id !== id; });
            setToasts(__assign(__assign({}, toasts), (_a = {}, _a[position] = newToasts, _a)));
        };
        return (React.createElement(ToastContext.Provider, { value: { add: add, remove: remove } },
            React.createElement(Component, __assign({}, props)),
            createPortal(React.createElement(React.Fragment, null,
                React.createElement(ToastContainer, { position: "topRight" }, toasts.topRight.map(function (t) { return (React.createElement(Toast, { key: t.id, variant: t.variant, duration: t.duration, remove: function () { return remove(t.id, 'topRight'); } }, t.textContent + ": " + t.id)); })),
                React.createElement(ToastContainer, { position: "topLeft" }, toasts.topLeft.map(function (t) { return (React.createElement(Toast, { key: t.id, variant: t.variant, duration: t.duration, remove: function () { return remove(t.id, 'topLeft'); } }, t.textContent + ": " + t.id)); }))), document.body)));
    }
    return WithToastProvider;
}

function useToast() {
    var context = useContext(ToastContext);
    return { add: context.add, remove: context.remove };
}

export { TestComponent, useToast, withToastProvider };

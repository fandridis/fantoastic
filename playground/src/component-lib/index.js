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

var ToastContext = React.createContext({
    add: function (content, options) { return null; },
    remove: function (id) { return null; }
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
function Toast(props) {
    var children = props.children, variant = props.variant, duration = props.duration, withCloseIcon = props.withCloseIcon, remove = props.remove;
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
    var onAnimationEnd = function () {
        if (!show) {
            removeRef.current();
        }
    };
    var wrapperClasses = classnames("\n    Fantoastic\n    Fantoastic-variant--" + variant + "\n  ", {
        "Fantoastic--visible": show,
        "Fantoastic--hidden": !show
    });
    return (React.createElement("div", { className: wrapperClasses, onAnimationEnd: onAnimationEnd, onMouseOver: onMouseOver, onMouseLeave: onMouseLeave },
        React.createElement("div", { className: "Fantoastic-body" },
            React.createElement("div", { className: "Fantoastic__content-wrapper" },
                React.createElement("div", { className: "Fantoastic__content" }, children)),
            withCloseIcon &&
                React.createElement("div", { className: "Fantoastic__closeIcon-wrapper", onClick: setToRemove },
                    React.createElement("div", { className: "Fantoastic__closeIcon Fantoastic__closeIcon--rounded" })))));
}

var TOAST_POSITIONS = ['topRight', 'topLeft', 'bottomRight', 'bottomLeft', 'top', 'bottom'];
var TOAST_VARIANTS = ['default', 'primary', 'success', 'danger'];

___$insertStyle("/* VARIABLES */\n/* TOAST CONTAINERS */\n.Fantoastic-container {\n  position: fixed;\n  z-index: 9999;\n  max-width: 640px;\n}\n\n.Fantoastic-container--topRight {\n  top: 8px;\n  right: 8px;\n}\n\n.Fantoastic-container--topLeft {\n  top: 8px;\n  left: 8px;\n}\n\n.Fantoastic-container--bottomRight {\n  bottom: 8px;\n  right: 8px;\n}\n\n.Fantoastic-container--bottomLeft {\n  bottom: 8px;\n  left: 8px;\n}\n\n.Fantoastic-container--top {\n  top: 8px;\n  left: 50%;\n  width: auto;\n  -webkit-transform: translateX(-50%);\n  -moz-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  -o-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n\n.Fantoastic-container--bottom {\n  bottom: 8px;\n  left: 50%;\n  width: auto;\n  -webkit-transform: translateX(-50%);\n  -moz-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  -o-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n\n/* THE ACTUAL TOAST */\n.Fantoastic {\n  position: relative;\n  overflow: hidden;\n  margin-top: 8px;\n  padding: 16px 12px;\n  border-radius: 4px;\n  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);\n}\n\n/* VARIANTS */\n.Fantoastic-variant--default {\n  background-color: white;\n  border-left: 8px solid white;\n}\n\n.Fantoastic-variant--primary {\n  background-color: white;\n  border-left: 8px solid purple;\n}\n\n.Fantoastic-variant--success {\n  background-color: white;\n  border-left: 8px solid green;\n}\n\n.Fantoastic-variant--danger {\n  background-color: white;\n  border-left: 8px solid red;\n}\n\n/* ANIMATIONS */\n.Fantoastic--visible {\n  animation: fadeIn 500ms forwards;\n}\n\n.Fantoastic--hidden {\n  animation: fadeOut 1000ms forwards;\n}\n\n/* BODY */\n.Fantoastic-body {\n  display: flex;\n  align-items: center;\n}\n\n.Fantoastic__content-wrapper {\n  padding-right: 24px;\n}\n\n.Fantoastic__closeIcon-wrapper {\n  position: absolute;\n  top: 4px;\n  right: 6px;\n  cursor: pointer;\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fadeOut {\n  0% {\n    opacity: 1;\n  }\n  30% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n    padding: 0;\n    margin-top: 0;\n    height: 0px;\n  }\n}\n.Fantoastic__closeIcon {\n  position: relative;\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  overflow: hidden;\n}\n.Fantoastic__closeIcon::before, .Fantoastic__closeIcon::after {\n  content: \"\";\n  position: absolute;\n  height: 2px;\n  width: 100%;\n  top: 50%;\n  left: 0;\n  margin-top: -1px;\n  background: grey;\n  transition: all 100ms ease-in;\n}\n.Fantoastic__closeIcon::before {\n  transform: rotate(45deg);\n}\n.Fantoastic__closeIcon::after {\n  transform: rotate(-45deg);\n}\n.Fantoastic__closeIcon.hairline::before, .Fantoastic__closeIcon.hairline::after {\n  height: 1px;\n}\n.Fantoastic__closeIcon:hover::before, .Fantoastic__closeIcon:hover::after {\n  background: black;\n}");

var DEFAULTS = {
    duration: 5000,
    variant: TOAST_VARIANTS[0],
    position: TOAST_POSITIONS[0],
};
var ToastContainer = function (props) { return (React.createElement("div", __assign({ className: classnames("Fantoastic-container", "Fantoastic-container--" + props.position) }, props))); };
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
        var getDuration = function (options) {
            if (options.persist) {
                return 0;
            }
            return options.duration ? options.duration : DEFAULTS.duration;
        };
        var add = function (content, options) {
            var _a;
            if (options === void 0) { options = {}; }
            var position = options.position ? options.position : DEFAULTS.position;
            var variant = options.variant ? options.variant : DEFAULTS.variant;
            var duration = getDuration(options);
            var id = position + ':' + getUuid();
            var newToast = {
                id: id,
                content: content,
                options: __assign(__assign({}, options), { duration: duration,
                    variant: variant })
            };
            setToasts(__assign(__assign({}, toasts), (_a = {}, _a[position] = __spreadArrays(toasts[position], [newToast]), _a)));
        };
        var remove = function (id) {
            var _a;
            var position = id.split(':')[0];
            var remainingToasts = toasts[position].filter(function (t) { return t.id !== id; });
            setToasts(__assign(__assign({}, toasts), (_a = {}, _a[position] = remainingToasts, _a)));
        };
        return (React.createElement(ToastContext.Provider, { value: { add: add, remove: remove } },
            React.createElement(Component, __assign({}, props)),
            createPortal(React.createElement(React.Fragment, null, TOAST_POSITIONS.map(function (position) {
                return React.createElement(ToastContainer, { key: position, position: position }, toasts[position].map(function (t) { return (React.createElement(Toast, { key: t.id, variant: t.options.variant, duration: t.options.duration, withCloseIcon: t.options.withCloseIcon, remove: function () { return remove(t.id); } }, t.content)); }));
            })), document.body)));
    }
    return WithToastProvider;
}

function useToast() {
    var context = useContext(ToastContext);
    return { add: context.add, remove: context.remove };
}

export { useToast, withToastProvider };

import React, { useEffect, useRef, useState } from "react";
import classnames from "classnames";

interface ToastProps {
  children: string; // TODO: Think of making a node
  variant: string;
  duration: number;
  remove: any // () => void;
  // remove: ({ type }: { type: string }) => void;
}

interface TimerProps {
  pause: () => {},
  resume: () => {}
}

const Timer = function (this: any, callback: any, delay: any) {
  let timerId: any;
  let start: any;
  let remaining = delay;

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
function Toast(this: any, props: ToastProps) {
  const { children, variant = 'default', duration, remove } = props;

  const [show, setShow] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [timer, setTimer] = useState<TimerProps>();

  const removeRef = useRef(null);
  removeRef.current = remove;

  useEffect(() => {
    if (!duration) {
      return;
    }

    const timer = new (Timer as any)(() => {
      setShow(false);
    }, duration);

    setTimer(timer);

    return () => clearTimeout(timer);
  }, [duration]);

  const setToRemove = () => {
    setShow(false);
  };

  const onAnimationEnd = () => {
    if (!show) {
      removeRef.current();
    }
  };

  const onMouseOver = () => {
    if (isPaused || !timer) {
      return;
    }

    timer.pause();

    setIsPaused(true);
  };

  const onMouseLeave = () => {
    if (!isPaused || !timer) {
      return;
    }

    timer.resume();

    setIsPaused(false);
  };

  const wrapperClasses = classnames(
    `
    LittleToast
    LittleToast-variant--${variant}
  `,
    {
      "LittleToast--visible": show,
      "LittleToast--hidden": !show
    }
  );
  return (
    <div
      className={wrapperClasses}
      onClick={setToRemove}
      onAnimationEnd={onAnimationEnd}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <div className="LittleToast__text">{children}</div>
    </div>
  );
}

export default Toast;

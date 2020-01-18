import React, { useEffect, useRef, useState, ReactNode } from "react";
import classnames from "classnames";

interface ToastProps {
  children: ReactNode;
  variant: string;
  duration: number;
  withCloseIcon: boolean;
  remove: (id: string) => void
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

function Toast(this: any, props: ToastProps) {
  const { children, variant, duration, withCloseIcon, remove } = props;
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

  const onAnimationEnd = () => {
    if (!show) {
      removeRef.current();
    }
  };

  const wrapperClasses = classnames(
    `
    Fantoastic
    Fantoastic-variant--${variant}
  `,
    {
      "Fantoastic--visible": show,
      "Fantoastic--hidden": !show
    }
  );

  return (
    <div
      className={wrapperClasses}
      onAnimationEnd={onAnimationEnd}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <div className="Fantoastic-body">
        <div className="Fantoastic__content-wrapper">
          <div className="Fantoastic__content">{children}</div>
        </div>
        {withCloseIcon &&
          <div className="Fantoastic__closeIcon-wrapper" onClick={setToRemove}>
            <div className="Fantoastic__closeIcon Fantoastic__closeIcon--rounded"></div>
          </div>
        }
      </div>
    </div>
  );
}

export default Toast;

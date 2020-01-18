import React, { useState, ReactNode } from "react";
import classnames from "classnames";
import { createPortal } from "react-dom";
import { getUuid } from "./helpers";
import ToastContext from "./context";
import ToastComponent from "./Toast";
import { Toast, ToastOptions, TOAST_POSITIONS } from './types';
import "./toast.scss";

const DEFAULTS = {
  duration: 5000,
  variant: 'default',
  position: 'topRight',
}

interface ToastState {
  topLeft: Toast[],
  topRight: Toast[],
  bottomLeft: Toast[],
  bottomRight: Toast[],
  top: Toast[],
  bottom: Toast[]
}

const ToastContainer = (props: any) => (
  <div
    className={classnames(
      "Fantoastic-container",
      `Fantoastic-container--${props.position}`
    )}
    {...props}
  />
);

function withToastProvider(Component: any) {
  function WithToastProvider(props: any) {
    const [toasts, setToasts] = useState<ToastState>({
      topLeft: [],
      topRight: [],
      bottomLeft: [],
      bottomRight: [],
      top: [],
      bottom: [],
    })

    const getDuration = (options: ToastOptions) => {
      if (options.persist) {
        return 0;
      }

      return options.duration ? options.duration : DEFAULTS.duration;
    }

    const add = (content: ReactNode, options: ToastOptions = {}) => {
      const position = options.position ? options.position : DEFAULTS.position;
      const variant = options.variant ? options.variant : DEFAULTS.variant;
      const duration = getDuration(options);
      const id = position + ':' + getUuid();

      const newToast: Toast = {
        id,
        content,
        options: {
          ...options,
          duration,
          variant,
        }
      }

      setToasts({
        ...toasts,
        [position]: [...toasts[position], newToast]
      });
    };

    const remove = (id: string) => {
      const position = id.split(':')[0];
      const remainingToasts = toasts[position].filter((t: Toast) => t.id !== id);

      setToasts({ ...toasts, [position]: remainingToasts });
    };

    return (
      <ToastContext.Provider value={{ add, remove }}>
        <Component {...props} />
        {createPortal(
          <>
            {TOAST_POSITIONS.map(position =>
              <ToastContainer key={position} position={position}>
                {toasts[position].map((t: Toast) => (
                  <ToastComponent
                    key={t.id}
                    variant={t.options.variant}
                    duration={t.options.duration}
                    withCloseIcon={t.options.withCloseIcon}
                    remove={() => remove(t.id)}
                  >
                    {t.content}
                  </ToastComponent>
                ))}
              </ToastContainer>
            )}
          </>,
          document.body
        )
        }
      </ToastContext.Provider >
    );
  }

  return WithToastProvider;
}

export default withToastProvider;

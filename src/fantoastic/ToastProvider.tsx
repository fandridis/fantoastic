import React, { useState } from "react";
import classnames from "classnames";
import { createPortal } from "react-dom";
import { getUuid } from "./helpers";
import ToastContext from "./context";
import ToastComponent from "./Toast";
import { Toast, ToastOptions, TOAST_POSITIONS } from './types';
import "./toast.scss";

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
      "LittleToast-container",
      `LittleToast-container--${props.position}`,
      {}
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

      return options.duration ? options.duration : 6000; // TODO: Add default duration as a constant somewhere
    }

    const add = (textContent: string, options: ToastOptions = {}) => {

      console.log(' add @ withToastProvider: ', textContent);

      const position = options.position ? options.position : 'topRight';
      const duration = getDuration(options);
      const id = position + ':' + getUuid();

      const newToast: Toast = {
        id,
        textContent,
        options: { duration, ...options }
      }

      console.log('newToast: ', newToast);

      setToasts({
        ...toasts,
        [position]: [...toasts[position], newToast]
      });
    };

    const remove = (id: string) => {
      console.log('Removing: ', id);
      const position = id.split(':')[0];

      const newToasts = toasts[position].filter((t: Toast) => t.id !== id);

      setToasts({ ...toasts, [position]: newToasts });
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
                    remove={() => remove(t.id)}
                  >
                    {t.textContent + ": " + t.id}
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

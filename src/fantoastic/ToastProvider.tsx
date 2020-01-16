import React, { useEffect, useState } from "react";
import classnames from "classnames";
import { createPortal } from "react-dom";
import { getUuid } from "./helpers";
import ToastContext from "./context";
import Toast from "./Toast";
import { IToast } from './types';
import "./toast.scss";

interface IToastState {
  topLeft: IToast[],
  topRight: IToast[],
  bottomLeft: IToast[],
  bottomRight: IToast[],
  top: IToast[],
  bottom: IToast[]
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
    const [toasts, setToasts] = useState<any>({
      topLeft: [],
      topRight: [],
      bottomLeft: [],
      bottomRight: [],
      top: [],
      bottom: [],
    })

    useEffect(() => {
      console.log("toasts: ", toasts);
    }, [toasts]);

    const add = (textContent: string, options: { position?: string, variant?: string, duration?: number }) => { // TODO: options elsewhere

      console.log(' add @ withToastProvider: ', textContent);
      const id = getUuid();

      const position = options.position ? options.position : "topRight";
      const newToast = { id, textContent, position, ...options };

      console.log('newToast: ', newToast);

      setToasts({
        ...toasts,
        [position]: [...toasts[position], newToast]
      });
    };

    const remove = (id: string, position: string) => {
      const newToasts = toasts[position].filter((t: IToast) => t.id !== id);

      setToasts({ ...toasts, [position]: newToasts });
    };

    return (
      <ToastContext.Provider value={{ add, remove }}>
        <Component {...props} />

        {createPortal(
          <>
            <ToastContainer position="topRight">
              {toasts.topRight.map((t: IToast) => (
                <Toast
                  key={t.id}
                  variant={t.variant}
                  duration={t.duration}
                  remove={() => remove(t.id, 'topRight')}
                >
                  {t.textContent + ": " + t.id}
                </Toast>
              ))}
            </ToastContainer>

            <ToastContainer position="topLeft">
              {toasts.topLeft.map((t: IToast) => (
                <Toast
                  key={t.id}
                  variant={t.variant}
                  duration={t.duration}
                  remove={() => remove(t.id, 'topLeft')}
                >
                  {t.textContent + ": " + t.id}
                </Toast>
              ))}
            </ToastContainer>
          </>,
          document.body
        )}
      </ToastContext.Provider>
    );
  }

  return WithToastProvider;
}

export default withToastProvider;

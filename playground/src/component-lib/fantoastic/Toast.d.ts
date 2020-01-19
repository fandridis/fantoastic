import { ReactNode } from "react";
interface ToastProps {
    children: ReactNode;
    variant: string;
    duration: number;
    withCloseIcon?: boolean;
    remove: (id: string) => void;
}
declare function Toast(this: any, props: ToastProps): JSX.Element;
export default Toast;

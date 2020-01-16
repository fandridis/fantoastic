/// <reference types="react" />
interface ToastProps {
    children: string;
    variant: string;
    duration: number;
    remove: any;
}
declare function Toast(this: any, props: ToastProps): JSX.Element;
export default Toast;

/// <reference types="react" />
declare function useToast(): {
    add: (content: import("react").ReactNode, options?: import("./types").ToastOptions) => any;
    remove: (id: string) => any;
};
export default useToast;

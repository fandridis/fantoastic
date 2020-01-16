declare function useToast(): {
    add: (textContent: string, options?: import("./types").ToastOptions) => any;
    remove: (id: string) => any;
};
export default useToast;

declare function useToast(): {
    add: (textContent: string, options: {
        position?: string;
        variant?: string;
        duration?: number;
    }) => void;
    remove: (id: string, position: string) => void;
};
export default useToast;

import { useRef, useEffect } from "react";

const useFocus = () => {
    const focusRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(
        null
    );

    useEffect(() => {
        focusRef.current?.focus();
    }, []);

    return focusRef;
};

export { useFocus };

const useLocalStorage = () => {
    const setItem = (key: string, value: unknown) => {
        localStorage.setItem(key, JSON.stringify(value));
    };

    const getItem = (key: string) => {
        const item = localStorage.getItem(key);
        if (item) {
            return JSON.parse(item);
        } else {
            return "Not Found";
        }
    };

    const removeItem = (key: string) => {
        localStorage.removeItem(key);
    };

    return { setItem, getItem, removeItem };
};

export { useLocalStorage };

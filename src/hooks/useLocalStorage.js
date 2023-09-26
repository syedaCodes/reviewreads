import { useEffect, useState } from "react";

export function useLocalStorage(initialState, args) {
    const [value, setValue] = useState(function () {
        const items = localStorage.getItem(args);
        const fromStorage = JSON.parse(items);
        return fromStorage ? fromStorage : initialState;
    });

    useEffect(() => {
        if (value) localStorage.setItem(args, JSON.stringify(value));
    }, [value, args]);

    return [value, setValue];
}

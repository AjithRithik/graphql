import { useState, useEffect } from "react";

function Debounce(value) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, 800);
        return () => {
            clearTimeout(handler);
        };
    }, [value]);
    return debouncedValue;
}

export default Debounce;

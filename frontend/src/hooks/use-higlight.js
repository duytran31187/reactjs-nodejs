import { useEffect, useState } from "react";
const useIsHighlight = (items) => {
    const [isHighlight, setIsHighlight] = useState(false);
    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setIsHighlight(true);
        const timer = setTimeout(() => {
            setIsHighlight(false);
        }, 300);
        return () => { // this is called clean up function in reactjs
            clearTimeout(timer);
        };

    }, [items]);
    return isHighlight;
};
export default useIsHighlight;
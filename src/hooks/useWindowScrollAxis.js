import { useEffect, useRef, useState } from "react";

export function useWindowScrollAxis(data) {
    const [scrollAxis, setScrollAxis] = useState(false);
    const windowWidthRef = useRef(null);

    useEffect(() => {
        const checkScreenWidth = () => {
            windowWidthRef.current = window.innerWidth <= 950;
            setScrollAxis((axis) =>
                axis !== windowWidthRef.current ? windowWidthRef.current : axis
            );
        };

        checkScreenWidth(); //init

        window.addEventListener("resize", checkScreenWidth);

        return () => {
            window.removeEventListener("resize", checkScreenWidth);
        };
    }, [data]);

    return scrollAxis;
}

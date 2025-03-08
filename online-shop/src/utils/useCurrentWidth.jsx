import { useState, useEffect } from "react";

const useCurrentWidth = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    const updateWidth = () => {
        const width = window.innerWidth;

        setIsMobile(width <= 768);
        setIsTablet(width > 768 && width <= 1440);
        setIsDesktop(width > 1440);
    };

    useEffect(() => {
        updateWidth();
        window.addEventListener('resize', updateWidth);

        return () => {
            window.removeEventListener('resize', updateWidth);
        }
    }, []);

    return { isMobile, isTablet, isDesktop };
};

export default useCurrentWidth;
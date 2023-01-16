import React, {useEffect, useState} from 'react';

const useScrollOffset = () => {
    const [offset, setOffset] = useState<number>(0);

    const handleScroll = () => {
        setOffset(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return offset;
};

export default useScrollOffset;

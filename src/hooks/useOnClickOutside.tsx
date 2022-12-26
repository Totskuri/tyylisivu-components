import React, {RefObject, useEffect} from 'react';

const useOnClickOutside = (ref: RefObject<HTMLElement>, handler: (e: MouseEvent | TouchEvent) => void) => {
    const listener = (e: MouseEvent | TouchEvent) => {
        if (!ref || !ref.current || ref.current.contains(e.target as Node)) {
            return;
        }
        handler(e);
    };
    useEffect(
        () => {
            document.addEventListener('mousedown', listener);
            document.addEventListener('touchstart', listener);
            return () => {
                document.removeEventListener('mousedown', listener);
                document.removeEventListener('touchstart', listener);
            };
        }, [ref, handler]);
};

export default useOnClickOutside;

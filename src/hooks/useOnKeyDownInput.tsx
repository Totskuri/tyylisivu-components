import React, {RefObject} from 'react';
import KeyboardListener, {KEY_ENTER, KEY_ESCAPE} from "../utils/KeyboardListener";

const useOnKeyDownInput = (ref: RefObject<HTMLElement>, onSubmit: () => void) => {
    const handleExit = (): void => {
        if (ref && ref.current) {
            ref.current.blur();
        }
    };

    return (e: React.KeyboardEvent): void => {
        const keyboardListener = new KeyboardListener([
            {key: KEY_ENTER, action: onSubmit},
            {key: KEY_ESCAPE, action: handleExit},
        ]);
        keyboardListener.listen(e);
    };
};

export default useOnKeyDownInput;

import React, {useRef} from "react";
import {NumberInputProps} from "./NumberInput.types";
import KeyboardListener, {KEY_ENTER, KEY_ESCAPE} from "../../../utils/KeyboardListener";
import styles from '../../../css/input.module.css';
import classNames from "../../../utils/classNames";

const NumberInput = ({
    value,
    onChange,
    min = undefined,
    max = undefined,
    placeholder = '',
    readOnly = false,
    autoFocus = false,
    maxLength = 524288,
    onSubmit = () => {},
    className = '',
    style = {},
    enterKeyHint = undefined,
}: NumberInputProps) => {
    const ref = useRef<HTMLInputElement>(null);
    const getReadOnlyClass = () => readOnly ? styles.readonly : '';

    const handleExit = (): void => {
        if (ref && ref.current) {
            ref.current.blur();
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent): void => {
        const keyboardListener = new KeyboardListener([
            {key: KEY_ENTER, action: onSubmit},
            {key: KEY_ESCAPE, action: handleExit},
        ]);
        keyboardListener.listen(e);
    };

    return (
        <input
            ref={ref}
            type="number"
            className={classNames([
                styles.input,
                getReadOnlyClass(),
                className
            ])}
            style={style}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            min={min}
            max={max}
            readOnly={readOnly}
            maxLength={maxLength}
            autoFocus={autoFocus}
            onKeyDown={handleKeyPress}
            autoComplete="off"
            enterKeyHint={enterKeyHint}
        />
    );
};

export default NumberInput;

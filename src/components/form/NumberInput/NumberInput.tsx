import React, {useRef} from "react";
import type {NumberInputProps} from "./NumberInput.types";
import KeyboardListener, {KEY_ENTER, KEY_ESCAPE} from "../../../utils/KeyboardListener";
import '../../../css/variables.css';
import styles from '../../../css/input.module.css';
import classNames from "../../../utils/classNames";

/**
 * @param value
 * @param onChange
 * @param min
 * @param max
 * @param readOnly
 * @param autoFocus
 * @param onSubmit
 * @param className
 * @param style
 * @param enterKeyHint
 * @constructor
 */
const NumberInput = ({
    value,
    onChange,
    min = undefined,
    max = undefined,
    readOnly = false,
    autoFocus = false,
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
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            min={min}
            max={max}
            readOnly={readOnly}
            autoFocus={autoFocus}
            onKeyDown={handleKeyPress}
            autoComplete="off"
            enterKeyHint={enterKeyHint}
        />
    );
};

export default NumberInput;

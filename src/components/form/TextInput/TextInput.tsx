import React, {useRef} from "react";
import type {TextInputProps} from "./TextInput.types";
import KeyboardListener, {KEY_ENTER, KEY_ESCAPE} from "../../../utils/KeyboardListener";
import '../../../css/variables.css';
import styles from '../../../css/input.module.css';
import classNames from "../../../utils/classNames";

/**
 * @param value
 * @param onChange
 * @param placeholder
 * @param readOnly
 * @param autoFocus
 * @param maxLength
 * @param onSubmit
 * @param className
 * @param style
 * @param enterKeyHint
 * @constructor
 */
const TextInput = ({
    value,
    onChange,
    placeholder = '',
    readOnly = false,
    autoFocus = false,
    maxLength = 524288,
    onSubmit = () => {},
    className = '',
    style = {},
    enterKeyHint = undefined,
}: TextInputProps) => {
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
            type="text"
            className={classNames([
                styles.input,
                getReadOnlyClass(),
                className
            ])}
            style={style}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            readOnly={readOnly}
            maxLength={maxLength}
            autoFocus={autoFocus}
            onKeyDown={handleKeyPress}
            autoComplete="off"
            enterKeyHint={enterKeyHint}
        />
    );
};

export default TextInput;

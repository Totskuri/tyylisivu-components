import React, {useRef} from "react";
import type {TextInputProps} from "./TextInput.types";
import '../../../css/variables.css';
import styles from '../../../css/input.module.css';
import classNames from "../../../utils/classNames";
import useOnKeyDownInput from "../../../hooks/useOnKeyDownInput";

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
 * @param autoComplete
 * @param onFocus
 * @param onBlur
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
    autoComplete = 'off',
    onFocus = () => {},
    onBlur = () => {}
}: TextInputProps) => {
    const ref = useRef<HTMLInputElement>(null);
    const useKeyPress = useOnKeyDownInput(ref, onSubmit);
    const getReadOnlyClass = () => readOnly ? styles.readonly : '';
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
            onKeyDown={useKeyPress}
            autoComplete={autoComplete}
            enterKeyHint={enterKeyHint}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    );
};

export default TextInput;

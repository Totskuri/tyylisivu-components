import React, {useRef} from "react";
import type {NumberInputProps} from "./NumberInput.types";
import '../../../css/variables.css';
import styles from '../../../css/input.module.css';
import classNames from "../../../utils/classNames";
import useOnKeyDownInput from "../../../hooks/useOnKeyDownInput";

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
 * @param autoComplete
 * @param onFocus
 * @param onBlur
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
    autoComplete = 'off',
    onFocus = () => {},
    onBlur = () => {}
}: NumberInputProps) => {
    const ref = useRef<HTMLInputElement>(null);
    const useKeyPress = useOnKeyDownInput(ref, onSubmit);
    const getReadOnlyClass = () => readOnly ? styles.readonly : '';
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
            onKeyDown={useKeyPress}
            autoComplete={autoComplete}
            enterKeyHint={enterKeyHint}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    );
};

export default NumberInput;

import React, {useRef} from "react";
import type {TextareaProps} from "./Textarea.types";
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
 * @param rows
 * @param onSubmit
 * @param className
 * @param style
 * @param autoComplete
 * @param onFocus
 * @param onBlur
 * @constructor
 */
const Textarea = ({
    value,
    onChange,
    placeholder = '',
    readOnly = false,
    autoFocus = false,
    maxLength = 524288,
    rows = 4,
    onSubmit = () => {},
    className = '',
    style = {},
    autoComplete = 'off',
    onFocus = () => {},
    onBlur = () => {}
}: TextareaProps) => {
    const ref = useRef<HTMLTextAreaElement>(null);
    const useKeyPress = useOnKeyDownInput(ref, onSubmit);
    const getReadOnlyClass = () => readOnly ? styles.readonly : '';
    return (
        <textarea
            ref={ref}
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
            rows={rows}
            autoFocus={autoFocus}
            onKeyDown={useKeyPress}
            autoComplete={autoComplete}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    );
};

export default Textarea;

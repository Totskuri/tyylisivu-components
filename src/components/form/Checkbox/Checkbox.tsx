import React from "react";
import '../../../css/variables.css';
import classNames from "../../../utils/classNames";
import {CheckboxProps} from "./Checkbox.types";

const TextInput = ({
    checked,
    onChange,
    disabled = false,
    className = '',
    style = {},
}: CheckboxProps) => {
    return (
        <input
            type="checkbox"
            className={classNames([
                className
            ])}
            style={style}
            checked={checked}
            onChange={() => {onChange(!checked)}}
            disabled={disabled}
        />
    );
};

export default TextInput;

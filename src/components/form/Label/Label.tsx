import React from "react";
import type {LabelProps} from "./Label.types";
import styles from './Label.module.css';
import classNames from "../../../utils/classNames";

const Label = ({
        children,
        text = '',
        className = '',
        style = {},
}: LabelProps) => {
    return (
        <label
            className={classNames([
                styles.label,
                className
            ])}
            style={style}
        >
            {text.length > 0 && (
                <span className={styles.text}>
                    {text}
                </span>
            )}
            {children}
        </label>
    );
};

export default Label;

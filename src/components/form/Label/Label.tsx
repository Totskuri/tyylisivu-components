import React from "react";
import type {LabelProps} from "./Label.types";
import '../../../css/variables.css';
import styles from './Label.module.css';
import classNames from "../../../utils/classNames";

/**
 * @param children
 * @param text
 * @param className
 * @param style
 * @constructor
 */
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

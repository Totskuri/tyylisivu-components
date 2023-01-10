import React from "react";
import type {BadgeProps} from "./Badge.types";
import '../../../css/variables.css';
import classNames from "../../../utils/classNames";
import styles from "./Badge.module.css";

/**
 * @param labels
 * @param className
 * @param style
 * @constructor
 */
const Badge = ({
    labels,
    className = '',
    style = {},
}: BadgeProps) => {
    return (
        <div
            className={classNames([
                styles.container,
                className
            ])}
            style={style}
        >
            {labels.map((label, index) => {
                return (
                    <div
                        key={`${label}_${index}`}
                        className={styles.badge}
                    >
                        {label}
                    </div>
                );
            })}
        </div>
    );
};

export default Badge;

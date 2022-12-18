import React from "react";
import {ButtonProps} from "./Button.types";
import styles from './Button.module.css';

const Button = ({
    children,
    onClick,
    disabled = false,
    className = '',
}: ButtonProps) => {
    return (
        <button
            role="button"
            onClick={(e) => onClick(e)}
            disabled={disabled}
            className={`${styles.button} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;

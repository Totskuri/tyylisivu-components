import React from "react";
import {ButtonProps} from "./Button.types";
import styles from './Button.module.css';

const Button = ({
    children,
    onClick,
    disabled = false,
    className = '',
}: ButtonProps) => {
    const getDisabledClass = () => disabled ? styles.disabled : '';
    return (
        <button
            type="button"
            onClick={(e) => onClick(e)}
            disabled={disabled}
            className={`${styles.button} ${getDisabledClass()} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;

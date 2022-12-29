import React from "react";
import type {ButtonProps} from "./Button.types";
import '../../../css/variables.css';
import styles from './Button.module.css';
import classNames from '../../../utils/classNames';

const Button = ({
    children,
    onClick,
    variant = 'default',
    disabled = false,
    className = '',
    style = {},
}: ButtonProps) => {
    const getVariationClass = () => variant !== 'default' ? styles[variant] : '';
    const getDisabledClass = () => disabled ? styles.disabled : '';
    return (
        <button
            type="button"
            onClick={(e) => onClick(e)}
            disabled={disabled}
            className={classNames([
                styles.button,
                getVariationClass(),
                getDisabledClass(),
                className
            ])}
            style={style}
        >
            {children}
        </button>
    );
};

export default Button;

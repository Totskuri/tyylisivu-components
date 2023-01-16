import React from "react";
import type {HeaderProps} from "./Header.types";
import '../../../css/variables.css';
import styles from './Header.module.css';
import classNames from "../../../utils/classNames";

/**
 * @param children
 * @param brand
 * @param className
 * @param style
 * @constructor
 */
const Header = ({
    children,
    isFixed = false,
    className = '',
    style = {},
}: HeaderProps) => {
    const getIsFixedClass = () => isFixed ? styles.fixed : '';
    return (
        <header
            className={classNames([
                styles.header,
                getIsFixedClass(),
                className
            ])}
            style={style}
        >
            {children}
        </header>
    );
};

export default Header;

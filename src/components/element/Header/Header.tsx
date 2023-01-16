import React from "react";
import type {HeaderProps} from "./Header.types";
import '../../../css/variables.css';
import styles from './Header.module.css';
import classNames from "../../../utils/classNames";
import useScrollOffset from "../../../hooks/useScrollOffset";

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
    const offset = useScrollOffset();
    const getIsFixedClass = () => isFixed ? styles.fixed : '';
    const getScrolledClass = () => offset > 0 ? styles.scrolled : '';
    return (
        <header
            className={classNames([
                styles.header,
                getIsFixedClass(),
                getScrolledClass(),
                className
            ])}
            style={style}
        >
            {children}
        </header>
    );
};

export default Header;

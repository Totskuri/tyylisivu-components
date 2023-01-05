import React from "react";
import type {NavbarItemProps} from "./NavbarItem.types";
import '../../../css/variables.css';
import styles from './NavbarItem.module.css';
import classNames from "../../../utils/classNames";

/**
 * @param children
 * @param href
 * @param className
 * @param style
 * @constructor
 */
const NavbarItem = ({
    children,
    href,
    className = '',
    style = {},
}: NavbarItemProps) => {
    return (
        <a
            href={href}
            className={classNames([
                styles.item,
                className
            ])}
            style={style}
        >
            {children}
        </a>
    );
};

export default NavbarItem;

import React from "react";
import type {NavbarDropdownProps} from "./NavbarDropdown.types";
import '../../../css/variables.css';
import styles from './NavbarDropdown.module.css';
import classNames from "../../../utils/classNames";

const NavbarDropdown = ({
    children,
    text,
    href = '',
    align = 'left',
    className = '',
    style = {},
}: NavbarDropdownProps) => {
    const getAlignClass = () => styles[align];
    const getDropdownTextElement = () => {
        if (href.length > 0) {
            return <a className={styles.text} href={href}>{text}</a>;
        }
        return <div className={styles.text}>{text}</div>
    };
    return (
        <div
            className={classNames([
                styles.dropdown,
                className
            ])}
            style={style}
        >
            <div className={styles.textRow}>
                {getDropdownTextElement()}
            </div>
            <div
                className={classNames([
                    styles.content,
                    getAlignClass()
                ])}
            >
                {children}
            </div>
        </div>
    );
};

export default NavbarDropdown;
